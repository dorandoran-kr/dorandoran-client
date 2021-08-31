import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { COLORS, FONTS, SIZES } from "../../components/theme";
import Icon from "react-native-vector-icons/Ionicons";
import Styles from "./styles.js";

const Password = ({navigation}) => {
  const [PW, onChangePW] = React.useState('');
  //const [isValid, setValid] = React.useState(true);


  // const onChanged = (text) => {
  //   let newText = '';
  //   let numbers = '0123456789';

  //   for (var i = 0; i < text.length; i++) {
  //     if (numbers.indexOf(text[i]) > -1) {
  //       newText = newText + text[i];
  //       setValid(true);
  //     }
  //     else {
  //       // your call back function
  //       setValid(false);
  //     }
  //   }
  //   newText = newText + text[i];
  //       setValid(true);
  //   onChangePW(newText);
  // }
  return (
    <View style={Styles.containerfull}>
      <View style={Styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000000" />
        </TouchableOpacity>
      </View>
      <View style={Styles.body_container}>
        <View style={Styles.info_textcontainer}>
          <Text style={Styles.info_text}>비밀번호 입력</Text>
          <Text style={Styles.info_text}> </Text>
        </View>
        <KeyboardAvoidingView style={Styles.input_container}>
          <View>
            <View style={Styles.input_blank}></View>
            {/* <Text style={Styles.input_infotext}>먼저 로그인이 필요해요</Text> */}
            <View style={Styles.inputbox_container}>
              <TextInput
                style={Styles.input_box_pw}
                onChangeText={onChangePW}
                value={PW}
                placeholder="비밀번호를 입력해주세요"
                keyboardType="visible-password"
                maxLength={21}
              />
            </View>
          </View>
          {/* {!isValid && <Text style={{ color: COLORS.red }}>숫자만 입력해주세요!</Text>} */}
          <TouchableOpacity 
            style={Styles.input_button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={Styles.input_buttontext}>로그인하기</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>

    </View>

  )
}

export default Password;