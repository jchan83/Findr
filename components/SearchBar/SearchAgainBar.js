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
          <div class="col center">
             <span class='font span pr1 pl2 pt2 background'
                >Search
             </span>
             <input class='form-control input pointer'  type='text' onChange={(e) => setTerm(e.target.value)}/>  

             <span class='ml5 font span pr1 pl1 pt2 background'
                 >Location
             </span>
             <input class= 'form-control input pointer' type='text' onChange={(e) => setLocation(e.target.value)}/>
             <button class = 'ml3 grow pointer findBtn font btn background btn-outline-warning ' type="submit"
                onClick={ Submit}> Find
             </button>     
           </div>               
      </form>
    )
}

export default SearchAgainBar;
