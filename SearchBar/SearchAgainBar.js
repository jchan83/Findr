import React, { useState } from 'react';
import './SearchBar.css';
import searchIcon from './search-icon.jpg'

const SearchAgainBar = (props) => {
    
    
    const [term, setTerm] = useState(props.term || '')
    const [location, setLocation] =useState(props.location || '')

  
    function Submit (e) {
        if (typeof props.search ==='function') {
            props.search(term,location);

        }
        e.preventDefault();
    };


    
    
    return(

                <form class="flex pb-5"  onSubmit={Submit}>

                    <div class="col center pointer "   >
                        <span class='border border-3 border-warning font pr1 pl2 pt2 black gold'
                         >Search
                          </span>
                        <input class='border border-3 border-warning form-control pointer w-25'  type='text' onChange={(e) => setTerm(e.target.value)}/>  
                        <span class='border border-3 border-warning font pr1 pl1 pt2 black gold '
                         >Location
                        </span>
                        <input class= 'border border-3 border-warning form-control pointer w-25' type='text' onChange={(e) => setLocation(e.target.value)}/>
                        <button class = 'col-auto grow pointer font btn gold btn-outline-warning ' type="submit"
                            onClick={ Submit}> Find
                        </button>     
                    </div>  
                
                </form>

    )
}

export default SearchAgainBar;
