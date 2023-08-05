import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

const Timer = (props) => {

    return (
        <div className="timer">
            <h2 id="timer-label">{props.timerLabel}</h2>
            <div id="time-left">{props.timeLeft}</div>
            <div className="timer-control">
                <button id="start_stop" onClick={props.onStartStopClick}>
                    {props.isRunning ? <FontAwesomeIcon icon={faPause} className="icon" /> : <FontAwesomeIcon icon={faPlay} className="icon" />}
                </button>
                <button id="reset" onClick={props.onResetClick}><FontAwesomeIcon icon={faArrowsRotate} className="icon" /></button>
            </div>
        </div>
    );
}
 
export default Timer;