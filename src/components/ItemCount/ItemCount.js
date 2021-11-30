import React,{useState} from 'react'



const ItemCount = (props) => {
    
    
    const [stock, setStock] = useState(props.stock)
    const [unidades, setUnidades] = useState(1)
    const [compraRealizada, setCompraRealizada] = useState(false)

    const [consultar,setConsultar] = useState(false)

    const consultarChange = () => {
        setConsultar(true)
        
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
        if(unidades <= 1 ){
            alert('no puede seleccionar menos de 1')
        }else{
            setUnidades(unidades - 1)
            setStock(stock + 1)
        }
    }
 
    const carrito = (unidades) => {
        return new Promise((res)=>{
            res(props.agregar(unidades))
        })
        .then(()=>setUnidades(1))
        .then(setCompraRealizada(true))
        .then(setTimeout(()=>{
            setCompraRealizada(false)
            
        },2000 ))
    }
    console.log(stock)
    return(
        <div>
            {compraRealizada 
                ? 
                <div className="flex justify-center items-center w-128 h-56  relative text-green-700">
                    
                    <svg className="fill-current absolute w-12 top-7  " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/></svg>
                    
                    <div className=" bg-blue-900 w-128  flex items-center justify-center py-14">
                        
                        <p className="text-white">Su pedido se registro con exito!</p>
                    
                    </div>

                
                </div>            
                :
                
                    consultar 
                        ? <div className="flex flex-col justify-center items-center relative">
                            <p> Stock disponible: {stock}</p>
                            <div className="flex justify-center items-center py-1">
                                {unidades <= 0 ?"" : <button onClick={restar} className="bg-gray-900 w-6 text-white rounded-full py-1">-</button>}
                                
                                <p className="px-4"> Unidades: {unidades}</p>
                                {stock === 0 ? "" : <button onClick={sumar} className="bg-gray-900 w-6 text-white rounded-full py-1" >+</button>}
                                

                            </div>
                            <div onClick={()=>carrito({unidades})} className="bg-yellow-800 opacity-80 hover:opacity-100 text-white font-bold py-2 px-10 rounded  my-5 flex justify-center">
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