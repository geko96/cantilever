import { useContext } from "react";
import { contexto } from "../Context/Context";


export default function LoadData() {
    const StorageId = "session";
    const { loged, setLoged, user, setUser } = useContext(contexto);
    
    if (localStorage.getItem(StorageId)) {
        setLoged(true);
        setUser(JSON.parse(localStorage.getItem(StorageId)));
    }
}