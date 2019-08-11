import React from 'react';

//Import 3rd-party packages
import FontAwesome from 'react-fontawesome';
import { NavLink as Link } from 'react-router-dom';


const Header = (props) => {
    return (
        <section className="header-section">
            <header className="header">
                <div className ="headerImage-quote-container">
                    <div className="header-logo-container">
                        <Link to="/home">
                            <img className="animated bounceInDown header-image"
                                    src="/assets/img/harza-tapes-logo.svg"
                                    alt="Harza Tapes" />
                        </Link>
                        <a href="https://www.cintandina.com/en/index_en.html" target="_blank">
                            <img className="animated bounceInDown header-image"
                                    id="second-logo"
                                    src="/assets/img/cintandina-logo.svg"
                                    alt="Cintandina" />
                        </a>
                    </div>
                    <p className="animated fadeIn header-slogan">Your best choice in Printed Packaging Tapes</p>
                </div>
        
                <div className="animated bounceInRight needAQuote-box justify-to-end">
                    <h4 className="quoteBox-header">Need a quote?</h4>
                    <p>
                        <a  href="tel:1-562-696-0282" 
                            className="quoteBox-phoneNumber">
                            <FontAwesome name='phone-square' 
                                        className="quote-phone-icon" 
                            />(562) 696-0282
                        </a>
                        <a href="mailto:sales@harzatapes.com"
                            className="quoteBox-mailIcon">
                            <FontAwesome name='envelope' 
                                        className="quote-mail-icon" 
                            />sales@harzatapes.com
                        </a>
                    </p>
                </div>
            </header>
        </section>
    )
}; //end Header function

export default Header;