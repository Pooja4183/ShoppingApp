// import React, { useEffect } from "react";
import Footer from "./Components/Footer";
import NewArrivals from "./Components/NewArrivals";
import Offer from "./Components/offer";
import PromoCarousel from "./Components/PromoCarousel";
import Slideshow from "./Components/Slider";
import Static1 from "./Components/static1";
import TodoApp from "./TodoApp";
import LaunchVideoBanner from "./Components/LaunchVideoBanner_temp";


function Home(){

    return(
        <>
        <Slideshow/>
        <PromoCarousel/>
        <NewArrivals/>
        <Offer/>
        <LaunchVideoBanner/>
        <Static1/>
        <TodoApp/>
        <Footer/>
        </>
    )
}
export default Home;