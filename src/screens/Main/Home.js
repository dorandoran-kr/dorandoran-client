import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from "react-native-vector-icons/Ionicons";

import axios from '../../axios';
import Styles from './styles';
import { CommonActions } from '@react-navigation/native';
import { COLORS, SIZES } from '../../components/theme';

const Home = ({ navigation }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [categories, setCategories] = useState();
  const [question, setQuestion] = useState();

  useEffect(() => {
    (async () => {
      const resp = await axios.get('/categories');

      setCategories(resp.data);
    })();
    (async () => {
      const token = await AsyncStorage.getItem('token');

      setToken(token);
    })();
    (async () => {
      const resp = await axios.get('/questions/today');

      setQuestion(resp.data[0]);
    })();
  }, []);

  useEffect(() => {
    if (token) {
      (async () => {
        const user = await axios.get('/users/me', {
          headers: {
            Authorization: token
          }
        })
        setUser(user.data);
      })();
    }
  }, [token]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => { navigation.dispatch(CommonActions.navigate('Category', { id: item.id })) }}
    >
      <View style={Styles.main_categorycard}>
        <Text style={Styles.main_categorytext}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={Styles.containerfull}>
      <View style={{ width: 250, display: 'flex', flexDirection: 'row', position: 'absolute', marginTop: SIZES.height * 0.38 - 20, justifyContent: 'space-around', left: SIZES.width * 0.5 - 125 }}>
        <View style={{ backgroundColor: COLORS.white, width: 40, height: 40, borderRadius: 20, elevation: 2, }}></View>
        <View style={{ backgroundColor: COLORS.white, width: 40, height: 40, borderRadius: 20, elevation: 2, }}></View>
      </View>
      <View style={{ flex: 3, justifyContent: 'space-between' }}>
        <Text style={Styles.main_header_text}>안녕하세요 {user && user.nickname}님</Text>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={{ uri: 'https://yummeal-image.s3.ap-northeast-2.amazonaws.com/original/1631036817420KakaoTalk_20210908_023432084.png' }}
            style={{ width: 220, height: 180, }}
          />
        </View>
      </View>
      <View style={Styles.main_whitecontainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Record', {
            screen: 'Record',
            params: {
              questionId: question?.id,
              question: question?.text
            }
          })}
        >
          <View style={Styles.main_whitecontainer_box}>
            <Text style={Styles.main_whitecontainer_text}>오늘의 질문</Text>
            <Text style={Styles.main_whitecontainer_text2}>Q. {question?.text}</Text>
          </View>
        </TouchableOpacity>
        <Text style={Styles.main_category_text}>다른 이야기도 들어보세요</Text>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={<View style={{ width: 40 }} />}
          ListFooterComponent={<View style={{ width: 24 }} />}
        />
        <View style={{marginTop:140}}>
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
      {/* <Text style={Styles.main_header_text}>이야기를 해주세요</Text> */}
      {/* <View style={Styles.main_bluebox}>
        
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
      </View> */}
      {/* <View style={Styles.main_categorycontainer}>
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
      </View> */}
    </View>
  )
}

export default Home;