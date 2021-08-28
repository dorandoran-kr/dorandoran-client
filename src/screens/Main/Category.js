import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

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

  const plus = () => {
    setCount(count + 1);
  }

  function reset () {
    navigation.navigate('Home')
  }
  


  return (
    <View>
       
      <View style = {Styles.container} >
      <Button onPress={reset} title="return" />
          <Text>카테고리</Text>
      </View>
        
        <FlatList data = {dummy} 
        renderItem = {({item}) => <Text style = {Styles.item}>{item.title}   {item.user}</Text>}/>
    </View>
  )
}

export default Category;