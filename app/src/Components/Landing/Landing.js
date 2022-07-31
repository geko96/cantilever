import { useContext } from "react";
import { contexto } from "../Context/Context";
import './Landing.css';

export default function Welcome() {
    const {loged, setLoged, user, setUser} = useContext(contexto);

    

    return (
        <>
            <h1 className="welcomeBanner">Bienvenido {user.name}</h1>
        </>
    );
}