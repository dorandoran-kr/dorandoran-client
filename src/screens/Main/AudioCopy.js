import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Animated, TouchableOpacity, Modal, SafeAreaView } from "react-native";
import { Audio } from "expo-av";
// import Modal from 'react-native-simple-modal';

const AudioScreen = () => {
    const [sound, setSound] = useState();
    const [pause, setPause] = useState(false);
    const [dummy, setDummy] = useState();
    const [open, setOpen] = useState(false);
    const [offset, setOffset] = useState(0);

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
            height: 3,
            width: '100%',
            backgroundColor: 'white',

        }
    })
    console.log(open);

    return (
        <SafeAreaView>
            {dummy && <Text>{dummy.title}</Text>}

            {/* <Button
                title={sound ? 'Stop sound' : 'Start sound'}
                onPress={sound ? stopSound : playSound}
            />
            {
                sound &&
                <Button
                    title={pause ? 'Play' : 'Pause'}
                    onPress={pause ? restartSound : pauseSound}
                />
            } */}

            {dummy && <Text>{dummy.describe}</Text>}

            {/* 선 */}
            <View style={Styles.container}></View>

            {/* 댓글 */}
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffff00', height:100, width:100 }}>
                <TouchableOpacity onPress={() => setOpen(!open)}>
                    <Text>댓글</Text>
                </TouchableOpacity>

                <Modal
                    overlayBackground={'rgba(0,0,0,0.75'}
                    animationType={"slide"}
                    // presentationStyle={'pageSheet'}
                    visible={open}
                    style={{ alignItems: 'center', height: '50%' }}
                    >
                    <View>
                        <Text style={{ fontSize: 20, marginBottom: 10 }}>Hello world</Text>
                        <TouchableOpacity style={{ margin: 5 }} onPress={() => setOffset(-100)}>
                            <Text> Move modal up</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={{ margin: 5 }}
                            onPress={() => setOffset(0)}>
                            <Text> Reset modal position</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity
                            style={{ margin: 5 }}
                            onPress={() => setOpen(false)}>
                            <Text> Close modal</Text>

                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>

    );
};

export default AudioScreen;
