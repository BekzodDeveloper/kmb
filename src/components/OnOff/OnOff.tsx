import React, {useState} from "react";
import s from './OnOff.module.css';

// type OnOffType = {
//     isOn?: boolean
// }


export const OnOff = () => {
    const [isOn, setIsOn] = useState(true);
    // console.log(isOn)
    return <div className={s.wrapper}>

        <button onClick={() => setIsOn(true)} className={`${s.defaultBtn} ${isOn && s.onBtn}`}>On</button>
        <button onClick={() => setIsOn(false)} className={`${s.defaultBtn} ${!isOn && s.offBtn}`}>Off</button>
        <div className={`${isOn ? s.onIndicator : s.offIndicator}`}></div>

    </div>
}