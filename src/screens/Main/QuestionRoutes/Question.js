import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "../../../axios";
import { COLORS } from "../../../components/theme";

const Question = ({ navigation, route }) => {
  const [token, setToken] = useState();
  const [question, onChangeQuestion] = useState("");
  const [isError, setError] = useState(false);

  const { id, title } = route.params;

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('token');
      setToken(token);
    })();
  }, [])

  const createQuestion = async () => {
    try {
      const resp = await axios.post(
        `/questions/${id}`,
        {
          text: question,
        },
        {
          headers: {
            Authorization: token
          },
        }
      );

      navigation.navigate("End");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {title && <Text>{title}</Text>}
      <TextInput
        onChangeText={onChangeQuestion}
        value={question}
        placeholder="질문을 입력해주세요"
        keyboardType="visible-password"
        maxLength={21}
      />
      {isError && (
        <Text style={{ color: COLORS.red }}>질문 작성에 실패했습니다.</Text>
      )}
      <Button onPress={createQuestion} title="질문 작성" />
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

export default Question;
