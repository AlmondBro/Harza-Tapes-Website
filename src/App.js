import React from 'react';

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';


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
  return (
    <BrowserRouter>
      <div className="container-fluid no-padding">
        <Header />
      </div>
      <div className="container-fluid no-padding">
        <Navigation className="navigation"/>
      </div>
      <PageContent>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/products" component={Products} />
          <Route path="/location" component={Location} />
          <Route path="/contact-us" component={Contact} />
        </AnimatedSwitch>
      </PageContent>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
