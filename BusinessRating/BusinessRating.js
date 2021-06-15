import React from 'react';
import './BusinessRating.css'
import Rating from 'react-rating';


export function BusinessRating() {
    return (
        <div className='rating'>
        <Rating className ='pl5'   
         initialRating={3}
        />

        <p> 100 Reviews </p>
        </div>
    )
}