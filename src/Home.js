// import React, { useEffect } from "react";
import Footer from "./Components/Footer";
import NewArrivals from "./Components/NewArrivals";
import PromoCarousel from "./Components/PromoCarousel";
import Slideshow from "./Components/Slider";
import TodoApp from "./TodoApp";

function Home(){

    return(
        <>
        <Slideshow/>
        <PromoCarousel/>
        <NewArrivals/>
        <TodoApp/>
        <Footer/>
        </>
    )
}
export default Home;