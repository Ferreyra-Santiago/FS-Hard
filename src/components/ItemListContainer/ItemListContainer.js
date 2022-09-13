import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting, name, bolean }) => {
  return (
    <div>
      <h2 className='text-4xl text-center ml-4 underline font-serif'>{greeting}</h2>
    <ItemCount stock = {5} initial = {0}  name={name} bolean={bolean}/>
    </div>
    )
}

export default ItemListContainer