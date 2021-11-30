import React, {useContext, useState} from "react";
import { Context } from "../../context/CartContext";
import { Link } from "react-router-dom";
import {getFirestore, doc, setDoc} from 'firebase/firestore'
import app from "../../Firebase/firebaseConfig";

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
        })
            setForm(false)
            setSuccess(true)
            removeAll()
            setTimeout(()=>{
            setSuccess(false)
            }, 3000)

        



    }

    const regresarHandler = () => {
        setForm(false)
        setShowItems(true)
    }

    const finalizarCompra = () => {

    }

    const handleForm = () => {
        return(
            <>
            <form onSubmit={(e)=>firebaseStoreBuy(e,e.target.email.value,e.target.name.value,e.target.provincia.value,e.target.zip.value,cart)} class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlfor="Nombre">
                    Nombre
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Juan" />
                <p class="text-red-500 text-xs italic">Campo obligatorio</p>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlfor="Nombre">
                    Email
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="text" placeholder="Juan" />
                <p class="text-red-500 text-xs italic">Campo obligatorio</p>
                </div>

            </div>

            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    Provincia
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="provincia" type="text" placeholder="Mendoza" />
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    Departamento
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="departamento" type="text" placeholder="Lujan" />
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    Zip
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="zip" type="text" placeholder="5509" />
                </div>
            </div>
            <button onClick={()=>finalizarCompra()} class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 my-2 px-4 border border-blue-700 rounded" type="submit">
                Finalizar compra
            </button>
            <button  onClick={()=>regresarHandler()} class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 my-2 px-4 border border-red-700 rounded" type="submit">
                Regresar
            </button>
            </form  >

            </>
        )
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
                ? handleForm()
                : ""
            }

            {
                showItems 
                ?  
                cart.map((item)=> 
                    <div className="w-9/12  border-gray-900 border-b-2  flex justify-center items-center px-3 py-3 my-2 text-white ">
                        <div className="flex flex-col lg:flex-row justify-center items-center  w-3/5">
                            <div className="flex justify-center items-center h-full w-full">
                                <img className="h-full" src={item.foto} alt="" />

                            </div>
                            
                            <p className="mt-1 lg:ml-5">{item.nombre}</p>

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

            {success 
                ? 
                <div className="flex w-screen items-center justify-center  py-5 relative">
                    <div className="w-1/3 py-8 bg-white rounded-sm text-center flex flex-col items-center text-green-500">
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