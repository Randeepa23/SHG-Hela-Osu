import React from 'react';
import { useNavigate } from 'react-router-dom';

const CookiePolicy: React.FC = () => {
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
            <h1 className="text-4xl font-bold text-green-800 mb-2">Cookie Policy</h1>
            <p className="text-gray-600 text-lg">S.H.G. හෙළ-ඔසු - Understanding Our Cookie Usage</p>
            <p className="text-sm text-gray-500 mt-2"><strong>Last Updated:</strong> January 2025</p>
          </div>

          {/* Introduction */}
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
            <p className="text-lg font-semibold text-green-800">
              This Cookie Policy explains how S.H.G. හෙළ-ඔසු uses cookies and similar technologies on our website. By continuing to use our site, you consent to our use of cookies as described in this policy.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">1. What Are Cookies?</h2>
            
            <p className="mb-4">Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They help websites remember information about your visit, such as your preferences and settings, making your next visit more convenient and the site more useful to you.</p>

            <h3 className="text-xl font-semibold text-green-600 mb-3">How Cookies Work:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cookies are created when you visit a website</li>
              <li>They are stored in your browser's memory or on your device</li>
              <li>They are sent back to the website on future visits</li>
              <li>They help websites provide personalized experiences</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">2. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-green-600 mb-3">Essential Cookies (Necessary)</h3>
            <p className="mb-4">These cookies are essential for the website to function properly and cannot be disabled. They enable basic functions like page navigation, access to secure areas, and remembering your preferences.</p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="p-4 text-left">Cookie Name</th>
                    <th className="p-4 text-left">Purpose</th>
                    <th className="p-4 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-mono">session_id</td>
                    <td className="p-4">Maintains your session while browsing</td>
                    <td className="p-4">Session</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-mono">cart_items</td>
                    <td className="p-4">Remembers items in your shopping cart</td>
                    <td className="p-4">7 days</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-mono">user_preferences</td>
                    <td className="p-4">Stores your language and region settings</td>
                    <td className="p-4">30 days</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Performance Cookies</h3>
            <p className="mb-4">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.</p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="p-4 text-left">Cookie Name</th>
                    <th className="p-4 text-left">Purpose</th>
                    <th className="p-4 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-mono">_ga</td>
                    <td className="p-4">Google Analytics - distinguishes users</td>
                    <td className="p-4">2 years</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-mono">_gid</td>
                    <td className="p-4">Google Analytics - distinguishes users</td>
                    <td className="p-4">24 hours</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-mono">_gat</td>
                    <td className="p-4">Google Analytics - throttles request rate</td>
                    <td className="p-4">1 minute</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Functionality Cookies</h3>
            <p className="mb-4">These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</p>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Language Preferences:</strong> Remember your preferred language</li>
              <li><strong>Login Status:</strong> Keep you logged in across sessions</li>
              <li><strong>Form Data:</strong> Remember information you've entered in forms</li>
              <li><strong>Location Settings:</strong> Remember your location for delivery purposes</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Advertising Cookies</h3>
            <p className="mb-4">These cookies are used to deliver advertisements more relevant to you and your interests. They also limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.</p>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Targeted Ads:</strong> Show you relevant product advertisements</li>
              <li><strong>Ad Frequency:</strong> Control how often you see the same ad</li>
              <li><strong>Conversion Tracking:</strong> Measure the effectiveness of our marketing</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">3. Third-Party Cookies</h2>
            
            <h3 className="text-xl font-semibold text-green-600 mb-3">Google Analytics</h3>
            <p className="mb-4">We use Google Analytics to analyze website traffic and user behavior. This helps us understand how visitors use our site and improve our services.</p>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Social Media Cookies</h3>
            <p className="mb-4">Our website may include social media features (like Facebook, Instagram buttons) that may set cookies on your device. These are controlled by the respective social media platforms.</p>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Payment Processing</h3>
            <p>When you make a purchase, our payment processors may set cookies to ensure secure transactions and fraud prevention.</p>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">4. Cookie Consent Management</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-6">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Your Cookie Choices</h3>
              <p className="mb-4">You have control over which cookies you accept. You can:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Accept All:</strong> Allow all cookies for the best experience</li>
                <li><strong>Essential Only:</strong> Only allow necessary cookies</li>
                <li><strong>Customize:</strong> Choose specific types of cookies</li>
                <li><strong>Withdraw Consent:</strong> Change your preferences at any time</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-green-600 mb-3">How to Manage Cookies:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Browser Settings:</strong> Most browsers allow you to control cookies through settings</li>
              <li><strong>Cookie Banner:</strong> Use our cookie consent banner to make choices</li>
              <li><strong>Opt-Out Links:</strong> Use provided opt-out links for specific services</li>
              <li><strong>Contact Us:</strong> Reach out if you need help with cookie settings</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">5. Browser-Specific Instructions</h2>
            
            <h3 className="text-xl font-semibold text-green-600 mb-3">Google Chrome:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Click the three dots menu → Settings → Privacy and security → Cookies and other site data</li>
              <li>Choose your preferred cookie settings</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Mozilla Firefox:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Click the menu button → Settings → Privacy & Security</li>
              <li>Under "Cookies and Site Data," choose your settings</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Safari:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Go to Safari menu → Preferences → Privacy</li>
              <li>Choose your cookie preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Microsoft Edge:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Click the three dots menu → Settings → Cookies and site permissions</li>
              <li>Manage your cookie preferences</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">6. Mobile Device Settings</h2>
            <p>On mobile devices, you can manage cookies through your browser settings or by using the device's privacy controls. Most mobile browsers offer similar cookie management options to desktop browsers.</p>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">7. Impact of Disabling Cookies</h2>
            
            <h3 className="text-xl font-semibold text-green-600 mb-3">If You Disable All Cookies:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Some website features may not work properly</li>
              <li>You may need to re-enter information more frequently</li>
              <li>Personalized content may not be available</li>
              <li>Shopping cart may not remember items</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-600 mb-3">If You Disable Non-Essential Cookies:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Website will still function normally</li>
              <li>You may see less relevant advertisements</li>
              <li>We won't be able to improve the site based on your usage</li>
              <li>Some personalized features may be limited</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">8. Data Privacy and Security</h2>
            
            <h3 className="text-xl font-semibold text-green-600 mb-3">Cookie Data Protection:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>We only collect necessary data through cookies</li>
              <li>Cookie data is encrypted when transmitted</li>
              <li>We don't sell cookie data to third parties</li>
              <li>Data is stored securely and accessed only by authorized personnel</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-600 mb-3">Third-Party Data:</h3>
            <p>When we use third-party services (like Google Analytics), they may collect data according to their own privacy policies. We ensure all third-party services comply with applicable privacy laws.</p>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">9. Updates to This Policy</h2>
            <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the updated policy on our website.</p>
          </section>

          {/* Section 10 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">10. Related Policies</h2>
            <p className="mb-4">This Cookie Policy works alongside our other privacy policies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="/privacy-policy" className="text-green-600 hover:text-green-800 underline">Privacy Policy</a> - How we collect and use your personal data</li>
              <li><a href="/terms-of-service" className="text-green-600 hover:text-green-800 underline">Terms of Service</a> - Our terms and conditions</li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="mb-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">11. Contact Us</h2>
              <p className="mb-4">If you have any questions about our use of cookies or this Cookie Policy, please contact us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email:</strong> privacy@shghelaosu.com</li>
                <li><strong>Phone:</strong> +94 112 545 497</li>
                <li><strong>Address:</strong> S.H.G. Hela Osu (Pvt) Ltd, Boralesgamuwa, Sri Lanka</li>
                <li><strong>Data Protection Officer:</strong> dpo@shghelaosu.com</li>
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

export default CookiePolicy;
