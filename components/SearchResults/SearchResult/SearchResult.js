import React from 'react';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';
import './SearchResult.css';

export function SearchResult() {
    return (
        <div className ='search-result'>
            <img src ='https://via.placeholder.com/210' alt= 'business' className='business-image'/>
            <div className='business-info'>
                <h2 className="subtitle">Burger Place</h2>
                <BusinessRating/>
                <p> $$ <p>Burgers</p> <p>Fast Food </p> </p>
            </div>
            <div>
                <p> Address Data</p>
            </div>
        </div>

    )
}