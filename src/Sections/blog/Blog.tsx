import { useEffect, useState } from "react";
import "./Blog.css";
import Log8 from "../img/image copy 8.png"
import axios from "axios";


interface Blogpush{
  title:string,
  img:string
}

export default function Blog() {
  const [current, setCurrent] = useState(0);
  const [slides,setslides]=useState<Blogpush[]>([])
   
  useEffect(()=>{
    axios.get("http://localhost:3002/Blog").then((res)=>{
      setslides(res.data)
    })
  },[])
  
  return (
    <div id="Blog" className="Blog">
      <div className="blog-section">
        <h2 className="blog-title">Blog</h2>
        <p className="blog-subtitle">Creative & Proffesional Creative Agency!</p>
      </div>

      <div className="swiper-blog-container">
        <div
          className="blog-slider"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="blog-slide" key={index}>
              <div>
                <img src={Log8} alt="Blog Image" />
                <h3>{slide.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="blog-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${current === index ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
