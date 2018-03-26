import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import LandingPage from "../pages/LandingPage";
import BookGrill from "../pages/BookGrill";
import HowToGrill from "../pages/HowToGrill/HowToGrill";
import Pricing from "../pages/Pricing";
import SignUp from "../pages/SignUp";

const PrimaryLayout = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/how-to-grill" component={HowToGrill} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/book-a-grill" component={BookGrill} />
      <Route path="/sign-up" component={SignUp} />
    </Switch>
    <Footer />
  </div>
);

export default PrimaryLayout;
