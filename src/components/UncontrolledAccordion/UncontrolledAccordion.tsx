import React, {useState} from "react";


type UncontrolledAccordionPropsType = {
    title: string
    collapsed?: boolean
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return <div>
        <UncontrolledAccordionTitle title={props.title} setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed}/>
        {/*<button onClick={() => setIsCollapsed(!isCollapsed)}>Toggle</button>*/}
        <span>{isCollapsed && "Collapsed"}</span>
        {!isCollapsed && <UncontrolledAccordionBody/>}
    </div>


}

type UncontrolledAccordionTitlePropsType = {
    title: string
    isCollapsed: boolean
    setIsCollapsed: (collapsed: boolean) => void

}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    const setIsCollapsed = () => {
        props.setIsCollapsed(!props.isCollapsed)
    }
    return <h3 onClick={setIsCollapsed}>{props.title}</h3>;
}

function UncontrolledAccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>;
}
