import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { CommonActions } from '@react-navigation/native';

const Select = ({ navigation, route }) => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    (async () => {
      const resp = await axios.get('http://3.35.66.47/categories');

      setCategories(resp.data);
    })();
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.dispatch(CommonActions.navigate('Question', {
          id: item.id,
          title: item.title
        }))
      }}
    >
      <Text>{item.title}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text>hi</Text>
      <FlatList 
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Select;