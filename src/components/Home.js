import React from "react";
import "./Home.css";
import SearchBar from "./SearchBar";

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-title-container">
                <span className="light-bulb-emoji" role="img">
                    💡
                </span>
                <div className="home-title-left">soluti</div>
                <div className="home-title-right">n-index</div>
            </div>
            <SearchBar />
        </div>
    );
};

export default Home;
