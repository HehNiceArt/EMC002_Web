import React from "react"; 
import '../components/css/RoomView.css';

export default function RoomView() {
    return (
        <div className="backgroundContainer">
            <img src="https://cdnb.artstation.com/p/assets/images/images/027/766/497/large/nihal-devang-finl.jpg?1592488454" alt="" className="backgroundImage" />
            <img src="https://cdnb.artstation.com/p/assets/images/images/027/766/497/large/nihal-devang-finl.jpg?1592488454" alt="" className="overlayText" />
            <div className="infoBox">
                <h2>Panel Title</h2>
                <p>This is a simple panel. You can adjust its position with transforms.</p>
            </div>
        </div>
    );
}