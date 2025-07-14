import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, CreditCard } from 'lucide-react';
import { CartItem } from '../App';

interface CheckoutProps {
  items: CartItem[];
  totalAmount: number;
  onBack: () => void;
  onProceedToPayment: (checkoutData: any) => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ 
  items, 
  totalAmount, 
  onBack, 
  onProceedToPayment 
}) => {
  const [selectedAddress, setSelectedAddress] = useState('home');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('asap');
  const [paymentMethod, setPaymentMethod] = useState('online');

  const deliveryFee = totalAmount > 99 ? 0 : 30;
  const finalAmount = totalAmount + deliveryFee;

  const addresses = [
    {
      id: 'home',
      type: 'Home',
      address: '123, MG Road, Bengaluru 560001',
      landmark: 'Near Metro Station'
    },
    {
      id: 'office',
      type: 'Office',
      address: '456, Brigade Road, Bengaluru 560025',
      landmark: 'Opposite Coffee Shop'
    }
  ];

  const timeSlots = [
    { id: 'asap', label: 'ASAP (12-15 mins)', price: 0 },
    { id: 'slot1', label: '2:00 PM - 2:30 PM', price: 0 },
    { id: 'slot2', label: '3:00 PM - 3:30 PM', price: 0 },
    { id: 'slot3', label: '4:00 PM - 4:30 PM', price: 0 }
  ];

  const handleProceedToPayment = () => {
    const checkoutData = {
      items,
      address: addresses.find(addr => addr.id === selectedAddress),
      timeSlot: timeSlots.find(slot => slot.id === selectedTimeSlot),
      paymentMethod,
      totalAmount: finalAmount,
      orderId: `ORD${Date.now()}`
    };
    onProceedToPayment(checkoutData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-4">
        <div className="flex items-center space-x-4">
          <button onClick={onBack} className="p-1">
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">Checkout</h1>
        </div>
      </div>

      <div className="px-4 py-4 space-y-6">
        {/* Delivery Address */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center space-x-2 mb-3">
            <MapPin className="h-5 w-5 text-gray-600" />
            <h3 className="font-bold text-gray-900">Delivery Address</h3>
          </div>
          <div className="space-y-3">
            {addresses.map((address) => (
              <label key={address.id} className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="address"
                  value={address.id}
                  checked={selectedAddress === address.id}
                  onChange={(e) => setSelectedAddress(e.target.value)}
                  className="mt-1"
                />
                <div>
                  <div className="font-medium text-gray-900">{address.type}</div>
                  <div className="text-sm text-gray-600">{address.address}</div>
                  <div className="text-xs text-gray-500">{address.landmark}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Delivery Time */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center space-x-2 mb-3">
            <Clock className="h-5 w-5 text-gray-600" />
            <h3 className="font-bold text-gray-900">Delivery Time</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {timeSlots.map((slot) => (
              <label key={slot.id} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="timeSlot"
                  value={slot.id}
                  checked={selectedTimeSlot === slot.id}
                  onChange={(e) => setSelectedTimeSlot(e.target.value)}
                />
                <span className="text-sm text-gray-900">{slot.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center space-x-2 mb-3">
            <CreditCard className="h-5 w-5 text-gray-600" />
            <h3 className="font-bold text-gray-900">Payment Method</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="online"
                checked={paymentMethod === 'online'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="text-gray-900">Pay Online (UPI/Card/Wallet)</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="text-gray-900">Cash on Delivery</span>
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-3">Order Summary</h3>
          <div className="space-y-2 mb-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-gray-600">{item.name} x {item.quantity}</span>
                <span className="font-medium">₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">₹{totalAmount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Fee</span>
              <span className={`font-medium ${deliveryFee === 0 ? 'text-green-600' : ''}`}>
                {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
              </span>
            </div>
            <div className="border-t pt-2 flex justify-between">
              <span className="font-bold text-gray-900">Total</span>
              <span className="font-bold text-gray-900">₹{finalAmount}</span>
            </div>
          </div>
        </div>

        {/* Place Order Button */}
        <button
          onClick={handleProceedToPayment}
          className="w-full bg-yellow-400 text-black py-4 rounded-lg font-bold text-lg hover:bg-yellow-500"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};