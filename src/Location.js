import React from 'react';

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
                    <p>8237 Allport Ave</p>
                    <p>Santa Fe Springs, CA 90670</p>
                    <p><a href="tel:562-696-0282">Tel: (562) 696-0282</a></p>
                    <p><a href="mailto:sales@harzatapes.com">sales@harzatapes.com</a></p>
                    <p><a href="https://www.harzatapes.com">www.harzatapes.com</a></p>
                </div>
                <div className="locationBox col-sm-5">
                    <h4>Colombia 🇨🇴</h4>
                    <h5>Cintandina</h5>
                    <p>Cra. 2a. No. 37-50</p>
                    <p>Cali, Colombia</p>
                    <p><a href="tel:572-443-0801">Tel: (572) 443-0801</a></p>
                    <p><a href="tel:572-443-0801-0104">Tel: (572) 443-0801 ext. 0104</a></p>
                    <p><a href="mailto:export@cintandina.com">export@cintandina.com</a></p>
                    <p><a href="https://www.cintandina.com">www.cintandina.com</a></p>
                </div>
            </div>
            <div className="row">
                <div className="locationBox col-sm-5">
                    <h4>Costa Rica 🇨🇷</h4>
                    <h5>Cintandina</h5>
                    <p>La Uruca Frente a Mercedes Benz</p>
                    <p>Ofibodegas JW #29</p>
                    <p>San Jose, Costa Rica</p>
                    <p><a href="tel:506-2293-2358">Tel: (506) 2293-2358</a></p>
                    <p><a href="mailto:costarica@cintandina.com">costarica@cintandina.com</a></p>
                    <p><a href="https://www.cintandina.com">www.cintandina.com</a></p>
                </div>
                <div className="locationBox col-sm-5">
                    <h4>Ecuador 🇪🇨</h4>
                    <h5>Cintandina</h5>
                    <p>Galo Plaza Lasso</p>
                    <p>N62-65 y Nazareth</p>
                    <p>San Jose, Costa Rica</p>
                    <p><a href="tel:593-2-3464-005">Tel: (593-2) 3464-005</a></p>
                    <p><a href="tel:593-2-3464-311">Tel: (593-2) 3464-311</a></p>
                    <p><a href="mailto:costarica@cintandina.com">costarica@cintandina.com</a></p>
                    <p><a href="https://www.cintandina.com">www.cintandina.com</a></p>
                </div>
            </div>
        </section>
    );
};

export default Location;