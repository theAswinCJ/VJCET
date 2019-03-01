import React, { Component } from "react";
import "./CarouselTwo.css";
import CustomOne from "../Components/Texts/CustomOne";
import ImageOne from "../Components/Images/ImageOne";

class CarouselTwo extends Component {
  state = { selected: 0 };
  data = [
    {
      instanceID: "CustomOne",
      title: "0Admissions are open. Click here to know more"
    },
    {
      instanceID: "CustomOne",
      title: "1Admissions are open. Click here to know more"
    },
    {
      instanceID: "CustomOne",
      title: "2Admissions are open. Click here to know more"
    },
    {
      instanceID: "CustomOne",
      title: "3Admissions are open. Click here to know more"
    },
    {
      instanceID: "CustomOne",
      title: "4Admissions are open. Click here to know more"
    }
  ];
  rotateRight = () => {
    // console.log(this.state.selected);
    this.setState({
      selected:
        this.state.selected + 1 >= this.data.length
          ? 0
          : this.state.selected + 1
    });
  };
  rotateLeft = () => {
    console.log(this.state.selected);
    this.setState({
      selected:
        this.state.selected - 1 < 0
          ? this.data.length - 1
          : this.state.selected - 1
    });
  };
  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="CarouselTwo" id={instanceID}>
        <div
          className="CarouselTwoSlider"
          // onScroll={e => {
          //   console.log(e);
          // }}
        >
          <div className="CarouselTwoSlide" id={instanceID}>
            <CustomOne data={this.data[this.state.selected]} />
          </div>
        </div>
        <div className="CarouselTwoPagination">
          {this.data.map((item, index, arr) => {
            return (
              <a
                // href={`#${instanceID}${index}`}
                onFocus={e => {
                  console.log("testfunction");
                  this.setState({ selected: index });
                }}
                onClick={e => {
                  // console.log("clicked");

                  // document
                  //   .getElementById(`${instanceID}${index}`)
                  //   .scrollIntoView();

                  this.setState({ selected: index });
                }}
              >
                <div
                  style={{
                    height: "10px",
                    width: "10px",
                    borderRadius: "100%",
                    backgroundColor:
                      this.state.selected == index ? "#fff" : "#ffffff00",
                    margin: "0px 2px",
                    border: this.props.selected ? "none" : "1px solid #fff"
                  }}
                />
              </a>
            );
          })}
        </div>
        <div
          className="CarouselTwoRightArrow"
          onClick={e => {
            this.rotateRight();
          }}
        >
          <img
            src={require("Assets/right-arrow.svg")}
            style={{ height: "25px", width: "25px" }}
          />
        </div>

        <div
          className="CarouselTwoLeftArrow"
          onClick={e => {
            this.rotateLeft();
          }}
        >
          {" "}
          <img
            src={require("Assets/right-arrow.svg")}
            style={{
              height: "25px",
              width: "25px",
              transform: "rotate(180deg)"
            }}
          />
        </div>
      </div>
    );
  }
}

export default CarouselTwo;
