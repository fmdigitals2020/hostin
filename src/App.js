import React from "react";
import Index from "./Pages/Index";
import Webhosting from "./Pages/Webhosting";
import AboutUs from "./Pages/About_Us";
import Contact from "./Pages/Contact";
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <Routes>
       <Route path='*' element={<Index />} />
       <Route path={"/about"} element={<AboutUs/>}/>
       <Route path={"/webhosting"} element={<Webhosting/>}/>
       <Route path={"/contact"} element={<Contact/>}/>
       <Route path={"/"} element={<Index/>}/>
    </Routes>
     );
}

export default App;
