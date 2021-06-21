import React from 'react';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';
import './SearchResult.css';

export function SearchResult(props) {
    const b = props.business
    if (!b) {
        return (<div/>);
    }


    const tags = b.categories.map(categories => ( <span className='font' key={b.id + b.categories.title}>{categories.title} </span>));
    const address = b.location.display_address.map(address => ( <span className = 'font' key={b.id + address}>{address} </span>));

    return (
        <div className ='search-result shadow-5 grow'>
            <img src ={b.image_url} alt= 'business' className='business-image'/>
            <div className='fw6 business-info'>
                <h2 className="subtitle font">{b.name}</h2>
                <BusinessRating className="subtitle" reviewCount ={b.review_count}  rating = {b.rating}/>
                 {tags} <span className= 'pl2 font'> {b.price} </span>  <p> {b.phone}</p> {address}
            </div>
        </div>
    )
}