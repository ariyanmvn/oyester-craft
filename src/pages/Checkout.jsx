import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const total = cartTotal;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    // In a real app, you would send the order data to a backend here
    clearCart();
    setFormData({ name: '', phone: '', address: '' });
    navigate('/order-success');
  };

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Progress Steps (Visual only) */}
        <div className="flex justify-center items-center space-x-4 text-sm text-gray-500 mb-12">
          <span className="text-gray-400">Cart</span>
          <span className="text-gray-300">&gt;</span>
          <span className="font-medium text-black">Information</span>
          <span className="text-gray-300">&gt;</span>
          <span className="text-gray-400">Finish</span>
        </div>

        <div className="max-w-xl mx-auto border border-gray-200 rounded-lg p-8 shadow-sm">
          <form onSubmit={handleSubmit}>
            {/* Billing Details */}
            <h2 className="text-lg font-bold text-gray-900 mb-6">Billing details</h2>
            
            <div className="space-y-4 mb-8">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="আপনার নাম *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="আপনার মোবাইল নাম্বার *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="আপনার সম্পূর্ণ ঠিকানা *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            {/* Your Order */}
            <h3 className="text-md font-bold text-gray-900 mb-4">Your order</h3>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm font-medium text-gray-500 border-b border-gray-100 pb-2 mb-2">
                <span>Product</span>
                <span>Subtotal</span>
              </div>
              
              <div className="space-y-3 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 border border-gray-200 rounded p-0.5">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-sm text-gray-700">{item.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">× {item.quantity} {item.price * item.quantity}৳</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">{total.toLocaleString()}৳</span>
                </div>
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">{total.toLocaleString()}৳</span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-gray-50 p-4 rounded mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm font-medium text-gray-700">Cash on delivery</span>
              </div>
              <div className="pl-5">
                <p className="text-xs text-gray-500 bg-white p-3 border border-gray-200 rounded">
                  Pay with cash upon delivery.
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="/privacy-policy" className="text-blue-600 hover:underline">privacy policy</a>.
            </p>

            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white font-bold py-4 rounded hover:bg-blue-700 transition-colors text-sm uppercase flex justify-center items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              PLACE ORDER {total.toLocaleString()}৳
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
