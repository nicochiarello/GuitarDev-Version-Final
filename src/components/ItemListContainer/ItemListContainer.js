import React, {useEffect, useState} from "react";
import Data from "../../data/Data";
import {useParams} from 'react-router-dom'
import ItemList from './ItemList/ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect (() => {
        setLoading(true)

        const productList = new Promise((res)=>{
            setTimeout(()=>{
                res(Data)
            }, 2000);
        });

        productList.then((res) => {
            categoryId ? setProducts(res.filter((i) => i.category === categoryId)) 
            : setProducts(res)
           
            setLoading(false)
        });

    },[categoryId]);

    return(
        <div >
            
            {loading ? <h2>cargando productos...</h2> : <ItemList productos={products}/>}
        </div>
    )



}



export default ItemListContainer;