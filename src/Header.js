import React from 'react';

//Import 3rd-party packages
import FontAwesome from 'react-fontawesome';

const Header = (props) => {
    return (
        <section className="header-section">
            <header className="header">
                <div className ="headerImage-quote-container">
                    <img className="header-image" src="./assets/img/harza-tapes-logo.svg" alt="Harza Tapes" />
                    <p className="header-slogan">Your best choice in Printed Packaging Tapes</p>
                </div>
        
                <div className="needAQuote-box justify-to-end">
                    <h4 className="quoteBox-header">Need a quote?</h4>
                    <p>Call: 
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