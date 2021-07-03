import React from 'react';
import SearchResults from '../components/SearchResults/SearchResults'
import { useBusinessSearch } from '../hooks/useBusinessSearch';
import useReactRouter from 'use-react-router';
import SearchResultSummary from '../components/SearchResults/SearchResultSummary/SeachResultSummary';
import SearchAgainBar from '../components/SearchBar/SearchAgainBar';
import {Link} from 'react-router-dom'

export function Search(props) {
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
        <div class="bg- container-fluid pa1">   
                
                <div class='bg-black'>
                    <div class = "row " >
                        <Link to ='/'>
                            <button className='mt4 mb4 background pointer ma3 font grow f4 ph4 pv2  br-pill' > 
                            Home </button>
                        </Link> 
                    </div>   

                    <div> 
                        <SearchAgainBar search ={search}/>
                    </div>
                </div>
                
                <div className = 'pa3'>
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