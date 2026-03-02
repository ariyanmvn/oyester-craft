import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function ProductsSection() {
  // Just showing all products for now, or a subset not already shown in NewArrivals if desired
  // But for simplicity and to fill the grid, let's show all products
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our wide range of high-quality products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
