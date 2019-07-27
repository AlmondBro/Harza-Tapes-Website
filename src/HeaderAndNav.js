import React from 'react';

//Import components
import Header from "./Header.js";
import Navigation from "./Navigation.js";

const HeaderAndNav = (props) => {
    return (
        <header className="headerAndNav">
            <div className="container-fluid no-padding">
                <Header />
            </div>
            <div className="container-fluid no-padding">
                <Navigation className="navigation"/>
            </div>
        </header>
    ); //end return;
}; //end HeaderAndNav

export default HeaderAndNav;