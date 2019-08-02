import React from 'react';

const AboutUs = (props) => {
    return (
        <div className="aboutUs-container container">
            <section className="row">
                <h2 className="aboutUs-header">Harza Tapes &mdash; About Us</h2>
                <p> Harza Tapes is the result of a vision of one of 
                    South America’s most important tape manufacturers, 
                    Cintandina S.A., a Colombian company with over 50 
                    years of experience in the pressure sensitive tape 
                    industry. Recognized as leaders in the Colombian 
                    industrial market, Cintandina continues its 
                    international expansion. With the establishment of 
                    Harza Tapes in California, USA, the company brings 
                    excellence and value in printed tapes to North 
                    America.</p>
                <p>Cintandina is certified under ISO 9001 and its products 
                    qualify under a number of international standards 
                    including those of the USA. It employs state-of-the art 
                    processing equipment unexcelled by any tape manufacturer 
                    in the world. Technological innovation supported by a 
                    strong R & D group including technical service has 
                    enabled the company to be a leader in meeting the markets’ 
                    evolving needs and expectations and anticipating future 
                    requirements.
                </p>
            </section>
            <section className="visionMission-container row">
                <div className="aboutUs-subSection col-sm-6">
                    <h3>Mission</h3>
                    <p>
                        To work as partners with our clients by offering 
                        pressure sensitive adhesive tape products and 
                        related services which provide real value.
                    </p>
                </div>
                <div className="aboutUs-subSection col-sm-6">
                    <h3>Vision</h3>
                    <p>
                        To strive for the well being and quality of 
                        life for our people; to increase the value we 
                        add to our customers’ businesses; to be good 
                        stewards of the environment by using the latest 
                        technologies and materials to minimize environmental 
                        stress.
                    </p>
                </div>
            </section>
            <section className="aboutUs-bestChoice">
                <div className="row">
                    <div className="col-sm-12 aboutUs-bestChoice">
                        <h5>
                            The best choice in High Quality Printed 
                            Packaging Tapes
                        </h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 aboutUs-bestChoice">
                        <img src="./assets/img/best_choice.png" 
                            className="img-fluid"
                            alt="People Discussing on Table"
                        />
                    </div>
                </div>
            </section>
           
        </div>   
    );
};

export default AboutUs;