import { NextRequest, NextResponse } from 'next/server';
import { createOrder } from '@/app/utils/razorpay';
import crypto from 'crypto';

// Handle create payment order
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount } = body;
    
    if (!amount) {
      return NextResponse.json(
        { success: false, message: 'Amount is required' },
        { status: 400 }
      );
    }
    
    const result = await createOrder(amount);
    
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: 'Failed to create order' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      success: true,
      order: result.order
    });
  } catch (error) {
    console.error('Error in payment API:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle payment verification
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;
    
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { success: false, message: 'Missing payment verification parameters' },
        { status: 400 }
      );
    }
    
    // Verify the signature
    const key_secret = process.env.RAZORPAY_KEY_SECRET || '';
    const generated_signature = crypto
      .createHmac('sha256', key_secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');
    
    if (generated_signature === razorpay_signature) {
      // Signature is valid, payment is successful
      // Update your database, send confirmation email, etc.
      return NextResponse.json({
        success: true,
        message: 'Payment verified successfully'
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid signature' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error in payment verification:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
} 