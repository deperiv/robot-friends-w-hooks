import React from "react";

const SearchBox = ({ searchField, searchChange})=> {
    return (
        <div className="pa2">
        <input 
            className="pa3 ba b--green lightest-blue"
            type='search' 
            placeholder="Search for some robots" 
            onChange = {searchChange}
            />
        </div>
    );
}

export default SearchBox;