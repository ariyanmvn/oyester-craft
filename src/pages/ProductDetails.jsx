import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import SEO from '../components/seo/SEO';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    // Find product by id (converting string id to number)
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    // Reset selected image when product changes
    setSelectedImage(0);
  }, [id]);

  if (!product) {
    return <div className="container mx-auto px-4 py-16 text-center">Loading...</div>;
  }

  // Use gallery if available, otherwise fallback to main image
  const images = product.gallery || [product.image];

  return (
    <div className="bg-white min-h-screen py-12">
      <SEO 
        title={product.name} 
        description={product.description || `Buy ${product.name} from Oyster Craft. ${product.features?.[0] || ''}`}
        keywords={`oyster craft, ${product.name}, ${product.category}, buy ${product.name}`}
      />
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>{product.category}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 mb-16">
          {/* Image Gallery Section */}
          <div className="w-full md:w-1/2">
            {/* Main Image */}
            <div className="border border-gray-200 rounded-lg overflow-hidden mb-4 relative aspect-square">
              <img 
                src={images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover object-center"
              />
              <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            
            {/* Thumbnails */}
            <div className="flex space-x-4">
              {images.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 border rounded-md overflow-hidden ${selectedImage === index ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-200'}`}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center space-x-3 mb-6">
              {product.originalPrice && (
                <span className="text-gray-400 text-xl line-through decoration-gray-400">
                  {product.originalPrice.toLocaleString()}৳
                </span>
              )}
              <span className="text-gray-900 text-3xl font-bold">
                {product.price.toLocaleString()}৳
              </span>
            </div>

            <div className="mb-8">
              <span className="text-gray-600 text-sm">Category: </span>
              <span className="text-blue-500 text-sm font-medium">{product.category}</span>
            </div>

            {/* Short Features List */}
            <ul className="space-y-3 mb-8">
              {product.features && product.features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-700 text-sm">
                  <span className="mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex border border-gray-300 rounded-md items-center">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <input 
                type="text" 
                value={quantity} 
                readOnly 
                className="w-12 text-center text-gray-900 font-medium focus:outline-none"
              />
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
            <button 
              onClick={() => addToCart(product, quantity)}
              className="bg-blue-600 text-white px-8 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-colors uppercase text-sm"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

        {/* Tabs Section */}
        <div className="border border-gray-200 rounded-lg p-8">
          <div className="flex space-x-8 border-b border-gray-200 mb-6">
            <button 
              className={`pb-2 font-bold text-sm ${activeTab === 'description' ? 'text-gray-900 border-b-2 border-black' : 'text-gray-500'}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={`pb-2 font-bold text-sm ${activeTab === 'reviews' ? 'text-gray-900 border-b-2 border-black' : 'text-gray-500'}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews (0)
            </button>
          </div>

          {activeTab === 'description' && (
            <div className="text-gray-700 space-y-6">
              {product.details ? (
                <>
                  {/* Bangla Section */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{product.details.bn.title}</h3>
                    <p className="text-sm leading-relaxed mb-4 text-justify">
                      {product.details.bn.description}
                    </p>
                    {product.details.bn.features && (
                      <div className="mt-4">
                        <h4 className="font-bold text-gray-900 mb-2">{product.details.bn.featuresHeader}</h4>
                        <ul className="space-y-2 text-sm">
                          {product.details.bn.features.map((feature, index) => (
                            <li key={index} className="leading-relaxed">
                              {/* Assuming feature strings might have bold parts like "Label: value", but here we just render string */}
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {product.details.bn.outro && (
                      <p className="text-sm leading-relaxed mt-4 text-justify">
                        {product.details.bn.outro}
                      </p>
                    )}
                  </div>

                  {/* English Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{product.details.en.title}</h3>
                    <p className="text-sm leading-relaxed mb-4 text-justify">
                      {product.details.en.description}
                    </p>
                    {product.details.en.features && (
                      <div className="mt-4">
                        <h4 className="font-bold text-gray-900 mb-2">{product.details.en.featuresHeader}</h4>
                        <ul className="space-y-2 text-sm">
                          {product.details.en.features.map((feature, index) => (
                            <li key={index} className="leading-relaxed">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {product.details.en.outro && (
                      <p className="text-sm leading-relaxed mt-4 text-justify">
                        {product.details.en.outro}
                      </p>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* Fallback for products without bilingual details */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                  </div>
                  
                  {product.features && (
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Product Highlights:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {product.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <p className="text-sm leading-relaxed mt-4">
                    The {product.name} celebrates the harmony of tradition and modernity, offering more than just functionality—it's a statement of grace, craftsmanship, and everyday sophistication.
                  </p>
                </>
              )}
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div className="text-gray-600 text-sm">
              No reviews yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
