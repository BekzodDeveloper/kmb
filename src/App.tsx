import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    console.log('App')

    return (
        <div className="App">
            <PageTitle title={'Smartphones'}/>
            <PageTitle title={'Notebooks'}/>

            <Accordion title={'MENU #1'} collapsed={false}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <Accordion title={'MENU #2'} collapsed={false}/>

            <OnOff signal={true}/>
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
