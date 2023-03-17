import React, {useState} from "react";


type UncontrolledAccordionPropsType = {
    title: string
    collapsed?: boolean
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return <div>
        <UncontrolledAccordionTitle title={props.title}/>
        <button onClick={() => setIsCollapsed(!isCollapsed)}>Toggle</button>
        {!isCollapsed && <UncontrolledAccordionBody/>}
    </div>


}

type UncontrolledAccordionTitlePropsType = {
    title: string,
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    return <h3>{props.title}</h3>;
}

function UncontrolledAccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>;
}
