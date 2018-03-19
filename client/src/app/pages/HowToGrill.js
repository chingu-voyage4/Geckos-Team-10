import React from "react";
import SlideHeader from "../components/SlideHeader/SlideHeader";
import Card from "../components/Card/Card";
import SubHeader from "../components/SubHeader/SubHeader";

//Images for the slider
import hgrill from "../images/hgrill.jpg";
import hgrill1 from "../images/hgrill1.jpg";
import hgrill2 from "../images/hgrill2.jpg";

//Images for the cards
import agenda from "../images/agenda.svg";
import barbecue from "../images/barbecue.svg";
import receive from "../images/receive.svg";
import returnT from "../images/returnT.svg";
import screen from "../images/screen.svg";
import reload from "../images/reload.svg";

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

    <div className="htg-container">
      <SubHeader h1="How it works" h2="Five simple steps" />

      <Card
        src={screen}
        alt="desktop monitor and mobile device"
        title="Join"
        text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
      />
      <Card
        src={agenda}
        alt="book with bookmark"
        title="Book"
        text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
      />

      <Card
        src={receive}
        alt="truck"
        title="Receive"
        text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
      />

      <Card
        src={barbecue}
        alt="bbq grill"
        title="Grill"
        text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
      />

      <Card
        src={returnT}
        alt="truck"
        title="Return"
        text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
      />

      <Card
        src={reload}
        alt="reaload"
        title="Reload!"
        text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
      />
    </div>
  </main>
);

export default HowToGrill;
