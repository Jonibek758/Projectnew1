import { AiFillProject } from "react-icons/ai"; 
import { GiSettingsKnobs } from "react-icons/gi"; 
import { MdOutlineMiscellaneousServices } from "react-icons/md"; 
import { ImProfile } from "react-icons/im";  
import { SiBloglovin } from "react-icons/si"; 
import "./Adminpanel.css"
import { Link, Outlet} from "react-router-dom";



export default function Adminpanel(){
  return(   
    <div className="Paneladmin">
      <div className="left">
        <h1>Agency</h1>
        <hr color="blue"/>
          <div className="btns">
          <Link to="Adprojects">
          <button><SiBloglovin size={20}/>Blog</button>
            </Link>
            <Link to="Adblog">
          <button><AiFillProject size={20}/>Projects</button>
            </Link>
          <Link to="Adprofil">
          <button><ImProfile size={20}/>profil</button>
          </Link>
          <Link to="Adservices">
          <button><MdOutlineMiscellaneousServices size={20}/>Services</button>
          </Link>
          <Link to="Adsettings">
          <button><GiSettingsKnobs size={20}/>Settings</button>
          </Link>
          </div>
          <Link to="/">
          <button className="out">out</button>
          </Link>
      </div>
      <div className="right">
        <Outlet/> 
      </div>
    </div>
  )
}