import React, { useState } from "react";
import './css/ReviewPage.css';
import StarRate from "../components/starrate.js";
import UserReviewForm from "./UserReviewForm";

const ReviewPage = () => {
    // makes review and stars visible
    const [ratings, setRatings] = useState(Array(9).fill(0));
    const [showForm, setShowForm] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState("");

    //update the rating for a specific index
    const handleRatingChange = (index, newRating) => {
        const updatedRatings = [...ratings];
        updatedRatings[index] = newRating;
        setRatings(updatedRatings);
    };

    // Function to handle image click
    const handleImageClick = (roomName) => {
        setSelectedRoom(roomName);
        setShowForm(true);
    };

    // closing form (put button pa)
    const handleCloseForm = () => {
        setShowForm(false);
        setSelectedRoom("");
    };

    return (
        <div id="RevPage">
            {/* BODY */}
            <div id="reviews">
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <img 
                                    src="https://i.pinimg.com/564x/ca/89/1c/ca891c020ab2de8e1cef204583e00bde.jpg" 
                                    alt="Backroom" 
                                    onClick={() => handleImageClick('Backroom')}
                                />
                            </th>
                            <th>
                                <img 
                                    src="https://i.pinimg.com/564x/0d/85/51/0d8551b6acf18b5d889416c227665df8.jpg" 
                                    alt="Bedroom" 
                                    onClick={() => handleImageClick('Bedroom')}
                                />
                            </th>
                            <th>
                                <img 
                                    src="https://i.pinimg.com/564x/2e/83/cd/2e83cd30d0fc588fca06d2ab907def86.jpg" 
                                    alt="Symposium" 
                                    onClick={() => handleImageClick('Symposium')}
                                />
                            </th>
                        </tr>
                        <tr className="Stars">
                            <td><StarRate rating={ratings[0]} setRating={(newRating) => handleRatingChange(0, newRating)} /></td>
                            <td><StarRate rating={ratings[1]} setRating={(newRating) => handleRatingChange(1, newRating)} /></td>
                            <td><StarRate rating={ratings[2]} setRating={(newRating) => handleRatingChange(2, newRating)} /></td>
                        </tr>
                        <tr className="RoomName">
                            <td>Backroom</td>
                            <td>Bedroom</td>
                            <td>Symposium</td>
                        </tr>
                    </tbody>
                </table>

                <table>
                    <tbody>
                        <tr>
                            <th>
                                <img 
                                    src="https://i.pinimg.com/736x/df/9d/e4/df9de4a240708ba572c60b42c1effbf2.jpg" 
                                    alt="Cinema" 
                                    onClick={() => handleImageClick('Cinema')}
                                />
                            </th>
                            <th>
                                <img 
                                    src="https://i.pinimg.com/564x/81/b6/8d/81b68dad0e5fdfcec266a51fc06325de.jpg" 
                                    alt="Subway" 
                                    onClick={() => handleImageClick('Subway')}
                                />
                            </th>
                            <th>
                                <img 
                                    src="https://i.pinimg.com/564x/e0/21/f3/e021f3b2abb63c8229ff10ee008cccc4.jpg" 
                                    alt="Mall" 
                                    onClick={() => handleImageClick('Mall')}
                                />
                            </th>
                        </tr>
                        <tr className="Stars">
                            <td><StarRate rating={ratings[3]} setRating={(newRating) => handleRatingChange(3, newRating)} /></td>
                            <td><StarRate rating={ratings[4]} setRating={(newRating) => handleRatingChange(4, newRating)} /></td>
                            <td><StarRate rating={ratings[5]} setRating={(newRating) => handleRatingChange(5, newRating)} /></td>
                        </tr>
                        <tr className="RoomName">
                            <td>Cinema</td>
                            <td>Subway</td>
                            <td>Mall</td>
                        </tr>
                    </tbody>
                </table>

                <table>
                    <tbody>
                        <tr>
                            <th>
                                <img 
                                    src="https://i.pinimg.com/564x/b0/3b/2d/b03b2dd43bf560dedd73aebb5caa59a2.jpg" 
                                    alt="Hallway" 
                                    onClick={() => handleImageClick('Hallway')}
                                />
                            </th>
                            <th>
                                <img 
                                    src="https://i.pinimg.com/564x/bb/94/50/bb94501fceaacff9078ad785f02d2d2f.jpg" 
                                    alt="Gym" 
                                    onClick={() => handleImageClick('Gym')}
                                />
                            </th>
                            <th>
                                <img 
                                    src="https://i.pinimg.com/564x/75/e2/79/75e279cad00ac2871d863bfafa491857.jpg" 
                                    alt="Cafe" 
                                    onClick={() => handleImageClick('Cafe')}
                                />
                            </th>
                        </tr>
                        <tr className="Stars">
                            <td><StarRate rating={ratings[6]} setRating={(newRating) => handleRatingChange(6, newRating)} /></td>
                            <td><StarRate rating={ratings[7]} setRating={(newRating) => handleRatingChange(7, newRating)} /></td>
                            <td><StarRate rating={ratings[8]} setRating={(newRating) => handleRatingChange(8, newRating)} /></td>
                        </tr>
                        <tr className="RoomName">
                            <td>Hallway</td>
                            <td>Gym</td>
                            <td>Cafe</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {showForm && (
                <div className="overlay">
                    <div className="form-container">
                        <UserReviewForm roomName={selectedRoom} onClose={handleCloseForm} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ReviewPage;
