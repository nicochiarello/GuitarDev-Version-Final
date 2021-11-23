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
            <div className="py-4 bg-gray-300 px-16 shadow-md">
                <h2 className="text-black text-2xl px-3">{producto.nombre}</h2>
            </div>
            <div className="flex justify-around w-full py-5">
                

                    <div className=" h-128 border-2  w-2/5 flex align-middle justify-center py-2 rounded-md" >
                        <img className="max-h-full" src={producto.foto} alt="" />
                    </div>

                    <div className="flex flex-col justify-around px-4 w-2/5 ">
                        
                        <div className="flex flex-col  ">
                            <div>
                                <p>{producto.descripcion}</p>
                            </div>
                            <div className="flex text-yellow-400 my-4">
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>

                            </div>
                        </div>
                        <div className="flex flex-col py-6 justify-center items-center border-t-4">

                            <h2 className="text-2xl">${producto.precio}.00</h2>


                            <ItemCount stock={producto.stock} agregar={agregar}/>
                        </div>
                    </div>


                
                
            </div>
        </div>

    )
}

export default ItemDetail;