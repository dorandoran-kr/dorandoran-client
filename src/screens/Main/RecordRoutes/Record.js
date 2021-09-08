import React, { useState, useEffect } from "react";
import { View, Button, Text, TouchableOpacity, Image } from "react-native";
import { Audio } from "expo-av";
import Icon from "react-native-vector-icons/Ionicons";
import { CommonActions } from "@react-navigation/native";
import { Stopwatch } from "react-native-stopwatch-timer";

import axios from "../../../axios";
import styles from "./styles";
import { COLORS, SIZES } from "../../../components/theme";

const Record = ({ navigation, route }) => {
  const [recording, setRecording] = useState();
  const [uri, setUri] = useState();
  const [sound, setSound] = useState();
  const [directory, setDirectory] = useState();
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  const [isRecording, setIsRecording] = useState(false);
  const [isError, setError] = useState(false);

  const { questionId, question } = route.params;

  useEffect(() => {
    (async () => {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
    })();
  }, []);

  const startRecording = async () => {
    try {
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      setIsRecording(true);

      setIsStopwatchStart(true);
      setResetStopwatch(false);
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
  };

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync({
      uri: directory,
    });
    setSound(sound);

    await sound.playAsync();
  };

  const stopSound = async () => {
    setSound(undefined);
    await sound.unloadAsync();
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
      setDirectory(res.data.directory);
      setUri(null);
    } catch (error) {
      console.error(error);
    }
  };

  const finishRecord = async () => {
    navigation.dispatch(
      CommonActions.navigate("End", {
        questionId,
        url: directory,
      })
    );
  };

  return (
    <View style={styles.containerfull}>
      <View style={styles.whitecontainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(CommonActions.navigate("Explain"));
            }}
          >
            <Icon name="chevron-back" size={32} color="#000000" />
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              width: 250,
              display: "flex",
              flexDirection: "row",
              position: "absolute",
              marginTop: SIZES.height * 0.38 - 20,
              justifyContent: "space-around",
            }}
          >
            <View
              style={{
                backgroundColor: COLORS.white,
                width: 40,
                height: 40,
                borderRadius: 20,
                elevation: 2,
              }}
            ></View>
            <View
              style={{
                backgroundColor: COLORS.white,
                width: 40,
                height: 40,
                borderRadius: 20,
                elevation: 2,
              }}
            ></View>
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
        {isRecording ? (
          <View>
            <View>
              <Stopwatch
                laps
                secs
                start={isStopwatchStart}
                reset={resetStopwatch}
                options={options}
                getTime={(time) => {}}
              />
            </View>
            <Image
              source={{
                uri: "https://yummeal-image.s3.ap-northeast-2.amazonaws.com/original/1630250037246rando.gif",
              }}
              style={{
                width: 300,
                height: 300,
              }}
            />
          </View>
        ) : (
          <View></View>
        )}
        <Text>{question}</Text>
        <Button
          title={recording ? "Stop Recording" : "Start Recording"}
          onPress={recording ? stopRecording : startRecording}
        />

        {uri && <Button title="녹음 완료? 업로드!" onPress={upload} />}

        {directory && !recording && (
          <View>
            <Text>업로드 완료!</Text>
            <Text>{directory}</Text>
            <Text>Audio</Text>
            <Button
              title={sound ? "정지" : "들어보기"}
              onPress={sound ? stopSound : playSound}
            />
            <Button title="녹음 완료!" onPress={finishRecord} />
          </View>
        )}
      </View>
    </View>
  );
};

const options = {
  container: {
    backgroundColor: "#FF0000",
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "#FFF",
    marginLeft: 7,
  },
};

export default Record;
