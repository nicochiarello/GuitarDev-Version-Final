import React from 'react'

const Footer = () => {
    return (
        <div className="bg-gray-900 w-full h-60 text-white flex flex-col justify-center items-center">
            <h3 className="text-2xl py">CONTACTO</h3>
            <div className="flex gap-3 text-5xl pt-3">
                <i class='bx bxl-instagram'></i>
                <i class='bx bxl-facebook' ></i>
                <i class='bx bxl-linkedin' ></i>
                <i class='bx bxl-github' ></i>

            </div>
            <div className="pt-2 text-center">
               <p>Desarollado por Nico Chiarello para CoderHouse 😊</p> 
               
            </div> 

        </div>
    )
}

export default Footer
