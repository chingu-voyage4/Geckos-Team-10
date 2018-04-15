import React, { Component } from "react";
import SubHeader from "../SubHeader/SubHeader";
import Stars from "../Stars/Stars";
import "./Reviews.css";

class Reviews extends Component {
  render() {
    return (
      <section id="reviews-component">
        <SubHeader h1="Join the BBQ" h2="What our customers are saying" />
        <div id="reviews-container">
          <div className="review-column">
            <div className="review-image-1" />
            <div className="reviewPerson">Jim</div>
            <blockquote className="talk-bubble tri-right round right-in">
              Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum
              dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar
              <Stars rating={5} />
            </blockquote>
          </div>
          <div className="review-column">
            <div className="review-image-2" />
            <div className="reviewPerson">George</div>
            <blockquote className="talk-bubble tri-right round right-in">
              Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum
              dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar
              <Stars rating={5} />
            </blockquote>
          </div>
          <div className="review-column">
            <div className="review-image-3" />
            <div className="reviewPerson">Bear</div>
            <blockquote className="talk-bubble tri-right round right-in">
              Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum
              dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar
              <Stars rating={4} />
            </blockquote>
          </div>
        </div>
      </section>
    );
  }
}

export default Reviews;
