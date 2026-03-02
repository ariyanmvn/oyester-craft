import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, removeFromCart, cartTotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[350px] max-w-[80vw] bg-white z-[70] transform transition-transform duration-300 ease-in-out shadow-xl flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b border-gray-100">
          <span className="font-bold text-gray-900">Cart ({cartItems.length})</span>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500">
              <p>Your cart is empty</p>
              <Link 
                to="/shop" 
                onClick={onClose}
                className="mt-4 text-blue-600 hover:underline"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-start group">
                  <div className="w-16 h-16 border border-gray-100 rounded overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer leading-tight mb-1">
                        <Link to={`/product/${item.id}`} onClick={onClose}>
                          {item.name}
                        </Link>
                      </h4>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-300 hover:text-red-500 transition-colors ml-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-sm text-gray-500">
                      {item.quantity} × <span className="font-medium text-gray-700">{item.price}৳</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t border-gray-100 bg-white">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-gray-900 text-lg">Subtotal:</span>
              <span className="font-bold text-gray-900 text-lg">{cartTotal.toLocaleString()}৳</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Link 
                to="/cart" 
                onClick={onClose}
                className="bg-gray-600 text-white font-bold py-3 px-4 rounded text-center hover:bg-gray-700 transition-colors text-sm"
              >
                View cart
              </Link>
              <Link 
                to="/checkout" 
                onClick={onClose}
                className="bg-gray-600 text-white font-bold py-3 px-4 rounded text-center hover:bg-gray-700 transition-colors text-sm"
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
