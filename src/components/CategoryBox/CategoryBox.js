import React from 'react'
import { Link } from 'react-router-dom'

const CategoryBox = () => {
    return (
       <div className="py-11 flex flex-col items-center justify-center ">

        <h4 className="text-3xl font-bold text-center">Conoce a la familia GuitarDev</h4>
        <div className="flex flex-col md:flex-row gap-11 items-center justify-center py-11 px-2 lg:px-14 ">
            <div className="w-full flex flex-col lg:flex-row md:w-3/6  h-full  border border-gray-700 shadow-2xl">
                <div className="w-full lg:w-2/5 flex items-center justify-center">
                    <img className=" max-w-full object-cover" src="https://images.ctfassets.net/m8onsx4mm13s/2dFAb8SlkE7XnEkkpOkTqr/80b35f971cdb89c74e71b7ceb87f0c20/Strings.png" alt="" />
                </div>

                <div className="w-full lg:w-3/5  flex flex-col justify-center items-center  ">
                    <div className="flex flex-col gap-4 px-7 justify-center items-center lg:justify-start lg:items-start">
                        <h3 className="text-2xl">Pedales</h3>
                        <p >Conoce los mejores pedales para tu rig. El sonido en tu cabeza!</p>
                        <Link to="/category/Pedals">
                        <button className=" bg-gray-900 hover:bg-black text-white font-bold py-3 my-4 px-4 border border-gray-900 rounded">Explorar ahora</button>

                        </Link>
                    
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row md:w-3/6  h-full  border border-gray-700 shadow-2xl">
                <div className="w-full lg:w-2/5 flex items-center justify-center">
                    <img className=" max-w-full object-cover" src="https://images.ctfassets.net/m8onsx4mm13s/76ur9vS6Zm3AzutVJCmoZY/24b6ddc66e37fb9314cd12cdc726666d/Apparel.png" alt="" />
                </div>

                <div className="w-full lg:w-3/5  flex flex-col justify-center items-center  ">
                    <div className="flex flex-col gap-4 px-7 justify-center items-center lg:justify-start lg:items-start">
                        <h3 className="text-2xl">Accesorios</h3>
                        <p >Los mejores accesorios para acompañarte en tu aprendizaje</p>
                        <Link to="/category/Accesories">

                        <button className=" bg-gray-900 hover:bg-black text-white font-bold py-3 my-4 px-4 border border-gray-900 rounded">Explorar ahora</button>
                        </Link>
                    
                    </div>
                </div>
            </div>

        </div>
      </div>   
    )
}

export default CategoryBox
