import logo from './assets/logo.svg';
import './styles/Nav.css'; 

function Nav() {
  return (
  <header class="page__header">
    <nav class="navbar__menu">
        <a href="#" class="logo"> 
          <img src={logo} alt="logo" /> 
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
    </nav>
  </header>
  );
}

export default Nav;
