import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import RoomReservationPage from "./pages/RoomReservationPage";
import AdminPage from "./pages/AdminPage";
import RoomViewPage from "./pages/RoomViewPage";
import RoomOverviewPage from "./pages/RoomOverviewPage";
import CustomerFeedbackPage from "./pages/CustomerFeedbackPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ReviewPage from "./components/ReviewPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/*Default location of the web */}
          <Route index element={<Home />} />
          {/*link of the page, which is path*/}
          <Route path="/RoomView" element={<RoomViewPage />} />
          <Route path="/RoomOverview" element={<RoomOverviewPage />} />
          <Route path="/RoomReservation" element={<RoomReservationPage />} />
          <Route path="/CustomerFeedbackPage" element={<CustomerFeedbackPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Admin" element={<AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
