import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RoomView from "../components/RoomView";

/* Cicero */
export default function RoomViewPage() {
  return (
    <div>
      <Navbar />
      <RoomView />
      <Footer />
    </div>
  );
}
