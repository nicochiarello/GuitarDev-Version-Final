import React, {useEffect, useState} from "react";
import { Loader } from "../Loader/Loader";
import {useParams} from 'react-router-dom'
import ItemList from './ItemList/ItemList';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "../../Firebase/firebaseConfig";
import CategoryFilterNav from "../CategoryFilterNav/CategoryFilterNav";
const db = getFirestore(app)
const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)



    const handleCategory = async (props) => {

        const data = await getDocs(collection(db, 'items'))
        const aux = []
        data.forEach((documento) => {

             aux.push(documento.data())
        })
        
        const brand = aux.filter((i)=> i.subCategory === props)
        
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
                setLoading(false)
            } else{

                setProducts(aux)
                setLoading(false)
            }
        }
        productsFirestore()




    },[categoryId]);



    return(
        <div >
            {categoryId === "guitar" ? <CategoryFilterNav  category = {handleCategory} sort={sort}  ></CategoryFilterNav> : ""}
            {loading ? <Loader></Loader> : <ItemList productos={products}/> }
            
            
           
        </div>
    )



}



export default ItemListContainer;