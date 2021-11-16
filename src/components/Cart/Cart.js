import React, {useContext} from "react";
import { Context } from "../../context/CartContext";


const Cart = () => {
    const {cart, total, remove, removeAll} = useContext(Context)

    console.log(cart)
    return(
        <div className="bg-gray-800 h-screen flex flex-col items-center ">
            <div className="flex justify-center items-center py-5">
                <p className="text-2xl text-white">El total del carrito es ${total}</p>

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
            <div className="flex flex-col justify-center items-center">
                <button className="bg-green-600  text-white font-bold py-2 px-4 rounded  my-5">Terminar compra</button>
                <button className="bg-red-500  text-white font-bold py-2 px-4 rounded  my-5" onClick={()=>removeAll()}>Vaciar Carrito</button>
            </div>
        </div>
        
    ) 
}

export default Cart;