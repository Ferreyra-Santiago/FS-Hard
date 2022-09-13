import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer'


const ItemDetail = ({data}) => {
    const [buy, setBuy] = useState(true)
    return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
    <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={data.image}/>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{data.category}</h2>
        <h1 class="text-gray-700 font-bold text-2xl mb-3 w-96 hover:text-gray-900 hover:cursor-pointer">{data.title}</h1>
        <div className="flex mb-4">
        </div>
        <p className="leading-relaxed">{data.description}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            <div className="flex ml-6 items-center">
             {
            buy ? <ItemListContainer name={data.title} bolean={setBuy}/> :
             
            <Link to={`/cart`}>
              <button className="inline-block px-6 py-2.5 bg-[#6f5cef] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#7c42e9] hover:shadow-lg focus:bg-bg-[#6f5cef] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#7c42e9] active:shadow-lg transition duration-150 ease-in-out">
                Ir a Pagar
              </button>
            </Link>
            }
            <div className="relative">
                <div className='flex ml-72'>
                <span className="title-font font-medium text-2xl text-gray-900">Price: ${data.price}</span>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
</section>
)
}

export default ItemDetail