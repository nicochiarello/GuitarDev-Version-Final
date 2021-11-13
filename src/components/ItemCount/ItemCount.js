import React,{useState} from "react";


const ItemCount = (props) =>{

    const [stock, setStock] = useState(props.stock)
    const [unidades, setUnidades] = useState(0)


    const sumar = () => {
        if(stock===0){
            alert('no hay stock')
        }else{
            
            setUnidades(unidades + 1)
            setStock(stock - 1)
        }
    }
    const restar = () => {
        if(!unidades===0){
            alert('no hay stock')
        }else{
            
            setUnidades(unidades - 1)
            setStock(stock + 1)
        }
    }

    return(
        <div>
            <button onClick={sumar}>+</button>
            <h3>{unidades}</h3>
            <button onClick={restar}>-</button>
            <h3>Stock disponible {stock}</h3>
            <button onClick={()=>props.agregar({unidades})}>agregar al carrito</button>
        </div>
    )







}

export default ItemCount