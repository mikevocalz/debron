import { FC } from "react";
import YouTube from "react-youtube";


const ReactYouTube = ({ url }) => {
  return (
    <YouTube
      videoId={url}
      iframeClassName='aspect-video max-w-7xl w-screen h-full ' />
  )
}


export default ReactYouTube