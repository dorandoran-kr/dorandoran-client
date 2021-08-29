import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { COLORS, FONTS, SIZES } from "../../components/theme";
import Icon from "react-native-vector-icons/Ionicons";
import Styles from "./styles.js";

const Login = () => {
  const [ID, onChangeID] = React.useState('');
  const [isValid, setValid] = React.useState(true);


  const onChanged = (text) => {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
        setValid(true);
      }
      else {
        // your call back function
        setValid(false);
      }
    }
    onChangeID(newText);
  }

  return (
    <View style={Styles.containerfull}>
      <View style={Styles.header}>
        <TouchableOpacity>
          <Icon name="close" size={24} color="#000000" />
        </TouchableOpacity>
      </View>
      <View style={Styles.body_container}>
        <View style={Styles.info_textcontainer}>
          <Text style={Styles.info_text}>들려주고 싶은</Text>
          <Text style={Styles.info_text}>이야기가 있나요?</Text>
        </View>
        <KeyboardAvoidingView style={Styles.input_container}>
          <View>
            <Text style={Styles.input_infotext}>먼저 로그인이 필요해요</Text>
            <View style={Styles.inputbox_container}>
              <Text style={Styles.input_text}>010 - </Text>
              <TextInput
                style={Styles.input_box}
                onChangeText={onChanged}
                value={ID}
                placeholder="전화번호를 입력해주세요"
                keyboardType="numeric"
                maxLength={8}
              />
            </View>
          </View>
          {!isValid && <Text style={{ color: COLORS.red }}>숫자만 입력해주세요!</Text>}
          <TouchableOpacity style={Styles.input_button}>
            <Text style={Styles.input_buttontext}>계속하기</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>

    </View>

  )
}

export default Login;