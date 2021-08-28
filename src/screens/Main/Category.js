import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

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
  
const Styles = StyleSheet.create({
    container: {
        geight: 60,
        felxDirection: 'row',
        justifyContent : "space-around",
        padding: 15,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width:0,
            height:10,
        },
        shdowOpacity: 0.12,
        shadowRadius: 5.46,
        elevation:9,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
})

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