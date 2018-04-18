import React from "react";
import { Switch, Route } from "react-router-dom";
import GrillLayout from "./GrillLayout";
import { AuthRoute } from "../auth/auth";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import LandingPage from "../pages/LandingPage";
import HowToGrill from "../pages/HowToGrill/HowToGrill";
import Pricing from "../pages/Pricing/Pricing";
import SignUp from "../pages/SignUp/SignUp";
import NotAuthUser from "../pages/NotAuthUser/NotAuthUser";
import NoMatch from "../pages/NoMatch";

const PrimaryLayout = () => (
  <React.Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/how-to-grill" component={HowToGrill} />
      <Route exact path="/pricing" component={Pricing} />
      <AuthRoute path="/auth/book-a-grill" component={GrillLayout} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/sorry-not-auth" component={NotAuthUser} />
      <Route component={NoMatch} />
    </Switch>
    <Footer />
  </React.Fragment>
);

export default PrimaryLayout;
