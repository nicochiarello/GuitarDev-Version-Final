import React,{useContext, useState} from "react";
import items from "./NavBarItems";
import { Link } from "react-router-dom";
import { Context } from "../../context/CartContext";
const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const {unidades} = useContext(Context)

    const unidadesHandler = () =>{
        if(unidades === 0){
            return("")
        }else{
            return(unidades)
        }
    }

    const menu = () => {
        return(
            
           <div className="absolute w-full  h-screen bg-gray-800 z-50">
                
                
                <nav className="h-full ">
                    
                    <ul className="flex flex-col h-full justify-around py-2 text-2xl cursor-pointer  text-white">
                    <div className="flex justify-between items-center px-2">
                    <h1 className="text-center text-2xl font-bold capitalize">GuitarDev</h1>
                    <div onClick={()=>setMenuOpen(false)} className=" flex items-center justify-center bg-white rounded-full h-8 w-8">
                        <p  className="text-2xl cursor-pointer text-black mb-2" >x</p>

                    </div>
                    </div>
                        {items.map((i, key)=><Link key={key} to={i.link}><li key={key} onClick={()=>setMenuOpen(false)} className=" py-3 bg-gray-700 px-2 shadow-2xl hover:bg-gray-800 ">{i.name}</li></Link>)}
                        
                    </ul>
                </nav>
            </div>
            
        )
    }

     
    return(
        <>
        {menuOpen 
            ? menu() 
            : 
        
        <div className="container max-w-screen flex justify-between items-center bg-gray-900 text-gray-200 py-6 px-5 xl:px-10 xl:py-5">
        
        
            <div className="menu lg:hidden text-4xl">
                <i onClick={()=>setMenuOpen(true)} className='bx bx-menu cursor-pointer'></i>
            </div>
            <Link to="/">
                <div className="text-3xl font-medium">
                    <h1>GuitarDev</h1>
                </div>

            </Link>
            <div className="nav-items hidden items-center lg:flex ">
                <nav>
                    <ul className="flex justify-center gap-x-9 text-2xl xl:gap- cursor-pointer  ">
                        {items.map((i, key)=><Link key={key} to={i.link}><li key={key} className="hover:text-gray-500">{i.name}</li></Link>)}
                        
                    </ul>
                </nav>
            </div>
            <div className="cart items-center  flex gap-3 text-4xl cursor-pointer relative   py-2">
                <Link to="/User">
                    <i className='bx bxs-user hover:text-gray-500'></i>

                </Link>
                <Link to="/cart">
                    <i className='bx bx-cart hover:text-gray-500'></i>
                    <p className="text-sm absolute top-0 right-0 ">{unidadesHandler()}</p>
                </Link>
            </div>
        </div>
        }
        </>
     
    )
}

export default NavBar