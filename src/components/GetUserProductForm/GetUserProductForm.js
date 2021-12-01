import React from 'react'

const GetUserProductForm = (props) => {
    return (
                <div className="py-8 text-center w-screen flex  justify-center">
                    <form onSubmit={(e)=>props.userInfo(e,e.target.email.value)} className="w-4/6 flex flex-col items-center justify-center  ">
                        <p className="my-6 text-2xl">Consultar compra</p>
                        <div className="w-full flex flex-col items-center justify-center bg-gray-400 px-1 py-5 rounded-sm">
                            
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"  htmlfor="Nombre">
                                Ingrese su email
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="user@user.com" />
                            
                            <button  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 my-2 px-4 border border-blue-700 rounded" type="submit">Consultar</button>
                        </div>
                    </form>
                </div>
    )
}

export default GetUserProductForm
