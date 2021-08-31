import Head from 'next/head'
import styles from '../styles/Home.module.css'
import VideoPlayer from '../component/video-player/video-player';
import VideoOverlay from '../component/video-overlay/video-overlay';
import React, { useState } from 'react';

const Home = () => {
  const [ended, setEnded] = useState(false)
  const [startTime, setStartTime] = useState("1:55");
  const [controls, setControls] = useState (true);
  
  let date = new Date();
  let currentTime =  `${date.getHours()} : ${date.getMinutes()}}`
  let timePlayed = currentTime - startTime;

  const endVideo = () => {
    setControls(false);
    setEnded(true)
  }

  const restartLive = () => {
    let newStartTime = date.getSeconds();
    setEnded(false);
    setStartTime(newStartTime)
  }



  return(
    <div className={styles.container}>
      <Head>
        <title>Live Simulator</title>
        <meta name="description" content="Live Event Simulator Created by Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className= 'live-event-container'>
          <VideoPlayer ended = {ended} timePlayed = {timePlayed} controls= {controls} endVideo= {endVideo}/>
            {
              ended ? <VideoOverlay /> : null
            }
        </div>
        
        
        <button className= 'reset-button' onClick = {restartLive}>Restart Live Simmulation</button>

      </main>
    </div>
  )
}

export default Home;
