import React from 'react';
import { Check, Package, Truck, Box } from 'lucide-react';

const OrderTracking = () => {
  const orderDetails = {
    orderNumber: '#12347',
    product: 'HIGH PERFORMANCE AIR FILTER',
    estimatedDelivery: 'AUG 20,2025',
    currentStatus: 'PROCESSING'
  };

  const steps = [
    { id: 1, name: 'ORDER PLACED', icon: Check, status: 'complete' },
    { id: 2, name: 'PROCESSING', icon: Package, status: 'current' },
    { id: 3, name: 'SHIPPED', icon: Truck, status: 'upcoming' },
    { id: 4, name: 'DELIVERED', icon: Box, status: 'upcoming' }
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Order Number Title */}
      <h1 className="text-2xl font-bold">ORDER TRACKING {orderDetails.orderNumber}</h1>

      {/* Progress Tracker */}
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2" />
        
        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              {/* Icon Circle */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 
                ${step.status === 'complete' ? 'bg-green-400' : 
                  step.status === 'current' ? 'bg-green-400' : 'bg-white border-2 border-gray-200'}`}>
                <step.icon className={`w-6 h-6 
                  ${step.status === 'complete' || step.status === 'current' ? 'text-white' : 'text-gray-400'}`} />
              </div>
              
              {/* Step Name */}
              <span className="mt-2 text-sm font-medium">{step.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Order Information Card */}
      <div className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-xl font-bold mb-6">ORDER INFORMATION</h2>
        
        <div className="space-y-4">
          <div className="flex gap-2">
            <span className="font-semibold">ORDER NUMBER :</span>
            <span>{orderDetails.orderNumber}</span>
          </div>
          
          <div className="flex gap-2">
            <span className="font-semibold">PRODUCT :</span>
            <span>{orderDetails.product}</span>
          </div>
          
          <div className="flex gap-2">
            <span className="font-semibold">ESTIMATED DELIVERY :</span>
            <span>{orderDetails.estimatedDelivery}</span>
          </div>
          
          <div className="flex gap-2">
            <span className="font-semibold">CURRENT STATUS :</span>
            <span>{orderDetails.currentStatus}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;