import { Link } from 'react-router-dom';

export default function OrderSuccess() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-16 px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-10 w-10 text-green-500" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Thank you for your purchase. Your order has been received and is being processed. You will receive a confirmation email shortly.
        </p>
        
        <Link 
          to="/shop" 
          className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors shadow-sm"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
