import { useContext } from "react";
import { contexto } from "../Context/Context";


export default function Welcome() {
    const {loged, setLoged, user, setUser} = useContext(contexto);

    return (
        <>
        {user}
        </>
    );
}