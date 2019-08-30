import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <input
        onChange={handleChange}
        className="search"
        type="search"
        placeholder={placeholder} />
)