import React, {useEffect, useState} from "react";

import {useParams} from 'react-router-dom'
import ItemList from './ItemList/ItemList';
import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/firebaseConfig";
import CategoryFilterNav from "../CategoryFilterNav/CategoryFilterNav";
const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])




    const handleCategory = async (props) => {

        const data = await getDocs(collection(db, 'items'))
        const aux = []
        data.forEach((documento) => {

             aux.push(documento.data())
        })
        
        const brand = aux.filter((i)=> i.subCategory === props)
        console.log(props)
        setProducts(brand)
    }

    const sort = async (props) => {
        

           
            const aux = await products.sort((a, b)=>{
                return a.precio - b.precio
            })

            if(props === 1){

                setProducts([])
                
                setProducts(aux)
            } else if(props === 2){
            
                const invertido = []

                for (let i=aux.length - 1; i>=0; --i ){
                    invertido.push(aux[i])
                }
                setProducts(invertido)
                
              
            }
            
        
        
        
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
            {categoryId === "guitar" ? <CategoryFilterNav  category = {handleCategory} sort={sort}  ></CategoryFilterNav> : ""}
            
            <ItemList productos={products}/>
           
        </div>
    )



}



export default ItemListContainer;