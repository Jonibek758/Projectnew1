import { useEffect, useState  } from "react";
import "./Services.css"
import axios from "axios";
import imgs from "../img/image copy 2.png"
import img4 from "../img/image copy 3.png"


interface Host{
    id:number,
    body:string,
    title:string,
    
}

export default function Services() {
    const [Bisnes, setBisnes] =useState<Host[]>([]);
    useEffect(()=>{
      axios.get("http://localhost:3002/Servises").then((men)=>{
        setBisnes(men.data)
      })
    },[])
    return (
      <div id="Services" className="services">
        <div className="cent">
            <h1 style={{textAlign:"center"}}>Our Services</h1>
            <h5 style={{textAlign:"center"}}>Creative & Proffesional Creative Agency!</h5>
            <div className="Bisnesgrid">
                {
                    Bisnes.map((data)=> <div className="grid">
                        <div className="icon">
                        <img src={imgs} alt="mkkk" />
                        </div>
                        <h1>{data.body}</h1>
                        <p>{data.title}</p>
                    </div>)
                }
            </div>
            <div className="Build">
            
            <div className="Buildtext">
               <div className="textbuild">
               <h1>Our Speciality Sales <br />
                Increase By 250%</h1>
                <div className="textdion">
                    <div className="ico">
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.51 0C26.595 0 30 3.57 30 8.88V21.1365C30 26.43 26.595 30 21.51 30H8.505C3.42 30 0 26.43 0 21.1365V8.88C0 3.57 3.42 0 8.505 0H21.51ZM21.27 10.5C20.76 9.99 19.92 9.99 19.41 10.5L13.215 16.695L10.59 14.07C10.08 13.56 9.24 13.56 8.73 14.07C8.22 14.58 8.22 15.405 8.73 15.93L12.3 19.485C12.555 19.74 12.885 19.86 13.215 19.86C13.56 19.86 13.89 19.74 14.145 19.485L21.27 12.36C21.78 11.85 21.78 11.025 21.27 10.5Z" fill="#545EE1"/>
</svg>
<p>There are many variations of passages of Lorem Ipsum. </p>
                    </div>
                    <div className="ico">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.51 0C26.595 0 30 3.57 30 8.88V21.1365C30 26.43 26.595 30 21.51 30H8.505C3.42 30 0 26.43 0 21.1365V8.88C0 3.57 3.42 0 8.505 0H21.51ZM21.27 10.5C20.76 9.99 19.92 9.99 19.41 10.5L13.215 16.695L10.59 14.07C10.08 13.56 9.24 13.56 8.73 14.07C8.22 14.58 8.22 15.405 8.73 15.93L12.3 19.485C12.555 19.74 12.885 19.86 13.215 19.86C13.56 19.86 13.89 19.74 14.145 19.485L21.27 12.36C21.78 11.85 21.78 11.025 21.27 10.5Z" fill="#545EE1"/>
</svg>
<p>available, but the majority have suffered alteration in some form, by injected humour.</p>
                    </div>
                    <div className="ico">
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.51 0C26.595 0 30 3.57 30 8.88V21.1365C30 26.43 26.595 30 21.51 30H8.505C3.42 30 0 26.43 0 21.1365V8.88C0 3.57 3.42 0 8.505 0H21.51ZM21.27 10.5C20.76 9.99 19.92 9.99 19.41 10.5L13.215 16.695L10.59 14.07C10.08 13.56 9.24 13.56 8.73 14.07C8.22 14.58 8.22 15.405 8.73 15.93L12.3 19.485C12.555 19.74 12.885 19.86 13.215 19.86C13.56 19.86 13.89 19.74 14.145 19.485L21.27 12.36C21.78 11.85 21.78 11.025 21.27 10.5Z" fill="#545EE1"/>
</svg>
<p>If you are going to use a passage of Lorem Ipsum.</p>
                    </div>
                    <div className="ico">
                    <svg width="27" height="27" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.51 0C26.595 0 30 3.57 30 8.88V21.1365C30 26.43 26.595 30 21.51 30H8.505C3.42 30 0 26.43 0 21.1365V8.88C0 3.57 3.42 0 8.505 0H21.51ZM21.27 10.5C20.76 9.99 19.92 9.99 19.41 10.5L13.215 16.695L10.59 14.07C10.08 13.56 9.24 13.56 8.73 14.07C8.22 14.58 8.22 15.405 8.73 15.93L12.3 19.485C12.555 19.74 12.885 19.86 13.215 19.86C13.56 19.86 13.89 19.74 14.145 19.485L21.27 12.36C21.78 11.85 21.78 11.025 21.27 10.5Z" fill="#545EE1"/>
</svg>
<p>need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    </div>
                   
                </div>
               </div>
            </div>
            <img src={img4} alt="" />
            </div>
        </div>
      </div>
    );
  }
  