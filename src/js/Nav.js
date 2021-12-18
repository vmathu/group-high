import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import MenuIcon from '@material-ui/icons/Menu';

import logo from '../assets/logo.svg';
import '../styles/Nav.css'; 

function Nav() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
  <header class="page__header">
    <nav class="navbar__menu">
        <a href="#" class="logo"> 
          <img src={logo} alt="logo" id="logoImg" /> 
          GROUP<span class="regular">HIGH</span>
        </a>
        <ul id="navbar__list">
          <li>
            <a href="#" class="link">Home</a>
          </li>
          <li>
            <a href="#vlog" class="link">Vlog</a>
          </li>
          <li>
            <a href="#podcast" class="link">Podcast</a>
          </li>
          <li>
            <a href="#devices" class="link">Devices</a>
          </li>
          <li>
            <a href="#aboutus" class="link">About Us</a>
          </li>
          <li>
            <a href="#demo" class="link">Demo</a>
          </li>
        </ul>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} id="myMenu">
          <MenuIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <a href="#" class="link">Home</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="#vlog" class="link">Vlog</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="#podcast" class="link">Podcast</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="#devices" class="link">Devices</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="#aboutus" class="link">About Us</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="#demo" class="link">Demo</a>
          </MenuItem>
        </Menu>
    </nav>
  </header>
  );
}

export default Nav;