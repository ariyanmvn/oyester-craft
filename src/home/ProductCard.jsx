import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group border border-gray-200 rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 bg-white h-full relative">
      {/* Image Container with Hover Swap */}
      <Link to={`/product/${product.id}`} className="block w-full mb-4 relative overflow-hidden aspect-[4/5] rounded-lg">
        {/* Main Image */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain object-center transform transition-opacity duration-500 group-hover:opacity-0 absolute inset-0 z-10"
        />
        {/* Hover Image */}
        <img 
          src={product.hoverImage || product.image} 
          alt={product.name} 
          className="w-full h-full object-contain object-center relative z-0"
        />
      </Link>
      
      {/* Content */}
      <div className="flex-grow flex flex-col items-center justify-end w-full">
        <Link to={`/product/${product.id}`} className="block w-full">
          <h3 className="text-gray-900 font-bold text-lg leading-tight mb-3 hover:text-blue-600 transition-colors line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-center space-x-3 mb-6">
          {product.isNew && (
            <span className="text-gray-400 text-lg line-through decoration-gray-400 font-medium">
              {(product.price * 1.2).toFixed(0)}৳
            </span>
          )}
          <span className="text-gray-900 font-bold text-lg">{product.price}৳</span>
        </div>

        <button 
          onClick={() => addToCart(product)}
          className="bg-[#0066d6] text-white px-8 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors w-max shadow-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
