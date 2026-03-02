import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const total = cartTotal; // Assuming free shipping or calculated later

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Your cart is currently empty.</h2>
            <Link to="/shop" className="bg-blue-600 text-white px-6 py-3 rounded font-bold hover:bg-blue-700 transition-colors">
              Return to Shop
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Cart Table Section */}
            <div className="w-full lg:w-2/3">
              <div className="border border-gray-200 rounded-sm overflow-hidden overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-700 text-sm font-bold">
                      <th className="py-4 px-4 w-12"></th>
                      <th className="py-4 px-4 w-20"></th>
                      <th className="py-4 px-4">Product</th>
                      <th className="py-4 px-4">Price</th>
                      <th className="py-4 px-4">Quantity</th>
                      <th className="py-4 px-4 text-right">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-b border-gray-100 last:border-0">
                        <td className="py-4 px-4 text-center">
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </td>
                        <td className="py-4 px-4">
                          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-sm" />
                        </td>
                        <td className="py-4 px-4">
                          <Link to={`/product/${item.id}`} className="text-blue-600 font-medium hover:underline text-sm">
                            {item.name}
                          </Link>
                        </td>
                        <td className="py-4 px-4 text-gray-600 text-sm">
                          {item.price}৳
                        </td>
                        <td className="py-4 px-4">
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                            className="w-16 border border-gray-300 rounded px-2 py-1 text-center text-sm focus:outline-none focus:border-blue-500"
                          />
                        </td>
                        <td className="py-4 px-4 text-right text-gray-600 text-sm font-medium">
                          {(item.price * item.quantity).toLocaleString()}৳
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cart Totals Section */}
            <div className="w-full lg:w-1/3">
              <div className="border border-gray-200 rounded-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Cart totals</h2>
                
                <div className="flex justify-between py-4 border-b border-gray-100 text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-600 font-medium">{cartTotal.toLocaleString()}৳</span>
                </div>
                
                <div className="flex justify-between py-4 border-b border-gray-100 text-sm">
                  <span className="text-gray-600">Total</span>
                  <span className="text-gray-600 font-medium">{total.toLocaleString()}৳</span>
                </div>
                
                <Link 
                  to="/checkout"
                  className="block w-full bg-blue-600 text-white text-center font-bold py-3 rounded mt-6 hover:bg-blue-700 transition-colors text-sm"
                >
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
