import React from 'react';
import {GiHamburgerMenu } from 'react-icons/gi';
import { MDOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images';

import './Navbar.css';
const Navbar = () => (
  <nav className="app__navbar">

    <div className="app_navbar-logo">
      <img src={images.gericht} alt="" />
    </div>

    <ul className='app__navbar-links'>

      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">About</a></li>
      <li className="p__opensans"><a href="#menu">Menu</a></li>
      <li className="p__opensans"><a href="#awards">Awards</a></li>
      <li className="p__opensans"><a href="#contact">Contact</a></li>
    </ul>
    <div className="app__navbar-login">

      <a href="#login" className="p__opensans">Log In / Register</a>

    <div />

    <a href="/book" className="P__opensans">Book Table</a>

    </div>

  </nav>
);

export default Navbar;
