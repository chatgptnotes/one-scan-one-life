'use client';

import { useState } from 'react';
import PaymentButton from '../components/PaymentButton';

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    amount: 1000, // Default amount in INR
  });
  
  const [paymentStatus, setPaymentStatus] = useState<{
    success?: boolean;
    message?: string;
    data?: any;
  } | null>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'amount' ? Number(value) : value,
    }));
  };
  
  const handlePaymentSuccess = (response: any) => {
    setPaymentStatus({
      success: true,
      message: 'Payment successful!',
      data: response,
    });
  };
  
  const handlePaymentError = (error: any) => {
    setPaymentStatus({
      success: false,
      message: `Payment failed: ${error.message || 'Unknown error'}`,
    });
  };
  
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Make a Payment</h1>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Full Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="John Doe"
          required
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="john@example.com"
          required
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
          Phone Number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="contact"
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleInputChange}
          placeholder="9876543210"
          required
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
          Amount (₹)
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="amount"
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
          min="1"
          required
        />
      </div>
      
      <div className="flex items-center justify-center">
        <PaymentButton
          amount={formData.amount}
          name={formData.name}
          email={formData.email}
          contact={formData.contact}
          buttonText="Pay ₹ 1,000"
          onPaymentSuccess={handlePaymentSuccess}
          onPaymentError={handlePaymentError}
        />
      </div>
      
      {paymentStatus && (
        <div
          className={`mt-6 p-4 rounded ${
            paymentStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          <p className="font-semibold">{paymentStatus.message}</p>
          {paymentStatus.data && (
            <div className="mt-2 text-sm">
              <p>Payment ID: {paymentStatus.data.razorpay_payment_id}</p>
              <p>Order ID: {paymentStatus.data.razorpay_order_id}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 