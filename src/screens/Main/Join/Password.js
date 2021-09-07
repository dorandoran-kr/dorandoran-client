import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Styles from "./styles.js";
import { COLORS } from "../../../components/theme";

const Password = ({ navigation, route }) => {
  const [PW, onChangePW] = useState("");
  const [isLoginFailed, setIsLoginFailed] = useState(false);

  const { phoneNumber } = route.params;

  useEffect(() => {
    if (!phoneNumber) {
      navigation.navigate("Login");
    }
  }, [phoneNumber]);

  const Login = async () => {
    try {
      const resp = await axios.post(`http://3.35.66.47/users/login`, {
        phoneNumber,
        password: PW,
        screen: "Home",
      });

      if (resp?.data?.user) {
        await AsyncStorage.setItem("token", resp?.data?.token);

        navigation.navigate("Home");
      }
    } catch (error) {
      setIsLoginFailed(true);
      console.log(error);
    }
  };

  return (
    <View style={Styles.containerfull}>
      <View style={Styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={Styles.header_text}>로그인</Text>
        <View style={{ width: 24, height: 24 }}></View>
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
                secureTextEntry={true}
                value={PW}
                placeholder="비밀번호를 입력해주세요"
                keyboardType="visible-password"
                maxLength={21}
              />
            </View>
          </View>
          {isLoginFailed && (
            <Text style={{ color: COLORS.red }}>비밀번호가 틀렸습니다!</Text>
          )}
          <TouchableOpacity style={Styles.input_button} onPress={Login}>
            <Text style={Styles.input_buttontext}>로그인하기</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default Password;
