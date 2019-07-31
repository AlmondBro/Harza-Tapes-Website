import React, { Component } from 'react';

//Import state abbreviations to generate in the form
import stateAbbreviations from "./stateAbbreviations.js";

//Import 3rd-party packages
import FontAwesome from 'react-fontawesome';
class Contact extends Component  {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    generateStateOptions = () => {
       return stateAbbreviations.map(
            (stateObject) => {
                return <option value={stateObject.abbreviation}> {stateObject.abbreviation} -- {stateObject.name} </option> 
            }
        );
    }; //end generateStateOptions

    render = () => {
        return (
            <section className="contact-container container">
                <form action="" method="post">
                    <fieldset>
                        <legend className="form-legend">Contact Us</legend>
                        <div className="qr-code-row row">
                            <div className="col-md-6">
                                <section>
                                    <h5>By e-mail:</h5>
                                    <p className="extraContactInfo">
                                        <FontAwesome name='envelope' 
                                                    className="quote-phone-icon" 
                                        />
                                        <a href="mailto:sales@harzatapes.com">
                                            sales@harzatapes.com
                                        </a>
                                    </p>
    
                                    <p className="extraContactInfo">
                                        <FontAwesome name='map' 
                                            className="quote-phone-icon" 
                                        /> 
                                        <a 
                                            target="_blank"
                                            href="https://www.google.com/maps/place/Harza+Tapes/@33.966971,-118.0669307,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2d3b53a9cf309:0x3a23927fc824b33f!8m2!3d33.966971!4d-118.064742">
                                            8237 Allport Ave
                                            Santa Fe Springs,
                                            CA 90670
                                        </a>
                                    </p>
                                    <p className="extraContactInfo">
                                        <a href="tel:(562) 696-0282">  
                                            <FontAwesome name='phone' 
                                                         className="quote-phone-icon" 
                                            /> (562) 696-0282 
                                        </a>
                                    </p>
                                    <p className="extraContactInfo">
                                        <a href="fax:(509) 471-0282">
                                            <FontAwesome name='fax' 
                                                         className="quote-phone-icon" 
                                            /> (509) 471-0282 
                                        </a>
                                    </p>
                                </section>
                            </div>
                            <div className="col-md-3">
                                <figure className="qrCode-figure">
                                    <img src="./assets/img/contactUs-QRcode.jpg" className="img-fluid" alt="Harza Tapes QR Code" />
                                    <figcaption>Scan and save our <br/> info on your cellphone</figcaption>
                                </figure>
                            </div>
                            <div className="col-md-3">
                                <img src="./assets/img/deal.png" className="img-fluid" />
                            </div>
                        </div>
                        <div className="contactContainerForm-row row">
                            <div className="col-md-6">
                                <p className="form-field">
                                    <label className="form-field-label">Your name: 
                                        <abbr title="required" className="form-asterisk">*</abbr>
                                    </label>
                                    <input className="form-field-input" type="text" />
                                </p>
                                <p className="form-field">
                                    <label className="form-field-label">
                                        Company Name:
                                    </label>
                                    <input className="form-field-input" type="text" />
                                </p>
                                <p className="form-field">
                                    <label className="form-field-label">E-mail: 
                                        <abbr title="required" className="form-asterisk">*</abbr>
                                    </label>
                                    <input className="form-field-input" type="email" />
                                </p>
                                <p className="form-field">
                                    <label className="form-field-label">Subject: 
                                        <abbr title="required" className="form-asterisk">*</abbr>
                                    </label>
                                    <input className="form-field-input" type="text" />
                                </p>
                                <p className="form-field">
                                    <label className="form-field-label">Message: 
                                        <abbr title="required" className="form-asterisk">*</abbr>
                                    </label>
                                    <textarea rows="5" cols="45"></textarea>
                                </p>
                            </div>
                            <div className="col-md-6">
                                <p className="form-field">
                                    <p className="form-field-message">
                                        Include only if...you wish to receive
                                        by<br/> mail one FREE roll of our Printed 
                                        Sealing <br/> Tape and one 2019 Calendar
                                        Magnet <br/>(while supplies last)
                                    </p>
                                    <label className="form-field-label">
                                        Address: 
                                    </label>
                                    <input className="form-field-input" type="text" />                        
                                </p>
                                <p className="form-field">
                                    <label className="form-field-label">
                                        City: 
                                    </label>
                                    <input className="form-field-input" type="text" />                        
                                </p>
                                <p className="form-field">
                                    <label className="form-field-label">
                                        State: 
                                    </label>
                                    <select>
                                        { this.generateStateOptions() }
                                    </select>                       
                                </p>
                                <p className="form-field">
                                    <label className="form-field-label">
                                        ZipCode: 
                                    </label>
                                    <input className="form-field-input" type="number" />                        
                                </p>
                                <p className="form-field">
                                    <button type="submit">Send</button>
                                    <button type="reset" id="reset-button">Reset</button>
                                </p>
                            </div>
                        </div>
 
                    </fieldset>
                </form>
            </section>
        );
    }
};

export default Contact;