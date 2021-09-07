import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

import Styles from './styles';
import { CommonActions } from '@react-navigation/native';

const Home = ({ navigation }) => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    (async () => {
      const resp = await axios.get('http://3.35.66.47/categories');

      setCategories(resp.data);
    })();
  }, []);

  const renderItem = ({ item }) => (   
    <TouchableOpacity
      onPress={() => {navigation.dispatch(CommonActions.navigate('Category', {id: item.id}))}}
    >
      <View style={Styles.main_categorycard}>
        <Text style={Styles.main_categorytext}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={Styles.containerfull}>
      <View style={Styles.main_bluebox}>
        <Text style={Styles.main_blueboxtext}>오늘도 재미있는</Text>
        <Text style={Styles.main_blueboxtext}>이야기를 해주세요</Text>
        <TouchableOpacity 
          style={{justifyContent:'center',alignItems:'center',marginTop:35}}
          onPress={() => {
            navigation.dispatch(CommonActions.reset({routes: [{name: 'Record'}]}))
          }}
        >
          <View style={Styles.main_blueboxbutton}>
            <Image 
              source={{uri:'https://yummeal-image.s3.ap-northeast-2.amazonaws.com/original/1630234264749microphone%402x.png'}}
              style={{
                width: 72,
                height: 72,
              }}
            ></Image>
          </View>
        </TouchableOpacity>          
      </View>
      <View style={Styles.main_categorycontainer}>
        <TouchableOpacity
          onPress={() => {navigation.dispatch(CommonActions.reset({routes: [{name: 'QuestionRoutes'}]}))}}
        >
          <Text style={Styles.main_categorytitle}>질문 남기러 가기</Text>
        </TouchableOpacity>
        <Text style={Styles.main_categorytitle}>카테고리</Text>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={<View style={{width:24}}/>}
        />
      </View>
    </View>
  )
}

export default Home;