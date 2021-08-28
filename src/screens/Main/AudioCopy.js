import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";

const AudioScreen = () => {
    const [sound, setSound] = useState();
    const [pause, setPause] = useState(false);
    const [dummy, setDummy] = useState();


    useEffect(() => {
        setDummy(
            {
                title: "hi",
                user: "a",
                describe: "blabla",
            }
        , []);    
    }, [])

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

    const Styles = StyleSheet.create({
        container: {
            height: 2,
        width: 100
    }})

    return (
        <View>
            {dummy && <Text>{dummy.title}</Text>}

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

            {dummy && <Text>{dummy.describe}</Text>}

            {/* 선 */}
            <View style= {Styles.container}></View>
            {/* 댓글 */}
            {/*  */}
        </View>
    );
};

export default AudioScreen;
