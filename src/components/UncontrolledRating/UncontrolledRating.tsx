import React, {useState} from "react";


type UncontrolledRatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating() {

    const [value, setValue] = useState(3);

    const onStarClick = (v: number) => {
        setValue(v)
    }

    return <div>
        <Star selected={value > 0}
              value={1}
              onStarClick={onStarClick}/>
        <Star selected={value > 1}
              value={2}
              onStarClick={onStarClick}/>
        <Star selected={value > 2}
              value={3}
              onStarClick={onStarClick}/>
        <Star selected={value > 3}
              value={4}
              onStarClick={onStarClick}/>
        <Star selected={value > 4}
              value={5}
              onStarClick={onStarClick}/>
        <Star selected={value > 5}
              value={6}
              onStarClick={onStarClick}/>
    </div>;

}

type StarPropsType = {
    selected: boolean
    onStarClick: (value: number) => void
    value: number
}

function Star(props: StarPropsType) {
    return props.selected ? <span onClick={() => {
            props.onStarClick(props.value)
        }}><b>STAR</b> </span>
        : <span onClick={() => {
            props.onStarClick(props.value)
        }}>STAR </span>

}