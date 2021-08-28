import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";

const AudioScreen = () => {
  const [sound, setSound] = useState();
  const [pause, setPause] = useState(false);

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync({
      uri: "https://dorandoran-audio.s3.ap-northeast-2.amazonaws.com/file_example_MP3_1MG.mp3"
    });
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function stopSound() {
    setSound(undefined);
    await sound.unloadAsync();
  }

  async function pauseSound() {
    setPause(true);
    await sound.pauseAsync();
  }

  async function restartSound() {
    setPause(false);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View>
      <Text>Audio</Text>
      <Button
        title={sound ? 'Stop sound' : 'Start sound'}
        onPress={sound ? stopSound : playSound}
      />
      {
        sound &&
        <Button 
          title={pause ? 'Play' : 'Pause'}
          onPress={pause ? restartSound : pauseSound}
        />
      }
      <Button />
    </View>
  );
};

export default AudioScreen;