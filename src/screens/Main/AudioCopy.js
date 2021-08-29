import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Animated, TouchableOpacity, Modal, SafeAreaView, FlatList, ScrollView} from "react-native";
import { Audio } from "expo-av";
import { TapGestureHandler } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
// import Modal from 'react-native-simple-modal';

const AudioScreen = () => {
    const [sound, setSound] = useState();
    const [pause, setPause] = useState(false);
    const [info, setInfo] = useState();
    const [open, setOpen] = useState(false);
    const [offset, setOffset] = useState(0);
    const [Dummy, setDummy] = useState();

    useEffect(() => {
        setInfo(
            {
                title: "hi",
                user: "a",
                describe: "blabla",
            }
            , []);
    }, [])

    useEffect(() => {
        console.log('hihi')
        
        setDummy([
            {
                text:"댓글 들어갈 자리입니다.",
                date: "8/29",
            },
            {
                text:"하하 쉽지않네요.",
                date: "8/30",
            }
        ])
    
      }, []);

    
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

        },
        item: {
            padding:10,
            fontSize: 18,
            height: 44,
            
        },
    })
    console.log(open);

    return (
        <View>
            {info && <Text>{info.title}</Text>}

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

            {info && <Text>{info.describe}</Text>}

            {/* 선 */}
            <View style={Styles.container}></View>


            {/* 댓글 */}
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffff00', height:100, width:100 }}>
                <TouchableOpacity onPress={() => setOpen(true)}>
                    <Text>댓글</Text>
                </TouchableOpacity>


                <Modal
                    animationType={"slide"}
                    visible={open}
                    transparent={true}
                    presentationStyle={"formsheet"}
                    >
                    <View style={{alignItems: 'center', justifyContent:'center'}}>
                        <View style={{height:'50%', backgroundColor:"white", marginTop:50, marginHorizontal:10}}>

                            <TouchableOpacity
                                style={{ margin: 5 }}
                                onPress={() => setOpen(false)}>
                                <Text> Close modal </Text>
                            </TouchableOpacity>
                           
                            <FlatList data = {Dummy} 
                            renderItem = {({item}) => <Text style={Styles.item}> {item.text}    {item.date}</Text>}/>
                            
                                
                            

                            
                        </View>
                    </View>
            
                </Modal>
            </View>
        </View>

    );
};




export default AudioScreen;
