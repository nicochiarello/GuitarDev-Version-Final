import React,{useContext} from 'react'
import { Context } from '../../context/CartContext'

const Form = (props) => {
const {cart} = useContext(Context)
        return(
            <>
            <form onSubmit={(e)=>props.firebase(e,e.target.email.value,e.target.name.value,e.target.provincia.value,e.target.zip.value,cart)} class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlfor="Nombre">
                    Nombre
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Juan" />
                <p class="text-red-500 text-xs italic">Campo obligatorio</p>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlfor="Nombre">
                    Email
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="text" placeholder="Juan" />
                <p class="text-red-500 text-xs italic">Campo obligatorio</p>
                </div>

            </div>

            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    Provincia
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="provincia" type="text" placeholder="Mendoza" />
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    Departamento
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="departamento" type="text" placeholder="Lujan" />
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    Zip
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="zip" type="text" placeholder="5509" />
                </div>
            </div>
            <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 my-2 px-4 border border-blue-700 rounded" type="submit">
                Finalizar compra
            </button>
            <button  onClick={()=>props.regresar()} class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 my-2 px-4 border border-red-700 rounded" type="submit">
                Regresar
            </button>
            </form  >

            </>
        
    )
}

export default Form
