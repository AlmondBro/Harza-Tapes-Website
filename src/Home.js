import React from 'react';

//Import 3rd-party components
import { NavLink as Link } from "react-router-dom";

//Import components
import Slideshow from './Slideshow.js';
import FoodGradeTapesModal from './FoodGradeTapesModal.js';

const Home = (props) => {
    return (
        <div className="container">
                 <Slideshow className="img-fluid"/>
            <div className="row no-gutters">
                <div className="col-sm max-width-100">
                    <Link to="/products">
                        <img className="img-fluid tapeTypes"
                                src="./assets/img/custom-printed-tape.jpg"
                                alt="Custom Printed Tape" />
                    </Link>
                </div>
                <div className="col-sm max-width-100">
                    <Link to="/products">
                        <img className="img-fluid tapeTypes"
                            src="./assets/img/stock-printed-tape.jpg"
                            alt="Stock Printed Tape" />
                    </Link>
                </div>
                <div className="col-sm max-width-100">
                    <Link to="products/carton-sealing-tapes">
                        <img className="img-fluid tapeTypes"
                                src="./assets/img/plain-packaging-tape.jpg"
                                alt="Carton Stealing Tape" />
                    </Link>
                </div>
                <div className="col-sm max-width-100">
                    <Link to="products/dispensers">
                        <img className="img-fluid tapeTypes"
                        src="./assets/img/tape-dispensers.jpg"
                        alt="Tape Dispensers" />
                    </Link>
                </div>
            </div> 
            <div className="row">
                <FoodGradeTapesModal />
                <div className="col-md">
                    <img src="./assets/img/2019-PMA-SUMMIT.jpg"
                         className="img-fluid" />
                </div>
            </div>
        </div> 
    ); //end return
}; //end Home

export default Home;