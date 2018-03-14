import React, { Component } from "react";
import "./Reviews.css";

class Reviews extends Component {
  render() {
    return (
      <div id="reviews-component">
        <div id="title">What our customers say</div>
        <div id="reviews-container">
          <div className="review-column">
            <div className="review-image-1" />
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
      </div>
    );
  }
}

export default Reviews;
