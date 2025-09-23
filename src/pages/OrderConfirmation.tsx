import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Package, MapPin, CreditCard, Phone, Mail, Home } from 'lucide-react';

interface OrderData {
  orderNumber: string;
  items: Array<{
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    quantity: number;
  }>;
  totalPrice: number;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    notes: string;
  };
  paymentMethod: 'bank_transfer' | 'cash_on_delivery';
  orderDate: string;
}

const OrderConfirmation: React.FC = () => {
  const { orderNumber } = useParams<{ orderNumber: string }>();
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    const storedOrder = localStorage.getItem('lastOrder');
    if (storedOrder) {
      const order = JSON.parse(storedOrder);
      if (order.orderNumber === orderNumber) {
        setOrderData(order);
      } else {
        navigate('/');
      }
    } else {
      navigate('/');
    }
  }, [orderNumber, navigate]);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Success Header */}
        <div className="text-center mb-8">
          <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-600 mx-auto mb-4" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-2">Order Confirmed!</h1>
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            Thank you for your order. We'll process it shortly.
          </p>
          <div className="bg-green-100 text-green-800 px-4 sm:px-6 py-2 sm:py-3 rounded-lg inline-block text-sm sm:text-base">
            <strong>Order Number:</strong> {orderData.orderNumber}
          </div>
          
          {/* Email Notification */}
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 text-blue-800">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">Order Email Sent</span>
            </div>
            <p className="text-sm text-blue-700 mt-1">
              A detailed order confirmation has been sent to <strong>shghelaosuhala@gmail.com</strong> 
              with all your order details. Our team will process your order shortly.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Details */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Package className="w-5 h-5" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        <p className="text-sm text-gray-600">Category: {item.category}</p>
                      </div>
                      <p className="font-bold text-green-600">
                        Rs. {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  ))}
                  
                  <hr />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>Rs. {orderData.totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery:</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax:</span>
                      <span>Included</span>
                    </div>
                    <hr />
                    <div className="flex justify-between text-lg font-bold text-green-800">
                      <span>Total:</span>
                      <span>Rs. {orderData.totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <MapPin className="w-5 h-5" />
                  Delivery Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <strong>Name:</strong> {orderData.customerInfo.firstName} {orderData.customerInfo.lastName}
                  </div>
                  <div>
                    <strong>Email:</strong> {orderData.customerInfo.email}
                  </div>
                  <div>
                    <strong>Phone:</strong> {orderData.customerInfo.phone}
                  </div>
                  <div>
                    <strong>Address:</strong> {orderData.customerInfo.address}
                  </div>
                  <div>
                    <strong>City:</strong> {orderData.customerInfo.city}
                    {orderData.customerInfo.postalCode && (
                      <span> - {orderData.customerInfo.postalCode}</span>
                    )}
                  </div>
                  {orderData.customerInfo.notes && (
                    <div>
                      <strong>Notes:</strong> {orderData.customerInfo.notes}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment & Next Steps */}
          <div className="space-y-6">
            {/* Payment Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <CreditCard className="w-5 h-5" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      {orderData.paymentMethod === 'cash_on_delivery' 
                        ? 'Cash on Delivery' 
                        : 'Direct Bank Transfer'
                      }
                    </h4>
                    
                    {orderData.paymentMethod === 'cash_on_delivery' ? (
                      <p className="text-blue-700">
                        Please have the exact amount ready when your order arrives. 
                        Our delivery person will collect the payment upon delivery.
                      </p>
                    ) : (
                      <div className="text-blue-700">
                        <p className="mb-2">Please transfer the payment to:</p>
                        <div className="text-sm space-y-1">
                          <p><strong>Bank:</strong> Commercial Bank of Ceylon</p>
                          <p><strong>Account Name:</strong> S.H.G. Hela Osu (Pvt) Ltd</p>
                          <p><strong>Account Number:</strong> 1234567890</p>
                          <p><strong>Branch:</strong> Boralesgamuwa</p>
                          <p><strong>Amount:</strong> Rs. {orderData.totalPrice.toLocaleString()}</p>
                          <p><strong>Reference:</strong> {orderData.orderNumber}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="text-green-800">What's Next?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Order Confirmed</h4>
                      <p className="text-sm text-gray-600">
                        {formatDate(orderData.orderDate)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Processing</h4>
                      <p className="text-sm text-gray-600">
                        We'll prepare your order within 1-2 business days
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Shipped</h4>
                      <p className="text-sm text-gray-600">
                        Your order will be dispatched and delivered in 3-7 days
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Delivered</h4>
                      <p className="text-sm text-gray-600">
                        Your order will arrive at your doorstep
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-green-800">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-green-600" />
                    <span>+94 112 545 497</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-green-600" />
                    <span>info@shghelaosu.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-green-600" />
                    <span>Boralesgamuwa, Sri Lanka</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={() => navigate('/products')}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Continue Shopping
              </Button>
              <Button
                onClick={() => navigate('/')}
                variant="outline"
                className="w-full"
              >
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
