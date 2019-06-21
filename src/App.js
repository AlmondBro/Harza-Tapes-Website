import React from 'react';

import { Route, BrowserRouter, Switch } from "react-router-dom";

//Import components
import Header from "./Header.js";
import Navigation from "./Navigation.js";
import PageContent from "./PageContent.js";
import Footer from "./Footer.js";

//Import pages
import Home from "./Home.js";
import AboutUs from "./AboutUs.js";
import Products from "./Products.js";
import Location from "./Location.js";
import Contact from "./Contact.js";

const App = () => {
  return ([
    <BrowserRouter>
      <div className="container-fluid no-padding fill">
        <Header />
        <div className="container">
          <Navigation className="navigation"/>
          <PageContent>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/" component={Home} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/products" component={Products} />
              <Route path="/location" component={Location} />
              <Route path="/contact-us" component={Contact} />
            </Switch>
          </PageContent>
        </div>
      </div>
    </BrowserRouter>,
    <Footer />
    ]
  );
}

export default App;
