import React,{useState} from "react";


const CategoryFilterNav = (props) => {
  
    const [categoriesOpen, setCategoriesOpen] = useState(false)
    const [sortOpen, setSortOpen] = useState(false)


    const handleCategory = (category) => {
        props.category(category)
        setCategoriesOpen(false)
    }
    const categories = (a,b,c) => {
        return(
            <div className="" onMouseOver={()=>setCategoriesOpen(true)} onMouseLeave={()=>setCategoriesOpen(false)}>
                <h2 >Categorias</h2>
                <div className="absolute py-2">
                {categoriesOpen ? 
                <div className="bg-white">
                    <p onClick={()=>handleCategory("electricGuitar") }>{a}</p>
                    <p onClick={()=>handleCategory("acousticGuitar")}>{b}</p>
                    <p onClick={()=>handleCategory("classicGuitar")}>{c}</p>
                    
                </div> 
                : ""}


                </div>
            </div>
        )
    }

    const sort = (a,b,c,d) => {
        
        const minToHigh = () => {
            props.sort(1)
            setSortOpen(false)
        }
        const highToMin = () => {
            props.sort(2)
            setSortOpen(false)
        }

        return(
            <div className="" onMouseOver={()=>setSortOpen(true)} onMouseLeave={()=>setSortOpen(false)}>
                <h2 >Ordenar por</h2>
                <div className="absolute py-2">
                {sortOpen ? 
                <div className="bg-white">
                    <p onClick={()=>minToHigh()} >Precio (menor a mayor)</p>
                    <p onClick={()=>highToMin()}>Precio (mayor a menor)</p>
                    
                  
                </div> 
                : ""}


                </div>
            </div>
        )
    }



 return(
     <div className="flex w-full items-center my-1 justify-around border-t border-b border-gray-900 py-3 relative">
         <div>
             {categories("guitarras electricas","guitarras acusticas", "guitarras clasicas")}
         </div>

         <div>
            {sort()}
         </div>
     </div>
 )
}

export default CategoryFilterNav