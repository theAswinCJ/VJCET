import React, { Component } from "react";
import "./CarouselTwo.css";
import ImageOne from "../Images/ImageOne";
import CustomOne from "../Texts/CustomOne";

class CarouselTwo extends Component {
  lorem = {
    instanceID: "CustomOne",
    title: "Admissions are open. Click here to know more"
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="CarouselTwo" id={instanceID}>
        <div class="CarouselTwoSlider">
          <div class="CarouselTwoSlide" id={instanceID + "SlideOne"}>
            <CustomOne data={this.lorem} />
          </div>
          <div class="CarouselTwoSlide" id={instanceID + "SlideTwo"}>
            <CustomOne data={this.lorem} />
          </div>
          <div class="CarouselTwoSlide" id={instanceID + "SlideThree"}>
            <CustomOne data={this.lorem} />
          </div>
          <div class="CarouselTwoSlide" id={instanceID + "SlideFour"}>
            <CustomOne data={this.lorem} />
          </div>
          <div class="CarouselTwoSlide" id={instanceID + "SlideFive"}>
            <CustomOne data={this.lorem} />
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselTwo;
