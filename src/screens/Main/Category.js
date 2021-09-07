import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";

import { COLORS, FONTS, SIZES } from "../../components/theme";
import Styles from "./styles.js";
import { CommonActions } from "@react-navigation/native";

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
      const resp = await axios.get(`http://3.35.66.47/categories/${id}`);

      setQuestions(resp.data.questions);
      setCategory(resp.data.category);
      console.log(resp.data);
    })();
  }, [id]);

  return (
    <View style={Styles.containerfull}>
      <View
        style={{
          marginTop: 124,
          //flexDirection:'row', alignItems:'center', justifyContent:'flex-end',
          marginLeft: SIZES.width - 124,
        }}
      >
        <View>
          <RNPickerSelect
            placeholder={placeholder}
            onValueChange={(value) => console.log(value)}
            style={{
              backgrounColor: COLORS.orange,
              placeholder: {
                color: COLORS.black,
              },
            }}
            items={[
              { label: "인기순", value: "football" },
              { label: "이름순", value: "baseball" },
            ]}
          />
        </View>
        {/* <Icon name="chevron-down" size={20} color={COLORS.gray}/> */}
      </View>

      <FlatList
        style={Styles.category_listcontainer}
        data={questions}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(CommonActions.navigate('AudioCopy', {id: item.id}))
            }}
          >
            <View style={Styles.category_list}>
              <View style={Styles.category_profile} />
              <View style={Styles.category_textcontainer}>
                <Text style={Styles.category_text1}>{item.text}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <View style={Styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(CommonActions.navigate('Home'))
          }}
        >
          <Icon name="chevron-back" size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={Styles.header_text}>{category?.title}</Text>
        <View style={{ width: 24 }}></View>
      </View>
    </View>
  );
};

export default Category;
