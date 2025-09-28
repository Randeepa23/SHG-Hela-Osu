import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8 pb-6 border-b-4 border-green-500">
            <img 
              src="/shg logo without name.png" 
              alt="S.H.G. හෙළ-ඔසු Logo" 
              className="w-20 h-20 mx-auto mb-4"
            />
            <h1 className="text-4xl font-bold text-green-800 mb-2">Terms of Service</h1>
            <p className="text-gray-600 text-lg">S.H.G. හෙළ-ඔසු - Terms and Conditions</p>
            <p className="text-sm text-gray-500 mt-2"><strong>Last Updated:</strong> January 2025</p>
          </div>

          {/* Introduction */}
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
            <p className="text-lg font-semibold text-green-800">
              Welcome to S.H.G. හෙළ-ඔසු. By accessing our website or using our services, you agree to be bound by these Terms of Service. Please read them carefully before making any purchases.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">1. Scope of Services and Products</h2>
            
            <h3 className="text-xl font-semibold text-green-600 mb-3">Products We Offer:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Ayurvedic Medicines:</strong> Traditional herbal formulations for various health conditions</li>
              <li><strong>Wellness Products:</strong> Natural supplements, oils, and health care items</li>
              <li><strong>Consultation Services:</strong> Expert Ayurvedic advice and health consultations</li>
              <li><strong>Custom Formulations:</strong> Personalized herbal preparations based on individual needs</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Service Areas:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Online sales through our website</li>
              <li>Physical store locations across Sri Lanka</li>
              <li>Home delivery services</li>
              <li>Corporate wellness programs</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">2. User Agreements and Account Terms</h2>
            
            <h3 className="text-xl font-semibold text-green-600 mb-3">Account Registration:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>You must provide accurate and complete information</li>
              <li>You are responsible for maintaining account security</li>
              <li>One account per person or business entity</li>
              <li>You must be at least 18 years old to create an account</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Prohibited Activities:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Using false or misleading information</li>
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Reselling products without permission</li>
              <li>Violating any applicable laws or regulations</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">3. Order Placement and Payment</h2>
            
            <h3 className="text-xl font-semibold text-green-600 mb-3">Order Process:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Selection:</strong> Choose products from our catalog</li>
              <li><strong>Cart Review:</strong> Verify items and quantities</li>
              <li><strong>Checkout:</strong> Provide shipping and payment information</li>
              <li><strong>Confirmation:</strong> Receive order confirmation via email</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Payment Options:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Credit/Debit cards (Visa, Mastercard, American Express)</li>
              <li>Bank transfers</li>
              <li>Mobile payment solutions</li>
              <li>Cash on delivery (selected areas)</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Fulfillment Process:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders are processed within 1-2 business days</li>
              <li>Products are carefully packaged for safe delivery</li>
              <li>Tracking information is provided for all shipments</li>
              <li>Delivery times vary by location (3-7 business days)</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">4. Product Availability and Pricing</h2>
            
            <h3 className="text-xl font-semibold text-green-600 mb-3">Availability:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>All products are subject to availability</li>
              <li>We reserve the right to limit quantities</li>
              <li>Out-of-stock items will be clearly marked</li>
              <li>Pre-orders may be available for popular items</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Pricing Terms:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>All prices are in Sri Lankan Rupees (LKR)</li>
              <li>Prices include applicable taxes</li>
              <li>Shipping costs are calculated at checkout</li>
              <li>We reserve the right to change prices without notice</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">5. Return, Refund, and Cancellation Policies</h2>
            
            <h3 className="text-xl font-semibold text-green-600 mb-3">Return Policy:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Timeframe:</strong> Returns accepted within 14 days of delivery</li>
              <li><strong>Condition:</strong> Products must be unopened and in original packaging</li>
              <li><strong>Process:</strong> Contact customer service for return authorization</li>
              <li><strong>Refund:</strong> Full refund upon receipt of returned items</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Refund Processing:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Refunds processed within 5-7 business days</li>
              <li>Original payment method will be credited</li>
              <li>Shipping costs are non-refundable unless due to our error</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Cancellation Policy:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders can be cancelled before shipment</li>
              <li>Contact us immediately for cancellation requests</li>
              <li>Full refund for cancelled orders</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">6. Liability and Warranties</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-6">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Important Disclaimer:</h3>
              <p className="font-semibold text-yellow-800">
                Our herbal products are traditional Ayurvedic medicines. While we ensure quality and authenticity, individual results may vary. These products are not intended to diagnose, treat, cure, or prevent any disease.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Limitations of Liability:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>We are not liable for any indirect, incidental, or consequential damages</li>
              <li>Our total liability is limited to the purchase price of the product</li>
              <li>We are not responsible for misuse of products</li>
              <li>Consult healthcare professionals before using herbal medicines</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Product Warranties:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>We guarantee the authenticity of our products</li>
              <li>Products are manufactured under strict quality controls</li>
              <li>We stand behind the quality of our formulations</li>
              <li>No warranty for results or effectiveness</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">7. Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-semibold text-green-600 mb-3">Our Rights:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Trademarks:</strong> "S.H.G. හෙළ-ඔසු" and related marks are our property</li>
              <li><strong>Formulations:</strong> Our proprietary herbal recipes are protected</li>
              <li><strong>Website Content:</strong> All text, images, and designs are copyrighted</li>
              <li><strong>Branding:</strong> Logo and visual identity are trademarked</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-600 mb-3">User Rights and Restrictions:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>You may not use our trademarks without permission</li>
              <li>Website content is for personal use only</li>
              <li>No reproduction or distribution without authorization</li>
              <li>Respect our intellectual property rights</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">8. Governing Law and Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold text-green-600 mb-3">Applicable Law:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>These terms are governed by Sri Lankan law</li>
              <li>Any disputes will be resolved in Sri Lankan courts</li>
              <li>We comply with all applicable regulations</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Dispute Resolution Process:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Step 1:</strong> Contact our customer service team</li>
              <li><strong>Step 2:</strong> Attempt to resolve through negotiation</li>
              <li><strong>Step 3:</strong> Mediation if necessary</li>
              <li><strong>Step 4:</strong> Legal proceedings as last resort</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">9. Health and Safety Information</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Important Health Notice:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consult your healthcare provider before using herbal products</li>
                <li>Discontinue use if you experience any adverse reactions</li>
                <li>Keep products out of reach of children</li>
                <li>Store products according to package instructions</li>
                <li>Pregnant and nursing women should consult healthcare providers</li>
              </ul>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">10. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be posted on our website with an updated "Last Modified" date. Continued use of our services constitutes acceptance of the modified terms.</p>
          </section>

          {/* Contact Section */}
          <section className="mb-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">11. Contact Information</h2>
              <p className="mb-4">For questions about these Terms of Service, please contact us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email:</strong> legal@shghelaosu.com</li>
                <li><strong>Phone:</strong> +94 112 545 497</li>
                <li><strong>Address:</strong> S.H.G. Hela Osu (Pvt) Ltd, Boralesgamuwa, Sri Lanka</li>
                <li><strong>Business Hours:</strong> Everyday, 8:00 AM - 10:00 PM</li>
              </ul>
            </div>
          </section>

          {/* Back Button */}
          <div className="text-center mt-8">
            <button 
              onClick={() => navigate('/')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              ← Back to Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
