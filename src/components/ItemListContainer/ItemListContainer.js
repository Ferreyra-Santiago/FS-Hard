import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting, name }) => {
  return (
    <div>
      <h2 className='text-4xl text-center ml-4 underline font-serif'>{greeting}</h2>
    <ItemCount stock = {10} initial = {0}  name={name}/>
    </div>
    )
}

export default ItemListContainer