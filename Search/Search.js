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


    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term,locationParam);

    const {history} = useReactRouter();
    
         
    function search (term, location) {
        console.log("this is the search")
      const urlEncodedTerm = encodeURI(term);
      const urlEncodedLocation = encodeURI(location);
      history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
      window.location.reload()
    }

    
   


    return (
        <div>   
            <div>   
                <div className='bg-black'>
                    <Link className =' ' to ='/'>
                        <button className='ma4 pointer font grow f4 ph4 pv2 bg-light-purple br-pill' > 
                        Back </button>
                    </Link> 
                <SearchAgainBar search ={search}/>
                </div>
                <div className = 'pa3'>
                    <h3 className =' center white font'> All Results: </h3>
                    <SearchResultSummary 
                        amountResults={amountResults}
                        shownResults={businesses ? businesses.length : 0}/>
                </div>
            </div>
            <SearchResults businesses={businesses}/>
        </div>
    )
}