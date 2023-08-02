"use client"
import React, { useState } from "react";
import { CheckoutData, CartItemType } from "./types";
import { AiFillCloseCircle } from "react-icons/ai";


interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutData: CheckoutData;
  cartDetails: { [key: string]: CartItemType };
  shippingAmount: number;
}

interface PaymentMethod {
  value: "creditCard" | "check";
  label: string;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, checkoutData, cartDetails, shippingAmount }) => {
  if (!isOpen) return null;
  const cartItems = Object.values(cartDetails);
  // State to track whether the user has selected the check payment method
  const [useCheckPayment, setUseCheckPayment] = useState(false);

  const [billingAddressSameAsShipping, setBillingAddressSameAsShipping] = useState(true);
  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setBillingAddressSameAsShipping((prevValue) => !prevValue);
  };

  // State to manage the form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address1: "",
    city: "",
    state: "",
    postal: "",
    country: "",
    ccNumber: "",
    ccExpiration: "",
    ccvNumber: "",
    bankAccountName: "",
    bankAccountNumber: "",
    bankRoutingNumber: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to handle payment method selection
  const handlePaymentMethodChange = (paymentMethod: PaymentMethod) => {
    setFormData({ // Reset the form data when the payment method changes
      fullName: "",
      email: "",
      address1: "",
      city: "",
      state: "",
      postal: "",
      country: "",
      ccNumber: "",
      ccExpiration: "",
      ccvNumber: "",
      bankAccountName: "",
      bankAccountNumber: "",
      bankRoutingNumber: "",
    });
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (useCheckPayment) {
      // Submit check payment form data
      console.log("Submitting check payment:", formData);
    } else {
      // Submit credit card payment form data
      console.log("Submitting credit card payment:", formData);
    }
  };

  const CustomCheckmark = ({ checked }) => (
    <svg
      className={`h-6 w-6 font-bold text-white absolute -top-[8px] -left-[2px] mt-1 ml-1 pointer-events-none ${checked ? "block" : "hidden"
        }`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.00002 13L9.00002 17L19 7"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <>
      {/* Modal content goes here */}
      <AiFillCloseCircle onClick={onClose} style={{ fontSize: '30px' }} className="text-[#D11A2A] absolute top-[10px] right-[20px] cursor-pointer drop-shadow-lg rounded-full hover:shadow-lg" />
      <h2 className="text-center text-3xl">Store Checkout</h2>
      <hr className="w-[70%] h-[5px] bg-[#fcc000] ml-auto mr-auto mt-3 mb-3" />
      {cartItems.map((cartItem) => (
        <div key={cartItem._id}>
          <div className="flex flex-col items-center">
            <div className="flex flex-row">

            </div>

            <h3 className="text-2xl">{cartItem.productName}</h3>
            <div className="grid grid-col-1 md:grid-cols-4">
              <div className="col-a">
                <p>Quantity: {cartItem.quantity}</p>
              </div>

              <div className="col-b">
                <p>Price: ${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
              </div>
              <div className="col-c">
                <p>Shipping: ${(shippingAmount / 100).toFixed(2)}</p>
              </div>
              <div className="col-d">
                {/* Display the total amount */}
                Total: $
                {(
                  cartItem.price * cartItem.quantity +
                  shippingAmount / 100 // Add shippingAmount to the total price
                ).toFixed(2)}{" "}
                {cartItem.currency}
              </div>
            </div>
          </div>
          {/* Add other relevant content and buttons */}
          <form action="YOUR_FORM_ACTION_URL" method="POST" className="ml-auto mr-auto mt-3 p-8 max-w-[850px] border-[#fcc000] border-4 bg-[#222222] rounded-md">
            <h3 className="text-white text-center text-2xl mb-4">Shipping Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="mb-4">
                <input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#fcc000]" id="username" type="text" placeholder="Enter your Full Name" />
              </div>
              <div className="mb-4">

                <input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#fcc000]" id="username" type="email" placeholder="Enter an email address" />
              </div>
            </div>
            <div className="mb-6">
              <input
                type="text"
                name="address1"
                placeholder="Street Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#fcc000]"
              />
            </div>
            <div className="flex mb-6">
              <div className="w-1/2 pr-2">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="w-1/2 pr-2">
                <select
                  name="state"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                >
                  <option value="" disabled selected>
                    -- State --
                  </option>
                  {/* Add more state options here */}
                </select>
              </div>
            </div>

            <div className="flex mb-6">
              <div className="w-1/2 pr-2">
                <input
                  type="text"
                  name="postal"
                  placeholder="Postal/Zip Code"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="w-1/2 pr-2">
                <select
                  name="country"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#fcc000]"
                >
                  <option value="" disabled selected>
                    -- United States --
                  </option>
                  {/* Add more Countries options here */}
                </select>
              </div>
            </div>
            {/* Payment Method Selection */}
            <div className="flex justify-center mt-4 mb-6">
              <div className="mx-2 w-1/2">
                <button
                  type="button"
                  className={`py-2 w-full px-4 rounded-lg ${useCheckPayment ? "bg-white border border-[#fcc000] text-[#333]" : "bg-[#fcc000] text-[#333]"
                    }`}
                  onClick={() => setUseCheckPayment(false)}
                >
                  Credit Card
                </button>
              </div>
              <div className="mx-2 w-1/2">
                <button
                  type="button"
                  className={`py-2 w-full px-4 rounded-lg ${useCheckPayment ? "bg-[#fcc000] text-[#333]" : "bg-white border border-[#fcc000] text-[#333]"
                    }`}
                  onClick={() => setUseCheckPayment(true)}
                >
                  Check
                </button>
              </div>
            </div>

            {/* Credit Card Payment Form */}
            {!useCheckPayment && (
              <div>
                <div className="mb-6">
                  <input
                    type="text"
                    name="ccNumber"
                    placeholder="Credit Card Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    onChange={handleInputChange}
                  />
                  <div id="ccnumber"></div>
                </div>
                <div className="flex mb-6">
                  <div className="w-1/2 pr-2">
                    <input
                      type="text"
                      name="ccExpiration"
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                      onChange={handleInputChange}
                    />
                    <div id="ccexp"></div>
                  </div>
                  <div className="w-1/2 pr-2">
                    <input
                      type="text"
                      name="ccvNumber"
                      placeholder="CCV Number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Check Payment Form */}
            {useCheckPayment && (
              <div>
                <div className="mb-6">
                  <input
                    type="text"
                    name="bankAccountName"
                    placeholder="Name on Bank Account"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    name="bankAccountNumber"
                    placeholder="Bank Account Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    name="bankRoutingNumber"
                    placeholder="Bank Routing Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}

            <div className="flex justify-center items-center mt-4">
              <label htmlFor="billingAddressCheckbox" className="relative cursor-pointer">
                <input
                  type="checkbox"
                  id="billingAddressCheckbox"
                  className="custom-checkbox mr-2"
                  checked={billingAddressSameAsShipping}
                  onChange={handleCheckboxChange}
                />
                <CustomCheckmark checked={billingAddressSameAsShipping} />

              </label>
              <span className="text-white">Billing address is the same as the shipping address</span>
            </div>

            {!billingAddressSameAsShipping && (
              <div>
                <h3 className="text-white text-2xl text-center mb-4">Billing Information</h3>
                <div className="mb-6">
                  <input
                    type="text"
                    name="billingAddress1"
                    placeholder="Billing Street Address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#fcc000]"
                  />
                </div>
                <div className="flex mb-6">
                  <div className="w-1/2 pr-2">
                    <input
                      type="text"
                      name="billingCity"
                      placeholder="City"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="w-1/2 pr-2">
                    <select
                      name="billingState"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    >
                      <option value="" disabled selected>
                        -- State --
                      </option>
                      {/* Add more state options here */}
                    </select>
                  </div>
                </div>
                <div className="flex mb-6">
                  <div className="w-1/2 pr-2">
                    <input
                      type="text"
                      name="billingPostal"
                      placeholder="Billing Postal/Zip Code"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="w-1/2 pr-2">
                    <select
                      name="billingCountry"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#fcc000]"
                    >
                      <option value="" disabled selected>
                        -- Country --
                      </option>
                      {/* Add more Countries options here */}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="px-4 py-2 text-[#333] font-bold bg-[#fcc000] rounded-lg w-full text-center"
              >
                PAY $
                {(
                  cartItem.price * cartItem.quantity +
                  shippingAmount / 100 // Add shippingAmount to the total price
                ).toFixed(2)}{" "}
                {cartItem.currency}
              </button>
            </div>
          </form>

        </div>
      ))}

    </>
  );
};

export default CheckoutModal;