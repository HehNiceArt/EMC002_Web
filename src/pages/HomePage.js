import React from "react";
import Navbar from "../components/Navbar";
import Component2 from "../components/Component2";
import HomePictures from "../components/HomePictures";
import Footer from "../components/Footer";

/* Cicero Barasi */
export default function HomePage() {
    return (
        <div>
            <Navbar />
            {/* Home Page */}
            <HomePictures />
            Home Page
         <Component2 />
            <Footer/>
        </div>
    )
}