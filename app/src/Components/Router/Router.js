import Login from "../Login/Login";
import NavBar from "../NavBar/NavBar";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useContext, useState } from "react";
import { Context } from "../Context/Context";
import { useEffect } from "react";
import Register from "../Register/Register";



export default function Router() {
  const {loged, setLoged} = useState(true);

  
  

  if (loged) {
    return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path="/status" />
        </Routes>
      </BrowserRouter>
    );
  }else {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />

            </Routes>
        </BrowserRouter>
      );
  }
    
}