// SearchPage.jsx
import React, { useState } from 'react';

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-gray-800 font-medium mb-2">{title}</h3>
      <p className="text-gray-700 mb-3">Rs. {price.toLocaleString()}.00</p>
      <button className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-800 transition-colors">
        Add to cart
      </button>
    </div>
  );
};

const SearchPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('interior');
  const [selectedBrand, setSelectedBrand] = useState('toyota');

  const products = [
    {
      id: 1,
      image: "/side-mirror.jpg",
      title: "6 speed gearbox",
      price: 10000,
    },
    {
      id: 2,
      image: "/air-filter.jpg",
      title: "15208 55YCA Oil Filter",
      price: 10000,
    },
    {
      id: 3,
      image: "/meter.jpg",
      title: "6 speed gearbox",
      price: 10000,
    },
    {
      id: 4,
      image: "/oil-filter.jpg",
      title: "6 speed gearbox",
      price: 10000,
    }
  ];

  const brands = [
    'Toyota', 'Honda', 'Nissan', 'Mazda', 'Mitsubishi', 
    'Suzuki', 'BMW', 'Mercedes Benz', 'Audi', 'Any Other'
  ];

  return (
    <div className="container mx-auto px-4 py-8 flex gap-8">
      {/* Sidebar Filters */}
      <div className="w-64 flex-shrink-0">
        {/* Category Filter */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h2 className="font-bold mb-4">CATEGORY</h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === 'interior'}
                onChange={() => setSelectedCategory('interior')}
                className="text-red-600"
              />
              <span>Interior Parts</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === 'body'}
                onChange={() => setSelectedCategory('body')}
                className="text-red-600"
              />
              <span>Body Parts</span>
            </label>
          </div>
        </div>

        {/* Brand Filter */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold mb-4">BRAND</h2>
          <div className="space-y-2">
            {brands.map(brand => (
              <label key={brand} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="brand"
                  checked={selectedBrand === brand.toLowerCase()}
                  onChange={() => setSelectedBrand(brand.toLowerCase())}
                  className="text-red-600"
                />
                <span>{brand}</span>
              </label>
            ))}
          </div>
          <button className="w-full bg-red-700 text-white py-2 rounded mt-4 hover:bg-red-800 transition-colors">
            FILTER
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
