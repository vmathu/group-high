import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles} from '@material-ui/core/styles'; 
import {Hidden} from '@material-ui/core'; 

import MenuIcon from '@material-ui/icons/Menu';

import logo from '../assets/logo.svg';
import '../styles/Nav.css'; 

const useStyle = makeStyles((theme) => ({
  page__header: {
    background: '#FFFFFF', 
    filter: 'drop-shadow(0px 2px 4px rgba(38, 50, 56, 0.16)) drop-shadow(0px 4px 8px rgba(38, 50, 56, 0.08))', 
    position: 'fixed',  
    top: 0, 
    width: '100%', 
    zIndex: 5
  }, 
  navbar__list: {
    display: 'flex'
  }, 
  myMenu: {
    padding: '1em'
  }
}))

function Nav() {
  const classes = useStyle(); 

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    {
      text: 'Home', 
      href: '#'
    }, 
    {
      text: 'Vlog', 
      href: '#vlog'
    }, 
    {
      text: 'Podcast', 
      href: '#podcast'
    }, 
    {
      text: 'Devices', 
      href: '#devices'
    }, 
    {
      text: 'About Us', 
      href: '#aboutus'
    }, 
    {
      text: 'Demo', 
      href: '#demo'
    }, 
  ]

  return (
  <header className={classes.page__header}>
    <nav class="navbar__menu">
        <a href="#" class="logo"> 
          <img src={logo} alt="logo" id="logoImg" /> 
          <Hidden only={['xs', 'sm']}>
            GROUP<span class="regular">HIGH</span>
          </Hidden>
        </a>
        <Hidden only={['xs', 'sm']}>
          <ul className={classes.navbar__list}>
            {navItems.map((item) => (
              <li>
                <a href={item.href} class='link'>{item.text}</a>
              </li>
            ))}
          </ul>
        </Hidden>
        <Hidden only={['md', 'lg', 'xl']}>
          <Button 
            aria-controls="simple-menu" 
            aria-haspopup="true" 
            onClick={handleClick} 
            className={classes.myMenu}
          >
            <MenuIcon />
          </Button>
        </Hidden>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {navItems.map((item) => (
            <MenuItem onClick={handleClose}>
              <a href={item.href} class='link'>{item.text}</a>
            </MenuItem>
          ))}
        </Menu>
    </nav>
  </header>
  );
}

export default Nav;