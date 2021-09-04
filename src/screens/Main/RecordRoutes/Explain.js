import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import axios from "axios";
import { CommonActions } from "@react-navigation/native";

const Explain = ({ navigation, route }) => {
  const [posts, setPosts] = useState();
  const [category, setCategory] = useState();

  const { id } = route.params;

  useEffect(() => {
    (async () => {
      const resp = await axios.get(`http://3.35.66.47/categories/${id}`);

      setPosts(resp.data.posts);
      setCategory(resp.data.category);
    })();
  }, [id]);
  console.log(category)

  return (
    <View style={styles.container}>
      {category && <Text style={{marginBottom: "20%"}}>상단 카테고리 명: {category.title}</Text>}
      <Text>녹음 전 유의사항!</Text>
      <Text>이 부분을 녹음해주세요!</Text>

      <Button
        onPress={() => navigation.dispatch(CommonActions.navigate('Record'))}
        title="녹음 시작!"
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
