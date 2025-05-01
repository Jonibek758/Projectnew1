import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sections from "./Sections/pages/sections";
import Admin from "./Admin/Sign"
import "./App.css"
import Sign from "./Admin/Sign";
import Adminpanel from "./Admin/Adminpanel";
import Adblog from "./Admin/Adblog/Blogs"
import Adprojects from "./Admin/Adproject/Adprojects";
import Adprofil from "./Admin/Adprofil/Adprofils"
import Adservices from "./Admin/Adservices/Adserviceslog"
import Adsettings from "./Admin/Adsettings/Adsettingslog"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Sections/>}></Route>
        <Route path="/Admin/Sign" element={<Admin/>}></Route>
        <Route path="/Home" element={<Sections/>}></Route>
        <Route path="/Sign" element={<Sign/>}></Route>
        <Route path="Admin/Adminpanel" element={<Adminpanel/>}>
        <Route path="Adblog" element={<Adblog/>} />
        <Route path="Adprojects" element={<Adprojects/>} />
        <Route path="Adprofil" element={<Adprofil/>}/>
        <Route path="Adservices" element={<Adservices/>}/>
        <Route path="Adsettings" element={<Adsettings/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
