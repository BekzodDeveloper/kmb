import React, {useState} from "react";
import {action} from '@storybook/addon-actions';
import {Rating, RatingValueType} from "./Rating";
import {Meta, StoryObj} from "@storybook/react";
import {Button} from "../../stories/Button";


export const EmptyRating = () => <Rating ratingValue={0} onSetRatingValue={x => x}/>
export const Rating1 = () => <Rating ratingValue={1} onSetRatingValue={x => x}/>
export const Rating2 = () => <Rating ratingValue={2} onSetRatingValue={x => x}/>
export const Rating3 = () => <Rating ratingValue={3} onSetRatingValue={x => x}/>
export const Rating4 = () => <Rating ratingValue={4} onSetRatingValue={x => x}/>
export const Rating5 = () => <Rating ratingValue={5} onSetRatingValue={x => x}/>
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating ratingValue={rating} onSetRatingValue={setRating}/>
}


const meta: Meta<typeof Rating> = {
    title: "Rating",
    component: Rating,
};

export default meta;
type Story = StoryObj<typeof Button>;


