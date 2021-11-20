import React, {useEffect,useState} from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/firebaseConfig";

import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])


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
            
            } else{

                
            }
        }
        productsFirestore()
  
    }, [id]);
    
        return(
       
            <div >
                <ItemDetail producto={products}/>
                
            </div>

      
            
        )
     }


export default ItemDetailContainer;