import React,{useState, useContext} from "react";
import ItemCount from "../../ItemCount/ItemCount";
import { Context } from "../../../context/CartContext";

  
const ItemDetail = ({producto}) => {


    
    const {onAdd} = useContext(Context)
    const agregar = (props) => {
        onAdd(producto,props.unidades)
        alert(`agregaste ${props.unidades} al carrito`)
        
    }


    return(

        <div >
            <div className="py-2 bg-gray-200">
                <h2 className="text-white text-2xl px-3">{producto.nombre}</h2>
            </div>
            <div className="flex justify-around w-full py-5">
                

                    <div className=" h-128 border-2 border-gray-900 w-2/5 flex align-middle justify-center py-2">
                        <img className="max-h-full" src={producto.foto} alt="" />
                    </div>

                    <div className="flex flex-col justify-around px-4 w-2/5">
                        <p>{producto.descripcion}</p>
                        <div className="flex flex-col justify-center items-center">

                            <h2 className="text-xl">${producto.precio}</h2>


                            <ItemCount stock={producto.stock} agregar={agregar}/>
                        </div>
                    </div>


                
                
            </div>
        </div>

    )
}

export default ItemDetail;