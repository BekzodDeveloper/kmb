import React, {useState} from "react";
import {action} from '@storybook/addon-actions';
import {Meta, StoryObj} from "@storybook/react";
import {Button} from "../../stories/Button";
import {OnOff} from "./OnOff";


const callback = () => action("On or Off Clicked")

export const OnMode = () => <OnOff isOn={true} setIsOn={callback}/>
export const OffMode = () => <OnOff isOn={false} setIsOn={callback}/>
export const ModeChanging = () => {
    const [isOn, setIsOn] = useState<boolean>(false)
    return <OnOff isOn={isOn} setIsOn={setIsOn}/>
}


const meta: Meta<typeof OnOff> = {
    title: "On Off",
    component: OnOff,
    // argTypes: { onClick: { action: 'clicked' } },
};

export default meta;
type Story = StoryObj<typeof Button>;


