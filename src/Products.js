import React from 'react';

const Products = (props) => {
    return (
        <div className="productsPage container">
            <div className="row">
                <div className="col-md-3">
                    <aside className="products-sidebar">
                        <ul>
                            <li id="ourProducts-header-li"><h3>Our Products</h3></li>
                            <li><a href="">Custom Printed Tapes</a></li>
                            <li><a href="">Stock Printed Tapes</a></li>
                            <li><a href="">Carton Sealing Tapes</a>
                                <ul>
                                    <li><a href="">Acrylic</a></li>
                                    <li><a href="">Hot Melt</a></li>
                                    <li><a href="">Color</a></li>
                                    <li><a href="">Flat Back Paper</a></li>
                                </ul>
                            </li>
                            <li><a href="">Dispensers</a>
                                <ul>
                                    <li><a href="">Multi-roll</a></li>
                                    <li><a href="">Pistol Grip</a></li>
                                </ul>
                            </li>
                        </ul>
                    </aside>
                </div>
                <div className="col-md-9">
                    <section className="productsRow row no-gutters">
                        <div className="productsContainer col-sm-6">
                            <img src="./assets/img/custom-printed-tape.jpg" 
                                alt="Custom Printed Tape" 
                                className="img-fluid flex-img-center" 
                            />
                            <ul>
                                <li>Quality printing up to 3 colors</li>
                                <li>White, clear, or tan polypropylene tape</li>
                                <li>No art charge</li>
                            </ul>
                        </div>
                        <div className="productsContainer col-sm-6">
                            <img src="./assets/img/stock-printed-tape.jpg" 
                                alt="Stock Printed Tape" 
                                className="img-fluid flex-img-center" 
                            />
                            <ul>
                                <li>Tapes with preprinted messages
                                    <ul>
                                        <li>
                                            To prevent pilferage
                                        </li>
                                        <li>To inform handlers of care</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="productsRow row no-gutters">
                        <div className="productsContainer col-sm-6">
                            <img src="./assets/img/plain-packaging-tape.jpg" 
                                alt="Carton (Plain) Sealing Tape" 
                                className="img-fluid flex-img-center" 
                            />
                            <ul>
                                <li>Clear, white, tan, & colored polypropylene tapes</li>
                                <li>Flat back paper tape</li>
                            </ul>
                        </div>
                        <div className="productsContainer col-sm-6">
                            <img src="./assets/img/tape-dispensers.jpg" 
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
                </div>
            </div>
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