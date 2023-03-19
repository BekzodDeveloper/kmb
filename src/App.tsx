import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    console.log('App')

    return (
        <div className="App">
            <PageTitle title={'Smartphones'}/>
            <PageTitle title={'Notebooks'}/>

            <Accordion title={'MENU #1'} collapsed={false}/>

            <Rating/>
            {/*<Rating/>*/}
            {/*<Rating/>*/}
            {/*<Rating/>*/}
            {/*<Rating/>*/}
            Uncontrolled
            <UncontrolledRating/>

            <Accordion title={'MENU #2'} collapsed={false}/>

            <OnOff/>
            <OnOff/>

            <UncontrolledAccordion title={'UncontrolledAccordion'}/>
            <UncontrolledAccordion title={'UncontrolledAccordion #2'}/>
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
