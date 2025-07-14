import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, Package, Truck, MapPin } from 'lucide-react';

interface OrderTrackingProps {
  orderDetails: any;
  onBackToHome: () => void;
}

export const OrderTracking: React.FC<OrderTrackingProps> = ({ 
  orderDetails, 
  onBackToHome 
}) => {
  const [currentStatus, setCurrentStatus] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState(12);

  const trackingSteps = [
    { id: 0, title: 'Order Confirmed', description: 'Your order has been placed', icon: CheckCircle, completed: true },
    { id: 1, title: 'Preparing', description: 'Store is preparing your order', icon: Package, completed: true },
    { id: 2, title: 'Out for Delivery', description: 'Your order is on the way', icon: Truck, completed: false },
    { id: 3, title: 'Delivered', description: 'Order delivered successfully', icon: MapPin, completed: false }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStatus(prev => {
        if (prev < 3) {
          const newStatus = prev + 1;
          if (newStatus === 2) setEstimatedTime(5);
          if (newStatus === 3) setEstimatedTime(0);
          return newStatus;
        }
        return prev;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-4">
        <h1 className="text-xl font-bold text-gray-900">Track Order</h1>
        <p className="text-sm text-gray-600">Order ID: {orderDetails.orderId}</p>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Delivery Status */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-gray-900">
                {currentStatus === 3 ? 'Delivered!' : `Arriving in ${estimatedTime} mins`}
              </h3>
              <p className="text-sm text-gray-600">
                {orderDetails.address.address}
              </p>
            </div>
            {estimatedTime > 0 && (
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {estimatedTime} mins
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            <div 
              className="absolute left-4 top-0 w-0.5 bg-green-500 transition-all duration-1000"
              style={{ height: `${(currentStatus / 3) * 100}%` }}
            ></div>
            
            <div className="space-y-6">
              {trackingSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isCompleted = index <= currentStatus;
                const isCurrent = index === currentStatus;
                
                return (
                  <div key={step.id} className="flex items-start space-x-4">
                    <div className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full ${
                      isCompleted ? 'bg-green-500' : 'bg-gray-200'
                    }`}>
                      <IconComponent className={`h-4 w-4 ${
                        isCompleted ? 'text-white' : 'text-gray-500'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-medium ${
                        isCompleted ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </h4>
                      <p className={`text-sm ${
                        isCompleted ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {step.description}
                      </p>
                      {isCurrent && (
                        <div className="flex items-center space-x-1 mt-1">
                          <Clock className="h-3 w-3 text-blue-500" />
                          <span className="text-xs text-blue-500">In progress</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-3">Order Items</h3>
          <div className="space-y-3">
            {orderDetails.items.map((item: any) => (
              <div key={item.id} className="flex items-center space-x-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.store} • {item.weight}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹{item.price}</p>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Partner */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-3">Delivery Partner</h3>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">RK</span>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">Rajesh Kumar</h4>
              <p className="text-sm text-gray-600">Delivery Executive</p>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Call
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {currentStatus === 3 && (
            <button
              onClick={onBackToHome}
              className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-500"
            >
              Order Again
            </button>
          )}
          <button className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50">
            Need Help?
          </button>
        </div>
      </div>
    </div>
  );
};