import { Outlet} from "react-router-dom";
import "./sections.css"
import Blog from "../blog/Blog";
import Clients from "../client/Clients"
import Creative from "../creative/Creative"
import Header from "../header/Header";
import Main from "../main/Main";
import Services from "../services/Services";
import Ourprojects from "../ourproject/Ourprojects";
import Footer from "../footer/Footer";

export default function sections() {
  return (
   <div className="Home">
  
     <Outlet/>
        <Header></Header>
        <Main></Main>
        <Creative></Creative>
        <Services></Services>
        <Ourprojects></Ourprojects> 
        <Clients></Clients>
        <Blog></Blog>
        <Footer></Footer>

   </div>
  );
}
