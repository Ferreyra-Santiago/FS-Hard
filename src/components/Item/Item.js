import React from 'react'

const item = ({data}) => {

  return (
        <div className="max-w-2xl m-auto my-2 ">
        
        
        <div className="bg-white shadow-xl rounded-xl  max-w-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-900">
          <a href="#/">
            <img className="rounded-xl p-2" src={data.thumbnail} alt="product"/>
              </a>
            <div className="px-5 pb-5">
              <a href="#/">
                <h3 className="text-gray-900 font-bold text-xl tracking-tight dark:text-white">{data.title}</h3>
              </a>
              <div className="flex items-center justify-between">
                <span className="text-lg  text-gray-900 dark:text-white">{data.platform}</span>
                <a href="#/"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                  to cart</a>
              </div>
            </div>
        </div>
        </div>
  )
}

export default item