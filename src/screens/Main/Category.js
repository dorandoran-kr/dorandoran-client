import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const Category = ({ navigation }) => {
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
      <Text>오늘도 재미있는 이야기를 해주세요.</Text>
      <Button onPress={reset} title="RESET"/>
      <Text>category</Text>
      {/* TODO: side scroll category */}
      <FlatList>
        <Button onPress={reset} title="RESET"/>
        <Button onPress={reset} title="RESET"/>
        <Button onPress={reset} title="RESET"/>
      </FlatList>
    </View>
  )
}

export default Category;