import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
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
            <h1 className="text-4xl font-bold text-green-800 mb-2">Privacy Policy</h1>
            <p className="text-gray-600 text-lg">S.H.G. හෙළ-ඔසු - Your Privacy Matters</p>
            <p className="text-sm text-gray-500 mt-2"><strong>Last Updated:</strong> January 2025</p>
          </div>

          {/* Introduction */}
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
            <p className="text-lg font-semibold text-green-800">
              At S.H.G. හෙළ-ඔසු, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-green-600 mb-3">Personal Data We Collect:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address</li>
              <li><strong>Purchase History:</strong> Details of products purchased, order dates, and transaction amounts</li>
              <li><strong>Account Information:</strong> Username, password (encrypted), and account preferences</li>
              <li><strong>Communication Records:</strong> Customer service inquiries, feedback, and support requests</li>
              <li><strong>Payment Information:</strong> Billing address and payment method details (processed securely through third-party providers)</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Methods of Collection:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Website:</strong> Through contact forms, account registration, and online purchases</li>
              <li><strong>Physical Stores:</strong> During in-person visits and consultations</li>
              <li><strong>Delivery Services:</strong> When coordinating product deliveries</li>
              <li><strong>Customer Support:</strong> Through phone calls, emails, and live chat</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">2. How We Use Your Information</h2>
            
            <h3 className="text-xl font-semibold text-green-600 mb-3">Primary Purposes:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Order Processing:</strong> To fulfill your purchases and deliver products</li>
              <li><strong>Customer Support:</strong> To respond to inquiries and provide assistance</li>
              <li><strong>Account Management:</strong> To maintain your account and preferences</li>
              <li><strong>Service Improvement:</strong> To enhance our products and services</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Marketing Communications (With Your Consent):</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Product updates and new arrivals</li>
              <li>Special offers and promotions</li>
              <li>Health and wellness tips</li>
              <li>Newsletter subscriptions</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Legal Compliance:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Meeting regulatory requirements</li>
              <li>Preventing fraud and ensuring security</li>
              <li>Complying with tax and business obligations</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">3. Data Protection and Security</h2>
            <p className="mb-4">We implement comprehensive security measures to protect your personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Encryption:</strong> All sensitive data is encrypted during transmission and storage</li>
              <li><strong>Secure Servers:</strong> Data is stored on protected servers with restricted access</li>
              <li><strong>Regular Updates:</strong> Security systems are regularly updated and monitored</li>
              <li><strong>Staff Training:</strong> Our team is trained on data protection best practices</li>
              <li><strong>Access Controls:</strong> Only authorized personnel can access personal data</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">4. Data Sharing with Third Parties</h2>
            <p className="mb-4">We may share your information with trusted third parties only when necessary:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Delivery Partners:</strong> To facilitate product shipping and delivery</li>
              <li><strong>Payment Gateways:</strong> To process payments securely</li>
              <li><strong>Service Providers:</strong> For website hosting, analytics, and customer support</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
            <p className="font-semibold text-green-800">We never sell your personal information to third parties for marketing purposes.</p>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">5. Your Rights</h2>
            <p className="mb-4">You have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Withdrawal of Consent:</strong> Opt-out of marketing communications</li>
              <li><strong>Restriction:</strong> Limit how we process your data</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">6. Cookies and Tracking Technologies</h2>
            <p>Our website uses cookies and similar technologies to enhance your browsing experience. For detailed information about our cookie usage, please refer to our <a href="/cookie-policy" className="text-green-600 hover:text-green-800 underline">Cookie Policy</a>.</p>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">7. Data Retention</h2>
            <p className="mb-4">We retain your personal information only as long as necessary for the purposes outlined in this policy or as required by law. Typically:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account information: Until account closure + 3 years</li>
              <li>Purchase records: 7 years for tax and legal compliance</li>
              <li>Marketing data: Until consent is withdrawn</li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="mb-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">8. Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email:</strong> privacy@shghelaosu.com</li>
                <li><strong>Phone:</strong> +94 112 545 497</li>
                <li><strong>Address:</strong> S.H.G. Hela Osu (Pvt) Ltd, Boralesgamuwa, Sri Lanka</li>
                <li><strong>Data Protection Officer:</strong> dpo@shghelaosu.com</li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the "Last Updated" date.</p>
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

export default PrivacyPolicy;
