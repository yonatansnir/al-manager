import React from 'react';

const SearchBox = ({ searchBox }) => (
    <div id="searchBox">
        <input type="text" id="serachInput" onChange={searchBox} placeholder="חיפוש דייר..." />
        <i className="fas fa-search"></i>
    </div>
);

export default SearchBox;