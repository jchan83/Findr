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

      <form class= "pb-5"  id="form" onSubmit={Submit}>
          <div class="col center ">
           
             <input class='form-control input pointer mr4' placeholder="Search"  type='text' onChange={(e) => setTerm(e.target.value)}/>  

            
             <input class= 'form-control input pointer ' placeholder="Location" type='text' onChange={(e) => setLocation(e.target.value)}/>

             <button class = 'grow pointer findBtn font btn background btn-outline-warning ' type="submit"
                onClick={ Submit}> Find
            </button>  
           </div>   
           
      </form>
    )
}

export default SearchAgainBar;
