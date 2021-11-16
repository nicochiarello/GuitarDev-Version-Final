import React from "react";



const Carrousel = () => {
    return(
            <div className="  w-full h-128 overflow-hidden relative flex ">
                <div className="w-full h-full overflow-hidden relative flex ">
                    <div className="hidden  md:block  h-full w-full ">
                        
                        <img className=" object-cover w-full h-full object-center " src="https://www.wallpapertip.com/wmimgs/4-49112_electric-guitar-wallpaper-4k.jpg" alt="" />

                       
                        <div className="flex flex-col text-gray-200 px-6 absolute bottom-10 right-52 ">
                            <h2 className=" text-4xl">El Gear de tus sueños</h2> 
                            <h3 className=" text-xl text-gray-400">Slash signature</h3>
                            <button className="bg-yellow-800 opacity-80 hover:opacity-100 text-white font-bold py-2 px-4 rounded w-full my-5">
                            Explorar
                            </button>
                        </div> 

                    </div>

                    
                    <img className="md:hidden  lg:object-center  object-cover w-full h-full object-center " src="https://cdn.shopify.com/s/files/1/0255/8659/7968/products/JH-363_720x.jpg?v=1594261162" alt="" />

           
                    <div className="md:hidden flex flex-col text-gray-200 px-6 absolute bottom-10 z-10 w-full">
                        <h2 className=" text-xl">El Gear de tus sueños</h2> 
                        <h3 className=" text-lg text-gray-400">Slash signature</h3>
                        <button className="bg-yellow-800 opacity-80 hover:opacity-100 text-white font-bold py-2 px-4 rounded w-full my-5">
                           Explorar
                        </button>
                    </div>         
                </div>
            
            </div>
            

    )
}

export default Carrousel