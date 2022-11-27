import React from "react";
import s from './OnOff.module.css';

type OnOffType = {
    signal: boolean
}

export const OnOff = (props: OnOffType) => {
    return <div>
        <div>
            <button className={`${s.defaultBtn} ${
                props.signal && s.on
            }`}>On
            </button>
            <button className={`${s.defaultBtn} ${
                !props.signal && s.off
            }`}>Off
            </button>
            <span className={`
            ${s.offSignal} ${props.signal && s.onSignal}
            `}
            >0</span>
        </div>
    </div>
}