import React from 'react'
import logo from "../Assets/images/logo.png"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
    <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-black">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    <Link to="/"><img src={logo} className=" h-24 sm:h-20" alt="Flowbite Logo" /></Link>

                <div className="flex items-center lg:order-2">
                <div>
            <input
              className="rounded-full shadow-inner border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 py-1 px-2 mr-8"
              placeholder="¿Qué estás buscando?  🔍︎"
            />
          </div>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-black">
      <Link to={"/cart"}><CartWidget/></Link>
    </a>
                    <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                      <Link to="/"  className="block py-2 pr-4 pl-3 text-white rounded bg-white lg:bg-transparent lg:text-white lg:p-0 dark:text-white "> Inicio</Link> 
                      <Link to="/product"  className="block py-2 pr-4 pl-3 text-white rounded bg-white lg:bg-transparent lg:text-white lg:p-0 dark:text-white ">Productos</Link>
                      <Link to="/contact"  className="block py-2 pr-4 pl-3 text-white rounded bg-white lg:bg-transparent lg:text-white lg:p-0 dark:text-white "> Contacto</Link>

                    </ul>
                </div>
            </div>
        </nav>
    </header>


</div>

    
    
  )
}

export default NavBar






