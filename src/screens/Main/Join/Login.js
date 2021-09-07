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
import AsyncStorage from '@react-native-async-storage/async-storage';

import Styles from "./styles.js";
import { COLORS } from "../../../components/theme";

const Login = ({ navigation }) => {
  const [token, setToken] = useState();
  const [ID, onChangeID] = useState("");
  const [isValid, setValid] = useState(true);
  
  useEffect(() => {
    async function getToken() {
      const token = await AsyncStorage.getItem('token');
      setToken(token);
    }
    getToken();
  }, []);

  useEffect(() => {
    if (token) {
      axios.get('http://3.35.66.47/users/me', {
        headers: {
          Authorization: token
        }
      })
        .then(_ => {
          navigation.navigate('Home');
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [token]);

  const onChanged = (text) => {
    let newText = "";
    let numbers = "0123456789";

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
        setValid(true);
      } else {
        setValid(false);
      }
    }
    onChangeID(newText);
  };

  const phoneNumberCheck = async () => {
    const resp = await axios.get(
      `http://3.35.66.47/users/exist?phoneNumber=010${ID}`
    );

    if (resp.data) {
      navigation.navigate("Password", { 
        phoneNumber: `010${ID}`,
        password: 'test'
      });
    } else {
      navigation.navigate("Signup", {
        phoneNumber: `010${ID}`,
        password: 'test'
      });
    }
  };

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
          {!isValid && (
            <Text style={{ color: COLORS.red }}>숫자만 입력해주세요!</Text>
          )}
          <TouchableOpacity
            style={Styles.input_button}
            onPress={phoneNumberCheck}
          >
            <Text style={Styles.input_buttontext}>계속하기</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default Login;
