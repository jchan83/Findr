import React from 'react';
import './BusinessRating.css'
import Rating from 'react-rating';


export function BusinessRating(props) {
     return (
        <div className='rating'>
            <Rating className ='pb2'   
                emptySymbol={<img src="assets/images/star-empty.png" className="icon" />}
                fullSymbol={<img src="assets/images/star-full.png" className="icon" />} //ask jeb tom
                initialRating={props.rating}
            />
            <p> {props.reviewCount}</p>
            
        </div>
    )
}