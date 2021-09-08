import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import axios from '../../../axios';
import Styles from '../styles';

const Select = ({ navigation, route }) => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    (async () => {
      const resp = await axios.get('/categories');

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
      <View style={Styles.main_categorycard}>
        <Text style={Styles.main_categorytext}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
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
    paddingTop: "30%",
  },
});

export default Select;