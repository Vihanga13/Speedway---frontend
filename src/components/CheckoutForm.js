import React from 'react';

const CheckoutForm = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">CHECKOUT</h1>
      
      {/* Login and Coupon Links */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-100 p-4 rounded">
          <p>
            Returning customer?{' '}
            <a href="/login" className="text-red-600 hover:text-red-700">
              Click here to log in
            </a>
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p>
            Have a coupon?{' '}
            <button type="button" className="text-red-600 hover:text-red-700">
              Click here to enter your code
            </button>
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Billing Details Form */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Billing Detail</h2>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full border rounded p-2"
                />
              </div>
              <div>
                <label className="block mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full border rounded p-2"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1">Company Name (Optional)</label>
              <input
                type="text"
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block mb-1">
                Country / Region <span className="text-red-500">*</span>
              </label>
              <select className="w-full border rounded p-2">
                <option>United States (US)</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">
                Street Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="House number and street name..."
                className="w-full border rounded p-2 mb-2"
              />
              <input
                type="text"
                placeholder="Apartment, suite, unit, etc (Optional)"
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block mb-1">
                Town / City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block mb-1">
                State / County <span className="text-red-500">*</span>
              </label>
              <select className="w-full border rounded p-2">
                <option>Washington</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">
                Zip Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Additional Information</h3>
              <label className="block mb-1">Order Notes (Optional)</label>
              <textarea
                placeholder="Note about your order, e.g. special note for delivery"
                className="w-full border rounded p-2 h-24"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="md:col-span-1">
          <div className="bg-gray-50 p-6 rounded">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 pb-4 border-b">
                <img src="/macbook-pro.jpg" alt="Macbook Pro" className="w-16 h-16 object-cover"/>
                <div>
                  <h4 className="font-medium">Pinnaeple Macbook Pro 2022 M1/ 512GB</h4>
                  <p className="text-gray-600">× 3</p>
                </div>
              </div>

              <div className="flex justify-between py-2">
                <span>Worldwide Standard Shipping</span>
                <span className="text-red-600">+ $9.50</span>
              </div>

              <div className="flex justify-between py-2 border-t font-semibold">
                <span>Order Total</span>
                <span className="text-red-600">$1,746.50</span>
              </div>

              <div className="space-y-3 pt-4">
                <div className="flex items-center space-x-2">
                  <input type="radio" name="payment" id="bank" checked />
                  <label htmlFor="bank" className="font-medium">Direct Bank Transfer</label>
                </div>
                <p className="text-sm text-gray-600 pl-6">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>

                <div className="flex items-center space-x-2">
                  <input type="radio" name="payment" id="cod" />
                  <label htmlFor="cod" className="font-medium">Cash on Delivery</label>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="radio" name="payment" id="paypal" />
                  <label htmlFor="paypal" className="font-medium">
                    Paypal{' '}
                    <button type="button" className="text-red-600 text-sm">What's Paypal?</button>
                  </label>
                </div>
              </div>

              <button className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 transition">
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;