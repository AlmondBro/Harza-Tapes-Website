import React from 'react';

const Products = (props) => {
    return (
        <div className="container">
            <section className="row">
                <div className="productsContainer col-sm-6">
                    <img src="./assets/img/custom-printed-tape.jpg" 
                        alt="Custom Printed Tape" 
                        className="img-fluid" 
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
                        className="img-fluid" 
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
            <section className="row">
                <div className="col-sm-6">
                    <img src="./assets/img/plain-packaging-tape.jpg" 
                        alt="Carton (Plain) Sealing Tape" 
                        className="img-fluid" 
                    />
                    <ul>
                        <li>Clear, white, tan, & colored polypropylene tapes</li>
                        <li>Flat back paper tape</li>
                    </ul>
                </div>
                <div className="col-sm-6">
                    <img src="./assets/img/tape-dispensers.jpg" 
                        alt="Tape Dispensers" 
                        className="img-fluid" 
                    />
                    <ul>
                        <li>Hand Dispensers</li>
                        <li>Multi Rolls</li>
                        <li>Pistol Grips</li>
                    </ul>
                </div>
            </section>
            <section className="row">
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