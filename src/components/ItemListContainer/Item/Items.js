import React from "react";
import { Link } from "react-router-dom";

const Items = (props) => {
    // const setlink = () => {
    //  <Link to="/"/>
    // }
    return(
        <Link to={`/product/${props.link}`}>
        <div className="item" onClick={(e) => <Link to="/"/>}>
           
                
                <h2>{props.title}</h2>
                <div className="img-item-list">
                    <img src={props.foto} alt="" />

                </div>
                <h3>${props.price}</h3>

            
            {/* <img src="" alt="" /> */}


        </div>
        </Link>
    )
}

export default Items;