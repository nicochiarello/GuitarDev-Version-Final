import React,{useState} from 'react'
import NavBar from '../components/NavBar/NavBar'
import {getFirestore, doc, getDoc} from 'firebase/firestore'
import app from '../Firebase/firebaseConfig'
import GetUserProductForm from '../components/GetUserProductForm/GetUserProductForm'


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
                <GetUserProductForm userInfo={userInfo} />
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
