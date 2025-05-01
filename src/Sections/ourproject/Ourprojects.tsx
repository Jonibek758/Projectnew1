import "./Ourprojects.css"
import Log1   from "../img/image copy 4.png"
import Log2 from "../img/image copy 5.png"
import Log3 from "../img/image copy 6.png"
import Log4 from "../img/image copy 7.png"
export default function Ourprojects() {
  return (
    <div id="Project" className="Ourprojects">
      <div className="cent">
        <div className="project">
          <h1>Our Projects</h1>
          <p>Creative & Proffesional Creative Agency!</p>
          <ul>
            <li><a href="d">All</a></li>
            <li><a href="d">web UI</a></li>
            <li><a href="d">Mobil UI</a></li>
            <li><a href="d">Branding</a></li>
          </ul>
          <div className="imgs">
              <img className="img" src={Log1} alt="" />
              <img className="img" src={Log3} alt="" />
              <img className="img" src={Log2} alt="" />
              <img className="img" src={Log4} alt="" />              
          </div>
        </div>
      </div>
    </div>
  );
}
