import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Select = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>질문을 작성해주셔서 감사합니다.</Text>
      <Button 
        title="홈으로 이동"
        onPress={() => {navigation.navigate('Home')}}
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