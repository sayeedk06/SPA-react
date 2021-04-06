import React from "react";
import Navbar from "./Navbar";
import Pricing from "./pricing";
import Slider from "./slider";
import About from "./About";
import Contact from "./Contact";
function App(){
    return (
        <div>
            <Navbar />
            <Slider />
            <About/>
            <Pricing/>
            <Contact/>
            
        </div>
    );
}

export default App;