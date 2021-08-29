import React, { useRef, useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

const VideoScreen = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View>
      <Video
        ref={video}
        source={{
          uri: "https://buob-video.s3.ap-northeast-2.amazonaws.com/file_example_MP4_640_3MG.mp4",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
};

export default VideoScreen;
