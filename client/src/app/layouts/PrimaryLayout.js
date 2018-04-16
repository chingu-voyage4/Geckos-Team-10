import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import LandingPage from "../pages/LandingPage";
import BookGrill from "../pages/BookGrill/BookGrill";
import SingleGrill from "../pages/SingleGrill/SingleGrill";
import HowToGrill from "../pages/HowToGrill/HowToGrill";
import Pricing from "../pages/Pricing/Pricing";
import SignUp from "../pages/SignUp";
import ThankYouUser from "../pages/ThankYouUser";
import NoMatch from "../pages/NoMatch";

const PrimaryLayout = () => (
  <React.Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/how-to-grill" component={HowToGrill} />
      <Route exact path="/pricing" component={Pricing} />
      <Route exact path="/book-a-grill" component={BookGrill} />
      <Route exact path="/book-a-grill/:_id" component={SingleGrill} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/thank-you" component={ThankYouUser} />
      <Route component={NoMatch} />
    </Switch>
    <Footer />
  </React.Fragment>
);

export default PrimaryLayout;
