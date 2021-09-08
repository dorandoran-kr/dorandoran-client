import { CommonActions } from "@react-navigation/routers";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "../../../axios";
import Styles from "../styles";
import { COLORS } from '../../../components/theme'

const End = ({ navigation, route }) => {
  const [token, setToken] = useState();
  const [title, onChangeTitle] = useState("");
  const [description, onChangeDescription] = useState("");

  const [isEnd, setEnd] = useState(false);
  const [isError, setError] = useState(false);

  const { questionId, url } = route.params;

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('token');

      setToken(token);
    })();
  }, [])

  const createPost = async () => {
    try {
      const resp = await axios.post(
        '/posts',
        {
          title: title,
          description: description,
          thumbnailUrl: "",
          questionId,
          url: url
        },
        {
          headers: {
            Authorization: token
          }
        }
      );

      setEnd(true);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      {
        isEnd
        ?
        <View>
          <Text>녹음이 완료되었습니다!</Text>
          <Text>이야기를 들려주셔서 감사해요.</Text>
          <Button
            title="홈으로 이동"
            onPress={() => {
              navigation.dispatch(CommonActions.navigate('Home'))
            }}
          />
        </View>
        :
        <View>
          <Text>Ending...</Text>
          <TextInput
            style={Styles.input_box}
            onChangeText={onChangeTitle}
            value={title}
            placeholder="제목을 입력해주세요"
          />

          <TextInput
            style={Styles.input_box}
            onChangeText={onChangeDescription}
            value={description}
            placeholder="설명을 입력해주세요"
          />
          {isError && (
            <Text style={{ color: COLORS.red }}>업로드에 실패했습니다.</Text>
          )}
          <Button
            title="작성 완료"
            onPress={createPost}
          />
        </View>
      }
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

export default End;
