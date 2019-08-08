import React from 'react';

//Import components
import Slideshow from './Slideshow.js';

import FoodGradeTapesModal from './FoodGradeTapesModal.js';

const Home = (props) => {
    return (
        <div className="container">
                 <Slideshow className="img-fluid"/>
            <div className="row no-gutters">
                <div className="col-sm max-width-100">
                    <img className="img-fluid tapeTypes"
                         src="./assets/img/custom-printed-tape.jpg" 
                         alt="Custom Printed Tape" />
                </div>
                <div className="col-sm max-width-100">
                    <img className="img-fluid tapeTypes"
                         src="./assets/img/stock-printed-tape.jpg" 
                         alt="Stock Printed Tape" />
                </div>
                <div className="col-sm max-width-100">
                    <img className="img-fluid tapeTypes" 
                         src="./assets/img/plain-packaging-tape.jpg" 
                         alt="Carton Stealing Tape" />
                </div>
                <div className="col-sm max-width-100">
                    <img className="img-fluid tapeTypes"
                         src="./assets/img/tape-dispensers.jpg" 
                         alt="Tape Dispensers" />
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