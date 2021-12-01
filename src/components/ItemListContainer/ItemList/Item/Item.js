import React from "react";
import { Link } from "react-router-dom";

const Item = ({nombre,foto,link,precio}) => {

    return(
    
    
                
            <div className=" shadow-xl  border  rounded   w-screen md:w-full flex flex-col items-center h-70vh md:max-h-60vh overflow-hidden text-center">
                <div className="w-full h-2/4 md:h-4/6 flex justify-center py-1">
                    <img className="object-cover max-w-full object-center h-full "
                        src={foto} alt="" />

                </div>

                <div className="flex flex-col items-center h-2/4 md:h-2/6 w-full justify-around bg-gray-900 text-white"> 

                    <h2 className="text-xl ">{nombre}</h2>
                    <h2 className="text-2xl ">${precio}</h2>
                    <div > 

                        <Link to={`/product/${link}`}>
                        <button className="bg-yellow-800 opacity-80 hover:opacity-100 py-2 text-white font-bold px-4 rounded  ">
                            Ver producto
                        </button>
                        </Link>
                    </div>
                </div>
                
           </div>
                
          
     

       
    )
}

export default Item;