import { FC } from "react";
import { useWindowDimensions } from "react-native";
import YouTube from "react-native-youtube";
import YoutubePlayer from "react-native-youtube-iframe";


const RNYouTube = ({ url }) => {
  const { width } = useWindowDimensions();

  return (
    <YoutubePlayer
      height={300}
      videoId={url}
      webViewStyle={{ width: width - 10, alignSelf: 'stretch', height: 300, borderRadius: 20 }}
    />
  )
}


export default RNYouTube
