import React from "react";
import Data from "../../data/Data";

const ThreeItemGrid = () => {
    return(
        <div className="px-14 py-1 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full  ">
            {Data.slice(0,3).map(((i,key) =>
            <div key={key} className=" border border-gray-600  flex flex-col items-center max-h-128">
                <img className=" object-cover max-h-full max-w-full object-center h-4/6 "
                    src={i.foto} alt="" />
                
                <h2 className="text-2xl py-4">{i.nombre}</h2>
             
                <button className="bg-yellow-800 opacity-80 hover:opacity-100 text-white font-bold py-2 px-4 rounded w-1/2 my-5">
                    Ver producto
                </button>
                
           </div>
             ))}




           

        </div>
    )
}

export default ThreeItemGrid