import React from 'react';

//Import 3rd-party components
import { Link } from 'react-router-dom';


const NotFound404 = (props) => {
    return (
        <section className="notFound-container cintandina-ghost container">
            <h4>404 &mdash; Page Not Found</h4>
            <h5>Oops!</h5> 
            <p>
                Looks like you may have navigated to a 
                page that does not exist. 
                Maybe you wish to see one of our <Link to="/products">
                    products
                </Link>?
            </p>
        </section>
    );
}; //end NotFound404

export default NotFound404;