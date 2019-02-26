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

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <Header />
      </div>
    );
  }
}

export default LandingPage;

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
