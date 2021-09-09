import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "../../../axios.js";
import Styles from "./styles.js";
import { COLORS, FONTS, SIZES } from "../../../components/theme";

const Signup = ({ navigation, route }) => {
  const [nickname, onChangeNickname] = useState("");
  const [birth, onChangeBirth] = useState("");
  const [isSignupFailed, setIsSignupFailed] = useState(false);

  const { phoneNumber, password } = route.params;

  const signUp = async () => {
    try {
      const resp = await axios.post(`/users`, {
        phoneNumber,
        password,
        nickname,
        birth,
      });

      console.log(resp.data);
      await AsyncStorage.setItem("token", resp.data.token);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      setIsSignupFailed(true);
    }
  };

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
            onChangeText={onChangeNickname}
            value={nickname}
            placeholder="닉네임을 입력해주세요"
            // keyboardType="visible-password"
            maxLength={21}
          />
        </View>
        <View style={{ height: 70 }}></View>
        <View style={Styles.info_textcontainer}>
          <Text style={Styles.info_text}>생년월일</Text>
          <Text style={Styles.info_text}> </Text>
        </View>
        <View style={Styles.inputbox_container}>
          <TextInput
            style={Styles.input_box_pw}
            onChangeText={onChangeBirth}
            value={birth}
            placeholder="생년월일을 입력해주세요"
            keyboardType="visible-password"
            maxLength={21}
          />
        </View>
        {isSignupFailed && (
          <Text style={{ color: COLORS.red }}>가입에 실패하였습니다!</Text>
        )}
        <View style={Styles.input_container}>
          <View></View>
          <TouchableOpacity style={Styles.input_button} onPress={signUp}>
            <Text style={Styles.input_buttontext}>로그인하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;
