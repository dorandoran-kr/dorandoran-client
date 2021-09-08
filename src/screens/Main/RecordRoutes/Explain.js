import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CommonActions } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from './styles';
import MasonryList from '@react-native-seoul/masonry-list';

import axios from "../../../axios";
import Styles from "../styles";

const Explain = ({ navigation, route }) => {
  const [questions, setQuestions] = useState();
  const [category, setCategory] = useState();

  const { id } = route.params;

  useEffect(() => {
    (async () => {
      const resp = await axios.get(`/categories/${id}`);

      setQuestions(resp.data.questions);
      setCategory(resp.data.category);
    })();
  }, [id]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.questionbox}
      onPress={() => navigation.dispatch(CommonActions.navigate("Record", {
        questionId: item.id,
        question: item.text
      }))}
    >
      <Text style={styles.questionbox_text}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.containerfull}>
      <View style={styles.whitecontainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(CommonActions.navigate("Start"));
            }}
          >
            <Icon name="chevron-back" size={32} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.header_title}>{category && category.title}</Text>
        </View>
        <View style={{ marginTop: 35 }}>
          <Text style={styles.header_text}>어떤 질문에 답을 해주시겠어요?</Text>
        </View>

        {questions && <MasonryList
          data={questions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={<View style={{ height: 24 }} />}
        />}

      </View>
    </View>
  );
};

export default Explain;
