import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';

const red = '#F54e4e';
const green = '#4aec8c';
function Timer(){

    return (
        <div>
            <CircularProgressbar value={60} text={`60%`} styles={buildStyles({ 
                rotation : 0.0,
                strokeLinecap: 'round',
                textColor:'#fff',
                pathColor: 'rgb(47, 123, 185)',
                trailColor: 'rgb(255, 255, 255, 0.2)',
            })} />;

            <div style={{ marginTop: '20px'}}>

                <PlayButton />

            </div>

        </div>
    );


}

export default Timer;