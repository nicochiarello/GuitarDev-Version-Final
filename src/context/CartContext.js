import React, {useState} from "react";

const Context = React.createContext()

const CartFunction = ({children}) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [unidades, setUnidades] = useState(0)

    const onAdd = (producto, cantidad) => {
        const itemExiste = cart.find(item => item.id === producto.id)
        if(!itemExiste){
            setCart([...cart, {id: producto.id, precio: producto.precio , cantidad: cantidad, nombre: producto.nombre, foto: producto.foto, stock: producto.stock}])
            setTotal(total +( producto.precio*cantidad))
            setUnidades(unidades + cantidad)
        } else {
            const cartAux = cart.map((item)=>{
                if(item.id===producto.id){
                    item.cantidad+=cantidad
                    setUnidades(unidades + cantidad)
                }
                return item
            })
            setCart(cartAux)
            setTotal(total + (producto.precio*cantidad))
        }
    }

    const remove = (id, cantidad) => {
        const producto = cart.find(i => i.id === id)
        const newItems = cart.filter(i=> i.id !== id)
       
            setCart(newItems)
            setTotal(total - (producto.precio*cantidad))
            setUnidades(unidades - cantidad)
        
    }

    const removeAll = () => {
        setUnidades(0)
        setCart([])
        setTotal(0)
    }
    
    return <Context.Provider value={{cart, total, unidades, onAdd , remove, removeAll}}>
        {children}
    </Context.Provider>
}

export {CartFunction, Context}
