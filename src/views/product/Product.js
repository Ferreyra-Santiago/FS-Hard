import React from 'react'
import { Link } from 'react-router-dom'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

const product = () => {
  return (
    <div>
            <div className="text-slate-800 justify-items-center grid grid-cols-5">
      <div className="list-none w-60">
        <h1 className="font-bold text-2xl border-b-2 p-2">productos</h1>
        <ul>
          <li className="p-1 font-semibold">
            <Link to="/"> - Hoodie </Link>
          </li>
          <li className="p-1 font-semibold">
            <Link to="/"> - Remera </Link>
          </li>
          <li className="p-1 font-semibold">
            <Link to="/"> - Pantalon </Link>
          </li>
        </ul>
        <h1 className="font-bold text-2xl border-b-2 mt-6 p-2">Talle</h1>
        <ul>
          <li className="p-1 font-semibold">
            <Link to="/"> - Talle 1 </Link>
          </li>
          <li className="p-1 font-semibold">
            <Link to="/"> - Talle 2 </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-4">
        <ItemListContainer />
      </div>
    </div>
    </div>
  )
}

export default product