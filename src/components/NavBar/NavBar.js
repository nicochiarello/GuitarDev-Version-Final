import NavItems from "./NavItems";
import "./NavBar.css"
import CartWidget from "./CartWidget";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return(
        <>
            <div className="nav-bar">
                <div className="nav-items-container">
                    <div className="logo">
                        
                        <Logo></Logo>
                    </div>

                    <div className="nav-items">
                        <ul>
                        {NavItems.map((item,index) => {
                            return(

                                <li key={index} > 
                                    <NavLink exact activeClassName="active" to={item.link} className={item.cName}  >
                                        {item.name}
                                    </NavLink> 
                                </li>
                                
                                
                            )

                        })}
                        </ul>
                    </div>

                    <div className="cart">
                        <CartWidget></CartWidget>
                    </div>

                </div>
            </div>

        </>
    )
}


export default NavBar;