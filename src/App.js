import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} /> {/* ✅ Ajout de About */}
        <Route path="/contact" element={<Contact />} /> {/* ✅ Ajout de Contact */}
      </Routes>
      <Footer /> {/* ✅ Footer toujours affiché en bas */}
    </Router>
  );
};

export default App;
