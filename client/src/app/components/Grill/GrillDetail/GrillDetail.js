import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Panel from "../../Panel/Panel";
import Stars from "../../Stars/Stars";

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
                    alt={`This is an image of ${grill.name}`}
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
  </section>
);

export default GrillDetail;
