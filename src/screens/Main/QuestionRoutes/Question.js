import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, Button } from 'react-native';
import axios from 'axios';

import { COLORS } from "../../../components/theme";

const Question = ({ navigation, route }) => {
  const [question, onChangeQuestion] = useState('');
  const [isError, setError] = useState(false);

  const { id, title } = route.params;

  console.log(id);

  const createQuestion = async () => {
    try {
      const resp = await axios.post(`http://3.35.66.47/questions/${id}`, {
        text: question
      }, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicGhvbmVOdW1iZXIiOiIwMTAyODE1NDI4NCIsImlhdCI6MTYzMTAyOTExMCwiZXhwIjoxNjMxMTE1NTEwfQ.IOiqk2-BsWlBi6JNUdKYRehlL72LXC_AbNAgadEe57A"
        }
      });

      console.log(resp.data);
      navigation.navigate("End");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

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
      <Button 
        onPress={createQuestion}
        title="질문 작성"
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Question;