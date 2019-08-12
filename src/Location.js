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
                <div className="locationBox col-sm-5" id="locationBox-USA">
                    <h4>U.S.A. <span className="location-flag">🇺🇸</span></h4> 
                    <h5>Harza Tapes</h5>
                    <p>
                        <a 
                            target="_blank"
                            href="https://www.google.com/maps/place/Harza+Tapes/@33.966971,-118.0669307,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2d3b53a9cf309:0x3a23927fc824b33f!8m2!3d33.966971!4d-118.064742" className="locationLink">
                            <FontAwesome name='map' 
                                        className="quote-phone-icon" 
                            /> 
                            8237 Allport Ave <br/> Santa Fe Springs, CA 90670
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
                <div className="locationBox col-sm-5" id="locationBox-Colombia">
                    <h4>Colombia <span className="location-flag">🇨🇴</span></h4>
                    <h5>Cintandina</h5>
                    <p>
                        <a href="" className="locationLink">
                            <FontAwesome name='map' 
                                        className="quote-phone-icon" 
                            /> 
                            Cra. 2a. No. 37-50 <br/> Cali, Colombia
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
                        <a href="https://www.cintandina.com/en/index_en.html" target="_blank">
                            <FontAwesome name='globe' 
                                        className="quote-phone-icon" 
                            /> www.cintandina.com
                        </a>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="locationBox col-sm-5" id="locationBox-CostaRica">
                    <h4>Costa Rica <span className="location-flag">🇨🇷</span></h4>
                    <h5>Cintandina</h5>
                    {/* <p>La Uruca Frente a Mercedes Benz</p> */}
                    <p>
                        <a href="" className="locationLink">
                            <FontAwesome name='map' 
                                        className="quote-phone-icon" 
                            /> 
                            Ofibodegas JW #29 <br/> San Jose, Costa Rica 
                        </a>
                    </p>
                    <p>
                        <a href="tel:506-2248-0707">
                        <FontAwesome name='phone' 
                                        className="quote-phone-icon" 
                        />  (506) 2248-0707
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
                        <a href="https://www.cintandina.com/en/index_en.html" target="_blank">
                        <FontAwesome name='globe' 
                                        className="quote-phone-icon" 
                        /> 
                            www.cintandina.com
                        </a>
                    </p>
                </div>
                <div className="locationBox col-sm-5" id="locationBox-Ecuador">
                    <h4>Ecuador <span className="location-flag">🇪🇨</span></h4>
                    <h5>Cintandina</h5>
                    <p>
                        <a href="" className="locationLink">
                            <FontAwesome name='map' 
                                            className="quote-phone-icon" 
                            /> 
                            Galo Plaza Lasso &mdash; N62-65 y Nazareth <br/> Quito, Ecuador
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
                            <FontAwesome name='envelope' 
                                            className="quote-phone-icon" 
                            /> 
                            ecuador@cintandina.com
                        </a>
                    </p>
                    <p>
                        <a href="https://www.cintandina.com/en/index_en.html" target="_blank">
                            <FontAwesome name='globe' 
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