import React, { Component } from "react";
import "./CarouselOne.css";
import ImageOne from "../Components/Images/ImageOne";
import HeadingFive from "../Components/Texts/HeadingFive";

class CarouselOne extends Component {
  PreviousArrow = {
    instanceID: "CarouselOnePreviousArrow",
    image: "previousArrow.svg",
    width: "47px"
  };

  NextArrow = {
    instanceID: "CarouselOneNextArrow",
    image: "nextArrow.svg",
    width: "47px"
  };

  StockPhoto = {
    instanceID: "CarouselOneStockPhoto",
    image: "stock1.png",
    width: "100%"
  };

  lorem = {
    instanceID: "lorem",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis turpis eu turpis gravida, sed pellentesque odio ultricies. Cras mattis odio neque, sed placerat metus tempor pulvinar.  Read More"
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="CarouselOne" id={instanceID}>
        <div className="CarouselOneSlider">
          <div className="CarouselOneSlide" id={instanceID + "SlideOne"}>
            <ImageOne data={this.StockPhoto} />
            <HeadingFive data={this.lorem} />
          </div>
          <div className="CarouselOneSlide" id={instanceID + "SlideTwo"}>
            <ImageOne data={this.StockPhoto} />
            <HeadingFive data={this.lorem} />
          </div>
          <div className="CarouselOneSlide" id={instanceID + "SlideThree"}>
            <ImageOne data={this.StockPhoto} />
            <HeadingFive data={this.lorem} />
          </div>
          <div className="CarouselOneSlide" id={instanceID + "SlideFour"}>
            <ImageOne data={this.StockPhoto} />
            <HeadingFive data={this.lorem} />
          </div>
          <div className="CarouselOneSlide" id={instanceID + "SlideFive"}>
            <ImageOne data={this.StockPhoto} />
            <HeadingFive data={this.lorem} />
          </div>
        </div>

        <div className="CarouselOneControls">
          <ImageOne data={this.PreviousArrow} />
          <ImageOne data={this.NextArrow} />
        </div>
      </div>
    );
  }
}

export default CarouselOne;
