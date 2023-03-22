import React, {useState} from "react";


type UncontrolledRatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating() {

    const [value, setValue] = useState(0);

    return <div>
        <Star selected={value > 0}
              onStarClick={() => setValue(1)}/>
        <Star selected={value > 1}
              onStarClick={() => setValue(2)}/>
        <Star selected={value > 2}
              onStarClick={() => setValue(3)}/>
        <Star selected={value > 3}
              onStarClick={() => setValue(4)}/>
        <Star selected={value > 4}
              onStarClick={() => setValue(5)}/>
    </div>;

}

type StarPropsType = {
    selected: boolean
    onStarClick: () => void
}

function Star(props: StarPropsType) {
    return <span
        onClick={() => props.onStarClick()}>{props.selected ? <b>STAR</b>
        : "STAR"} </span>;

}