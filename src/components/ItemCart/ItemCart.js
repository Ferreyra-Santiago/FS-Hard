import { useCartContext } from "../../CartContex";

const ItemCart = ({product}) => {
    const { removeProductInCart} = useCartContext();
  return (
    <div class="flex flex-col max-w-6xl   sm:p-6 dark:bg-gray-900 dark:text-gray-100">
	<ul class="flex flex-col divide-y divide-gray-700">
		<li class="flex flex-col py-6 sm:flex-row sm:justify-between">
			<div class="flex w-full space-x-4 sm:space-x-4">
				<img class="flex-shrink-0  w-60 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={product.image} alt="Polaroid camera"/>
				<div class="flex flex-col justify-between w-full pb-4">
					<div class="flex justify-between w-full pb-2 space-x-2">
						<div class="space-y-1">
							<h3 class="text-lg font-semibold leading-snug sm:pr-8">{product.title}</h3>
							<p class="text-sm dark:text-gray-400">{product.category}</p>
						</div>
						<div class="text-right">
							<p class="text-lg font-semibold">${product.price}</p>
							<p class="text-sm  dark:text-gray-600">cantidad: ({product.quantity})</p>
						</div>
					</div>
					<div class="flex text-sm divide-x">
						<button type="button" class="flex items-center px-2 py-1 pl-0 space-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current">
								<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
								<rect width="32" height="200" x="168" y="216"></rect>
								<rect width="32" height="200" x="240" y="216"></rect>
								<rect width="32" height="200" x="312" y="216"></rect>
								<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
							</svg>
							<span onClick={() => removeProductInCart(product.id)}>Remove</span>
						</button>
						<button type="button" class="flex items-center px-2 py-1 space-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current">
								<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
							</svg>
							<span onClick={()=>alert("se agrego a favorito")}>Add to favorites</span>
						</button>
					</div>
				</div>
			</div>
		</li>
		<li class="flex flex-col  sm:flex-row sm:justify-between">
			
		</li>

	</ul>
	
</div>
  )
}


export default ItemCart




// { <button
// className="p-2 rounded-xl shadow-slate-500/50 bg-red-600 hover:bg-red-500 active:bg-red-300"
// onClick={() => removeProductInCart(product.id)}
// >
// <img src="https://res.cloudinary.com/braian/image/upload/v1663252093/trash_1_emme4a.png" alt=""></img>
// </button> }