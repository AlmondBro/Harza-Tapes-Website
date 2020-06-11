import React from 'react';
//import dotenv from 'dotenv';

import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import { AnimatedSwitch as Switch } from 'react-router-transition';

//Import components
import HeaderAndNav from "./HeaderAndNav.js"
import PageContent from "./PageContent.js";
import Footer from "./Footer.js";

//Import pages
import Home from "./Home.js";
import AboutUs from "./AboutUs.js";
import Products from "./Products.js";
import Location from "./Location.js";
import Contact from "./Contact.js";
import NotFound404 from "./NotFound404.js";

//Import 3rd-party packages
import FontAwesome from 'react-fontawesome';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <a href="tel:1-562-696-0282">
          <FontAwesome name="phone"
                      className="mobileFixedIcons
                      purpleBG-greenBorder
                      purpleShadow"
                      title="Call Harza Tapes"
          />
        </a>

        <a href="mailto:sales@harzatapes.com">
          <FontAwesome name="envelope"
                      className="mobileFixedIcons
                      purpleBG-greenBorder
                      purpleShadow"
                      id="mobileEmail-fixedIcon"
                      title="E-mail Harza Tapes"
          />
        </a>
      </div>
      <HeaderAndNav />
      <PageContent>
        <Switch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" 
                       render={ () => (
                                          <Redirect to="/home" />
                                      )
                                } 
          />
          <Route path="/home" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/products" component={Products} />
          <Route path="/location" component={Location} />
          <Route path="/contact-us" component={Contact} />
          <Route component={NotFound404} />
        </Switch>
      </PageContent>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
