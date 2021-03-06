import '../styles/Body.css'; 
import ellipse from '../assets/ellipse.svg'; 
import image from '../assets/image.svg'; 
import image2 from '../assets/image2.svg'; 
import Info from './Info'; 
import AboutUs from './AboutUs'; 

import {makeStyles} from '@material-ui/core/styles'; 

const useStyle = makeStyles((theme) => ({
    iframe: {
        [theme.breakpoints.up('sm')]: {
            width: '560px'
        }
    }, 
    bg: {
        width: '7%', 
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }, 
    image: {
        width: '30%', 
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }, 
    info: {
        display: 'flex', 
        justifyContent: 'center', 
        textAlign: 'center', 
        [theme.breakpoints.up('md')]: {
            justifyContent: 'space-between', 
            textAlign: 'left'
        }
    }
}))

function Body() {
    const classes = useStyle(); 

  return (
    <div>
        <h1 class="header" style={{color: 'black'}}>
            Hành trình trở thành <span class="underline pink">Vlogger</span>, <span class="underline blue">Podcaster</span> chuyên nghiệp
        </h1>
        <div class="quote">
        Chia sẻ về những hành trang bạn cần chuẩn bị cho bước đầu tiên của mình
        </div>
        <div className={classes.info}>
            <img src={ellipse} alt="ellipse" className={classes.bg} />
            <img src={image} alt="image" className={classes.image} />
            <div style={{alignSelf:"center"}}>
                <h2 class="title">Tạo vlog / podcast cho riêng mình</h2>
                <h3 class="description">Bây giờ hoặc không bao giờ</h3>
                <a href="#started">
                    <button>Get Started</button>
                </a>
                <a href="#demo">
                    <button>Start Listening</button>
                </a>
            </div>
            <img src={image2} alt="image2" className={classes.bg} />
        </div>
        <Info />
        <h1 class="header" id="aboutus">About Us</h1>
        <AboutUs /> 
        <div>
            <h1 class="header" id="demo">Our demo podcast</h1>
            <div style={{textAlign: "center", margin: "auto"}}>
                <iframe 
                    allowFullScreen="allowFullScreen" 
                    src="https://www.youtube.com/embed/voF0Ot6RgZA?ecver=1&amp;iv_load_policy=1&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560" 
                    width="560" 
                    height="315" 
                    allowtransparency="true" 
                    frameborder="0"
                    className={classes.iframe}
                >
                </iframe>
            </div>
        </div>
    </div>
  );
}

export default Body;
