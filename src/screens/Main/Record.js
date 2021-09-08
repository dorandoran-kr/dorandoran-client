import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image
} from "react-native";
import { Audio } from "expo-av";

import axios from "../../axios";

const Record = () => {
  const [recording, setRecording] = useState();
  const [uri, setUri] = useState();
  const [sound, setSound] = useState();
  const [directory, setDirectory] = useState();
  const [isRecording, setIsRecording] = useState(false);

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
    } catch (error) {
      console.error("Failed to start recording", error);
    }
  };

  const stopRecording = async () => {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setUri(uri);
    setIsRecording(false);
  };

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync({
      uri: directory,
    });
    setSound(sound);

    await sound.playAsync();
  }

  const stopSound = async () => {
    setSound(undefined);
    await sound.unloadAsync();
  }

  const upload = async () => {
    const formData = new FormData();

    let uriParts = uri.split('.');
    let fileType = uriParts[uriParts.length - 1];

    formData.append('mp3', {
      uri: uri,
      name: `sound.${fileType}`,
      type: `audio/${fileType}`
    });

    try {
      const res = await axios.post('/uploads', formData);
      setDirectory(res.data.directory);
      setUri(null);
    } catch (error) {
      console.error(error);
    }
  }

  return (

    <View style={styles.container}>

      {
        isRecording
          ? <Image
            source={{ uri: 'https://yummeal-image.s3.ap-northeast-2.amazonaws.com/original/1630250037246rando.gif' }}
            style={{
              width: 72,
              height: 72,
            }}
          />
          : <View></View>
      }


      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
      />

      {
        uri &&
        <Button
          title="녹음 완료? 업로드!"
          onPress={upload}
        />
      }

      {
        (directory && !recording) &&
        <View>
          <Text>업로드 완료!</Text>
          <Text>{directory}</Text>
          <Text>Audio</Text>
          <Button
            title={sound ? "정지" : "들어보기"}
            onPress={sound ? stopSound : playSound}
          />
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  secsStyle: {
    fontSize: 18,
    opacity: 0.7,
  },
});

export default Record;
