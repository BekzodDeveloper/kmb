import React, {useState} from "react";
import s from './OnOff.module.css';

type OnOffType = {
    setIsOn: (isOn: boolean) => void
};
export const UncontrolledOnOff: React.FC<OnOffType> =
    (props) => {
        const [isOn, setIsOn] = useState<boolean>(false);

        const onClicked = () => {
            setIsOn(true);
            props.setIsOn(true)
        }
        const offClicked = () => {
            setIsOn(false);
            props.setIsOn(false)
        }


        return <div className={s.wrapper}>
            <button onClick={onClicked} className={`${s.defaultBtn} ${isOn && s.onBtn}`}>On</button>
            <button onClick={offClicked} className={`${s.defaultBtn} ${!isOn && s.offBtn}`}>Off</button>
            <div className={`${isOn ? s.onIndicator : s.offIndicator}`}></div>

        </div>
    }