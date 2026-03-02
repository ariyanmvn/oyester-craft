import SEO from '../components/seo/SEO';

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Oyster Craft. Visit our store in Mirpur, Dhaka or contact us via phone or email."
        keywords="contact oyster craft, oyster craft address, oyster craft phone number"
      />
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Contact Us
        </h1>

        {/* Contact Information Section */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Contact Information
          </h2>

          <div className="space-y-6">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Address:</h3>
              <p className="text-gray-700 max-w-lg">
                Oyster Craft, House 2, Road 15, Block D, Section 6, Mirpur, Dhaka-1216, Bangladesh.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hotline:</h3>
              <p className="text-gray-700">
                +8801796199989
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email:</h3>
              <p className="text-gray-700">
                info@oystercraftbd.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
