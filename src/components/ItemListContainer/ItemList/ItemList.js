import React,{useState, useEffect} from "react";
import Item from "./Item/Item";




  
const ItemList = ({productos}) => {




    const [products, setProducts] = useState([])

    useEffect(()=>{
        setProducts(productos)
    },[productos])
    

    const [actualPage, setActualPage] = useState(0)
    const itemsPerPage = 6
    const itemsAcumulated = itemsPerPage * actualPage
    const productsRender = products.slice(itemsAcumulated,(itemsAcumulated+itemsPerPage))

    const pagePlus = () => {
        if((actualPage+1)>=pagesNumber){
            alert("no hay mas elementos para mostrar")
        }else{

            return setActualPage(actualPage + 1)
        }
    }

    const pageMinus = () => {
        if((actualPage-1)===-1){
            alert("no hay mas elementos para mostrar")
        }else{

            return setActualPage(actualPage - 1)
        }
       
    }

    const pagesNumber = Math.ceil(productos.length / itemsPerPage)

    const pages = []

    const renderPageNumber = () => {
        

            for(let i = 1; i <= pagesNumber; i++){
                
              pages.push(i)
            }
      
    }

    const activeClass = (i) => {
        if (i-1===actualPage){
            return "rounded-full h-6 w-6 flex items-center justify-center cursor-pointer bg-gray-900 text-white"
        } else {
            return "rounded-full h-6 w-6 flex items-center justify-center cursor-pointer "
        }
    }
    renderPageNumber()
    
    return(
        <div>

            <div className="px-1 md:px-14 py-1 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full ">
                {productsRender.map((i,key)=> <Item key={key} nombre={i.nombre} foto={i.foto} link={i.link} precio={i.precio} />)}
            </div>
            <div className="flex w-full justify-center items-center gap-10 my-10">

                <p className="cursor-pointer" onClick={pageMinus}><i className='bx bx-chevron-left '></i> Anterior </p>
                <div className="flex justify-center items-center gap-5">

                    {pages.map((i,key)=><p key={key} className={activeClass(i)}  onClick={()=>setActualPage(i-1)}>{i}</p>)}
                </div>

                <p className="cursor-pointer" onClick={pagePlus} >Siguiente<i className='bx bx-chevron-right ' ></i></p>
                

            </div>
        </div> 

    )
}

export default ItemList;