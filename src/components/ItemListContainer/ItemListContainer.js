import React, {useEffect, useState} from "react";

import {useParams} from 'react-router-dom'
import ItemList from './ItemList/ItemList';
import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/firebaseConfig";
const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const handleCategory = () => {
        const brand = products.filter((i)=> i.subcategory === "fender")
        setProducts(brand)
    }

    const {categoryId} = useParams()


 
    useEffect (() => {
        

        const productsFirestore = async() => {
            const datos = await getDocs(collection(db, 'items'))
            const aux = []
            datos.forEach((documento) => {

                aux.push(documento.data())
            })
            if(categoryId){
                const categoryFilter = aux.filter((i) => i.category === categoryId)
                setProducts(categoryFilter)
            
            } else{

                setProducts(aux)
            }
        }
        productsFirestore()



      
        // productList.then((res) => {
        //     categoryId ? setProducts(res.filter((i) => i.category === categoryId)) 
        //     : setProducts(res)
           
        //     setLoading(false)
        // })



    },[categoryId]);



    return(
        <div >
            
            <ItemList productos={products}/>
            <button onClick={handleCategory}>Fender</button>
        </div>
    )



}



export default ItemListContainer;