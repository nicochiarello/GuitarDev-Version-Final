import React, {useState, useEffect} from "react"
import ItemList from "./ItemList/ItemList"
import Data from "../../data/Data"
import { useParams } from 'react-router-dom'


const ItemListContainer = () =>{
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    
    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect (() => {
        setCargando(true)
        const listaProductos = new Promise((res)=>{
            setTimeout(()=>{
                res(Data)
            }, 2000);
        });
        listaProductos.then((res) => {
            categoryId ? setProductos(res.filter((i) => i.category === categoryId)) 
            : setProductos(res)
           
            setCargando(false)
        });

    },[categoryId]);


    
    
    
    return(
        <div className="grid">
            
            {cargando ? <h2>cargando productos...</h2> : <ItemList productos={productos}/>}
        </div>
    )
}

export default ItemListContainer;