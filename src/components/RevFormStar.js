import React, { useState } from "react";
import { IoIosStar } from "react-icons/io"; // npm install react-icons --save
import './starrate.css'
export default function Starrate() {
    const [rating, setRating] = useState(0); // Initialize rating as a number

    return (
        <div style={{ display: "flex", flexDirection: "row",  justifyContent: "center"}}>
            {[...Array(5)].map((star, index) => {
                const currentRate = index + 1;

                return (
                    <div key={index} style={{ cursor: "pointer" }}>
                        <IoIosStar 
                            size={70}
                            color={currentRate <= rating ? "White" : "#9D5555"}
                            onClick={() => setRating(currentRate)}
                        />
                    </div>
                );
            })}
        </div>
    );
}
