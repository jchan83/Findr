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
       
            <div className='flex-row'>

                <form className ='flex' onSubmit={Submit}>

                    <div className= 'flex searchAgainBarform grow pointer pl5 center pa4 br3 shadow-5 '>
                        <span className='font tc w-20 f4 ph2 pv2 black bg-light-purple'
                         >Search</span>
                        <input className='f4 w-70 pointer' type='text' onChange={(e) => setTerm(e.target.value)}/> 
                    </div>  
                
                    <div className= 'flex searchAgainBarform center grow pointer pa4 br3 shadow-5'>

                        <span className= 'font w-20 tc f4 ph3 pv2 dib black bg-light-purple '
                         >Location </span>

                        <input className= 'f4 pa2 w-70 center pointer' type='text' onChange={(e) => setLocation(e.target.value)}/>

                        <button className= 'font f4 ph3 pointer'
                        onClick={ Submit}> <img className = 'mw-100 searchButton' src={searchIcon}></img> </button> 

                    </div>    
                </form>
            </div>
            
        
        
    )
}

export default SearchAgainBar;
