import React from "react";


type AccordionPropsType = {
    title: string
    collapsed: boolean
    setAccordionCollapsed: (collapsed: boolean) => void
}

export function Accordion(props: AccordionPropsType) {


    return <div>
        <AccordionTitle title={props.title}
                        collapsed={props.collapsed}
                        setAccordionCollapsed={props.setAccordionCollapsed}/>
        {!props.collapsed &&
            <AccordionBody collapsed={props.collapsed} setAccordionCollapsed={props.setAccordionCollapsed}/>}
        <hr/>
    </div>


}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setAccordionCollapsed: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.setAccordionCollapsed(!props.collapsed)}>{props.title}</h3>;
}

type AccordionBodyType = {
    collapsed: boolean
    setAccordionCollapsed: (collapsed: boolean) => void
}
const AccordionBody: React.FC<AccordionBodyType> = (props) => {
    return <ul>
        <li>Мужская обувь</li>
        <li>Женская обувь</li>
        <li>Детская обувь</li>
    </ul>;
}
