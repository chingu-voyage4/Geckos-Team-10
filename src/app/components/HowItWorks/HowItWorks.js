import React from 'react';
import Card from '../Card/Card';
import Styles from './styles.css'; 

// just for testing purposes
import user from '../../images/user.svg';

// class name variables
const card_wrap = 'card-wrap';
const image_wrap = 'img-wrap';
const text_wrap = 'text-wrap';

const HowItWorks = () => (
  <section className="hiw-section">
    <header className="hiw-header">
      <h2>How it Works</h2>
      <h2>3 Simple Steps to Use GrillBer</h2>
    </header>
    <div className="hiw-card-container">
      <Card
        cardWrap={card_wrap}
        imgWrap={image_wrap}
        textWrap={text_wrap}
        src={user}
        alt="blank user"
        title="Join"
        text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
      />
      <Card
        cardWrap={card_wrap}
        imgWrap={image_wrap}
        textWrap={text_wrap}
        src={user}
        alt="blank user"
        title="Book"
        text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
      />
      <Card
        cardWrap={card_wrap}
        imgWrap={image_wrap}
        textWrap={text_wrap}
        src={user}
        alt="blank user"
        title="Grill"
        text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
      />
    </div>
  </section>
);

export default HowItWorks;
