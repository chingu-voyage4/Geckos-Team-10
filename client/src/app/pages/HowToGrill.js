import React from "react";
import SlideHeader from "../components/SlideHeader/SlideHeader";

//Images for the slider
import hgrill from "../images/hgrill.jpg";
import hgrill1 from "../images/hgrill1.jpg";
import hgrill2 from "../images/hgrill2.jpg";

const images = [hgrill, hgrill1, hgrill2];
const subheading = `
	Proin porttitor ultricies odio sed convallis. 
	Duis ligula dolor, auctor vitae lobortis at, consectetur quis sapien. 
	Suspendisse mollis lorem quis justo dictum mattis. 
	Donec at tincidunt arcu, eu mollis nisi. Sed mollis accumsan sapien, gravida pretium sapien scelerisque eu.
`;

const HowToGrill = () => (
  <main>
    <SlideHeader
      images={images}
      heading="How does GrillBer work?"
      subheading={subheading}
    />
  </main>
);

export default HowToGrill;
