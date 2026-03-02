import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import logo from '../../assets/images/logo.png';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const location = useLocation();
  const { cartCount, isDrawerOpen, openDrawer, closeDrawer } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path ? "text-gray-900 font-bold" : "text-gray-500 font-medium hover:text-gray-900";
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Oyster Craft" className="h-10 md:h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <Link to="/" className={`${isActive('/')} text-sm uppercase tracking-wide transition-colors`}>
              Home
            </Link>
            <Link to="/cart" className={`${isActive('/cart')} text-sm uppercase tracking-wide transition-colors`}>
              Cart
            </Link>
            <Link to="/checkout" className={`${isActive('/checkout')} text-sm uppercase tracking-wide transition-colors`}>
              Checkout
            </Link>
            <Link to="/shop" className={`${isActive('/shop')} text-sm uppercase tracking-wide transition-colors`}>
              Shop
            </Link>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={openDrawer}
              className="relative text-gray-500 hover:text-gray-900 transition-colors focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-2">
            <div className="flex flex-col space-y-2 px-4">
              <Link 
                to="/" 
                className={`${isActive('/')} py-2 text-sm uppercase tracking-wide block`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/cart" 
                className={`${isActive('/cart')} py-2 text-sm uppercase tracking-wide block`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cart
              </Link>
              <Link 
                to="/checkout" 
                className={`${isActive('/checkout')} py-2 text-sm uppercase tracking-wide block`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Checkout
              </Link>
              <Link 
                to="/shop" 
                className={`${isActive('/shop')} py-2 text-sm uppercase tracking-wide block`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
            </div>
          </div>
        )}
      </nav>
      
      {/* Cart Drawer */}
      <CartDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
}
