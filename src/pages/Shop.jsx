import { useState, useMemo } from 'react';
import ProductCard from '../home/ProductCard';
import { products } from '../data/products';
import SEO from '../components/seo/SEO';

export default function Shop() {
  const [sortOption, setSortOption] = useState('default');

  const sortedProducts = useMemo(() => {
    let sorted = [...products];
    switch (sortOption) {
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'latest':
        // Assuming higher ID means newer, or prioritize isNew
        return sorted.sort((a, b) => b.id - a.id);
      default:
        return sorted;
    }
  }, [sortOption]);

  return (
    <div className="bg-white min-h-screen pb-16">
      <SEO 
        title="Shop" 
        description="Browse our collection of handcrafted products. Find the perfect bag or accessory for you." 
      />
      {/* Shop Header */}
      <div className="bg-[#fcf8f3] py-12 mb-12">
        <h1 className="text-3xl font-bold text-center text-gray-900">Shop</h1>
      </div>

      <div className="container mx-auto px-4">
        {/* Sort/Filter Bar */}
        <div className="flex justify-end mb-8">
          <select 
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1 text-sm text-gray-600 focus:outline-none bg-white"
          >
            <option value="default">Default sorting</option>
            <option value="price-asc">Sort by price: low to high</option>
            <option value="price-desc">Sort by price: high to low</option>
            <option value="latest">Sort by latest</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
