import React from 'react';
import './../../App.css';
import Navigation from '../Navigation/Navigation'
import SearchBar from '../SearchBar/SearchBar';
import useReactRouter from 'use-react-router';
import '../SearchBar/SearchBar.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Hero from '../Hero/Hero'

const LandingPage = () => {
        
        const {history} = useReactRouter();
    
         
        function search (term, location) {
          const urlEncodedTerm = encodeURI(term);
          const urlEncodedLocation = encodeURI(location);
          history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
        }

    return (
        <div class="App">,
        <Navigation/>
        <Hero/>
        <SearchBar search ={search} /> 
        </div>
    );
}


export default LandingPage


// <Logo/>