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
import Icon from "react-native-vector-icons/Ionicons";
import styles from './styles';
import MasonryList from '@react-native-seoul/masonry-list';

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
    <TouchableOpacity style={styles.questionbox}>
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
      {/* {category && (
        <Text style={{ marginBottom: "20%" }}>
          상단 카테고리 명: {category.title}
        </Text>
      )}

      {questions &&
        <FlatList
          data={questions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      }

      <Text>녹음 전 유의사항!</Text>
      <Text>이 부분을 녹음해주세요!</Text>

      <Button
        onPress={() => navigation.dispatch(CommonActions.navigate("Record"))}
        title="녹음 시작!"
      /> */}
    </View>
  );
};

export default Explain;
