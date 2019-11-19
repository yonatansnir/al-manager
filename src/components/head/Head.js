import React from 'react';
import Cards from './cards/Cards';
import SearchBox from './search-box/SearchBox';
import Header from './header/Header';

const Head = ( {searchBox} ) => {
    return(
    <div id="head">
        <Header />
        <Cards />
        <SearchBox searchBox={searchBox} />
    </div>
    )
}

export default Head;