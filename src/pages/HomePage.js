import React from "react";
import Navbar from "../components/Navbar";
import HomePictures from "../components/HomePictures";
import Footer from "../components/Footer";

/* Cicero Barasi */
export default function HomePage() {
    return (
        <div>
            <Navbar />
            {/* Home Page */}
            <HomePictures />
            <Footer />
        </div>
    )
}