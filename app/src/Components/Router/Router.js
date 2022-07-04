import Login from "../Login/Login";
import NavBar from "../NavBar/NavBar";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useContext } from "react";
import { contexto } from "../Context/Context";
import { useEffect } from "react";
import Register from "../Register/Register";
import Welcome from "../Landing/Landing";



export default function Router() {
  const {loged, setLoged} = useContext(contexto);

 

  useEffect(() => {
    if(loged){
      
      console.log("loged")
    }
  } , [loged])

  if (loged) {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          
        </Routes>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );

  
  

  
    
}