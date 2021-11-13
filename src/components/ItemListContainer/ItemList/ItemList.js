import React from "react";
import Items from "../Item/Items";

  
const ItemList = ({productos}) => {
    return(
        <>
            {productos.map((producto, key)=> 
                <Items key={key} title={producto.nombre} price={producto.precio} link={producto.link} foto={producto.foto} >

                </Items>
            )}
        </>
    )
}

export default ItemList;