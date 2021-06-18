import React from 'react';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';
import './SearchResult.css';

export function SearchResult(props) {
    const b = props.business
    if (!b) {
        return (<div/>);
    }

    return (
        <div className ='search-result'>
            <img src ={b.image_url} alt= 'business' className='business-image'/>
            <div className='business-info'>
                <h2 className="subtitle">{b.name}</h2>
                <BusinessRating reviewCount ={b.review_count} rating = {b.rating} />
                <p> $$ <p>Burgers</p> <p>Fast Food </p> </p>
            </div>
            <div>
                <p> Address Data</p>
            </div>
        </div>
    )
}