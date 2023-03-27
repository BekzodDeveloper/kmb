import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [isOn, setIsOn] = useState<boolean>(false);


    return (
        <div className="App">
            <Accordion title={'Категории'}
                       collapsed={accordionCollapsed}
                       setAccordionCollapsed={setAccordionCollapsed}/>
            <UncontrolledAccordion title={'UncontrolledAccordion'}/>

            <hr/>
            <Rating ratingValue={ratingValue} onSetRatingValue={setRatingValue}/>
            <UncontrolledRating/>
            <hr/>
            {/*<OnOff isOn={isOn} setIsOn={setIsOn}/>*/}
            <UncontrolledOnOff setIsOn={setIsOn}/>{isOn.toString()}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {

    return <h1>{props.title}</h1>;
}


export default App;
