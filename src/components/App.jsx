import React from "react";
import Navbar from "./Navbar";
import Pricing from "./pricing";
import Slider from "./slider";
import About from "./About";
import Contact from "./Contact";
import Footer from './Footer';
import Header from './Header';
function App(){
    return (
        <div>
          
            <Navbar />
            <Slider /> 
            <Header />
            <About/>
            <Pricing/>
            <Contact/>
            <Footer />
            
        </div>
    );
}

export default App;