import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import HomePage from './components/HomePage';
/*import Home from './components/Home'; // Importez vos autres composants
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';*/

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
