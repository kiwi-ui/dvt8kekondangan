import React from 'react'
import style from  './style.module.css';
import Opening from './Opening';
import Surah from './Surah';
import Couple from './Couple';
import Schedule from './Schedule';
import Countdown from './Countdown';

const Main = () => {
  return (
    <div className={`position-relative text-center ${style.coverBg}`} style={{ height: '100dvh' }}>    
        <Opening />
        <Surah />
        <Couple />
        <Schedule />
        <Countdown />
    </div>
  )
}

export default Main
