import React, { useState } from 'react';
import './SearchBar.css';
import {Link} from 'react-router-dom'
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
       
            <div className='flex-row-ns bg-black'>

                <div> 
                    <Link className =' ' to ='/'>
                    <button className='ma4 pointer font grow f4 ph4 pv2 dib black bg-light-purple backButton br-pill' > 
                    Back </button>
                    </Link> 
                </div>
                
                <form className ='flex' onSubmit={Submit}>

                    <div className= 'searchAgainBarform grow pointer center pa4 br3 shadow-5 '>
                        <button className='font w-30 f4 ph3 pv2 dib black bg-light-purple'
                        disabled={true} >Search </button>
                        <input className='f4 pa2 w-70 center pointer' type='text' onChange={(e) => setTerm(e.target.value)}/> 
                    </div>  
                
                    <div className= 'flex searchAgainBarform center grow pointer pa4 br3 shadow-5'>

                        <button className= ' font w-30 f4 ph3 pv2 dib black bg-light-purple '
                        disabled={true} >Location </button>

                        <input className= 'f4 pa2 w-70 center pointer' type='text' onChange={(e) => setLocation(e.target.value)}/>

                        <button className= 'font f4 ph3 pointer'
                        onClick={ Submit}> <img className = 'mw-100 searchButton' src={searchIcon}></img> </button> 

                    </div>    
                </form>
            </div>
            
        
        
    )
}

export default SearchAgainBar;
