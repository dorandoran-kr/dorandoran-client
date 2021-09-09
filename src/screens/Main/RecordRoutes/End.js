import { CommonActions } from "@react-navigation/routers";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableOpacityBase
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "../../../axios";
import styles from "./styles";
import { COLORS, SIZES } from '../../../components/theme'

const End = ({ navigation, route }) => {
  return (
    <View style={styles.containerfull}>
      <View style={styles.whitecontainer}>
        
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.dispatch(CommonActions.navigate("Explain"));
              }}
            >
              <Icon name="close" size={32} color="#000000" />
            </TouchableOpacity>
          </View>
          <View style={styles.record_endbox}>
            <Text style={styles.record_text}>
              녹음이 완료되었습니다!
              이야기를 들려주셔서 감사해요.
              다음에 또 다른 이야기도 들려주세요!
            </Text>
          </View>
          <Text style={styles.header_text}>
            더 들려주실 이야기가 있다면
          </Text>
          <TouchableOpacity 
            style={styles.green_longbutton} 
            onPress={() => {
              navigation.dispatch(CommonActions.navigate('Start')) }}
          >
            <Text style={styles.green_longbutton_text}>계속 하기</Text>
          </TouchableOpacity>
          <View style={{width:SIZES.width, alignItems:'flex-end', position:'absolute', marginTop:SIZES.height-120, paddingHorizontal:30}}>
            <TouchableOpacity
              style={styles.record_upload}
              onPress={() => {
                navigation.dispatch(CommonActions.navigate('Home')) }}
            >
              <Text style={styles.record_button_text}>홈으로 가기</Text>
              <Icon name="chevron-forward" size={24} color={COLORS.green} />
            </TouchableOpacity>
          </View>
        
      </View>
      
    </View>
  );
};


export default End;
