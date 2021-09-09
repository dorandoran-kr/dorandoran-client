import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { CommonActions } from "@react-navigation/native";

import axios from "../../axios";
import { COLORS, FONTS, SIZES } from "../../components/theme";
import Styles from "./styles.js";

const Category = ({ navigation, route }) => {
  const [questions, setQuestions] = useState();
  const [category, setCategory] = useState();

  const { id } = route.params;

  const placeholder = {
    label: "기본순",
    value: null,
    color: "#000000",
    fontFamily: FONTS.NanumSquareEB,
  };

  useEffect(() => {
    (async () => {
      const resp = await axios.get(`/categories/${id}`);

      setQuestions(resp.data.questions);
      setCategory(resp.data.category);
    })();
  }, [id]);

  return (
    <View style={Styles.containerfull}>
      <View style={Styles.whitecontainer}>
        <View style={Styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(CommonActions.navigate('Home'));
            }}
          >
            <Icon name="chevron-back" size={32} color="#000000" />
          </TouchableOpacity>
          <Text style={Styles.header_title}>{category && category.title}</Text>
        </View>
        <FlatList
        //style={Styles.category_listcontainer}
        data={questions}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(CommonActions.navigate('AudioList', {
                id: item.id,
              }))
            }}
          >
            <View style={Styles.category_list}>
              <View style={Styles.category_textcontainer}>
                <Text style={Styles.category_text1}>{item.text}</Text>
                {
                  item.Posts && 
                    item.Posts.length === 0 
                    ? <Text style={Styles.category_text2}>답변을 기다리고 있습니다..</Text>
                    : <Text style={Styles.category_text2}>{item.Posts && item.Posts[0].User.nickname}외 {item.Posts && item.Posts.length}명이 답변함</Text>
                }
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
 
          <View style={Styles.tabbar}>
            <Icon name="home" size={32} color={COLORS.green} />
            <Icon name="person" size={32} color={COLORS.lightGray} />
          </View>
          <TouchableOpacity
            style={Styles.tabbar_button}
            onPress={() => {
              navigation.dispatch(CommonActions.reset({ routes: [{ name: 'Record' }] }))
            }}
          ><Icon name="add" size={48} color={COLORS.white} />
          </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default Category;
