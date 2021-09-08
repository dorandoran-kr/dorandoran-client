import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity
} from "react-native";
import { CommonActions } from "@react-navigation/native";

import axios from "../../axios";

const AudioList = ({ navigation, route }) => {
  const [question, setQuestion] = useState();
  const [posts, setPosts] = useState();

  const { id } = route.params;

  useEffect(() => {
    (async () => {
      const resp = await axios.get(`/questions/${id}`);

      setQuestion(resp.data);
      setPosts(resp.data.Posts);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{question?.text}</Text>
      <Text>hi</Text>
      <Button
        title="home"
        onPress={() => navigation.navigate('Home')}
      />            
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={
                () => {
                  navigation.dispatch(CommonActions.navigate("AudioScreen", {
                    id: item.id
                  }));
                }
              }
            >
              <Text>{`${item.User?.nickname}님의 답변`}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AudioList;
