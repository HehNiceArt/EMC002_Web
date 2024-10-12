import React from "react";
import './css/ReviewPage.css'
import StarRate from "../components/starrate.js";


function ReviewPage() {
    return (

      <div id="RevPage"> 

    {/*BODY*/}
            <div id="reviews">
                <table>
                     <tr>
                        <th><img src="https://i.pinimg.com/564x/ca/89/1c/ca891c020ab2de8e1cef204583e00bde.jpg"></img></th>
                        <th><img src="https://i.pinimg.com/564x/0d/85/51/0d8551b6acf18b5d889416c227665df8.jpg"></img></th>
                        <th><img src="https://i.pinimg.com/564x/2e/83/cd/2e83cd30d0fc588fca06d2ab907def86.jpg"></img></th>
                     </tr>
                     <tr className="Stars">
                        <td><StarRate/></td>
                        <td><StarRate/></td>
                        <td><StarRate/></td>
                     </tr>
                     <tr className="RoomName">
                        <td>Backroom</td>
                        <td>Bedroom</td>
                        <td>Symposium</td>
                     </tr>
                 </table>

                 <table>
                     <tr className="RoomImages">
                        <th><img src="https://i.pinimg.com/736x/df/9d/e4/df9de4a240708ba572c60b42c1effbf2.jpg"></img></th>
                        <th><img src="https://i.pinimg.com/564x/81/b6/8d/81b68dad0e5fdfcec266a51fc06325de.jpg"></img></th>
                        <th><img src="https://i.pinimg.com/564x/e0/21/f3/e021f3b2abb63c8229ff10ee008cccc4.jpg"></img></th>
                     </tr>
                     <tr className="Stars">
                        <td><StarRate/></td>
                        <td><StarRate/></td>
                        <td><StarRate/></td>
                     </tr>
                     <tr className="RoomName">
                        <td>Cinema</td>
                        <td>Subway</td>
                        <td>Mall</td>
                     </tr>
                 </table>
                 <table>
                     <tr className="RoomImages">
                        <th><img src="https://i.pinimg.com/564x/b0/3b/2d/b03b2dd43bf560dedd73aebb5caa59a2.jpg"></img></th>
                        <th><img src="https://i.pinimg.com/564x/bb/94/50/bb94501fceaacff9078ad785f02d2d2f.jpg"></img></th>
                        <th><img src="https://i.pinimg.com/564x/75/e2/79/75e279cad00ac2871d863bfafa491857.jpg"></img></th>
                     </tr>
                     <tr className="Stars">
                        <td><StarRate/></td>
                        <td><StarRate/></td>
                        <td><StarRate/></td>
                     </tr>
                     <tr className="RoomName">
                        <td>Hallway</td>
                        <td>Gym</td>
                        <td>Cafe</td>
                     </tr>
                 </table>
            </div>
        </div>

  );

}

export default ReviewPage;
