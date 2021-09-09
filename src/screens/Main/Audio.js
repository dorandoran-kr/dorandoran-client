import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  Modal,
  FlatList,
  TouchableOpacityBase,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Audio } from "expo-av";
import { CommonActions } from "@react-navigation/native";

import Styles from './styles';
import { SIZES, COLORS } from "../../components/theme";

import axios from '../../axios';
import styles from "./RecordRoutes/styles";

const AudioScreen = ({ navigation, route }) => {
  const [sound, setSound] = useState();
  const [pause, setPause] = useState(false);
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState();
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const { id } = route.params;

  useEffect(() => {
    (async () => {
      const resp = await axios.get(`/posts/${id}`);

      setPost(resp.data.post);
      setLikeCount(resp.data.likeCount);
      setCommentCount(resp.data.commentCount);
    })();
  }, [id]);


  async function playSound() {
    if (!sound) {
      const { sound } = await Audio.Sound.createAsync({
        uri: "https://dorandoran-audio.s3.ap-northeast-2.amazonaws.com/file_example_MP3_1MG.mp3",
      });
      setSound(sound);
      sound.setIsLoopingAsync(true);
      await sound.playAsync();
    }
    setIsPlay(true);

    await sound.playAsync();
  }

  async function stopSound() {
    setIsPlay(false);
    await sound.pauseAsync();
  }

  async function pauseSound() {
    setPause(true);
    await sound.pauseAsync();
  }

  async function restartSound() {
    setPause(false);
    await sound.playAsync();
  }

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //       console.log("Unloading Sound");
  //       sound.unloadAsync();
  //     }
  //     : undefined;
  // }, [sound]);

  const changeliked = () => {
    setIsLiked(!isLiked);

    // TODO: API 호출
  }

  return (
    <View style={Styles.containerfull}>
      <View style={Styles.whitecontainer}>
        <View style={Styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(CommonActions.navigate('AudioList'));
            }}
          >
            <Icon name="close" size={32} color="#000000" />
          </TouchableOpacity>
        </View>
        <Text style={Styles.play_question_text}>{post?.Question?.text}</Text>
        <View style={Styles.play_rando_container}>
          {/* <Image
            source={{ uri: 'https://yummeal-image.s3.ap-northeast-2.amazonaws.com/original/1631126320045KakaoTalk_20210909_033815951.png' }}
            style={{ width: 260, height: 300, resizeMode: 'contain', alignSelf:'center' }}
          />     */}
          {/* <Image
            source={{ uri: 'https://yummeal-image.s3.ap-northeast-2.amazonaws.com/original/1631126359039KakaoTalk_20210909_033544800.png' }}
            style={{ width: 260, height: 300, resizeMode: 'contain', alignSelf:'center' }}
          />  */}
          {/* <Image
            source={{ uri: 'https://yummeal-image.s3.ap-northeast-2.amazonaws.com/original/1631126414690KakaoTalk_20210909_033555598.png' }}
            style={{ width: 260, height: 300, resizeMode: 'contain', alignSelf:'center' }}
          />  */}
          {/* <Image
            source={{ uri: 'https://yummeal-image.s3.ap-northeast-2.amazonaws.com/original/1631126434934KakaoTalk_20210909_033619082.png' }}
            style={{ width: 260, height: 300, resizeMode: 'contain', alignSelf:'center' }}
          />  */}
          {/* <Image
            source={{ uri: 'https://yummeal-image.s3.ap-northeast-2.amazonaws.com/original/1631126451360KakaoTalk_20210909_033631176.png' }}
            style={{ width: 260, height: 300, resizeMode: 'contain', alignSelf:'center' }}
          />  */}
          {/* <Image
            source={{ uri: 'https://yummeal-image.s3.ap-northeast-2.amazonaws.com/original/1631126474595KakaoTalk_20210909_033643139.png' }}
            style={{ width: 260, height: 300, resizeMode: 'contain', alignSelf:'center' }}
          />  */}
          {/* <Image
            source={{ uri: 'https://yummeal-image.s3.ap-northeast-2.amazonaws.com/original/1631126492874KakaoTalk_20210909_033657229.png' }}
            style={{ width: 260, height: 300, resizeMode: 'contain', alignSelf:'center' }}
          />  */}
          <Image
            source={{ uri: 'https://yummeal-image.s3.ap-northeast-2.amazonaws.com/original/1631126506412KakaoTalk_20210909_033710559.png' }}
            style={{ width: 260, height: 300, resizeMode: 'contain', alignSelf: 'center' }}
          />

        </View>
        <View style={Styles.play_button_container}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
            <Text style={Styles.play_nickname_text}>{`${post?.User?.nickname}님의 답변입니다`}</Text>
            
            {isLiked
              ? <TouchableOpacity
                onPress={changeliked}
                style={{ width: 35, height: 35, justifyContent: 'center', alignItems: 'center' }}
              ><Icon name="heart" size={32} color={"#E13740"} /></TouchableOpacity>
              : <TouchableOpacity
                onPress={changeliked}
                style={{ width: 35, height: 35, justifyContent: 'center', alignItems: 'center' }}
              ><Icon name="heart" size={32} color={COLORS.lightGray} /></TouchableOpacity>}
          </View>

          {/* <TouchableOpacity
            onPress={isPlay ? stopSound : playSound}
          >
            <Icon name="play" size={42} color={COLORS.gray} />
          </TouchableOpacity> */}
          {/* <Button
            title={sound ? "Pause sound" : "Start sound"}
            onPress={sound ? stopSound : playSound}
          /> */}
          <TouchableOpacity
            style={{ alignSelf: 'center', marginTop: 40 }}
            onPress={isPlay ? stopSound : playSound}
          >
            {isPlay ?
              <Icon name="pause" size={48} color={COLORS.gray} />
              : <Icon name="play" size={48} color={COLORS.gray} />}
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};


export default AudioScreen;
