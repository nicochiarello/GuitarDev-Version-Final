import React, {useEffect,useState} from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "../../Firebase/firebaseConfig";
import { Loader } from "../Loader/Loader";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";

const db = getFirestore(app)

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect (() => {
        

        const productsFirestore = async() => {
            const datos = await getDocs(collection(db, 'items'))
            
            const aux = []
            datos.forEach((documento) => {
                
                aux.push(documento.data())
            })
            
            if(id){
                const categoryFilter = aux.find((i) => i.id === id)
                setProducts(categoryFilter)
                setLoading(false)
                console.log(aux)
            
            } else{

                
            }
        }
        productsFirestore()
        
    }, [id]);
    
        return(
       
            <div >
                {loading ? <Loader></Loader> : <ItemDetail producto={products}/> }
                
                
            </div>

      
            
        )
     }


export default ItemDetailContainer;