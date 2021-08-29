import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from "../../components/theme";
import Icon from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';

import Styles from "./styles.js";

const Category = ({ navigation }) => {
  const [count, setCount] = useState(1);
  const [dummy, setDummy] = useState();

  useEffect(() => {
    console.log('hihi')

    setDummy([
      {
        title: "hi",
        user: "a",
      },
      {
        title: "hoho",
        user: "ho"
      }
    ])
  }, []);

  const placeholder = {
    label: '기본순',
    value: null,
    color: '#000000',
    fontFamily: FONTS.NanumSquareEB
  };

  function reset() {
    navigation.navigate('Home')
  }


  return (
    
    <View style={Styles.containerfull}>
      <View style={{marginTop:124, flexDirection:'row', alignItems:'center', justifyContent:'flex-end', marginHorizontal:24, }}>
        <View style={{marginRight:10}}>
          <RNPickerSelect
            placeholder={placeholder}
            onValueChange={(value) => console.log(value)}
            style={{ backgrounColor: COLORS.orange, 
              placeholder: {
              color: COLORS.black,
            }, }}
            items={[
              { label: '인기순', value: 'football' },
              { label: '이름순', value: 'baseball' },
            ]}          
          />
        </View>
        <Icon name="chevron-down" size={20} color={COLORS.gray}/>
      </View>

      <FlatList style={Styles.category_listcontainer} data={dummy}
        renderItem={({ item }) =>
          <View style={Styles.category_list}>
            <View style={Styles.category_profile} />
            <View style={Styles.category_textcontainer}>
              <Text style={Styles.category_text1}>
                {item.title}
              </Text>
              <Text style={Styles.category_text2}>
                {item.user}
              </Text>
            </View>
          </View>
        } />

      <View style={Styles.header} >
        <TouchableOpacity>
          <Icon name="chevron-back" size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={Styles.header_text}>카테고리</Text>
        <View style={{ width: 24 }}></View>
      </View>

    </View>
  )
}

export default Category;