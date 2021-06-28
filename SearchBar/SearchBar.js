import React, { useState } from 'react';
import './SearchBar.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 


const SearchBar = (props) => {
    
    const [term, setTerm] = useState(props.term || '')
    const [location, setLocation] =useState(props.location || '')
  
    function Submit (e) {
        if (typeof props.search ==='function') {
            props.search(term,location);

        }
        e.preventDefault();
    };

    

    return(
        <form class="container-fluid " onSubmit={Submit}>
            
            <div class='row pl5 pr5'>
                <div className='form ma2 center pa1 br-3 shadow-5 text-truncate'>
                    <input className='f4 w-70 center' type='text' onChange={(e) => setTerm(e.target.value)}/>
                    <button className='font tc w-30  ph3 black bg-light-purple'
                     disabled={true} >Search </button>
                </div>  
            </div>

            <div className='row pl5 pr5 pt4'>
                <div className='form ma2 center pa1 br-3 shadow-5 text-truncate'>
                    <input className='f4 w-70 center' type='text' onChange={(e) => setLocation(e.target.value)}/>
                    <button className= 'font  tc w-30 ph3 buttonSize black bg-light-purple'
                     disabled={true} >Location </button>
                </div>  
            </div>
            
            <div class='row pr6 pl6 pt4'>
                <button className='font grow glow link black bg-light-purple br-pill text-truncate'
                onClick={ Submit}>Find 
                </button>
            </div>
        {/*{fix w jeb}*/}
        </form>
    )
}

export default SearchBar;






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
