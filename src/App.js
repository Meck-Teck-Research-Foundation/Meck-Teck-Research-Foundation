import "./App.css";
import Sample from "../src/components/Sample";
import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Image from "./components/Home/Image";
import Quote from "./components/Quote";
import Service from "./components/Service/Service";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Journey from "./components/Journey/Journey";
import Navbar from "./components/navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Socialmedia from "./components/Socialmedia";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  // Function to handle navigation
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  // Set the initial page to "home" when the application loads
  useEffect(() => {
    setCurrentPage("home");
  }, []);

  return (
    <Router>
      {/* Define routes */}
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home" />} // Automatically redirect to /home
        />
        <Route
          path="/home"
          element={
            <>
              <Navbar onNavigate={handleNavigation} />
              <Sample />
              <Quote />
              <Home />
              <Image />
              <Socialmedia />
              <Footer />
            </>
          }
        />
        <Route path="/service" element={<Service />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
