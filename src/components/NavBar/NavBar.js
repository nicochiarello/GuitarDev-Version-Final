import React from "react";
import items from "./NavBarItems";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(

        
        <div className="container min-w-full flex justify-between bg-gray-900 text-gray-200 py-6 px-5 xl:px-10 xl:py-7">
            <div className="menu lg:hidden text-4xl">
                <i className='bx bx-menu'></i>
            </div>
            <div className="text-3xl font-medium">
                <h1>GuitarDev</h1>
            </div>
            <div className="nav-items hidden items-center lg:flex ">
                <nav>
                    <ul className="flex justify-center gap-x-9 text-2xl xl:gap- cursor-pointer  ">
                        {items.map((i, key)=><Link key={key} to={i.link}><li key={key} className="hover:text-gray-500">{i.name}</li></Link>)}
                        
                    </ul>
                </nav>
            </div>
            <Link to="/cart">
            <div className="cart text-4xl cursor-pointer">
                <i className='bx bx-cart hover:text-gray-500'></i>
            </div>
            </Link>
        </div>
    )
}

export default NavBar