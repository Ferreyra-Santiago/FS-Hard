import React from 'react'

const item = ({data}) => {

  return (
        <div className="max-w-2xl m-auto my-2 ">
        
        
        <div className="bg-white shadow-xl rounded-xl  max-w-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-900">
          <a href="#/">
            <img className="rounded-xl p-2 h-96 w-96" src={data.image} alt="product"/>
              </a>
            <div className="px-5 pb-5">
              <a href="#/">
                <h3 className="text-gray-900 font-bold text-xl tracking-tight dark:text-white">{data.title}</h3>
              </a>
              <div className="flex items-center justify-between">
                <span className="text-lg  text-gray-900 dark:text-white">Price: ${data.price}</span>
              </div>
            </div>
        </div>
        </div>
  )
}

export default item