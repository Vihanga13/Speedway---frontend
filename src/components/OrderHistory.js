import React from 'react';

const OrderCard = ({ image, title, orderNumber, date, quantity, total, status }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-500';
      case 'processing':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    
    <div className="bg-gray-200 p-6 rounded-lg mb-4">
      <div className="flex gap-6">
        {/* Product Image */}
        <div className="w-32 h-32 bg-white p-4 rounded-lg flex-shrink-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Order Details */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <div className="text-gray-700 mb-2">
                ORDER #{orderNumber} | PLACED ON {date}
              </div>
              <div className="text-gray-700 mb-3">
                QUANTITY: {quantity} | TOTAL: ${total}
              </div>
              <span 
                className={`${getStatusColor(status)} text-white px-4 py-1 rounded-md text-sm uppercase`}
              >
                {status}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="text-blue-600 hover:text-blue-800">
                View Details
              </button>
              <button className="text-red-600 hover:text-red-800">
                Track Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrderHistory = () => {
  const orders = [
    {
      id: 1,
      image: "/brake-pads.jpg",
      title: "BRAKE PAD SET",
      orderNumber: "12345",
      date: "JAN 15, 2024",
      quantity: 2,
      total: "89.99",
      status: "delivered"
    },
    {
      id: 2,
      image: "/oil-filter.jpg",
      title: "PREMIUM OIL FILTER",
      orderNumber: "12346",
      date: "JAN 22, 2024",
      quantity: 3,
      total: "45.00",
      status: "delivered"
    },
    {
      id: 3,
      image: "/air-filter.jpg",
      title: "HIGH PERFORMANCE AIR FILTER",
      orderNumber: "12347",
      date: "FEB 5, 2024",
      quantity: 1,
      total: "29.99",
      status: "processing"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">YOUR ORDER HISTORY</h1>
      
      {/* Orders List */}
      <div className="space-y-4">
        {orders.map(order => (
          <OrderCard 
            key={order.id}
            image={order.image}
            title={order.title}
            orderNumber={order.orderNumber}
            date={order.date}
            quantity={order.quantity}
            total={order.total}
            status={order.status}
          />
        ))}
      </div>

      {/* Empty State */}
      {orders.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No orders found</p>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
