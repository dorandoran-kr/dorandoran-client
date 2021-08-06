import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from './theme';
import { AntDesign } from '@expo/vector-icons';

const FormButton = ({ ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <AntDesign name="arrowright" size={24} color={COLORS.white}/>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    //marginTop: 10,
    width: 72,
    height: 72,
    backgroundColor: COLORS.DarkGray,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    //fontFamily: 'Lato-Regular',
  },
});