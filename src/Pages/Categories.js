import React from "react";
import CategoryFilterNav from "../components/CategoryFilterNav/CategoryFilterNav";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

import NavBar from "../components/NavBar/NavBar";


const Categories = () => {
    return(
        <>
            <NavBar/>
            <CategoryFilterNav/>
            <ItemListContainer />
        </>
    )
}




export default Categories