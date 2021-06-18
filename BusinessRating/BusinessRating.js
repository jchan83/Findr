import React from 'react';
import './BusinessRating.css'
import Rating from 'react-rating';


export function BusinessRating(props) {
     return (
        <div className='rating'>
        <Rating className ='pl5'   
         initialRating={props.rating}
        />

        <p> {props.reviewCount} </p>
        </div>
    )
}