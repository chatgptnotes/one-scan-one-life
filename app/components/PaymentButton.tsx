'use client';

import { useState } from 'react';

interface PaymentButtonProps {
  amount: number;
  name: string;
  email: string;
  contact: string;
  buttonText?: string;
  onPaymentSuccess?: (response: any) => void;
  onPaymentError?: (error: any) => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentButton = ({
  amount,
  name,
  email,
  contact,
  buttonText = 'Pay Now',
  onPaymentSuccess,
  onPaymentError
}: PaymentButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    
    try {
      // Load Razorpay script if not already loaded
      if (!window.Razorpay) {
        await loadRazorpayScript();
      }
      
      // Create order on the server
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to create payment order');
      }
      
      const order = data.order;
      
      // Initialize Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount * 100, // in paise
        currency: 'INR',
        name: 'One Scan One Life',
        description: 'Medical Payment',
        order_id: order.id,
        prefill: {
          name,
          email,
          contact,
        },
        theme: {
          color: '#3B82F6', // Tailwind blue-500
        },
        handler: function (response: any) {
          handlePaymentSuccess(response);
        },
      };
      
      // Open Razorpay checkout
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      paymentObject.on('payment.failed', handlePaymentError);
      
    } catch (error) {
      console.error('Payment error:', error);
      handlePaymentError(error);
    } finally {
      setLoading(false);
    }
  };
  
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = resolve;
      document.body.appendChild(script);
    });
  };
  
  const handlePaymentSuccess = async (response: any) => {
    try {
      // Verify payment on the server
      const verifyResponse = await fetch('/api/payment', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        }),
      });
      
      const data = await verifyResponse.json();
      
      if (data.success) {
        // Payment verified
        if (onPaymentSuccess) {
          onPaymentSuccess(response);
        } else {
          alert('Payment successful!');
        }
      } else {
        // Verification failed
        throw new Error(data.message || 'Payment verification failed');
      }
    } catch (error) {
      console.error('Payment verification error:', error);
      handlePaymentError(error);
    }
  };
  
  const handlePaymentError = (error: any) => {
    if (onPaymentError) {
      onPaymentError(error);
    } else {
      alert(`Payment failed: ${error.message || 'Unknown error'}`);
    }
  };
  
  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? 'Processing...' : buttonText}
    </button>
  );
};

export default PaymentButton; 