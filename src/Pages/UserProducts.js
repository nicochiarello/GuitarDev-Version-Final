import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import {getFirestore, doc, getDoc} from 'firebase/firestore'
import app from '../Firebase/firebaseConfig'
import { useState } from 'react/cjs/react.development'

const firestore = getFirestore(app)

const UserProducts = () => {
    const [consulta, setConsulta] = useState(true)
    const [products,setProducts] = useState([])


    

    const userInfo = async (e,email) => {
        e.preventDefault()
        //referencia
        const docRef = doc(firestore, `compras/${email}`)
        //buscar documento
        const consulta = await getDoc(docRef)
       if(consulta.exists()){

           const info = consulta.data()
           setProducts(info.compra)
       } else {
           setProducts([])
       }
        setConsulta(false)
            

        

        
    }

   

    return (
        <>
            <NavBar/>
            {consulta 
                ?  
                <div className="py-8 text-center w-screen flex  justify-center">
                    <form onSubmit={(e)=>userInfo(e,e.target.email.value)} className="w-4/6 flex flex-col items-center justify-center  ">
                        <p className="my-6 text-2xl">Consultar compra</p>
                        <div className="w-full flex flex-col items-center justify-center bg-gray-400 px-1 py-5 rounded-sm">
                            
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"  htmlfor="Nombre">
                                Ingrese su email
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="user@user.com" />
                            
                            <button  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 my-2 px-4 border border-blue-700 rounded" type="submit">Consultar</button>
                        </div>
                    </form>
                </div>
                : 
                <div className="flex flex-col items-center justify-center gap-4">

                <h4 className="text-2xl my-2">Detalle de su compra</h4>
                {products.length === 0 
                    ? <p>No hay compras registradas con este email</p>
                    : 
                    products.map((i)=><div className="flex flex-col w-screen items-center justify-center">
                        <div className="flex flex-col justify-center  bg-gray-800 text-white py-3 px-4 gap-4 w-2/5">
                            
                                
                                <div>
                                    <p>{i.nombre}</p>
                                    <p>{i.cantidad} Unidades</p>
                                    <p>${i.precio} (precio unitario)</p>

                                </div>
                            
                        </div>
                    </div>)
                }
                <button className="w-1/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 my-2 px-4 border border-blue-700 rounded" onClick={()=>setConsulta(true)}>Regresar</button>
                </div>
            }
            
            
        </>
    )
}

export default UserProducts
