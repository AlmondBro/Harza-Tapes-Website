import React from 'react';

import { Route, Switch } from 'react-router-dom';
// import { AnimatedSwitch as Switch } from 'react-router-transition';

import { NavLink as Link } from "react-router-dom";

const FourSquareProductsPane = (props) => {
    return (
        <main className="col-md-8 margin-center">
            <section className="productsRow row no-gutters">
                <div className="productsContainer col-sm-5">
                    <img src="/assets/img/custom-printed-tape.jpg" 
                        alt="Custom Printed Tape" 
                        className="img-fluid flex-img-center" 
                    />
                    <ul>
                        <li>Quality Printing Up to 3 colors</li>
                        <li>White, Clear, or Tan Polypropylene Tape</li>
                        <li>No Artwork Charge</li>
                    </ul>
                </div>
                <div className="productsContainer col-sm-5">
                    <img src="/assets/img/stock-printed-tape.jpg" 
                        alt="Stock Printed Tape" 
                        className="img-fluid flex-img-center" 
                    />
                    <ul>
                        <li>Tapes with Preprinted Messages
                            <ul>
                                <li className="sameSize-subBullet" id="prevent-pilferage">
                                    To prevent pilferage
                                </li>
                                <li className="sameSize-subBullet" id="inform-handlers">To inform handlers of care</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="productsRow row no-gutters">
                <div className="productsContainer col-sm-5">
                    <img src="/assets/img/plain-packaging-tape.jpg" 
                        alt="Carton (Plain) Sealing Tape" 
                        className="img-fluid flex-img-center" 
                    />
                    <ul>
                        <li>Clear, White, Tan, & Colored <span id="poly">Polypropylene Tapes</span></li>
                        <li>Flat Back Paper Tape</li>
                    </ul>
                </div>
                <div className="productsContainer col-sm-5">
                    <img src="/assets/img/tape-dispensers.jpg" 
                        alt="Tape Dispensers" 
                        className="img-fluid flex-img-center" 
                    />
                    <ul>
                        <li>Hand Dispensers</li>
                        <li>Multi Rolls</li>
                        <li>Pistol Grips</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}; //end FourSquareProductsPane

const CartonSealingTapes = ({ match }) => {
    return (
        <main className="col-md-8 flex-center">
            <section className="productsRow row no-gutters">
                <div className="productsContainer col-sm-5">
                    <img src="/assets/img/prd-acrylic.jpg" 
                        alt="Acrylic Adhesive" 
                        className="img-fluid flex-img-center" 
                    />
                    <h4 className="sideProducts">Acrylic Adhesive</h4>
                </div>
                <div className="productsContainer col-sm-5">
                    <img src="/assets/img/prd-hot-melt.jpg" 
                        alt="Hot Melt Adhesive" 
                        className="img-fluid flex-img-center" 
                    />
                    <h4 className="sideProducts">Hot Melt Adhesive</h4>
                </div>
            </section>
            <section className="productsRow row no-gutters">
                <div className="productsContainer col-sm-5">
                    <img src="/assets/img/prd-color.jpg" 
                        alt="Colored Tape" 
                        className="img-fluid flex-img-center" 
                    />
                    <h4 className="sideProducts">Colored Tape</h4>
                </div>
                <div className="productsContainer col-sm-5">
                    <img src="/assets/img/prd-flat-back.jpg" 
                        alt="Flst Back Paper" 
                        className="img-fluid flex-img-center" 
                    />
                    <h4 className="sideProducts">Flat Back Paper</h4>
                </div>
            </section>
        </main>
    );
}; //end CartonSealingTapes


const TapeDispensers = ({ match }) => {
    return (
        <main className="col-md-8 flex-center">
            <section className="productsRow row no-gutters">
                <div className="productsContainer col-sm-5">
                    <img src="/assets/img/prd-dispenser-multi-roll.jpg" 
                        alt="Multi-Roll Dispenser" 
                        className="img-fluid flex-img-center" 
                    />
                    <h4 className="sideProducts">Multi-Roll</h4>
                </div>
                <div className="productsContainer col-sm-5">
                    <img src="/assets/img/prd-dispenser-pistol-grip.jpg" 
                        alt="Pistol Grip" 
                        className="img-fluid flex-img-center" 
                    />
                    <h4 className="sideProducts">Pistol Grip</h4>
                </div>
            </section>
        </main>
    );
}; //end TapeDispensers

const ProductsSidebar = (props) => {
    let { match } = props;
    return (
        <div className="row">
                <div className="col-md-4 no-padding">
                    <aside className="products-sidebar">
                        <ul>
                            <li id="ourProducts-header-li"><h3>Our Products</h3></li>
                            {/* <li><Link to={`${match.path}`}>Custom Printed Tapes</Link></li> */}
                            <li><Link to={`${match.path}`}>Custom/Stock Printed Tapes</Link></li>
                            <li><Link to={`${match.path}/carton-sealing-tapes`}>Carton Sealing Tapes</Link>
                                <ul>
                                    <li><a href="#" className="no-underline no-cursor">Acrylic</a></li>
                                    <li><a href="#" className="no-underline no-cursor">Hot Melt</a></li>
                                    <li><a href="#" className="no-underline no-cursor">Color</a></li>
                                    <li><a href="#" className="no-underline no-cursor">Flat Back Paper</a></li>
                                </ul>
                            </li>
                            <li><Link to={`${match.path}/dispensers`}>Food Grade Tapes</Link></li>
                            <li><Link to={`${match.path}/dispensers`}>Dispensers</Link>
                                <ul>
                                    <li><a href="#" className="no-underline no-cursor">Multi-roll</a></li>
                                    <li><a href="#" className="no-underline no-cursor">Pistol Grip</a></li>
                                </ul>
                            </li>
                        </ul>
                    </aside>
                </div>
              {props.children}
            </div>
    );
};

const Products = ({ match }) => {
    return (
        <div className="productsPage container">
            <ProductsSidebar match={match}>
                <Switch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    className="col-md-9"
                >
                    {/* <FourSquareProductsPane /> */}                    
                    <Route exact path={match.path} component={FourSquareProductsPane} />
                    <Route path={`${match.path}/carton-sealing-tapes`} component={CartonSealingTapes} />
                    <Route path={`${match.path}/dispensers`} component={TapeDispensers} />                    
                    <Route component={FourSquareProductsPane} />
                </Switch>
            </ProductsSidebar>
            <section className="products-bottom row">
                <p>Please contact us if you do not see the kind of tape
                    that you are looking for. 
                </p>
                <p>We also offer paper tapes (regular or reinforced), 
                    freezer tapes, masking tapes, etc.
                </p>
            </section>
        </div>
    );
};

export default Products;