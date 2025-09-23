import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft, CreditCard, Banknote, MapPin, User, Phone, Mail, Store } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Checkout: React.FC = () => {
  const { state, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    notes: '',
  });
  
  const [paymentMethod, setPaymentMethod] = useState<'bank_transfer' | 'cash_on_delivery' | 'store_pickup'>('cash_on_delivery');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendOrderEmail = async (orderData: any) => {
    const emailSubject = `New Order Received - ${orderData.orderNumber}`;
    
    // Format order items for email
    const itemsList = orderData.items.map((item: any) => 
      `• ${item.name} (${item.category}) - Qty: ${item.quantity} - Rs. ${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');
    
    // Format customer information
    const customerInfo = `
Name: ${orderData.customerInfo.firstName} ${orderData.customerInfo.lastName}
Email: ${orderData.customerInfo.email}
Phone: ${orderData.customerInfo.phone}
Address: ${orderData.customerInfo.address}
City: ${orderData.customerInfo.city}
Zip Code: ${orderData.customerInfo.zipCode || 'N/A'}
Notes: ${orderData.customerInfo.notes || 'None'}
    `.trim();
    
    // Format payment method details
    const paymentDetails = orderData.paymentMethod === 'cash_on_delivery' 
      ? 'Cash on Delivery - Customer will pay upon delivery'
      : orderData.paymentMethod === 'store_pickup'
      ? 'Store Pickup - Customer will collect order from store and pay on collection'
      : `Direct Bank Transfer
Bank: Commercial Bank of Ceylon
Account Name: S.H.G. Hela Osu (Pvt) Ltd
Account Number: 1234567890
Branch: Boralesgamuwa
Reference: ${orderData.orderNumber}`;
    
    const emailBody = `
NEW ORDER RECEIVED - S.H.G. Hela Osu

Order Details:
==============
Order Number: ${orderData.orderNumber}
Order Date: ${new Date(orderData.orderDate).toLocaleString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}

Customer Information:
===================
${customerInfo}

Order Items:
============
${itemsList}

Order Summary:
==============
Subtotal: Rs. ${orderData.totalPrice.toLocaleString()}
Delivery: Free
Tax: Included
Total Amount: Rs. ${orderData.totalPrice.toLocaleString()}

Payment Method:
===============
${paymentDetails}

Please process this order and arrange for delivery or prepare for store pickup as requested.

Best regards,
S.H.G. Hela Osu Website System
    `.trim();

    // Create mailto link with encoded subject and body
    const mailtoLink = `mailto:shghelaosuhala@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.open(mailtoLink, '_blank');
    
    // Also try to copy to clipboard as backup
    try {
      await navigator.clipboard.writeText(emailBody);
      console.log('Order details copied to clipboard as backup');
    } catch (err) {
      console.log('Could not copy to clipboard:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate order number
    const orderNumber = `SHG-${Date.now()}`;
    
    // Store order data in localStorage for confirmation page
    const orderData = {
      orderNumber,
      items: state.items,
      totalPrice: state.totalPrice,
      customerInfo: formData,
      paymentMethod,
      orderDate: new Date().toISOString(),
    };
    
    localStorage.setItem('lastOrder', JSON.stringify(orderData));
    
    // Send email with order details
    try {
      await sendOrderEmail(orderData);
      toast({
        title: "Order Email Sent",
        description: "Order details have been sent to shghelaosuhala@gmail.com",
        duration: 5000,
      });
    } catch (error) {
      console.error('Failed to send order email:', error);
      toast({
        title: "Email Error",
        description: "Could not send email automatically. Order details have been copied to clipboard.",
        variant: "destructive",
        duration: 5000,
      });
    }
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show success toast
    toast({
      title: "Order Placed Successfully!",
      description: `Your order ${orderNumber} has been confirmed. Redirecting to confirmation page...`,
      duration: 3000,
    });
    
    // Clear cart and redirect to confirmation
    clearCart();
    navigate(`/order-confirmation/${orderNumber}`);
  };

  const isFormValid = () => {
    return formData.firstName && 
           formData.lastName && 
           formData.email && 
           formData.phone && 
           formData.address && 
           formData.city;
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">No Items in Cart</h1>
            <p className="text-lg text-gray-600 mb-8">
              Please add some items to your cart before proceeding to checkout.
            </p>
            <Button 
              onClick={() => navigate('/products')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
          <Button
            variant="outline"
            onClick={() => navigate('/cart')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cart
          </Button>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800">Checkout</h1>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Customer Information */}
          <div className="space-y-6">
            {/* Customer Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <User className="w-5 h-5" />
                  Customer Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <MapPin className="w-5 h-5" />
                  Delivery Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="notes">Order Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Any special instructions for delivery..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="text-green-800">Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={(value) => setPaymentMethod(value as 'bank_transfer' | 'cash_on_delivery' | 'store_pickup')}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-green-50 cursor-pointer">
                    <RadioGroupItem value="cash_on_delivery" id="cod" />
                    <Label htmlFor="cod" className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Banknote className="w-5 h-5 text-green-600" />
                        <div>
                          <div className="font-semibold">Cash on Delivery</div>
                          <div className="text-sm text-gray-600">
                            Pay when your order arrives at your doorstep
                          </div>
                        </div>
                      </div>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-green-50 cursor-pointer">
                    <RadioGroupItem value="bank_transfer" id="bank" />
                    <Label htmlFor="bank" className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-5 h-5 text-green-600" />
                        <div>
                          <div className="font-semibold">Direct Bank Transfer</div>
                          <div className="text-sm text-gray-600">
                            Transfer payment directly to our bank account
                          </div>
                        </div>
                      </div>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-green-50 cursor-pointer">
                    <RadioGroupItem value="store_pickup" id="pickup" />
                    <Label htmlFor="pickup" className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Store className="w-5 h-5 text-green-600" />
                        <div>
                          <div className="font-semibold">Pick up by the Store</div>
                          <div className="text-sm text-gray-600">
                            Visit our store to collect your order and pay
                          </div>
                        </div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === 'bank_transfer' && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Bank Transfer Details</h4>
                    <div className="text-sm text-blue-700 space-y-1">
                      <p><strong>Bank:</strong> Commercial Bank of Ceylon</p>
                      <p><strong>Account Name:</strong> S.H.G. Hela Osu (Pvt) Ltd</p>
                      <p><strong>Account Number:</strong> 1234567890</p>
                      <p><strong>Branch:</strong> Boralesgamuwa</p>
                      <p className="text-xs mt-2">
                        Please include your order number in the transfer reference.
                      </p>
                    </div>
                  </div>
                )}

                {paymentMethod === 'store_pickup' && (
                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Store Pickup Information</h4>
                    <div className="text-sm text-green-700 space-y-2">
                      <p><strong>Available Locations (8 Branches):</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Boralesgamuwa (Head Office)</strong> - 108C, Colombo Road</li>
                        <li><strong>Thalawathugoda Branch</strong> - Sri Jayawardenepura</li>
                        <li><strong>Pannipitiya Branch</strong> - Colombo</li>
                        <li><strong>Homagama Branch</strong> - Colombo</li>
                        <li><strong>Wijerama Branch</strong> - Colombo 07</li>
                        <li><strong>Maharagama Branch</strong> - Colombo</li>
                        <li><strong>Kiribathgoda Branch</strong> - Colombo</li>
                        <li><strong>Piliyandala Branch</strong> - Colombo</li>
                      </ul>
                      <p className="text-xs mt-2">
                        <strong>Note:</strong> Please visit our{' '}
                        <button
                          type="button"
                          onClick={() => navigate('/branches')}
                          className="text-green-600 hover:text-green-800 underline font-semibold"
                        >
                          Branches page
                        </button>{' '}
                        for complete store locations, hours, contact information, and directions.
                      </p>
                      <p className="text-xs">
                        You can pay by cash or card when you collect your order. All branches are open 8:30 AM - 8:00 PM.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-green-800">Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Order Items */}
                  <div className="space-y-3">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-contain rounded bg-white p-1 border border-gray-200"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate">{item.name}</h4>
                          <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-semibold text-sm">
                          Rs. {(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>

                  <hr />

                  {/* Pricing */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal:</span>
                      <span>Rs. {state.totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery:</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax:</span>
                      <span>Included</span>
                    </div>
                    <hr />
                    <div className="flex justify-between text-lg font-bold text-green-800">
                      <span>Total:</span>
                      <span>Rs. {state.totalPrice.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={!isFormValid() || isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                  >
                    {isSubmitting ? 'Processing Order...' : 'Place Order'}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By placing this order, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
