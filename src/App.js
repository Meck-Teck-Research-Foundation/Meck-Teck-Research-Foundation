import "./App.css";
import Sample from "../src/components/Sample";
// import Header from "./components/Header";
import { useState } from "react";
import Home from "./components/Home/Home";
import Image from "./components/Home/Image";
import Quote from "./components/Quote";
import Service from "./components/Service/Service";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Journey from "./components/Journey/Journey";
import Navbar from "./components/navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Socialmedia from "./components/Socialmedia";

const App = () => {
  const [currentPage, setcurrentPage] = useState("home");

  const handleNavigation = (page) => {
    setcurrentPage(page);
  };

  return (
    <Router>
      <Navbar onNavigate={handleNavigation} />

      {/* <Header /> */}
      {/* <Navbar /> */}
      {/* <Logo /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sample />
              <Quote />
              <Home />
              <Image />
              {/* <Queris /> */}
              <Socialmedia />
              <Footer />
            </>
          }
        />
        <Route path="/service" element={<Service />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* {currentPage === "home" && <Home />}
        {currentPage === "service" && <Service />} */}
    </Router>
  );
};

export default App;
