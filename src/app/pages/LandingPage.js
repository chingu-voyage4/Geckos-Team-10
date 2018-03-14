import React from "react";
import "../styles/cta-buttons.css";

import SlideHeader from "../components/SlideHeader/SlideHeader";
import WhatIsGrillber from "../components/WhatIsGrillber/WhatIs";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Reviews from "../components/Reviews/Reviews";

const LandingPage = () => (
  <main>
    <SlideHeader />
    <WhatIsGrillber />
    <HowItWorks />
    <Reviews />
  </main>
);

export default LandingPage;
