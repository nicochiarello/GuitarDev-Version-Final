import React, {useContext, useState} from "react";
import { Context } from "../../context/CartContext";
import { Link } from "react-router-dom";
import {getFirestore, doc, setDoc} from 'firebase/firestore'
import app from "../../Firebase/firebaseConfig";
import Form from "../Form/Form";

const firestore = getFirestore(app)
const Cart = () => {
    const {cart, total, remove, removeAll} = useContext(Context)
    const [form,setForm] = useState(false)
    const [showItems, setShowItems] = useState(true)
    const [success, setSuccess] = useState(false)
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
            return form ? "" : `El total del carrito es $${total}`
        }
        
    }


    //funcion para agregar los datos del formulario a Firestore
    const firebaseStoreBuy = async (e,email,nombre,provincia,zip,compra) => {
        e.preventDefault()
        //referencia al doc
        const docRef = doc(firestore, `compras/${email}`)
        //creacion del documento
        const sendDoc = await setDoc(docRef,{
            "usuario": {
                "email": email,
                "nombre": nombre,
                "provincia": provincia,
                "zip": zip
               
            },
            "compra": compra
        }) //manejo de vistas
            setForm(false)
            setSuccess(true)
            removeAll()
            setTimeout(()=>{
            setSuccess(false)
            }, 3000)

        



    }
    //Funcion para controlar el boton back
    const regresarHandler = () => {
        setForm(false)
        setShowItems(true)
    }



    const handleViews = () => {
        setShowItems(false)
        setForm(true)
    }



    
    return(
        <div className="bg-gray-800 min-h-screen flex flex-col items-center ">
            <div className="flex justify-center items-center py-5">
                <p className="text-2xl text-white">{carritoItems()}</p>

            </div>
            {
                form 
                ? <Form firebase={firebaseStoreBuy} regresar={regresarHandler}/>
                : ""
            }

            {
                showItems 
                ?  
                cart.map((item)=> 
                    <div className="w-9/12  border-gray-900 border-b-2  flex justify-center items-center px-3 py-3 my-2 text-white ">
                        <div className="flex flex-col lg:flex-row justify-center items-center  w-3/5">
                            <div className="flex justify-center items-center h-20 w-40 ">
                                <img className="h-full w-full object-cover" src={item.foto} alt="" />

                            </div>
                            
                            <p className="mt-1 lg:ml-5 text-center">{item.nombre}</p>

                            <div className="flex flex-col justify-center items-center h-full w-full">
                                
                                <p className>${item.precio}</p>
                            </div>
                        
                            <p className="flex flex-col justify-center items-center h-full w-full">unidades: {item.cantidad}</p>

                            <button className="bg-yellow-800 opacity-80 hover:opacity-100 text-white font-bold py-2 px-4 rounded  my-5" onClick={()=>remove(item.id, item.cantidad)}>remove</button>
                        </div>
                    
                    </div>
                )
                : ""
            }
            {    (cart.length === 0) 
            ? ""
            : showItems 
                ? 
                <div className="flex flex-col justify-center items-center">
                    <button onClick={()=>handleViews()} className="bg-green-600  text-white font-bold py-2 px-4 rounded  my-5">Terminar compra</button>
                    <button className="bg-red-500  text-white font-bold py-2 px-4 rounded  my-5" onClick={()=>removeAll()}>Vaciar Carrito</button>
                </div>
                : ""
             
            }
            {/* mensaje de exito */}
            {success 
                ? 
                <div className="flex w-screen items-center justify-center  py-5 relative">
                    <div className="w-screen px-4 md:w-1/3 py-8 bg-white rounded-sm text-center flex flex-col items-center text-green-500">
                        <svg className="fill-current absolute w-12 top-1 " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/></svg>
                        <p className="py-4 text-black">Su compra ha sido registrada!</p>
                        <button className="bg-green-500 hover:bg-green-700  text-white font-bold py-2 px-4 rounded w-4/5  my-5" onClick={()=>setSuccess(false)}>Regresar</button>
                    </div>
                </div>
                : ""
            }

        </div>
        
    ) 
}

export default Cart;