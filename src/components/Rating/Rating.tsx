import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;
type RatingPropsType = {
    ratingValue: RatingValueType
    onSetRatingValue: (ratingValue: RatingValueType) => void
}

export const Rating: React.FC<RatingPropsType>
    = ({
           ratingValue,
           onSetRatingValue
       }) => {

    return <div>
        <Star selected={ratingValue > 0} ratingValue={1} onSetRatingValue={onSetRatingValue}/>
        <Star selected={ratingValue > 1} ratingValue={2} onSetRatingValue={onSetRatingValue}/>
        <Star selected={ratingValue > 2} ratingValue={3} onSetRatingValue={onSetRatingValue}/>
        <Star selected={ratingValue > 3} ratingValue={4} onSetRatingValue={onSetRatingValue}/>
        <Star selected={ratingValue > 4} ratingValue={5} onSetRatingValue={onSetRatingValue}/>
    </div>;

}

type StarPropsType = {
    selected: boolean
    ratingValue: RatingValueType
    onSetRatingValue: (ratingValue: RatingValueType) => void
}

function Star(props: StarPropsType) {
    function onSetRatingValue() {

        props.onSetRatingValue(props.ratingValue)
    }

    return <span onClick={onSetRatingValue}>{props.selected ? <b>STAR </b> : "star "}</span>


}