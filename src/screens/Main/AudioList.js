import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { CommonActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Styles from './styles';
import { COLORS, SIZES } from "../../components/theme";
import axios from "../../axios";
import styles from "./RecordRoutes/styles";

const AudioList = ({ navigation, route }) => {
  const [token, setToken] = useState();
  const [question, setQuestion] = useState();
  const [posts, setPosts] = useState();
  const [isLiked, setIsLiked] = useState(false);

  const { id } = route.params;

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('token');

      const resp = await axios.get(`/questions/${id}`, {
        headers: {
          Authorization: token
        }
      });

      setQuestion(resp.data);
      setPosts(resp.data.Posts);
      setToken(token);
    })();
    (async () => {
    })();
  }, []);

  const changeliked = () => {
    setIsLiked(!isLiked);
  }

  return (
    <View style={Styles.containerfull}>
      <View style={Styles.whitecontainer}>
        <View style={Styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(CommonActions.reset({
                routes: [{ 
                  name: 'Category',
                  params: { id: 3 }
                }],
              }));
            }}
          >
            <Icon name="chevron-back" size={32} color="#000000" />
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Text style={Styles.header_text}>{question?.text}</Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <FlatList
            data={posts}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  onPress={
                    () => {
                      navigation.dispatch(CommonActions.reset({
                        routes: [{
                          name: 'AudioScreen',
                          params: {
                            id: item.id,
                            questionId: id
                          }
                        }]
                      }))
                    }
                  }
                  style={Styles.play_list}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={Styles.play_list_ninametext}>{`${item.User?.nickname}`}</Text>
                    <Text style={Styles.play_list_ninametext2}>님의 답변</Text>
                  </View>
                  <View style={Styles.play_list_button_container}>
                    <Icon name="play" size={20} color={COLORS.gray} />
                    {item?.Like
                      ? <TouchableOpacity
                        onPress={changeliked}
                        style={{ width: 22, height: 22, justifyContent: 'center', alignItems: 'center' }}
                      ><Icon name="heart" size={20} color={"#E13740"} /></TouchableOpacity>
                      : <TouchableOpacity
                        onPress={changeliked}
                        style={{ width: 22, height: 22, justifyContent: 'center', alignItems: 'center' }}
                      ><Icon name="heart-outline" size={20} color={COLORS.backgray} /></TouchableOpacity>}
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};


export default AudioList;
