import React from 'react';
import SearchResults from '../components/SearchResults/SearchResults'
import { useBusinessSearch } from '../hooks/useBusinessSearch';
import useReactRouter from 'use-react-router';
import SearchResultSummary from '../components/SearchResults/SearchResultSummary/SeachResultSummary';
import SearchAgainBar from '../components/SearchBar/SearchAgainBar';

export function Search() {
    const {location} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term =params.get('find_desc');
    const locationParam = params.get('find_loc');


    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term,locationParam);


    return (
        <div>   
            <div>
                <SearchAgainBar /> 
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