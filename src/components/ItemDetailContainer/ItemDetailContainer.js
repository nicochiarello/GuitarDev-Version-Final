import React, {useEffect,useState} from "react";
import Data from "../../data/Data";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const {id} = useParams()
    const [Producto, setProducto] = useState([])
    const [Cargando, setCargando] = useState(false)
    useEffect (() => {
        const listaProductos = new Promise((res) => {
            setTimeout(() => {
                res(Data)
                setCargando(true)
            },2000)
            
        });
        listaProductos.then((res)=>{
            id ? setProducto(res.find((i)=> i.id == id))
            : <h2>No se encontro el item</h2>
        })
    },[id])
    console.log(Producto)
    return(
        Cargando 
        ? <div className="itemcontainer">
             <ItemDetail producto={Producto}/>
             
        </div>
        : <h1>Cargando</h1>
        
    )
}




export default ItemDetailContainer;