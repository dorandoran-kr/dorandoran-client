import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Audio } from "expo-av";
import axios from "axios";
import { CommonActions } from "@react-navigation/native";

const AudioScreen = ({ navigation, route }) => {
  const [sound, setSound] = useState();
  const [pause, setPause] = useState(false);
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState();
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);

  const { id } = route.params;

  useEffect(() => {
    (async () => {
      const resp = await axios.get(`http://3.35.66.47/posts/${id}`);

      setPost(resp.data.post);
      setLikeCount(resp.data.likeCount);
      setCommentCount(resp.data.commentCount);
    })();
  }, []);

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
    <View style={Styles.center}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(CommonActions.navigate("Home"));
        }}
      >
        <Icon name="chevron-back" size={24} color="#000000" />
      </TouchableOpacity>
      {post && (
        <View>
          <Text>제목! {post.title}</Text>
          <Text>설명! {post.description}</Text>
          <Text>작성자: {post.User.nickname}</Text>
        </View>
      )}

      <Text>좋아요: {likeCount}</Text>
      <Text>댓글: {commentCount}</Text>

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

      {/* 선 */}
      <View style={Styles.container}></View>

      {/* 댓글 */}
      {post && (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffff00",
            height: 150,
            width: 200,
          }}
        >
          <TouchableOpacity onPress={() => setOpen(true)}>
            <FlatList
              data={post?.Comments}
              renderItem={({ item }) => (
                <View>
                  <Text>닉네임: {item.User.nickname}</Text>
                  <Text style={Styles.item}>{item.text}</Text>
                </View>
              )}
            />
          </TouchableOpacity>

          <Modal
            animationType={"slide"}
            visible={open}
            transparent={true}
            presentationStyle={"formsheet"}
          >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View
                style={{
                  height: "50%",
                  backgroundColor: "white",
                  marginTop: 50,
                  marginHorizontal: 10,
                }}
              >
                <TouchableOpacity
                  style={{ margin: 5 }}
                  onPress={() => setOpen(false)}
                >
                  <Text> Close modal </Text>
                </TouchableOpacity>

                <FlatList
                  data={post?.Comments}
                  renderItem={({ item }) => (
                    <View>
                      <Text>닉네임: {item.User.nickname}</Text>
                      <Text style={Styles.item}>{item.text}</Text>
                    </View>
                  )}
                />
              </View>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: 3,
    width: "100%",
    backgroundColor: "white",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default AudioScreen;
