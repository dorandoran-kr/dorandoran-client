import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import Styles from './styles';

const Home = ({ navigation }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log('hihi')
  }, []);

  const plus = () => {
    setCount(count + 1);
  }

  function reset () {
    navigation.navigate('Audio')
  }

  return (
    <View>
      <View style={Styles.main_bluebox}>
        <Text style={Styles.main_blueboxtext}>오늘도 재미있는</Text>
        <Text style={Styles.main_blueboxtext}>이야기를 해주세요</Text>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:35}}>
          <View style={Styles.main_blueboxbutton}></View>
        </View>          
      </View>
      <View style={Styles.main_categorycontainer}>
        <Text style={Styles.main_categorytext}>category</Text>
      </View>
      {/* TODO: side scroll category */}
      <FlatList>
        <Button onPress={reset} title="RESET"/>
        <Button onPress={reset} title="RESET"/>
        <Button onPress={reset} title="RESET"/>
      </FlatList>
    </View>
  )
}

export default Home;