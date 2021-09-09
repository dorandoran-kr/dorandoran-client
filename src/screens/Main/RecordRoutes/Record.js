import React, { useState, useEffect } from "react";
import { View, Button, Text, TouchableOpacity, Image } from "react-native";
import { Audio } from "expo-av";
import Icon from "react-native-vector-icons/Ionicons";
import { CommonActions } from "@react-navigation/native";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "../../../axios";
import styles from "./styles";
import { COLORS, SIZES } from "../../../components/theme";

const Record = ({ navigation, route }) => {
  const [token, setToken] = useState();
  const [recording, setRecording] = useState();
  const [uri, setUri] = useState();
  const [sound, setSound] = useState();
  const [isPlay, setIsPlay] = useState(false);
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const [audioTime, setAudioTime] = useState(0);

  const [isRecording, setIsRecording] = useState(false);
  const [isError, setError] = useState(false);

  const { questionId, question } = route.params;

  let recordTime = 0;

  useEffect(() => {
    (async () => {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
    })();
    (async () => {
      const token = await AsyncStorage.getItem('token');

      setToken(token);
    })();
  }, []);

  const startRecording = async () => {
    setIsTimerStart(false);
    stopSound();
    try {
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setTimeout(() => {
        setRecording(recording);
        setIsRecording(true);
        setUri();

        setIsStopwatchStart(true);
        setResetStopwatch(false);
      }, 50);
    } catch (error) {
      console.error("Failed to start recording", error);
    }
  };

  const stopRecording = async () => {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setIsStopwatchStart(false);
    setUri(uri);
    setIsRecording(false);
    console.log(recordTime);
    setAudioTime(recordTime);
  };

  const playSound = async () => {
    if (!sound) {
      const { sound } = await Audio.Sound.createAsync({
        uri: uri,
      });
      setSound(sound);
      sound.setIsLoopingAsync(true);
      await sound.playAsync();
    }
    setIsPlay(true);
    setIsTimerStart(true);
    setResetTimer(false);

    await sound.playAsync();
  };

  const stopSound = async () => {
    setIsPlay(false);
    setIsTimerStart(false);
    await sound.pauseAsync();
  };

  const upload = async () => {
    const formData = new FormData();

    let uriParts = uri.split(".");
    let fileType = uriParts[uriParts.length - 1];

    formData.append("mp3", {
      uri: uri,
      name: `sound.${fileType}`,
      type: `audio/${fileType}`,
    });

    try {
      const res = await axios.post("/uploads", formData);
      const url = res.data.directory

      await axios.post(
        '/posts',
        {
          title: "",
          description: "",
          thumbnailUrl: "",
          questionId,
          url: url
        },
        {
          headers: {
            // TODO: fix
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywicGhvbmVOdW1iZXIiOiIwMTAyODE1NDI4MSIsImlhdCI6MTYzMTExNjEyMCwiZXhwIjoxNjMxMjAyNTIwfQ.aE0Nf1V3lcQN7MxA5h1BrtygNjBUDoQc6GMA3GSlHFY"
          }
        }
      );
      navigation.dispatch(
        CommonActions.navigate("End")
      );
    } catch (error) {
      console.error(error);
    }
  };

  const updateTime = (time) => {
    const a = time.split(':');
    recordTime = Number(a[0]) * 60 * 60 + Number(a[1]) * 60 + Number(a[2]);
  }

  return (
    <View style={styles.containerfull}>
      <View style={styles.whitecontainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(CommonActions.goBack());
            }}
          >
            <Icon name="chevron-back" size={32} color="#000000" />
          </TouchableOpacity>
        </View>
        <View style={styles.record_questionbox}>
          <Text style={styles.header_text}>{question}</Text>
        </View>
        {isRecording ?
          (
            <View>
              <View>
                <View style={styles.rando_hand_container}    >
                  <View style={styles.rando_hand}></View>
                  <View style={styles.rando_hand}></View>
                </View>
                <View style={styles.rando_image}>
                  <Image
                    source={{
                      uri: "https://yummeal-image.s3.ap-northeast-2.amazonaws.com/original/1631097612874KakaoTalk_20210908_193939151.gif",
                    }}
                    style={{ width: 180, height: 180, borderRadius: 90 }}
                  />
                </View>
              </View>
              <View>
                <Stopwatch
                  laps
                  secs
                  start={isStopwatchStart}
                  reset={resetStopwatch}
                  options={options}
                  getTime={updateTime}
                />
              </View>

              <TouchableOpacity
                style={styles.record_stopbutton}
                onPress={stopRecording}
              >
                <View style={styles.record_stopbutton_center}></View>
              </TouchableOpacity>
            </View>
          ) : (
            uri
              ? // 녹음 후
              <View>
                <View>
                  <View style={styles.rando_hand_container}    >
                    <View style={styles.rando_hand}></View>
                    <View style={styles.rando_hand}></View>
                  </View>
                  <View style={styles.rando_image}>
                    <Image
                      source={{
                        uri: "https://yummeal-image.s3.ap-northeast-2.amazonaws.com/original/1631111616790KakaoTalk_20210908_233308532.png",
                      }}
                      style={{ width: 180, height: 180, }}
                    />
                  </View>
                </View>
                <Text>{audioTime}</Text>
                <Timer
                  totalDuration={audioTime * 1000}
                  secs
                  start={isTimerStart}
                  reset={resetTimer}
                  options={options}
                  handleFinish={() => {}}
                  getTime={(time) => {}}
                />
                <TouchableOpacity
                  style={styles.record_playbutton}
                  onPress={isPlay ? stopSound : playSound}
                >
                  {isPlay ?
                    <Icon name="pause" size={44} color={COLORS.white} />
                    : <Icon name="play" size={44} color={COLORS.white} />}
                </TouchableOpacity>
                <View
                  style={{ 
                    width:"100%", 
                    flexDirection: 'row', 
                    justifyContent:'space-between', 
                    position:'absolute',
                    marginTop:SIZES.height-360}}
                >
                  <TouchableOpacity
                    style={styles.record_again}
                    onPress={startRecording}
                  >
                    <Icon name="refresh" size={24} color={COLORS.green} />
                    <Text style={styles.record_button_text}>다시하기</Text>                    
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.record_upload}
                    onPress={upload}
                  >
                    <Text style={styles.record_button_text}>녹음완료</Text>
                    <Icon name="chevron-forward" size={24} color={COLORS.green} />
                  </TouchableOpacity>
                </View>
              </View>
              : // 녹음 전
              <View>
                <View>
                  <View style={styles.rando_hand_container}    >
                    <View style={styles.rando_hand}></View>
                    <View style={styles.rando_hand}></View>
                  </View>
                  <View style={styles.rando_image}>
                    <Image
                      source={{
                        uri: "https://yummeal-image.s3.ap-northeast-2.amazonaws.com/original/1631111616790KakaoTalk_20210908_233308532.png",
                      }}
                      style={{ width: 180, height: 180, }}
                    />
                  </View>
                </View>
                <View style={{ height: 100 }} />
                <View>
                  <TouchableOpacity
                    style={styles.record_recordbutton}
                    onPress={startRecording}
                  >
                    <Icon name="mic-outline" size={48} color={COLORS.white} />
                  </TouchableOpacity>
                </View>
              </View>
          )}
      </View>
    </View>
  );
};

const options = {
  container: {
    height: 100,
    alignItems: "center",
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    color: COLORS.gray,
    marginLeft: 7,
  },
};

export default Record;
