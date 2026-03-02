import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 text-gray-800 pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:pr-8">
            <div className="mb-6">
              <Link to="/" className="flex flex-col w-16 items-start">
                <img src="/images/logo.png" alt="logo" />
              </Link>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed text-justify">
              Oyster Craft is a Bangladeshi brand that creates eco-friendly jute and leather bags, tissue boxes, and handcrafted accessories.
            </p>
          </div>

          {/* Important Links Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-0.5 after:bg-gray-300">
              Important links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about-us" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/about-us" className="text-gray-600 hover:text-blue-600 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/about-us" className="text-gray-600 hover:text-blue-600 transition-colors">Return and Refund Policy</Link></li>
              <li><Link to="/contact-us" className="text-gray-600 hover:text-blue-600 transition-colors">Contact us</Link></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-0.5 after:bg-gray-300">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link to="/shop" className="text-gray-600 hover:text-blue-600 transition-colors">Cart</Link></li>
              <li><Link to="/checkout" className="text-gray-600 hover:text-blue-600 transition-colors">Checkout</Link></li>
              <li><Link to="/shop" className="text-gray-600 hover:text-blue-600 transition-colors">Shop</Link></li>
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-0.5 after:bg-gray-300">
              Get In Touch
            </h4>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-start">
                 <p className="flex flex-col">
                  <span>Email: info@oystercraftbd.com</span>
                </p>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-900 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p>+8801796199989</p>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-900 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p>Mirpur 6, Block D, Dhaka 1216, Dhaka,Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        {showScroll && (
          <button 
            onClick={scrollTop} 
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded shadow-lg hover:bg-blue-700 transition-colors z-50"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        )}
      </div>
    </footer>
  );
}
