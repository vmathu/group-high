import './styles/Body.css'; 
import ellipse from './assets/ellipse.svg'; 
import image from './assets/image.svg'; 
import image2 from './assets/image2.svg'; 
import Info from './Info'; 

function Body() {
  return (
    <div>
        <h1 class="header">
            <span class="underline pink">Talk</span>, <span class="underline blue">Publish</span> and <span class="underline blue">Spread Love</span> to Others can Change the World
        </h1>
        <div class="quote">
            Technology Made Simple, Do with Talk and Make the World Better.
        </div>
        <div class="info">
            <img src={ellipse} alt="ellipse" class="bg" />
            <img src={image} alt="image" class="image" />
            <div style={{alignSelf:"center"}}>
                <h2 class="title">Make your own vlog / podcast</h2>
                <h3 class="description">It’s always free, now and forever</h3>
                <a href="#started">
                    <button>Get Started</button>
                </a>
                <a href="#demo">
                    <button>Start Listening</button>
                </a>
            </div>
            <img src={image2} alt="image2" class="bg" />
        </div>
        <Info />
        <div>
            <h1 class="header" id="demo">Our demo podcast</h1>
            <div style={{textAlign: "center", margin: "auto"}}>
                <iframe 
                    allowFullScreen="allowFullScreen" 
                    src="https://www.youtube.com/embed/iYPuqDguRro?ecver=1&amp;iv_load_policy=1&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560" 
                    width="560" 
                    height="315" 
                    allowtransparency="true" 
                    frameborder="0">
                </iframe>
            </div>
        </div>
    </div>
  );
}

export default Body;
