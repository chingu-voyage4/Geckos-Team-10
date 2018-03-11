import React, { Component } from 'react';
import './Reviews.css';

class Reviews extends Component {
  render() {
    const reviewImagePh = 'https://www.texasmonthly.com/wp-content/uploads/2013/12/Kent-Black-profile.jpg';
    return (
      <div id="reviews-component">
        <div id="title">
          What our customers say
        </div>
        <div id="reviews-container">
          <div className="review-column">
            <div className="review-image">
            </div>
            <blockquote className="talk-bubble tri-right round right-in">
              Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar
              <div id="star-rating">
              <i className="fas fa-star star-fill"></i><i className="fas fa-star star-fill"></i><i class="fas fa-star star-fill"></i><i className="fas fa-star star-fill"></i><i className="fas fa-star star-fill"></i>
            </div>
            </blockquote>
          </div>
           <div className="review-column">
            <div className="review-image">
            </div>
             <blockquote className="talk-bubble tri-right round right-in">
              Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar
               <div id="star-rating">
              <i className="fas fa-star star-fill"></i><i className="fas fa-star star-fill"></i><i class="fas fa-star star-fill"></i><i className="fas fa-star star-fill"></i><i className="fas fa-star star-fill"></i>
            </div>
            </blockquote>
          </div>
           <div className="review-column">
            <div className="review-image">
            </div>
            <blockquote className="talk-bubble tri-right round right-in">
              Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar
              <div id="star-rating">
              <i className="fas fa-star star-fill"></i><i className="fas fa-star star-fill"></i><i className="fas fa-star star-fill"></i><i className="fas fa-star star-fill"></i><i className="fas fa-star star-no-fill"></i>
            </div>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
