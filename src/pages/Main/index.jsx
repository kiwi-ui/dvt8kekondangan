import React from 'react'
import style from  './style.module.css';
import Opening from './Opening';
import Surah from './Surah';
import Couple from './Couple';
import Schedule from './Schedule';
import Countdown from './Countdown';
import Gift from './Gift';
import Wishes from './Wishes';
import Closing from '../Closing';
import Credits from '../Credits';
import MusicPlayer from '../../components/MusicPlayer';

const Main = ({ songIndex, audioRef, isPlaying, setIsPlaying }) => {
  return (
    <div className={`position-relative text-center ${style.coverBg}`} style={{ height: '100dvh' }}>    
      <MusicPlayer songIndex={songIndex} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Opening />
      <Surah />
      <Couple />
      <Schedule />
      <Countdown />
      <Gift />
      <Wishes />
      <Closing />
      <Credits />
    </div>
  )
}

export default Main
