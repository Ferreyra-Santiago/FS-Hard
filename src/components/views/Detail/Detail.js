import React, { useEffect, useState } from 'react'
import ItemListContainer from '../../ItemListContainer/ItemListContainer';
//import params para id
import { useParams } from "react-router"

const Detail = () => {
const [detail, usedetail] = useState({})

let {id} = useParams()
console.log(id)

useEffect(()=>{
  
  
  fetch(`https://fakestoreapi.com/products/${id}`)
  .then((response) => response.json())
  .then((response) => usedetail(response))
  .catch((err) => console.error(err));
},[id])
console.log(detail)

  return (
    <div>
<section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={detail.image}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{detail.category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{detail.title}</h1>
        <div className="flex mb-4">
        </div>
        <p className="leading-relaxed">{detail.description}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
          <div className="flex ml-6 items-center">
              <ItemListContainer name={detail.title}/>
            <div className="relative">
              <div className='flex ml-72'>
              <span className="title-font font-medium text-2xl text-gray-900">Price: ${detail.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Detail