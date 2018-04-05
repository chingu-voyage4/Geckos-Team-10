import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import LandingPage from "../pages/LandingPage";
import BookGrill from "../pages/BookGrill";
import HowToGrill from "../pages/HowToGrill/HowToGrill";
import Pricing from "../pages/Pricing";
import SignUp from "../pages/SignUp";
import NoMatch from "../pages/NoMatch";

const PrimaryLayout = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/how-to-grill" component={HowToGrill} />
      <Route exact path="/pricing" component={Pricing} />
      <Route exact path="/book-a-grill" component={BookGrill} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route component={NoMatch} />
    </Switch>
    <Footer />
  </div>
);

export default PrimaryLayout;
