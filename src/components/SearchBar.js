import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
    return (
        <div className="searchbar-container">
            {/* <span className="searchbar-icon" role="img" aria-label="search">
                🔍
            </span> */}
            <input
                className="searchbar-input"
                placeholder="Search"
                type="text"
            />
            <br />
            <div className="searchbar-submit-prompt">
                Can't find what you're looking for? Submit it
            </div>
            <a href="submit">here</a>
        </div>
    );
};

export default SearchBar;
