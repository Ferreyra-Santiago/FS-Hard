import React from 'react'
import logo from "../Assets/images/logo.png"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
    <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-black">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    <Link to="/"><img src={logo} class=" h-24 sm:h-20" alt="Flowbite Logo" /></Link>

                <div class="flex items-center lg:order-2">
                <div>
            <input
              className="rounded-full shadow-inner border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 py-1 px-2 mr-8"
              placeholder="¿Qué estás buscando?  🔍︎"
            />
          </div>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-black">
      <Link to={"/cart"}><CartWidget/></Link>
    </a>
                    <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                
                <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                      <Link to="/" href="#responsive-header" className="block py-2 pr-4 pl-3 text-white rounded bg-white lg:bg-transparent lg:text-white lg:p-0 dark:text-white "> Inicio</Link> 
                      <Link to="/product" href="#responsive-header" className="block py-2 pr-4 pl-3 text-white rounded bg-white lg:bg-transparent lg:text-white lg:p-0 dark:text-white ">Productos</Link>
                      <Link to="/contact" href="#responsive-header" className="block py-2 pr-4 pl-3 text-white rounded bg-white lg:bg-transparent lg:text-white lg:p-0 dark:text-white "> Contacto</Link>

                    </ul>
                </div>
            </div>
        </nav>
    </header>

  <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
</div>

    
    
  )
}

export default NavBar






{/* <nav className="flex items-center justify-between flex-wrap bg-slate-200 p-6">
<div>
  <Link to="/"><img className='h-14 w-52' src={logo} alt="logo"/></Link>
</div>
<div className="block lg:hidden">
  <button id='boton' className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black hover:bg-indigo-400 transition ease-in duration-500">
    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
  </button>
</div>
<div id='menu' className="w-full lg:text-right text-left block flex-grow lg:flex lg:items-center lg:w-auto mr-0">
  <div className="text-sm lg:flex-grow">
  <Link to="/" href="#responsive-header" className=" text-2xl block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-black mr-4">
      Inicio
    </Link>
    <Link to="/contact" href="#responsive-header" className=" text-2xl block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-black mr-4">
      Contacto
    </Link>
    <Link to="/product" href="#responsive-header" className=" text-2xl block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-black mr-4">
      productos
    </Link>

    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-stone-900 hover:text-black mr-4">
    <img className='h-4 w-10' src={darkMode} alt="darkmode"/>
    </a>
    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-black">
      <Link to={"/cart"}><CartWidget/></Link>
    </a>
  </div>
  <div>
    <a href="#/" className="lg:ml-16 inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-black hover:bg-indigo-400 hover:border-black mt-4 lg:mt-0 transition ease-in duration-500">Login</a>
  </div>
</div>
</nav> */}
