import React from 'react';
import { View, TextInput, StyleSheet} from 'react-native';
import { windowHeight } from '../utils/Dimensions';
import { COLORS } from './theme';

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '80%',
    height: windowHeight / 15,
    borderBottomColor: COLORS.DarkGray,
    borderBottomWidth: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    //fontFamily: 'Roboto-Medium',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
});