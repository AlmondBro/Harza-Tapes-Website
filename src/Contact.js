import React from 'react';

const Contact = (props) => {
    return (
        <section className="contact-container container">
            <form action="" method="post">
                <fieldset>
                    <legend>Contact Us</legend>
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
                            {/* { generateStateOptions() } */}
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
                        <button type="reset">Reset</button>
                    </p>
                </fieldset>
            </form>
        </section>
    );
};

export default Contact;