import React from 'react';

//Import Link from React Router
import { NavLink as Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const Footer = (props) => {
    return (
        <footer className="container-fluid no-padding">
            <section id="footer-nav" className="flex-center-row row">
                <div className="col-sm-2">
                    <Link activeClassName="navLink-current" to={"/home" || "/" }>Home</Link> 
                </div>
                <div className="col-sm-2">
                    <Link activeClassName="navLink-current" to="/about-us">About Us</Link> 
                </div>
                <div className="col-sm-2">
                    <Link activeClassName="navLink-current" to="/products">Products</Link>    
                </div>
                <div className="col-sm-2">
                    <Link activeClassName="navLink-current" to="/location">Location</Link> 
                </div>
                <div className="col-sm-2">
                    <Link activeClassName="navLink-current" to="/contact-us">Contact Us</Link>
                </div>
            </section>
            {/* <section id="footer-nav-misc" className="row">
                <div className="col-sm-6">
                    <FontAwesome name="sitemap" 
                                className="footer-contact-icon"
                    />
                    <a href="#">Site Map</a>
                </div>
                <div className="col-sm-6">
                    <FontAwesome name="bookmark" 
                                className="footer-contact-icon"
                    />
                    <a href="#">Bookmark Our Site</a>
                </div>
            </section> */}
            <section id="contactSession" className="row">
                <div className="col-sm-6">
                    <p className="footer-contact">
                        <FontAwesome name="map-marker" 
                                    className="footer-contact-icon"
                        />
                        <a  
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.google.com/maps/place/Harza+Tapes/@33.966971,-118.0669307,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2d3b53a9cf309:0x3a23927fc824b33f!8m2!3d33.966971!4d-118.064742"
                        >
                            8237 Allport Ave, Santa Fe Springs, CA 90670
                        </a>
                    </p>
                </div>
                <div className="col-sm-3">
                <p className="footer-contact"> 
                    <FontAwesome name="phone" 
                                    className="footer-contact-icon"
                    />
                    <a href="tel:1-562-696-0282">(562) 696-0282</a>
                </p>
                </div>
                <div className="col-sm-3">
                    <p className="footer-contact">  
                    <FontAwesome name="fax" 
                                className="footer-contact-icon"
                    />
                        <a href="fax:+509.471.0282">(509) 471-0282</a>
                    </p>
                </div>
            </section>
            <section id="footer-copyright" className="row">
                <div className="col-sm-12">
                    <p id="footer-copyrightWithYear">
                        Copyright 
                        <FontAwesome name="copyright" 
                                id="fontAwesome-copyright"
                                className="footer-contact-icon"
                        />
                        {" " + new Date().getFullYear()} 
                        {" "} HARZA TAPES  
                    </p>
                    <p id="footer-designedBy">
                        <FontAwesome name="paint-brush" 
                                    className="footer-contact-icon"
                        /> Designed by Harza Tapes 
                        <span> (Updated &mdash; October 2019)</span>
                    </p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;