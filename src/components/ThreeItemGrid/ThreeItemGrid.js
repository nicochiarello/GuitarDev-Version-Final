import React from "react";
import { Link } from "react-router-dom";
import Data from "../../data/Data";
import ItemCount from "../ItemCount/ItemCount";

const ThreeItemGrid = () => {
    return(
        <div className="px-14 py-1 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
            {Data.slice(0,3).map(((i,key) =>
            <div key={key} className="  border border-gray-600   flex flex-col items-center max-h-96">
                <div className="w-full h-2/3  border-b-2 border-black flex justify-center py-1">
                    <img className=" object-cover max-h-full max-w-full object-center h-full py-2 "
                        src={i.foto} alt="" />

                </div>
                <div className="flex flex-col items-center w-full bg-gray-900 text-white ">
                    <h2 className="text-2xl py-2">{i.nombre}</h2>
                    <Link to={`/product/${i.link}`}>
                    <button className="bg-yellow-800 opacity-80 hover:opacity-100 text-white font-bold py-2 px-4 rounded my-5 w-full">
                        Ver producto
                    </button>
                    </Link>

                </div>
                
                
           </div>
             ))}




           

        </div>
    )
}

export default ThreeItemGrid