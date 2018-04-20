import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CSSTransitionGroup } from "react-transition-group";
import "./carousel.css";

//Images for the slider
import grill from "../../images/grill.jpg";
import grill2 from "../../images/grill2.jpg";
import grill3 from "../../images/grill3.jpg";

const images = [grill, grill2, grill3];

class SlideHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 0
    };
    this.setCurrent = this.setCurrent.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setCurrent(this.state.currentId + 1);
    }, 8000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  setCurrent(id) {
    let images = this.props.images || [];
    //if true I loop through the images
    if (this.props.loop) {
      id = (id + images.length) % images.length;
    } else {
      id = id < 0 ? 0 : id >= images.length ? images.length - 1 : id;
    }

    this.setState({ currentId: id });
  }

  render() {
    let images = this.props.images || [];
    let currImage = images[this.state.currentId];
    return (
      <div className={`slide-header ${this.props.wrapperClass}`}>
        <div className="overlay-header">
          <h1>{this.props.heading}</h1>
          <span className="sub-heading">{this.props.subheading}</span>
          <div className="cta-join btn-width">
            <Link to="/sign-up">Join</Link>
          </div>
        </div>
        <CSSTransitionGroup
          transitionName="swap"
          transitionEnterTimeout={500}
          transitionLeave={false}
        >
          <img src={currImage} alt="grill" key={currImage} />
        </CSSTransitionGroup>
      </div>
    );
  }
}

SlideHeader.defaultProps = {
  images: images,
  loop: true,
  heading: "Grillber lorem ipsum",
  subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  wrapperClass: ""
};

SlideHeader.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired),
  loop: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string
};

export default SlideHeader;
