// CartPage.jsx

import { useSelector } from "react-redux";


export default function Cart() {
  // Static dummy cart data (can be replaced with context or API later)

const {items,totalPrice,totalQuantity} = useSelector(state=> state.Cart)
  
  const cartItems = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      quantity: 1,
      image: 'https://via.placeholder.com/100x100?text=Headphones',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 149.99,
      quantity: 2,
      image: 'https://via.placeholder.com/100x100?text=Smart+Watch',
    },
  ];

  // const totalPrice = cartItems.reduce(
  //   (acc, item) => acc + item.price * item.quantity,
  //   0
  // );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-blue-600 font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button className="text-red-500 text-sm hover:underline mt-1">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center border-t pt-6">
            <span className="text-xl font-bold text-gray-800">
              Total: ${totalPrice.toFixed(2)}
            </span>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
