import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import { Audio } from "expo-av";

const AudioScreen = () => {
  const [sound, setSound] = useState();
  const [pause, setPause] = useState(false);
  const [recording, setRecording] = useState();
  const [recordedUri, setRecordedUri] = useState();

  async function startRecording() {
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log("Recording stopped and stored at", uri);
    setRecordedUri(uri);
  }

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync({
      uri: "https://dorandoran-audio.s3.ap-northeast-2.amazonaws.com/file_example_MP3_1MG.mp3",
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
    <SafeAreaView>
      <View>
        <Button
          style={{ marginTop: "20" }}
          title={recording ? "Stop Recording" : "Start Recording"}
          onPress={recording ? stopRecording : startRecording}
        />
        <Text>Hi</Text>
      </View>

      <View>
        <Text>Audio</Text>
        <Button
          title={sound ? "Stop sound" : "Start sound"}
          onPress={sound ? stopSound : playSound}
        />
        {sound && (
          <Button
            title={pause ? "Play" : "Pause"}
            onPress={pause ? restartSound : pauseSound}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default AudioScreen;
