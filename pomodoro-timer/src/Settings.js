import ReactSlider from 'react-slider';
import './slider.css';
import SettingsContext from './SettingsContext';
import { useContext} from 'react';
import BackButton from './BackButton';

function Settings() {
    const settingsInfo = useContext(SettingsContext);
  return (
    <div style={{ textAlign: 'left'}}>
        <label>Minutos de Trabajo: {settingsInfo.workMinutes}:00</label>
        <ReactSlider
            className={'slider'}
            thumbClassName={'tumb'}
            trackClassName={'track'}	
            value={settingsInfo.workMinutes}
            onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
            min={1}
            max={120}
            />        
        <label>Minutos de Descanso: {settingsInfo.breakMinutes}:00</label>
        <ReactSlider
            className={'slider green'}
            thumbClassName={'tumb'}
            trackClassName={'track'}	
            value={settingsInfo.breakMinutes}
            onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
            min={1}
            max={120}
            />  
            <div style={{ textAlign:'center', marginTop: '20px'}}>
            <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
            </div>
    </div>  
    );
}
export default Settings;
// Compare this snippet from pomodoro-timer/src/App.js: