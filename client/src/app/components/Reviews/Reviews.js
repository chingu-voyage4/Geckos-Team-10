import React, { Component } from "react";
import SubHeader from "../SubHeader/SubHeader";
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
              <div id="star-rating">
                <i className="fas fa-star star-fill" />
                <i className="fas fa-star star-fill" />
                <i className="fas fa-star star-fill" />
                <i className="fas fa-star star-fill" />
                <i className="fas fa-star star-fill" />
              </div>
            </blockquote>
          </div>
          <div className="review-column">
            <div className="review-image-2" />
            <div className="reviewPerson">George</div>
            <blockquote className="talk-bubble tri-right round right-in">
              Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum
              dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar
              <div id="star-rating">
                <i className="fas fa-star star-fill" />
                <i className="fas fa-star star-fill" />
                <i className="fas fa-star star-fill" />
                <i className="fas fa-star star-fill" />
                <i className="fas fa-star star-fill" />
              </div>
            </blockquote>
          </div>
          <div className="review-column">
            <div className="review-image-3" />
            <div className="reviewPerson">Bear</div>
            <blockquote className="talk-bubble tri-right round right-in">
              Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum
              dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar
              <div id="star-rating">
                <i className="fas fa-star star-fill" />
                <i className="fas fa-star star-fill" />
                <i className="fas fa-star star-fill" />
                <i className="fas fa-star star-fill" />
                <i className="fas fa-star star-no-fill" />
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    );
  }
}

export default Reviews;
