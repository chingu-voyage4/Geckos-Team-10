import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Panel from "../../Panel/Panel";
import Stars from "../../Stars/Stars";
import "./styles.css";

const GrillDetail = ({ grill }) => (
  <section className="gd-container">
    <div className="gd-title-carousel-section">
      <header>
        <div className="gd-grill-name">
          <h1>{grill.name}</h1>
        </div>
        <Stars rating={grill.rating} />
      </header>
      <div className="gd-carousel-description-section">
        <Panel className="gd-carousel" title="Grill Images">
          <div className="gd-carousel-wrap">
            <div className="gd-carousel-wrap-around">
              <Carousel showIndicators={true} showStatus={false}>
                {grill.allImages.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`This is a thumbnail of ${grill.name}`}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </Panel>
        <Panel className="gd-description" title="Description">
          <div>
            <p>{grill.description}</p>
          </div>
        </Panel>
      </div>
    </div>
    <div className="gd-info-section">
      <Panel className="gd-cta-atc" title="Book Now">
        <div className="gd-cta-atc-wrap">
          <div className="gd-cost">
            £{grill.price_per_hour}
            <span>per hour</span>
          </div>
          <button>Add to Cart</button>
        </div>
      </Panel>
      <Panel className="gd-features" title="Features">
        <div className="gd-features-wrap">
          {grill.features.map((feature, idx) => (
            <div key={idx} className="gd-feature-item">
              <h4>{feature.main}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </Panel>
      <Panel className="gd-owner" title="Owner">
        <div className="gd-owner-wrap">
          <div className="owner-img-age-section">
            <div className="owner-img-age-wrap">
              <img
                src={grill.owner.image}
                alt={`Profile of grill owner: ${grill.owner.name} `}
              />
              <div className="owner-age">
                {grill.owner.age}
                <span>y/o</span>
              </div>
            </div>
          </div>
          <div className="owner-overview">
            <div className="name-rating-wrap">
              <h4>{grill.owner.name}</h4>
              <Stars rating={grill.owner.rating} />
            </div>
            <div className="owner-phone-wrap">
              <i className="far fa-check-circle owner-check" />
              <h5>Mobile Phone Verified</h5>
            </div>
          </div>
        </div>
      </Panel>
    </div>
  </section>
);

export default GrillDetail;
