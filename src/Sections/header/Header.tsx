import { BiUserCircle } from "react-icons/bi"; 
import { Link } from "react-router-dom";
import "./Header.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Header() {
 
  return (
    
    <div className="header">
      <div className="cent">
       <div className="headlength">
       <svg width="140" height="36" viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.548 26H24.876L15.84 0.835998H9.972L0.936 26H6.228L7.884 21.212H17.892L19.548 26ZM16.524 17.18H9.252L12.888 6.668L16.524 17.18ZM61.22 9.872C63.812 9.872 65.9 11.528 65.972 14.156H56.504C56.9 11.42 58.808 9.872 61.22 9.872ZM70.688 19.736H65.252C64.604 21.068 63.416 22.148 61.256 22.148C58.736 22.148 56.72 20.492 56.468 17.54H71.048C71.156 16.892 71.192 16.244 71.192 15.596C71.192 9.656 67.124 5.732 61.364 5.732C55.46 5.732 51.356 9.728 51.356 16.028C51.356 22.292 55.568 26.324 61.364 26.324C66.296 26.324 69.608 23.408 70.688 19.736ZM88.8387 26H93.8787V14.3C93.8787 8.792 90.5667 5.768 85.9227 5.768C83.3667 5.768 81.2067 6.848 79.9107 8.54V6.056H74.8707V26H79.9107V14.984C79.9107 11.78 81.6747 10.052 84.4107 10.052C87.0747 10.052 88.8387 11.78 88.8387 14.984V26ZM97.3755 16.028C97.3755 22.292 101.479 26.324 107.24 26.324C112.208 26.324 115.556 23.516 116.636 19.268H111.2C110.588 21.068 109.292 22.004 107.204 22.004C104.396 22.004 102.524 19.916 102.524 16.028C102.524 12.14 104.396 10.016 107.204 10.016C109.292 10.016 110.624 11.096 111.2 12.788H116.636C115.556 8.324 112.208 5.732 107.24 5.732C101.479 5.732 97.3755 9.764 97.3755 16.028ZM128.824 19.988L123.676 6.056H118.024L126.016 25.496L121.696 35.432H127.06L139.408 6.056H134.044L128.824 19.988Z" fill="white"/>
<path d="M26.9575 15.956C26.9575 22.184 30.9895 26.324 36.0655 26.324C39.1975 26.324 41.4655 24.776 42.6535 23.048V26.144C42.6535 29.852 40.4935 31.436 37.7215 31.436C35.2015 31.436 33.3295 30.248 32.8255 28.448H27.8215C28.3255 33.02 32.2495 35.828 37.8655 35.828C44.4175 35.828 47.7295 31.544 47.7295 26.144V6.056H42.6535V8.9C41.4655 7.172 39.1975 5.732 36.0655 5.732C30.9895 5.732 26.9575 9.728 26.9575 15.956ZM42.6535 16.028C42.6535 19.808 40.1335 21.896 37.3615 21.896C34.6615 21.896 32.1055 19.736 32.1055 15.956C32.1055 12.176 34.6615 10.16 37.3615 10.16C40.1335 10.16 42.6535 12.248 42.6535 16.028Z" fill="#111764"/>

</svg>
      <ul>
        <li><a href="/">Home</a></li> 
        <li><a href="#About">About</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Project">Project</a></li>
        <li><a href="#Feedback">Feedback</a></li>
        <li><a href="#Blog">Blog</a></li>
        <li><a href="#Contact">Contact</a></li>
        <li></li> 
        <DropdownButton id="dropdown-item-button" title="Dropdown button">
      <Dropdown.ItemText style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div className="user"><BiUserCircle size={40} />
        
        </div>
        <p style={{color:"gray"}}>User:Jonibek</p>
      </Dropdown.ItemText>
      <Dropdown.Item style={{background:"black"}} as="button" ><Link style={{background:"red", width:"100px"}} to="/Admin/Sign">Sign up</Link></Dropdown.Item>
      <Dropdown.Item as="button">Super admin</Dropdown.Item>
      <Dropdown.Item as="button">Login out</Dropdown.Item>
    </DropdownButton>
      </ul>
       </div>
      </div>
    </div>      
  );
}

