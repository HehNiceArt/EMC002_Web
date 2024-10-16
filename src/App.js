import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import RoomReservationPage from "./pages/RoomReservationPage";
import AdminPage from "./pages/AdminPage";
import RoomViewPage from "./pages/RoomViewPage";
import CustomerFeedbackPage from "./pages/CustomerFeedbackPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import AARooms from './components/ARoom'
import AAmenities from "./components/AAmenities";
import AReservation from './components/AReservations';
import AEvents from './components/AEvents';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/*Default location of the web */}
          <Route index element={<Home />} />
          {/*link of the page, which is path*/}
          <Route path="/RoomView" element={<RoomViewPage />} />
          <Route path="/RoomReservation" element={<RoomReservationPage />} />
          <Route path="/Rooms" element={<CustomerFeedbackPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Admin" element={<AdminPage />} />
          <Route path="/Admin/Rooms" element={<AARooms />} />
          <Route path="/Admin/Amenities" element={<AAmenities />} />
          <Route path="/Admin/Reservation" element={<AReservation />} />
          <Route path="/Admin/Events" element={<AEvents />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
