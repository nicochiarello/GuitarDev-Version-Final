import React,{useState} from "react";


function CategoryFilterNav(){
    return(
        <Navbar>
            <NavItem title="Categorias">
                <Dropdown ></Dropdown>

    
                

            </NavItem>

            <NavItem title="Busqueda">

            </NavItem>

            <NavItem title="Ordenar por">

            </NavItem>
        </Navbar>
    )
}


function Navbar(props){
    return(
        <div className="w-full  flex cursor-pointer items-center justify-around bg-gray-400 py-3 text-md relative ">
            {props.children}
        </div>
    )
}

function NavItem(props){
    
    const [open, setOpen] = useState(false)



    return(
        <div>
            <p onClick={()=> setOpen(!open)}  className="px-4" >{props.title} </p>
            
           {open ?  props.children   : ""}
            
        </div>
    )
}

function Dropdown(props){
    
   
    
    function DropdownItems(props){
        return(
            <div className=" ">
                <p >{props.title}</p>
                <p >{props.children}</p> 
                
            </div>
        )
    }
    return(

        <div className="absolute my-3  py-3 flex flex-col gap-5 bg-gray-300 pr-9 pl-3 cursor-pointer">
            <DropdownItems title="Guitarras electricas"></DropdownItems>
            <DropdownItems title="Guitarras acusticas"></DropdownItems>
            <DropdownItems title="Guitarras electroacusticas"></DropdownItems>
            <DropdownItems title="Guitarras clasicas"></DropdownItems>
           
            
        </div>


    )
}


export default CategoryFilterNav