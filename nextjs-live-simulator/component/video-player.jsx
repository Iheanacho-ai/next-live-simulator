import React from 'react'
import ReactPlayer from 'react-player'


const VideoPlayer = ({endVideo, timePlayed, controls, videoDuration}) => {
    return(
        <div className="video-player">
            <ReactPlayer 
            url= 'https://res.cloudinary.com/amarachi-2812/video/upload/v1630370229/videoplayback_1_pr2hzi.mp4'            
            playing = {true} 
            controls = {controls}
            onReady={player => {videoDuration(player.getDuration), player.seekTo(timePlayed)}} 
            onEnded = {endVideo}
            />
        </div>
    )
}

export default VideoPlayer;