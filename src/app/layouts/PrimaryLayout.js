import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import LandingPage from '../pages/LandingPage';
import BookGrill from '../pages/BookGrill';
import HowToGrill from '../pages/HowToGrill';
import Pricing from '../pages/Pricing';
import SignUp from '../pages/SignUp';

const PrimaryLayout = () => (
  <div>
    <Navbar />
    <Footer />
  </div>
);

export default PrimaryLayout;
