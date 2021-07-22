import React from 'react';
import SearchResults from '../components/SearchResults/SearchResults'
import { useBusinessSearch } from '../hooks/useBusinessSearch';
import useReactRouter from 'use-react-router';
import SearchResultSummary from '../components/SearchResults/SearchResultSummary/SeachResultSummary';
import SearchAgainBar from '../components/SearchBar/SearchAgainBar';
import './Search.css'

export function Search() {

    const {location} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term =params.get('find_desc');
    const locationParam = params.get('find_loc');


    const [businesses, amountResults] = useBusinessSearch(term,locationParam);

    const {history} = useReactRouter();
    
         
    function search (term, location) {
      const urlEncodedTerm = encodeURI(term);
      const urlEncodedLocation = encodeURI(location);
      history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
      window.location.reload()
    }

    
   


    return (
        <div class="bg- container-fluid pa1 pr0 pl0">
                <div class='bg-black'>
                    <div class = "row pl3 pb2  " >
                        <li class='flex'>
                            <a href="/" class="font nav-link"> Findr </a>
                        </li> 
                    </div>   

                    <div> 
                        <SearchAgainBar search ={search}/>
                    </div>
                </div>
                
                <div className = 'pt3 '>
                    <h3 className =' center white font'> All Results: </h3>
                    <SearchResultSummary class ='col-m'
                        amountResults={amountResults}
                        shownResults={businesses ? businesses.length : 0}/>
                </div>

                <div > 
                    <SearchResults businesses={businesses}/>
                </div>
        </div>
    )
}