import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';
import { useContext, useState, useEffect, useRef} from 'react';
import SettingsContext from './SettingsContext';

const red = '#F54e4e';
const green = '#4aec8c';
function Timer(){

    const settingsInfo = useContext(SettingsContext);

    const [isPaused, setIsPaused] = useState(true);
    const [secondsLeft, setSecondsLeft] = useState(0);
    const [mode, setMode] = useState('work');

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    const setSecondsLeftRef = useRef(setSecondsLeft);

    function switchMode() {
        const nextMode = modeRef.current === 'work' ? 'break' : 'work';
        const nextSeconds = nextMode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;      
        setMode(nextMode);
        modeRef.current = nextMode;
        setSecondsLeft(nextSeconds);
        secondsLeftRef.current = nextSeconds;
    }
    
    function tick() {
        setSecondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);
    }
    
    function initTimer() {
        setSecondsLeft(settingsInfo.workMinutes * 60);
    }
    
    useEffect(effect => {
        initTimer();

        const interval = setInterval(handler => {
            console.log('interval');
          if(isPausedRef.current){
            return; 
          }  
          if(secondsLeftRef.current === 0){
            return switchMode();
          }
          tick();

        }, setTimeout(() => {}, 1000));

       return() => clearInterval(interval);       
    }, [settingsInfo]);

    const totalSeconds = mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;
    const percentage = Math.round((secondsLeft / totalSeconds) * 100);
    const minutes = secondsLeft/60;
    const seconds = secondsLeft % 60;
    
    return (
        <div>
            <CircularProgressbar 
                value={percentage} 
                text={minutes+":"+(seconds < 10 ? `0${seconds}` : seconds)}	
                styles={buildStyles({ 
                  rotation : 0.0,
                 strokeLinecap: 'round',
                  textColor:'#fff',
                   pathColor: 'rgb(255, 4, 0)',
                  trailColor: 'rgb(255, 255, 255, 0.2)',
               }
            )} />

            <div style={{ marginTop: '20px'}}>

                {isPaused ? <PlayButton /> : <PauseButton />} 

            </div>
            <div>
                <div style={{ marginTop: '20px'}}>
                    <SettingsButton onClick={() => {
                        return settingsInfo.setShowSettings(true);
                    }} />	
                </div>
            </div>

        </div>
    );


}

export default Timer;