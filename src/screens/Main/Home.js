import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Image } from 'react-native';
import { COLORS } from '../../components/theme';
import Styles from './styles';

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    uri: "https://yummeal-image.s3.ap-northeast-2.amazonaws.com/original/1630235845437Component-Card-%E2%9A%A1Place-Card%20Solid%20Error%402x.png",
    title: "MY",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    uri: "https://yummeal-image.s3.ap-northeast-2.amazonaws.com/original/1630236027517Component-Card-%E2%9A%A1Place-Card%20Solid%20Error2%402x.png",
    title: "꿀팁",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "요리",
  },
];

const Item = ({ title }) => (
  <View style={Styles.main_categorycard}>
    <Image source={{uri:item.uri}} style={{width:120,height:120 }}/>
    <Text style={Styles.main_categorytext}>{title}</Text>
  </View>
);

const Home = ({ navigation }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log('hihi')
  }, []);

  function reset () {
    navigation.navigate('Audio')
  }
  const renderItem = ({ item }) => (      
    // <Item title={item.title} />
    <View style={Styles.main_categorycard}>
      <Image source={{uri:item.uri}} style={{width:120,height:120, borderRadius:10}}/>
      <Text style={Styles.main_categorytext}>{item.title}</Text>
    </View>
  );

  return (
    <View style={Styles.containerfull}>
      <View style={Styles.main_bluebox}>
        <Text style={Styles.main_blueboxtext}>오늘도 재미있는</Text>
        <Text style={Styles.main_blueboxtext}>이야기를 해주세요</Text>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:35}}>
          <View style={Styles.main_blueboxbutton}>
            <Image 
              source={{uri:'https://yummeal-image.s3.ap-northeast-2.amazonaws.com/original/1630234264749microphone%402x.png'}}
              style={{
                width: 72,
                height: 72,
              }}
            ></Image>
          </View>
        </View>          
      </View>
      <View style={Styles.main_categorycontainer}>
        <Text style={Styles.main_categorytitle}>카테고리</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={<View style={{width:24}}/>}
        />
      </View>

      
    

      {/* TODO: side scroll category */}
      {/* <FlatList>
        <Button onPress={reset} title="RESET"/>
        <Button onPress={reset} title="RESET"/>
        <Button onPress={reset} title="RESET"/>
      </FlatList> */}
      
    </View>
  )
}

export default Home;