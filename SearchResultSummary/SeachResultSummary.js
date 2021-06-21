import React from 'react'


export function SearchResultsSummary(props) {
    let resultStats = null;
    if (props.amountResults && props.shownResults) {
        resultStats = <p className ='flex center white font i'>Showing 1-{props.shownResults} out of {props.amountResults} results</p>
    }
    // else {
    //     resultStats = <p className ='white font'> sike nigga you thought  </p>
    // }
    return (
        <div>
            <div className={['search-summary']}>
                <h1 className='subtitle'><strong>{props.term}</strong> {props.location}</h1>
                {resultStats}
            </div>
        </div>)

    }
    



    export default SearchResultsSummary