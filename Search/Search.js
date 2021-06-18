import React from 'react';
import SearchResults from '../components/SearchResults/SearchResults'
import {Link} from 'react-router-dom'
import { useBusinessSearch } from '../hooks/useBusinessSearch';
import useReactRouter from 'use-react-router';

export function Search() {
    const {location} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term =params.get('find_desc');
    const locationParam = params.get('find_loc');


    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term,locationParam);


    return (
        <div>
        <div>
            <Link to ='/'><h1>Click me</h1> </Link>
        </div>
            <SearchResults businesses={businesses}/>
        </div>
    )
}