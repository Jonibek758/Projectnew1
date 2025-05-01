

import React, { useEffect, useState } from "react";
import "./Client.css";
import axios from "axios";
import "../img/image copy 2.png"

interface Testimonial {
  name: string;
  text: string;
  image: string;
}



const Clients: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
   
  const [testimonials,setTestimonials]=useState<Testimonial[]>([])

  useEffect(()=>{
    axios.get("http://localhost:3002/Projects").then((res)=>{
      setTestimonials(res.data)
    })
  },[])
  return (
    <div id="Feedback" className="Clients">
      <div className="flexclient">
        <div className="clienttext">
          <h1>
            What Our Happy <br />
            Clients Say
          </h1>
          <p>
            Randomised words which don't look even <br />
            slightly believable.
          </p>
        </div>

        <div className="swiper-container">
          <div
            className="swiper-wrapper"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, idx) => (
              <div key={idx} className="swiper-slide">
                <div className={`swiper-card ${idx === current ? "active" : ""}`}>
                  <img className="avatar" src={t.image} alt={t.name} />
                  <div className="text">
                    <h3>{t.name}</h3>
                    <p>{t.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`pagination-dot ${idx === current ? "active" : ""}`}
                onClick={() => setCurrent(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
