import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Carrousel from "../components/Carrousel/Carrousel";
import Headers from "../components/Headers/Headers";
import ThreeItemGrid from "../components/ThreeItemGrid/ThreeItemGrid";
import CategoryBox from "../components/CategoryBox/CategoryBox";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
return(
    <>
      <NavBar/>
      <Carrousel />
      <Headers title="Ultimos Productos"/>
      <ThreeItemGrid/>
      <CategoryBox/>
      <Footer/>
    </>
)
}




export default HomePage