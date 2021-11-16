import React from "react";
import Item from "./Item/Item";

  
const ItemList = ({productos}) => {
    return(
        <div className="px-14 py-1 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
            {productos.map((i,key)=> <Item key={key} nombre={i.nombre} foto={i.foto} link={i.link} precio={i.precio} />)}
        </div>
    )
}

export default ItemList;