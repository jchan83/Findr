import React from 'react'
import "./Hero.css"
import "../pictures/goldengatebridge.jpg"
import SearchBar from '../SearchBar/SearchBar'
import useReactRouter from 'use-react-router';


const Hero = () => {

    const {history} = useReactRouter();
    
         
        function search (term, location) {
          const urlEncodedTerm = encodeURI(term);
          const urlEncodedLocation = encodeURI(location);
          history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
        }

    return (

        <section id="hero">
            <div class ="hero-container">
                <div class ="hero-logo">
                    <h1 class = "font-weight-bold"> Tell Us Your Craving!</h1>
                </div>
                <h2 class ="font-weight-bold"> We Find Ways</h2>
                <SearchBar search={search}/>
            </div>
        </section>
    )
}





export default Hero