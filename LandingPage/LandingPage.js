import React from 'react';
import './../../App.css';
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import { SearchResults, } from '../SearchResults/SearchResults'
import useReactRouter from 'use-react-router';

const LandingPage = () => {
        
        const {history} = useReactRouter();
    
         
        function search (term, location) {
          const urlEncodedTerm = encodeURI(term);
          const urlEncodedLocation = encodeURI(location);
          history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
        }

    return (
        <div className="App">,
        <Navigation/>
            <Logo/>
            <SearchBar search ={search} />
            
        </div>
    );
}


export default LandingPage
