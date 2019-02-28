import React, { Component } from "react";
import "./CarouselTwo.css";
import CustomOne from "../Components/Texts/CustomOne";

class CarouselTwo extends Component {
  lorem = {
    instanceID: "CustomOne",
    title: "Admissions are open. Click here to know more"
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="CarouselTwo" id={instanceID}>
        <div className="CarouselTwoSlider">
          <div className="CarouselTwoSlide" id={instanceID + "SlideOne"}>
            <CustomOne data={this.lorem} />
          </div>
          <div className="CarouselTwoSlide" id={instanceID + "SlideTwo"}>
            <CustomOne data={this.lorem} />
          </div>
          <div className="CarouselTwoSlide" id={instanceID + "SlideThree"}>
            <CustomOne data={this.lorem} />
          </div>
          <div className="CarouselTwoSlide" id={instanceID + "SlideFour"}>
            <CustomOne data={this.lorem} />
          </div>
          <div className="CarouselTwoSlide" id={instanceID + "SlideFive"}>
            <CustomOne data={this.lorem} />
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselTwo;
