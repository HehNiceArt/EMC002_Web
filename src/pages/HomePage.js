import React from "react";
import Navbar from "../components/Navbar";
import HomePictures from "../components/HomePictures";

/* Cicero Barasi */
export default function HomePage() {
    return (
        <div>
            <Navbar />
            {/* Home Page */}
            <HomePictures />
        </div>
    )
}