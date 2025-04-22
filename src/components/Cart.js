// CartPage.jsx
import React, { useState } from 'react';

const CartItem = ({ image, title, price, stock }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-4 flex flex-col">
      <div className="flex items-center space-x-4">
        <img 
          src={image} 
          alt={title} 
          className="w-32 h-32 object-contain"
        />
        <div className="flex-1">
          <p className="text-sm text-gray-500">#{stock}</p>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-red-500 font-medium">${price.toFixed(2)}</p>
          
          <div className="flex items-center mt-4 space-x-4">
            <div className="flex items-center border rounded">
              <button 
                onClick={decreaseQuantity}
                className="px-3 py-1 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button 
                onClick={increaseQuantity}
                className="px-3 py-1 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>
          
          <p className="text-green-600 text-sm mt-2 flex items-center">
            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
            In stock
          </p>
         
        </div>
      </div>
    </div>
  );
};

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      stock: "152",
      image: "/oil-filter.jpg",
      title: "Tail Light Assembly",
      price: 579.00
    },
    {
      id: 2,
      stock: "152",
      image: "/alternator.jpg",
      title: "Tail Light Assembly",
      price: 579.00
    }
  ];

  const orderSummary = {
    subtotal: 1000.00,
    shipping: 600.00,
    tax: 137.00,
    total: 1737.00
  };

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-medium mb-6">Cart (1)</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items - Takes up 2 columns */}
          <div className="lg:col-span-2">
            {cartItems.map(item => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>

          {/* Order Summary - Takes up 1 column */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-xl font-medium mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sub Total:</span>
                  <span>${orderSummary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping estimate:</span>
                  <span>${orderSummary.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax estimate:</span>
                  <span>${orderSummary.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-medium pt-3 border-t">
                  <span>ORDER TOTAL:</span>
                  <span>${orderSummary.total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
