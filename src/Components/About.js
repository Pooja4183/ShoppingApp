import React, { useEffect } from "react";

function About(){

    useEffect(()=>{
        console.log("Function component");
    });


    return(
        <>
        <h1>About us</h1>
        </>
    )
}
export default About;