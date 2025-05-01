import "./Main.css"
import { AiFillPlayCircle } from "react-icons/ai";
import image from "../img/image.png"
export default function Main() {
  return (
    <div className="Main">
     <div className="cent">
       <div className="maintext">
        <div className="text">
        <h1 style={{font:"48px", color:"white"}}>Grow your <br />
Business Google Ads & <br />
Instagram Ads</h1>
        <p>It is a long established fact that a reader <br /> will be distracted by the readable.</p>
        <div className="mainbutton">
            <button>Contact Us</button>
            <button>
            <AiFillPlayCircle />
                Intro Video
            </button>
        </div>
        </div>
    
        <img src={image} alt="rasm mavjud emas" />
       </div>
     </div>
    </div>
  );
}
