import "./Creative.css"
import img from "../img/image copy.png"
export default function Creative() {
  return (
    <div id="About" className="Creative">
      <div className="cent">
        <div className="creativetext">
            <img src={img} alt="" />
            <div className="text">
                <h1>Great Creative <br /> Agency <br />
                Since 1993</h1>
                <h5>Creative & Proffesional Creative Agency!</h5>
                <p>It is a long established fact that a reader will be distracted <br /> the readable content of a page when looking at its layout. <br /> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
