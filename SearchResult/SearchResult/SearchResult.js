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
        <section id ="variety" class="variety pt-4">
            <div class = "container">
                <div class ="row">
                    <div class ="col">
                        <div class ="card">
                            <div class ="card-img center">
                                <img src ={b.image_url} alt= 'business'/> 
                            </div>

                            <div class="card-body">
                                <h2 class="font card-title"> {b.name} </h2>
                                <p class="card-text">
                                    <BusinessRating class= "center"  reviewCount ={b.review_count}  rating = {b.rating}/>
                                </p>

                                <div class="read-more"> {tags} <span class= 'font'> {b.price} </span>  <p> {b.phone}</p> 
                                               {address}
                                </div> 
                            </div>                             
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // {tags} <span class= 'font'> {b.price} </span>  <p> {b.phone}</p> 
        //                         {address}
       
    )
}


//  class="col-sm text-truncate g-4" className=' business-info'>  
                