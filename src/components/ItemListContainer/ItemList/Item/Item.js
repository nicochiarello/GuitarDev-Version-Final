import React from "react";
import { Link } from "react-router-dom";

const Item = ({nombre,foto,link,precio}) => {

    return(
    
    
                
            <div className="   shadow-xl  border  rounded   flex flex-col items-center max-h-128">
                <div className="w-full h-2/3   flex justify-center py-1">
                    <img className="object-cover max-h-full max-w-full object-center h-full py-2"
                        src={foto} alt="" />

                </div>

                <div className="flex flex-col items-center w-full bg-gray-900 text-white"> 

                    <h2 className="text-xl py-2">{nombre}</h2>
                    <h2 className="text-2xl py-2">${precio}</h2>
                    <div > 

                        <Link to={`/product/${link}`}>
                        <button className="bg-yellow-800 opacity-80 hover:opacity-100 text-white font-bold py-2 px-4 rounded  my-5">
                            Ver producto
                        </button>
                        </Link>
                    </div>
                </div>
                
           </div>
                
          




           

       
    )
}

export default Item;