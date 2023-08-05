import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp, faCircleDown } from '@fortawesome/free-solid-svg-icons';

const Setting = (props) => {
    return (
        <div className="setting">
            <div className="length-setting">
                <h2 id="break-label">Break Length</h2>
                <div className="length-control">
                    <button id="break-decrement" onClick={()=> props.onDecrementClick("break")}><FontAwesomeIcon icon={faCircleDown} className="icon"/></button>
                    <div id="break-length">{props.breakLength}</div>
                    <button id="break-increment" onClick={()=> props.onIncrementClick("break")}><FontAwesomeIcon icon={faCircleUp} className="icon"/></button>
                </div>

            </div>
            <div className="length-setting">
                <h2 id="session-label">Session Length</h2> 
                <div className="length-control">
                    <button id="session-decrement" onClick={()=> props.onDecrementClick("session")}><FontAwesomeIcon icon={faCircleDown} className="icon" /></button>
                    <div id="session-length">{props.sessionLength}</div>
                    <button id="session-increment" onClick={()=> props.onIncrementClick("session")}><FontAwesomeIcon icon={faCircleUp} className="icon" /></button>
                </div>
            </div>         
        </div>

    );
}
 
export default Setting;