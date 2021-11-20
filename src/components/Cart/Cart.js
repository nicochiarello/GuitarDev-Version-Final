import React, {useContext} from "react";
import { Context } from "../../context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    const {cart, total, remove, removeAll} = useContext(Context)
    const carritoItems = () => {
        if(cart.length === 0){
            return(
                <div className="flex flex-col items-center">

                    <p>No hay elementos en el carrito</p>
                    <Link to="/">
                        <button className="bg-blue-500  justify-center opacity-80 hover:opacity-100 text-white font-bold py-2 px-4 rounded  my-5">Regresar a la tienda</button>
                    </Link>
                </div>
               
            )
        }else{
            return `El total del carrito es $${total}`
        }
        
    }

    
    return(
        <div className="bg-gray-800 h-screen flex flex-col items-center ">
            <div className="flex justify-center items-center py-5">
                <p className="text-2xl text-white">{carritoItems()}</p>

            </div>
  
            {cart.map((item)=> 
                <div className="w-7/12 h-1/6 border-gray-900 border-b-2  flex justify-between items-center px-3 py-3 my-2 text-white">
                    <div className="flex flex-col justify-center items-center h-full w-1/5">
                        <p className="py-3">Producto:</p>
                        <p>{item.nombre}</p>

                    </div>
                    <div className="flex flex-col justify-center items-center h-full w-1/5">
                        <img className="h-full" src={item.foto} alt="" />

                    </div>
                    <div className="flex flex-col justify-center items-center h-full w-1/5">
                        <p>Precio por unidad:</p>
                        <p className>{item.precio}</p>
                    </div>
                
                    {/* <p>{item.}</p> */}
                    <p className="w-1/5">unidades: {item.cantidad}</p>
                    <button className="bg-yellow-800 opacity-80 hover:opacity-100 text-white font-bold py-2 px-4 rounded  my-5" onClick={()=>remove(item.id, item.cantidad)}>remove</button>
                </div>
            )}
            {    (cart.length === 0) 
            ? ""
            :  <div className="flex flex-col justify-center items-center">
                <button className="bg-green-600  text-white font-bold py-2 px-4 rounded  my-5">Terminar compra</button>
                <button className="bg-red-500  text-white font-bold py-2 px-4 rounded  my-5" onClick={()=>removeAll()}>Vaciar Carrito</button>
               </div>
            }

        </div>
        
    ) 
}

export default Cart;