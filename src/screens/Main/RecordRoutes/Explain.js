import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { CommonActions } from "@react-navigation/native";

import Styles from "../styles";

const Explain = ({ navigation, route }) => {
  const [questions, setQuestions] = useState();
  const [category, setCategory] = useState();

  const { id } = route.params;

  useEffect(() => {
    (async () => {
      const resp = await axios.get(`http://3.35.66.47/categories/${id}`);

      setQuestions(resp.data.questions);
      setCategory(resp.data.category);
    })();
  }, [id]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.dispatch(CommonActions.navigate("Record", {
        questionId: item.id
      }))}
    >
      <View style={Styles.main_categorycard}>
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {category && (
        <Text style={{ marginBottom: "20%" }}>
          상단 카테고리 명: {category.title}
        </Text>
      )}

      <Text>어떤 질문에 답을 해주시겠어요?</Text>

      <FlatList
        data={questions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Explain;
