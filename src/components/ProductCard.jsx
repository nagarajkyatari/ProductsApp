// ProductCard.jsx

import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/CartSlice";


export default function ProductCard({ product }) {
  const dispatch = useDispatch();



  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        <p className="text-gray-600 mt-1 text-sm">{product.description}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-blue-600 font-bold">${product.price}</span>
          <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition"
            onClick={()=>dispatch(addItem(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
