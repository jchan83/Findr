import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    
    const [term, setTerm] = useState(props.term || '')
    const [location, setLocation] =useState(props.location || '')


    
    // function getLocation() {
    //     if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(getCoordinates);
    //     } else {
    //       alert ("Geolocation is not supported by this browser.");
    //     }
    //   }
       
    //   function getCoordinates(position) {
    //       setLatitude(position.coords.latitude);
    //       setLongitude(position.coords.longitude)
    //   }

      
    // //   getLocation = this.getLocation.bind(this);
    // //   getCoordinates = this.getCoordinates.bind(this);


    function Submit (e) {
        if (typeof props.search ==='function') {
            props.search(term,location);

        }
        e.preventDefault();
    };



    return(
        <form onSubmit={Submit}>
            <p className='f3 font'>
                {'This crystal ball will find what you need'}
            </p>
            
            <div className='center '>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={(e) => setTerm(e.target.value)}/>
                    <button className='font w-30 grow f4 link ph3 pv2 dib black bg-light-purple'
                    onClick={ Submit} disabled={true} >Search </button>
                </div>  
            </div>

            <div className="pa5">
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={(e) => setTerm(e.target.value)}/>
                    <button className= 'font w-30 grow f4 link ph3 pv2 dib black bg-light-purple'
                    onClick={ Submit} disabled={true} >Location </button>
                </div>  
            </div>
            
            <div className='center pa4 br3'>
                <button className='font w-30 grow f4 link ph3 pv2 dib black bg-light-purple'
                onClick={ Submit}>Search</button>
            </div>
                
        </form>
    )
}

export default SearchBar;


