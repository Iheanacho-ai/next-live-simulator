import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ({endVideo, timePlayed, controls}) => {
    return(
        <div className="video-player">
            <ReactPlayer 
            ref = { player => { this.player = player }}
            url= 'https://res.cloudinary.com/amarachi-2812/video/upload/v1630370229/videoplayback_1_pr2hzi.mp4'
            playing = {true} 
            controls = {controls}
            config={{
                
            }}
            onReady={() => this.player.seekTo(timePlayed)} 
            onEnded = {endVideo}/>
        </div>
    )
}

export default VideoPlayer;