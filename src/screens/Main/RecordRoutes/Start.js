import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { CommonActions } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import axios from "../../../axios";
import Styles from "../styles";

const Start = ({ navigation }) => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    (async () => {
      const resp = await axios.get("/categories");

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
      <View style={Styles.main_categorycard}>
        <Image
          source={{ uri: item.thumbnailUrl }}
          style={{ width: 120, height: 120, borderRadius: 10 }}
        />
        <Text style={Styles.main_categorytext}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={Styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(CommonActions.navigate("Home"));
          }}
        >
          <Icon name="chevron-back" size={24} color="#000000" />
        </TouchableOpacity>
        <View style={{ width: 24 }}></View>
      </View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={<View style={{ width: 24 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "30%",
  },
});

export default Start;
