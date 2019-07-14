import React from 'react';

//Import 3rd-party packages
import FontAwesome from 'react-fontawesome';

const Location = (props) => {
    return (
        <section className="location-container container">
            <h3>
                Our Offices
            </h3>
            <div className="row">
                <div className="locationBox col-sm-5">
                    <h4>U.S.A. 🇺🇸</h4> 
                    <h5>Harza Tapes</h5>
                    <p>
                        <a href="">
                            <FontAwesome name='map' 
                                        className="quote-phone-icon" 
                            /> 
                            8237 Allport Ave &mdash; Santa Fe Springs, CA 90670
                        </a>
                    </p>
                    <p>
                        <a href="tel:562-696-0282">
                            <FontAwesome name='phone' 
                                        className="quote-phone-icon" 
                            /> 
                            (562) 696-0282
                        </a>
                    </p>
                    <p><a href="mailto:sales@harzatapes.com"><FontAwesome name='envelope' 
                                        className="quote-phone-icon" 
                            />sales@harzatapes.com</a></p>
                    <p><a href="https://www.harzatapes.com"><FontAwesome name='globe' 
                                        className="quote-phone-icon" 
                            />www.harzatapes.com</a></p>
                </div>
                <div className="locationBox col-sm-5">
                    <h4>Colombia 🇨🇴</h4>
                    <h5>Cintandina</h5>
                    <p>
                        <a href="">
                            <FontAwesome name='map' 
                                        className="quote-phone-icon" 
                            /> 
                            Cra. 2a. No. 37-50 &mdash; Cali, Colombia
                        </a>
                    </p>
                    <p>
                        <a href="tel:572-443-0801">
                            <FontAwesome name='phone' 
                                        className="quote-phone-icon" 
                            /> (572) 443-0801
                        </a>
                    </p>
                    <p>
                        <a href="tel:572-443-0801-0104">
                            <FontAwesome name='fax' 
                                        className="quote-phone-icon" 
                            /> (572) 443-0801 ext. 0104
                        </a>
                    </p>
                    <p>
                        <a href="mailto:export@cintandina.com">
                            <FontAwesome name='envelope' 
                                        className="quote-phone-icon" 
                            />export@cintandina.com
                        </a>
                    </p>
                    <p>
                        <a href="https://www.cintandina.com">
                            <FontAwesome name='globe' 
                                        className="quote-phone-icon" 
                            /> www.cintandina.com
                        </a>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="locationBox col-sm-5">
                    <h4>Costa Rica 🇨🇷</h4>
                    <h5>Cintandina</h5>
                    {/* <p>La Uruca Frente a Mercedes Benz</p> */}
                    <p>
                        <a href="">
                            <FontAwesome name='map' 
                                        className="quote-phone-icon" 
                            /> 
                            Ofibodegas JW #29 &mdash; San Jose, Costa Rica 
                        </a>
                    </p>
                    <p>
                        <a href="tel:506-2293-2358">
                        <FontAwesome name='phone' 
                                        className="quote-phone-icon" 
                        />  (506) 2293-2358
                        </a>
                    </p>
                    <p>
                        <a href="mailto:costarica@cintandina.com">
                            <FontAwesome name='envelope' 
                                        className="quote-phone-icon" 
                            />     
                            costarica@cintandina.com
                        </a>
                    </p>
                    <p>
                        <a href="https://www.cintandina.com">
                        <FontAwesome name='globe' 
                                        className="quote-phone-icon" 
                        /> 
                            www.cintandina.com
                        </a>
                    </p>
                </div>
                <div className="locationBox col-sm-5">
                    <h4>Ecuador 🇪🇨</h4>
                    <h5>Cintandina</h5>
                    <p>
                        <a href="">
                            <FontAwesome name='map' 
                                            className="quote-phone-icon" 
                            /> 
                            Galo Plaza Lasso &mdash; N62-65 y Nazareth &mdash; San Jose, Costa Rica
                        </a>
                    </p>
                    <p>
                        <a href="tel:593-2-3464-005">
                            <FontAwesome name='phone' 
                                            className="quote-phone-icon" 
                            /> 
                            (593-2) 3464-005
                        </a>
                    </p>
                    <p>
                        <a href="tel:593-2-3464-311">
                            <FontAwesome name='phone' 
                                            className="quote-phone-icon" 
                            /> 
                            (593-2) 3464-311
                        </a>
                    </p>
                    <p>
                        <a href="mailto:costarica@cintandina.com">
                            <FontAwesome name='mail' 
                                            className="quote-phone-icon" 
                            /> 
                            costarica@cintandina.com
                        </a>
                    </p>
                    <p>
                        <a href="https://www.cintandina.com">
                            <FontAwesome name='map' 
                                            className="quote-phone-icon" 
                            /> 
                            www.cintandina.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Location;