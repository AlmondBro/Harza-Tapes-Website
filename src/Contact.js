import React, { Component } from 'react';

//Import SMTP.js code from a file
import SmtpService from './SmtpService.js'; 

//Import state abbreviations to generate in the form
import stateAbbreviations from "./stateAbbreviations.js";

//Import 3rd-party packages
import FontAwesome from 'react-fontawesome';

//TODO: ADD TELEPHONE FIELD
//TODO: REQUIRED LABEL

class Contact extends Component  {
    constructor(props) {
        super(props);
    
        this.state = {
            clientName: "",
            companyName: "",
            email: "",
            subject: "",
            phone: "",
            message: "",
            address: "",
            city: "",
            stateUSA: "",
            zipcode: "",
            renderMessage: false,
            firstTimeRender: null,
            emailSentSuccess: false
        };
    }

    componentDidMount = () => {
        this.setState({firstTimeRender: true});
    };

    generateStateOptions = () => {
       return stateAbbreviations.map(
            (stateObject) => {
                return <option value={stateObject.abbreviation}
       key={stateObject.abbreviation}> {stateObject.name} ( {stateObject.abbreviation} ) </option> 
            }
        );
    }; //end generateStateOptions

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name] : value
        });
    }; //end handleInputChange

    handleChange = (event) => {
        this.setState({stateUSA: event.target.value});
      }

    sendEmail = (event) => {
        console.log("Sending e-mail...");        
        let to = "juandavid@jdlondono.com";
        let from = this.state.email;
        let subject = `New Client Message from HarzaTapes.com: ${this.state.subject}`;
        let message = `Name of Sender:\t ${this.state.clientName} ${"\n"}
                       Address:\t ${this.state.address} \n${"\n"}
                       City: \t ${this.state.city} \n${"\n"}
                       State: \t ${this.state.stateUSA} \n${"\n"}
                       Company:\t ${this.state.companyName} \n${"\n"}
                       E-mail:\t ${from} \n${"\n"}
                       Phone:\t ${this.state.phone} \n
                       Message: \t ${this.state.message}
                       `  
        let body = this.state.message;

        let sendEmail = SmtpService();
        sendEmail.send({
            SecureToken : process.env.REACT_APP_SMTPJS_CRED,
            To : to,
            From : from,
            Subject : subject,
            Body : message
        }).then(
          message => console.log(message)
        );
        console.log("Email sent");
        this.setState({
            emailSentSuccess: true 
        });
    };

    formValidate = (event) => {
        event.preventDefault();
        this.setState({ firstTimeRender : false });
        if (this.state.clientName && this.state.email &&
            this.state.subject && this.state.subject
            ) {
                this.setState({
                    renderMessage : false
                });
                console.log("True to sendEmail");
                this.sendEmail(event);
        } else {
            this.setState({
                renderMessage : true
            });
            console.log("Could not validate");
        }
    }; //end formValidate()

    resetForm = () => {
        this.setState({
            clientName: "",
            companyName: "",
            email: "",
            subject: "",
            phone: "",
            message: "",
            address: "",
            city: "",
            stateUSA: "",
            zipcode: "",
            emailSent: false,
            firstTimeRender: true
        });
    };

    render = () => {
        return (
            <section className="contact-container container">
                <form onSubmit={(e) => this.formValidate(e) } method="POST" >
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
                                <img src="./assets/img/deal.png" alt="Deal" id="deal-image" className="img-fluid" />
                            </div>
                        </div>
                        <div className="contactContainerForm-row row">
                            <div className="col-md-6">
                                <p id="requiredText">
                                    Required<abbr title="required" className="form-asterisk">*</abbr>
                                </p>

                                <p className="form-field">
                                    <label className="form-field-label">Your name: 
                                        <abbr title="required" className="form-asterisk">*</abbr>
                                    </label>
                                    <input className="form-field-input" 
                                           type="text" 
                                           id="clientName"
                                           name="clientName"
                                           onChange={this.handleInputChange}
                                           value={this.state.clientName}
                                    />
                                    <div className="form-errorMessage">{ (this.state.firstTimeRender === false) ? 
                                                                           ( ( this.state.clientName && !this.state.renderMessage ) ? 
                                                                                " " : "Please input your name"
                                                                           ) : "" }
                                    </div>
                                </p>
                                <p className="form-field">
                                    <label className="form-field-label">
                                        Company Name:
                                    </label>
                                    <input className="form-field-input" 
                                           type="text" 
                                           id="companyName"
                                           name="companyName"
                                           onChange={this.handleInputChange}
                                           value={this.state.companyName}
                                    />
                                </p>
                                <p className="form-field">
                                    <label className="form-field-label">Phone Number: 
                                        <abbr title="required" className="form-asterisk">*</abbr>
                                    </label>
                                    <input className="form-field-input" 
                                           type="number" 
                                           id="phone"
                                           name="phone"
                                           onChange={this.handleInputChange}
                                           value={this.state.phone}
                                    />
                                    <div className="form-errorMessage">{ (this.state.firstTimeRender === false) ? 
                                                                           ( ( this.state.phone && !this.state.renderMessage ) ? 
                                                                                " " : "Please input your phone number."
                                                                           ) : "" }
                                    </div>
                                </p>
                                <p className="form-field">
                                    <label className="form-field-label">E-mail: 
                                        <abbr title="required" className="form-asterisk">*</abbr>
                                    </label>
                                    <input className="form-field-input" 
                                           type="email" 
                                           id="email"
                                           name="email"
                                           onChange={this.handleInputChange}
                                           value={this.state.email}
                                    />
                                    <div className="form-errorMessage">{ (this.state.firstTimeRender === false) ? 
                                                                           ( ( this.state.email && !this.state.renderMessage ) ? 
                                                                                " " : "Please input your message"
                                                                           ) : "" }
                                    </div>
                                </p>
                                <p className="form-field">
                                    <label className="form-field-label">Subject: 
                                        <abbr title="required" className="form-asterisk">*</abbr>
                                    </label>
                                    <input className="form-field-input" 
                                           type="text" 
                                           id="subject"
                                           name="subject"
                                           onChange={this.handleInputChange}
                                           value={this.state.subject}
                                    />
                                      <div className="form-errorMessage">{ (this.state.firstTimeRender === false) ? 
                                                                           ( ( this.state.subject && !this.state.renderMessage ) ? 
                                                                                " " : "Please input your subject"
                                                                           ) : "" }
                                    </div>
                                </p>
                                <p className="form-field">
                                    <label className="form-field-label">Message: 
                                        <abbr title="required" className="form-asterisk">*</abbr>
                                    </label>
                                    <textarea rows="5" cols="45"
                                                id="message"
                                                name="message"
                                                onChange={this.handleInputChange}
                                                value={this.state.message}
                                    />
                                   <div className="form-errorMessage">{ (this.state.firstTimeRender === false) ? 
                                                                           ( ( this.state.message && !this.state.renderMessage ) ? 
                                                                                " " : "Please input your name"
                                                                           ) : "" }
                                    </div>
                                </p>
                            </div>
                            <div className="col-md-6">
                                <div className="form-field">
                                    <p className="form-field-message">
                                        Include only if...you wish to receive
                                        by<br/> mail one FREE roll of our Printed 
                                        Sealing <br/> Tape and one 2019 Calendar
                                        Magnet <br/>(while supplies last)
                                    </p>
                                    <label className="form-field-label">
                                        Address: 
                                    </label>
                                    <input className="form-field-input" 
                                           type="text" 
                                           id="address"
                                           name="address"
                                           value={this.state.address}
                                           onChange={this.handleInputChange}
                                    />                        
                                </div>
                                <p className="form-field">
                                    <label className="form-field-label">
                                        City: 
                                    </label>
                                    <input className="form-field-input" 
                                           type="text" 
                                           id="city"
                                           name="city"
                                           value={this.state.city}
                                           onChange={this.handleInputChange}
                                    />                        
                                </p>
                                <p className="form-field">
                                    <label className="form-field-label">
                                        State: 
                                    </label>
                                    <select value={this.state.stateUSA}
                                            onChange={this.handleChange}
                                    > 
                                        { this.generateStateOptions() }
                                    </select>                       
                                </p>
                                <p className="form-field">
                                    <label className="form-field-label">
                                        ZipCode: 
                                    </label>
                                    <input  className="form-field-input" 
                                            type="number" 
                                            id="zipcode"
                                            name="zipcode"
                                            value={this.state.zipcode}
                                            onChange={this.handleInputChange}/>                        
                                </p>
                                <p className="form-field">
                                    <button type="submit">Send</button>
                                    <button type="reset" id="reset-button" onClick={this.resetForm}>Reset</button>
                                </p>
                                <div>
                                    <p id={ !this.state.firstTimeRender ? 
                                            (this.state.emailSentSuccess && !this.state.firstTimeRender 
                                                ? "form-successMessage" 
                                                            : "form-errorMessage") 
                                            : ""}
                                    > { !this.state.firstTimeRender ? 
                                            (this.state.emailSentSuccess && !this.state.firstTimeRender 
                                                ? "E-mail sent successfuly \&#10004;" : "Sending e-mail failed \&#215;" ) 
                                        : ""}
                                    </p>
                                </div>
                            </div>
                        </div>
 
                    </fieldset>
                </form>
            </section>
        );
    }
};

export default Contact;