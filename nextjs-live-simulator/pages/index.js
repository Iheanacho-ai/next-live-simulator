import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import VideoPlayer from '../component/video-player';
import VideoOverlay from '../component/video-overlay';
import styles from '../styles/Home.module.css';


const Home = () => {
  const [startTime, setStartTime] = useState(1630554630653);
  const [controls, setControls] = useState (true)
  const [ended, setEnded] = useState(false)
  const [duration, setDuration] = useState(null)
  
  
  let date = new Date();
  let currentTime =  date.getTime()
  let timePlayed = ( currentTime - startTime ) % 1000;


  
  const videoDuration = num => {
    setDuration( num )
  }


  const endVideo = () => {
    if (controls === false || ended === true) {
    return
    
  } else {
    setControls(false);
    setEnded(true)
  }
  }


  const restartLive = () => {
    let newDate = new Date();
    let newStartTime = newDate.getTime(); 
    setStartTime(newStartTime)
    setEnded(false);
  }




  if (timePlayed > duration){
    endVideo()
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

          {/* Our VideoPlayer component */}

          <VideoPlayer ended = {ended} timePlayed = {timePlayed} controls= {controls} endVideo= {endVideo} videoDuration= {videoDuration}/>
            {
              ended ? <VideoOverlay /> : null
            }
        </div>
        
        {/* Our Restart button */}

        <button className= 'reset-button' onClick = {restartLive}>Restart Live Simmulation</button>

      </main>
    </div>
  )
}

export default Home;
