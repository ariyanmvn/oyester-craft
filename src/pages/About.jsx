import SEO from '../components/seo/SEO';

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <SEO 
        title="Return Policy" 
        description="Learn about Oyster Craft's return and refund policy. We offer exchanges and returns within 3 days of purchase."
        keywords="return policy, refund policy, oyster craft returns, exchange policy"
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Return and Refund Policy
        </h1>

        <div className="space-y-12 text-gray-700 leading-relaxed text-sm">
          {/* Intro */}
          <p className="text-center mb-8">
            We are pleased to offer our customers the option to exchange or return products, subject to the following conditions. Requests for returns or exchanges can be made within 3 days of receiving your purchase.
          </p>

          {/* Conditions */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Conditions for Return, Refund, & Replacement
            </h2>
            <ol className="list-decimal pl-5 space-y-4">
              <li>
                <strong>Return Window:</strong> Requests for a return, refund, or replacement must be made within 3 days of receiving your order.
              </li>
              <li>
                <strong>Product Condition:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>The item should be <strong>unused, unwashed, and undamaged</strong>.</li>
                  <li><strong>All original tags and packaging</strong> must be intact.</li>
                  <li>Any <strong>free promotional items</strong> received with your order must also be returned.</li>
                </ul>
              </li>
              <li>
                <strong>Inspection:</strong> All returned items will go through an inspection by our team. If approved, we will offer a replacement (if stock is available) or process a refund.
              </li>
              <li>
                <strong>Exchange Value:</strong> For exchanges, the new product should be of the same or higher value. If the new item costs less, we won’t refund the difference.
              </li>
              <li>
                <strong>Lost Receipt or Tag:</strong> If you’ve misplaced your receipt, just provide the contact number used at purchase, and we’ll verify your order history. However, we may not be able to accept items with damaged or missing barcodes/tags.
              </li>
            </ol>
          </section>

          {/* Reasons */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Reasons for Returns & Replacements
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Product Issues:</strong> The item is damaged, defective, or different from the description.</li>
              <li><strong>Color or Print Errors:</strong> Incorrect color, wrong design, or placement error.</li>
              <li><strong>Incorrect Item:</strong> You received a different product from what was ordered.</li>
            </ul>
          </section>

          {/* How to Start */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              How to Start a Return or Replacement Request
            </h2>
            <p className="mb-4">To begin a return, refund, or replacement:</p>
            <ol className="list-decimal pl-5 space-y-4">
              <li>
                <strong>Contact Us:</strong> Email us at support@oystercraftbd.com or call us at [your helpline number] within 3 days of receiving the item.
              </li>
              <li>
                <strong>Shipping:</strong> After your request is approved, we’ll send you a return shipping label and instructions. Items returned without prior approval won’t be accepted.
              </li>
            </ol>
          </section>

          {/* Refund Policy */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Refund Policy
            </h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>Processing:</strong> Refunds will be issued once the returned item has been inspected.</li>
              <li><strong>Stock Availability:</strong> If a replacement item is unavailable, we will provide a full refund.</li>
              <li><strong>Shipping Charges:</strong> The Cash on Delivery (COD) convenience fee and shipping costs are non-refundable.</li>
              <li>
                <strong>Payment Method:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>For COD orders, there is no refund as no payment was made upfront.</li>
                  <li>Refunds will be processed using the original payment method for online payments (Credit card, debit card, mobile banking, or bank transfer).</li>
                  <li>Refunds are usually completed within 7-10 working days. If you experience delays, please contact us at support@yourwebsite.com.</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Charges */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Return & Exchange Charges for Change of Mind
            </h2>
            <ol className="list-decimal pl-5 space-y-4">
              <li>
                <strong>Exchange Charges:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Inside Dhaka: 150 BDT</li>
                  <li>Outside Dhaka: 200 BDT</li>
                </ul>
              </li>
              <li>
                <strong>Return Charges:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Inside Dhaka: 70 BDT</li>
                  <li>Outside Dhaka: 100 BDT</li>
                </ul>
              </li>
            </ol>
          </section>

          {/* Assistance */}
          <section className="text-center pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Contact Us for Assistance
            </h2>
            <p className="mb-4">We’re here to help every day from 10 AM to 7 PM.</p>
            <div className="space-y-2 font-medium">
              <p>Phone: +8801700000000</p>
              <p>Email: support@oystercraftbd.com</p>
            </div>
            <p className="mt-4 text-gray-600">
              Let us know if you have any questions about returns, refunds, or replacements!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
