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
                <div className="flex items-center justify-center">
                    <h3 className="px-1 cursor-pointer ">Categorias</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>

                </div>
                <div className="absolute py-2">
                {categoriesOpen ? 
                <div className="bg-gray-300 flex flex-col gap-4 pl-2 pr-12 py-2">
                    <p className="cursor-pointer" onClick={()=>handleCategory("electricGuitar") }>Guitarras electricas</p>
                    <p className="cursor-pointer" onClick={()=>handleCategory("acousticGuitar")}>Guitarras Acusticas</p>
                    <p className="cursor-pointer" onClick={()=>handleCategory("classicGuitar")}>Guitarras clasicas</p>
                    
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
                <div className="flex items-center justify-center" >
                    <h3 className="px-1 cursor-pointer">Ordenar por</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                <div className="absolute py-3">
                {sortOpen ? 
                <div className="bg-gray-300   py-2 pr-5 pl-1 flex flex-col justify-between items-center gap-4" >
                    <p className="cursor-pointer" onClick={()=>minToHigh()} >Precio (menor a mayor)</p>
                    <p className="cursor-pointer" onClick={()=>highToMin()}>Precio (mayor a menor)</p>
                    
                  
                </div> 
                : ""}


                </div>
            </div>
        )
    }



 return(
     <div className="flex w-full items-center justify-around   py-3 relative mb-3 bg-gray-300">
         <div>
             {categories("Guitarras electricas","Guitarras acusticas","Guitarras clasicas")}
         </div>

         <div>
            {sort()}
         </div>
     </div>
 )
}

export default CategoryFilterNav