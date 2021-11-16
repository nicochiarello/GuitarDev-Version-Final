import React,{useState} from 'react'



const ItemCount = (props) => {
    console.log(props)
    
    const [stock, setStock] = useState()
    const [unidades, setUnidades] = useState(0)
    console.log(stock)

    const [consultar,setConsultar] = useState(false)

    const consultarChange = () => {
        setConsultar(true)
        setStock(props.stock)
    }

    const sumar = () => {
        if(stock === 0){
            alert('no hay mas stock')
        }else{
            setUnidades(unidades + 1)
            setStock(stock - 1)
        }
    }

    const restar = () => {
        if(unidades === 1 ){
            alert('no puede seleccionar menos de 1')
        }else{
            setUnidades(unidades - 1)
            setStock(stock + 1)
        }
    }
 
    console.log(stock)
    return(
        <div>



         
                {
                    consultar 
                        ? <div className="flex flex-col justify-center items-center">
                            <p> Stock disponible: {stock}</p>
                            <div className="flex justify-center items-center py-1">
                                <button onClick={restar} className="bg-gray-900 w-6 text-white rounded-full py-1">-</button>
                                <p className="px-4"> Unidades: {unidades}</p>
                                <button onClick={sumar} className="bg-gray-900 w-6 text-white rounded-full py-1" >+</button>

                            </div>
                            <div onClick={()=>props.agregar({unidades})} className="bg-yellow-800 opacity-80 hover:opacity-100 text-white font-bold py-2 px-10 rounded  my-5 flex justify-center">
                                <button >Comprar</button>

                            </div>
                          </div>
                        : <div onClick={consultarChange} className="bg-yellow-800 opacity-80 hover:opacity-100 text-white font-bold py-2 px-10 rounded  my-5">
                            <button >Consultar</button>
                          </div>
                }

         </div>
          
            

       
    )
}



export default ItemCount