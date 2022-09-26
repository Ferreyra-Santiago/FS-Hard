import React from 'react'
import  buzo from "../Assets/images/buzo.jpg"
import remera from "../Assets/images/remera.jpg"
import pantalon from "../Assets/images/pantalon.jpg"


const Card = ({image, name, price}) => {
  return (
<div className='flex mt-2'>
        <div className="mt-4 space-y-12 lg:space-y-0 lg:grid lg: lg:gap-x-8 max-w-xl mx-auto py-16 px-4 sm:pb-24 lg:-mt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div
            aria-hidden="true"
            className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
        >
            <img
                src={remera}
                alt={`${name} collection`}
                className="w-full h-full object-center object-cover"
            />
        </div>
                

</div>
        <div className="mt-4 space-y-12 lg:space-y-0 lg:grid lg: lg:gap-x-8 max-w-xl mx-auto py-16 px-4 sm:pb-24 lg:-mt-16 sm:px-6 lg:max-w-7xl lg:px-8">

                

        <div
                        aria-hidden="true"
                        className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                    >
                        <img
                            src={buzo}
                            alt={`${name} collection`}
                            className="w-full h-full object-center object-cover"
                        />
                    </div>
</div>
        <div className="mt-4 space-y-12 lg:space-y-0 lg:grid lg: lg:gap-x-8 max-w-xl mx-auto py-16 px-4 sm:pb-24 lg:-mt-16 sm:px-6 lg:max-w-7xl lg:px-8">

                
        <div
            aria-hidden="true"
            className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
        >
            <img
                src={pantalon}
                alt={`${name} collection`}
                className="w-full h-full object-center object-cover"
            />
        </div>
</div>

</div>

  )
}

export default Card