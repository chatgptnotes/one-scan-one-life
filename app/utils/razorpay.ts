import Razorpay from 'razorpay';

// Initialize Razorpay with your key_id and key_secret
// Note: In production, store these in environment variables
export const initializeRazorpay = () => {
  return new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
    key_secret: process.env.RAZORPAY_KEY_SECRET || '',
  });
};

// Create an order
export const createOrder = async (amount: number, currency: string = 'INR', receipt: string = 'receipt_order_1') => {
  try {
    const razorpay = initializeRazorpay();
    const options = {
      amount: amount * 100, // Razorpay expects amount in paise
      currency,
      receipt,
    };
    
    const order = await razorpay.orders.create(options);
    return { success: true, order };
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return { success: false, error };
  }
};

// Verify payment
export const verifyPayment = (
  razorpay_order_id: string,
  razorpay_payment_id: string,
  razorpay_signature: string
) => {
  try {
    // The verification logic should be implemented on the server-side
    // This is a placeholder for the verification process
    // In production, you would make an API call to your backend
    return { success: true };
  } catch (error) {
    console.error('Payment verification failed:', error);
    return { success: false, error };
  }
}; 