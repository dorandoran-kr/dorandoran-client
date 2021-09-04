import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { COLORS, FONTS, SIZES } from "../../components/theme";
import Icon from "react-native-vector-icons/Ionicons";
import Styles from "./styles.js";

const Signup = ({ navigation }) => {
  const [PW, onChangePW] = React.useState('');

  return (
    <View style={Styles.containerfull}>
      <View style={Styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={Styles.header_text}>회원가입</Text>
        <View style={{ width: 24, height: 24 }}></View>
      </View>
      <View style={Styles.body_container}>
        <View style={Styles.info_textcontainer}>
          <Text style={Styles.info_text}>닉네임 설정</Text>
          <Text style={Styles.info_text}> </Text>
        </View>
        <View style={Styles.inputbox_container}>
          <TextInput
            style={Styles.input_box_pw}
            onChangeText={onChangePW}
            value={PW}
            placeholder="닉네임을 입력해주세요"
            keyboardType="visible-password"
            maxLength={21}
          />
        </View>
        <View style={{height:70}}></View>
        <View style={Styles.info_textcontainer}>
          <Text style={Styles.info_text}>생년월일</Text>
          <Text style={Styles.info_text}> </Text>
        </View>
        <View style={Styles.inputbox_container}>
          <TextInput
            style={Styles.input_box_pw}
            onChangeText={onChangePW}
            value={PW}
            placeholder="닉네임을 입력해주세요"
            keyboardType="visible-password"
            maxLength={21}
          />
        </View>
        <View style={Styles.input_container}>
          <View></View>
          <TouchableOpacity
            style={Styles.input_button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={Styles.input_buttontext}>로그인하기</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>

  )
}

export default Signup;