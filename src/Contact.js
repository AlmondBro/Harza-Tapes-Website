import React, { Component } from 'react';

//Import state abbreviations to generate in the form
import stateAbbreviations from "./stateAbbreviations.js";
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