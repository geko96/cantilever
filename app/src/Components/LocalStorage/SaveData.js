import { useContext } from "react";
import { contexto } from "../Context/Context";


export default function SaveData(id,user) {
    const StorageId = JSON.stringify(id);
    

    localStorage.setItem(StorageId, JSON.stringify(user));
}