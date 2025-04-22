import React, { useState } from 'react';
import { X } from 'lucide-react';

const ProductDetailsModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <img 
            src={product.image} 
            alt={product.title} 
            className="mx-auto max-h-64 object-contain mb-6"
          />
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Views:</label>
                <p className="text-gray-800">1,234</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Price:</label>
                <p className="text-gray-800">Rs. {product.price.toLocaleString()}.00</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Condition:</label>
                <p className="text-gray-800">New</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Part Type:</label>
                <p className="text-gray-800">Interior Part</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Brand:</label>
                <p className="text-gray-800">Generic</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Model:</label>
                <p className="text-gray-800">Universal</p>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <button 
                onClick={onClose}
                className="flex-1 bg-gray-200 py-2 rounded"
              >
                Buy Now
              </button>
              <button className="flex-1 bg-red-600 text-white py-2 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product, onViewDetails }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <img 
        src={product.image} 
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-gray-800 text-center font-medium mb-2">{product.title}</h3>
      <p className="text-gray-700 text-center mb-4">Rs. {product.price.toLocaleString()}.00</p>
      <div className="space-y-2">
        <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition-colors">
          Add to cart
        </button>
        <button 
          onClick={() => onViewDetails(product)}
          className="w-full bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

const InteriorParts = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      image: "/alternator.jpg",
      title: "6 speed gearbox",
      price: 10000,
    },
    {
      id: 2,
      image: "/gearbox.jpg",
      title: "6 speed gearbox",
      price: 10000,
    },
    {
      id: 3,
      image: "/filter.jpg",
      title: "6 speed gearbox",
      price: 10000,
    },
    {
      id: 4,
      image: "/yota.jpg",
      title: "6 speed gearbox",
      price: 10000,
    },
    {
      id: 5,
      image: "/mirror.jpg",
      title: "6 speed gearbox",
      price: 10000,
    },
    {
      id: 6,
      image: "/cover.jpg",
      title: "6 speed gearbox",
      price: 10000,
    },
    {
      id: 7,
      image: "/brake.jpg",
      title: "6 speed gearbox",
      price: 10000,
    },
    {
      id: 8,
      image: "/oil.jpg",
      title: "6 speed gearbox",
      price: 10000,
    },
    {
      id: 9,
      image: "/turbo.jpg",
      title: "6 speed gearbox",
      price: 10000,
    }
  ];

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex gap-4">
            <button 
              onClick={() => setFilter('genuine')}
              className={`px-6 py-2 rounded ${
                filter === 'genuine' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-200 hover:bg-red-600 hover:text-white'
              }`}
            >
              Interior parts
            </button>
            <button 
              onClick={() => setFilter('imported')}
              className={`px-6 py-2 rounded ${
                filter === 'imported' 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-200 hover:bg-gray-800 hover:text-white'
              }`}
            >
              Body Parts
            </button>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-gray-600 mb-6">Showing 1-9 of results</p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          <button className="px-4 py-2 bg-white rounded border hover:bg-gray-50">
            Previous
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded">1</button>
          <button className="px-4 py-2 bg-white rounded border hover:bg-gray-50">2</button>
          <button className="px-4 py-2 bg-white rounded border hover:bg-gray-50">3</button>
          <button className="px-4 py-2 bg-white rounded border hover:bg-gray-50">
            Next
          </button>
        </div>

        {/* Product Details Modal */}
        {selectedProduct && (
          <ProductDetailsModal 
            product={selectedProduct}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};

export default InteriorParts;