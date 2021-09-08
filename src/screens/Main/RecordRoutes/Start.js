import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import axios from "axios";
import { CommonActions } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { RadioButtons } from 'react-native-radio-buttons';

import styles from "./styles";
import { COLORS } from "../../../components/theme";

const Start = ({ navigation }) => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    (async () => {
      const resp = await axios.get("http://3.35.66.47/categories");

      setCategories(resp.data);
    })();
  }, []);

  console.log(categories);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.dispatch(CommonActions.navigate("Explain", { id: item.id }));
      }}
    >
      <View style={styles.categorycard}>
        <Text style={styles.categorytext}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.containerfull}>
      <View style={styles.whitecontainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(CommonActions.navigate("Home"));
          }}
        >
          <Icon name="close" size={24} color="#000000" />
        </TouchableOpacity>
        <View style={{ marginTop: 48 }}>
          <Text style={styles.header_text}>어떤 주제에 관한 이야기를</Text>
          <Text style={styles.header_text}>들려주실 건가요?</Text>
        </View>
        <View style={{height:400}}>
          <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={<View style={{ height: 24 }} />}
          />
        </View>
        <Text style={styles.cautiontext}>깔끔한 녹음을 위해 조용한 곳에서</Text>
        <Text style={styles.cautiontext}>이야기를 시작해주세요</Text>
      </View>
    </View>
  );
};


export default Start;
