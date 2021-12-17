import './styles/Footer.css'; 
import wave from './assets/Wave.png'; 

function Footer() {
  return (
    <footer>
        <div class="a">Copyright © 2021 • 21CLC05 - Nhóm High</div>
        <div class="a">All rights reserved</div>
        <img src={wave} alt="wave" style={{width: '100%'}}/>
    </footer>
  );
}

export default Footer;
