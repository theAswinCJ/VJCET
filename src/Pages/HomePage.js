import React, { Component } from "react";
import "./HomePage.css";
import DepartmentSection from "../HomePageContainers/DepartmentSection";
import FacilitiesSection from "../HomePageContainers/FacilitiesSection";
import VisionSection from "../HomePageContainers/VisionSection";
import CarouselOne from "../Components/Carousels/CarouselOne";
import CarouselTwo from "../Components/Carousels/CarouselTwo";
import CarouselThree from "../Components/Carousels/CarouselThree";
import CarouselFour from "../Components/Carousels/CarouselFour";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";

class HomePage extends Component {
  HomePageHeader = {
    instanceID: "HomePageHeader"
  };

  HomePageCarouselOne = {
    instanceID: "HomePageCarouselOne"
  };

  HomePageCarouselTwo = {
    instanceID: "HomePageCarouselTwo"
  };

  HomePageCarouselThree = {
    instanceID: "HomePageCarouselThree"
  };

  HomePageDepartmentSection = {
    instanceID: "HomePageDepartmentSection"
  };

  render() {
    return (
      <div className="HomePage">
        <Header data={this.HomePageHeader} />
        <CarouselOne data={this.HomePageCarouselOne} />
        <CarouselTwo data={this.HomePageCarouselTwo} />
        <CarouselThree data={this.HomePageCarouselThree} />
        <DepartmentSection data={this.HomePageDepartmentSection} />
      </div>
    );
  }
}

export default HomePage;

/*
  <DepartmentSection />
        <FacilitiesSection />
        <VisionSection />
        <CarouselOne/>
        <CarouselTwo/>
        <CarouselThree/>
        <CarouselFour/>
        <Footer />
*/
