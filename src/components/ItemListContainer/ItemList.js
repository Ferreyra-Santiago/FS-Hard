
import React, { useEffect, useState } from 'react'
import Item from './Item';


const ItemList = () => {
    const [game, usegame] = useState([]);
    
    useEffect(()=>{
        const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "c04a1efecbmshca1167a45ce1001p1bdebdjsnb3f02b45fe3c",
              "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com"
            }
          };
          
          fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", options)
            .then((response) => response.json())
            .then((response) => usegame(response))
            .catch((err) => console.error(err));
          
    }, []);

    const array = game.splice(0, 32);
      return (
    <div className='flex flex-wrap'>
        {
            array.map((games)=>{
                return <Item key={games.id} data={games}/>
            })
        }
    </div>
  )
}

export default ItemList