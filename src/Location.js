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
                    <h4>U.S.A. <span className="location-flag" role="img" aria-label="usa flag emoji">🇺🇸</span></h4> 
                    <h5>Harza Tapes</h5>
                    <p>
                        <a 
                            target="_blank"
                            href="https://www.google.com/maps/place/Harza+Tapes/@33.966971,-118.0669307,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2d3b53a9cf309:0x3a23927fc824b33f!8m2!3d33.966971!4d-118.064742" className="locationLink" rel="noopener noreferrer">
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
                    <h4>Colombia <span className="location-flag" role="img" aria-label="colombia flag emoji">🇨🇴</span></h4>
                    <h5>Cintandina</h5>
                    <p>
                        <a href="https://www.google.com/maps/place/Cintandina/@3.4638006,-76.5141663,17.88z/data=!4m13!1m7!3m6!1s0x8e30a637dcadbb65:0xc3c20d01d9eb77b8!2sCra.+2+%2337-50,+Cali,+Valle+del+Cauca,+Colombia!3b1!8m2!3d3.463671!4d-76.5121491!3m4!1s0x8e30a637c52acdfb:0x5d3ec425454daa18!8m2!3d3.4637606!4d-76.5119377" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="locationLink"
                        >
                            <FontAwesome name='map' 
                                        className="quote-phone-icon" 
                                        role="img" aria-label="map icon"
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
                            />comercial@cintandina.com
                        </a>
                    </p>
                    <p>
                        <a href="https://www.cintandina.com/en/index_en.html" target="_blank" rel="noopener noreferrer">
                            <FontAwesome name='globe' 
                                        className="quote-phone-icon" 
                            /> www.cintandina.com
                        </a>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="locationBox col-sm-5" id="locationBox-CostaRica">
                    <h4>Costa Rica <span className="location-flag" role="img" aria-label="Costa Rica Flag">🇨🇷</span></h4>
                    <h5>Cintandina</h5>
                    {/* <p>La Uruca Frente a Mercedes Benz</p> */}
                    <p>
                        <a href="https://www.google.com/maps/place/Diagonal+29,+San+Jos%C3%A9,+Costa+Rica/@9.9482525,-84.125851,17z/data=!4m8!1m2!2m1!1sOfibodegas+JW+%2329+San+Jose,+Costa+Rica!3m4!1s0x8fa0fb679e4673b5:0xbc84bc13a54cf9d4!8m2!3d9.9482472!4d-84.1236623" 
                            className="locationLink"
                            target="_blank"
                            rel="noopener noreferrer">
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
                        <a href="https://www.cintandina.com/en/index_en.html" target="_blank" rel="noopener noreferrer">
                        <FontAwesome name='globe' 
                                        className="quote-phone-icon" 
                        /> 
                            www.cintandina.com
                        </a>
                    </p>
                </div>
                <div className="locationBox col-sm-5" id="locationBox-Ecuador">
                    <h4>Ecuador <span className="location-flag" role="img" aria-label="Colombia Flag">🇪🇨</span></h4>
                    <h5>Cintandina</h5>
                    <p>
                        <a href="https://www.google.com/maps/place/Coara/@-0.1245992,-78.483077,17z/data=!3m1!4b1!4m5!3m4!1s0x91d5856132c74529:0xde751f3c98410858!8m2!3d-0.1246046!4d-78.4808883" 
                            className="locationLink"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
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
                        <a href="https://www.cintandina.com/en/index_en.html" target="_blank" rel="noopener noreferrer">
                            <FontAwesome name='globe' 
                                            className="quote-phone-icon" 
                                            rel="noopener noreferrer"
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