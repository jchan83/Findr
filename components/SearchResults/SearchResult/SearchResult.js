import React, {useState} from 'react';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';
import './SearchResult.css';

export function SearchResult(props) {

    const [show, setShow] = useState(false)

    const b = props.business

    if (!b) {
        return (<div/>);
    }


    const tags = b.categories.map(categories => ( <span className='font' key={b.id + b.categories.title}>{categories.title} </span>));
    const address = b.location.display_address.map(address => ( <span className = 'font' key={b.id + address}>{address} </span>));


    const showDiv = () => {
        return (
            <div class="read-more text-center pb4"> {tags} <span class= 'font'> {b.price} </span>  <p> {b.phone}</p> 
            {address}
           </div> 
        )
    }

    
    console.log(show)

    return (
        <section id ="variety" class="variety pt-4">
            <div class = "container ">
                <div class ="row ">
                    <div class ="col ">
                        <div class ="card  ">
                            <div class ="card-img center">
                                <img src ={b.image_url} alt= 'business'/> 
                            </div>

                            <div class= "text textFlex card-body ">
                                <h2 class="font card-title"> {b.name} </h2>
                                <p class="card-text ">
                                    <BusinessRating class= "center" reviewCount ={b.review_count} rating = {b.rating}/>
                                </p>

                                {(show)?showDiv():""} 
                                  
                                <button class="read-more-button center " onClick={()=>{setShow((show)?false:true)}}>
                                <i class="fas fa-arrow-circle-right"> Read {(show)?"less":"more"} </i>
                                </button>  
                            </div>  



                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

