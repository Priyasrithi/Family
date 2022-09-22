import React from 'react';

import './Searchbox.style.css';

export const SearchBox =({ placeholder, handlesearch }) => (
    <input
        className = 'search'
        type='search' 
        placeholder={placeholder}
        onChange={handlesearch}
        ></input>
);