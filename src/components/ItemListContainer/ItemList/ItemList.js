
import React, { useEffect, useState } from 'react'
import Item from '../../Item/Item';
import Spinner from '../../Spinner/Spinner';

//Link react-router-dom
import { Link } from "react-router-dom"


const ItemList = () => {
    const [game, usegame] = useState([]);
    const[isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
      setIsLoading(true) 
          fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((response) => usegame(response))
          .catch((err) => console.error(err));
        }, []);
        setTimeout(()=>{            
          setIsLoading(false)
        },2000)
          
      return (
    <div className='flex flex-wrap'>
        {
          isLoading ? <Spinner/> : 
            game.map((items, idx)=>{
                return <Link to={`/detail/${items.id}`} className="m-auto"><div>
                  <Item key={idx} data={items}/></div></Link>
            })
        }
    </div>
  )
}

export default ItemList