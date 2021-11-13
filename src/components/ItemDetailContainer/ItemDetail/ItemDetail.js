import React,{useState, useContext} from "react";
import ItemCount from "../../ItemCount/ItemCount";
import { Link } from 'react-router-dom'
import { Context } from "../../../context/CartContext";
  
const ItemDetail = ({producto}) => {

    const [buy, setBuy] = useState(false)
    const {onAdd} = useContext(Context)
    const agregar = (props) => {
        setBuy(true)
        onAdd(producto,props.unidades)
        alert(`agregaste ${props.unidades} al carrito`)
        
    }

    

    return(
        <div className="itemdetail">
            <div className="product-title">
                <h2>{producto.nombre}</h2>
            </div>
            <div className="item-description-container">
                <div className="item-description">

                    <div className="product-image">
                        <img src={producto.foto} alt="" />
                    </div>

                    <div className="product-description">
                    <p>{producto.descripcion}</p>
                    <div className="product-price-btn">

                        <h2>${producto.precio}</h2>
                        <div className="btn">
                            <button>Comprar</button>
                        </div>
                    </div>
                    </div>


                </div>
                
            </div>


        {!buy ? <ItemCount stock={producto.stock} agregar={agregar}/> : <Link to='/cart'><button>terminar compra</button></Link>}
        </div>
    )
}

export default ItemDetail;