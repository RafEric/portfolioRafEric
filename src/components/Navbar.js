import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Fichier CSS personnalisé
import { useState, useEffect } from 'react';
import logo from '../assets/icon/online-payment-svgrepo-com.svg';
import navicon1 from '../assets/icon/django-svgrepo-com(1).svg';
import  navicon2 from '../assets/icon/djangoproject-svgrepo-com.svg';
import navicon3 from '../assets/icon/online-shopping-website-svgrepo-com.svg';

const MyNavbar = () => {
  const [ activeLink, setActiveLink] = useState('HomePage');
  const [ scrolled, seScrolled] =  useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
    } else {
      seScrolled(false);
    }
  }
  window.addEventListener("scroll", onScroll);
  return() => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (

    <Navbar expand="lg" className={scrolled ? "scrolled": "" } >
       <Navbar.Brand as={Link} to="/" className="navbar-brand ">
        <img className="logo"src={logo} alt='logo'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
            Home
          </Nav.Link>
          <Nav.Link as={Link}  to="/about" className={activeLink === 'competenses' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/services" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
            Services
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
            Contact
          </Nav.Link>
        </Nav>
        <span className="navbar-text">
          <div className="social-icon">
            <a href="#home"><img className="icon"src={navicon1} alt=""/></a>
            <a href="#competense"><img src={navicon2} className="icon" alt=""/></a>
            <a href="#contact"><img src={navicon3} className="icon" alt=""/></a>
          </div>
          <button className="vvd" onClick={() => console.log('connect')}><span>connect</span></button>
        </span>
        
      </Navbar.Collapse>
     
    </Navbar>
  );
};

export default MyNavbar;
