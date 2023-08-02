"use client"
import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"
// import { Button } from "./ui/button"
import Modal from 'react-modal';
import Link from "next/link"
import CheckoutModal from "./CheckoutModal"
import { CartItemType, CheckoutData } from "./types"
import Script from "next/script";

export function CartSummary() {
  const { totalPrice, cartDetails, cartCount } = useShoppingCart();
  console.log("cartDetails:", cartDetails); // Add this line
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [checkoutData, setCheckoutData] = useState<CheckoutData | null>(null); // Initialize as null

  useEffect(() => {

    if (cartCount! === 0) {
      setIsDisabled(true)
    }
    if (isLoading === true) {
      setIsDisabled(true)
    }
  }, [cartCount])

  // Calculate the total price in cents
  const totalPriceInCents = totalPrice * 100;
  // Format the total price in dollars
  const formattedTotalPrice = formatCurrencyString({
    value: totalPriceInCents,
    currency: "USD", // Replace 'USD' with the appropriate currency code
    language: "en-US", // Replace 'en-US' with the appropriate language code
  });
  const shippingAmount = cartCount! > 0 ? 3000 * cartCount : 0;
  const totalAmount = totalPrice! * 100 + shippingAmount;

  const onCheckout = (event) => {
    if (isDisabled) {
      event.preventDefault(); // Prevent the default link behavior when disabled
      return;
    }

    // Create an array of line items based on the cartDetails
    const lineItems = Object.values(cartDetails).map((item) => ({
      sku: item.product?.sku, // Replace this with the actual SKU property from your product data
      quantity: item.quantity,
    }));

    // Calculate the quantity based on the cartDetails
    const quantity = Object.values(cartDetails).reduce((acc, item) => acc + item.quantity, 0);

    // Calculate the total price based on the cartDetails
    // const totalPrice = Object.values(cartDetails).reduce((acc, item) => acc + (item.quantity * item.product.price), 0);
    const totalPrice = Object.values(cartDetails).reduce(
      (acc, item) => acc + (item.quantity * item.product?.price || 0),
      0
    );

    // Calculate the shipping amount based on the quantity (you can modify the shipping calculation as needed)
    const shippingAmount = quantity > 0 ? 3000 * quantity : 0;

    // Calculate the total amount including shipping
    const totalAmount = totalPrice + shippingAmount;

    // Define the checkoutData object with all the relevant information
    const checkoutData: CheckoutData = {
      quantity,
      productName: cartDetails?.[0]?.product?.productName || "Unknown Product",
      price: cartDetails?.[0]?.product?.price || 0,
      currency: cartDetails?.[0]?.product?.currency || "USD",
      totalPrice, 
      shippingAmount,
      totalAmount, 
    };

    setCheckoutData(checkoutData); 

    

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(true); // Open the modal when checkout is successful
    }, 2000);
  };

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 shadow-md dark:border-gray-900 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium">
        Order summary
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm">Subtotal</dt>
          <dd className="text-sm font-medium">{formattedTotalPrice}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="flex items-center text-sm">
            <span>Shipping estimate</span>
          </dt>
          <dd className="text-sm font-medium">{formatCurrencyString({ value: shippingAmount, currency: "USD" })}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="text-base font-medium">Order total</dt>
          <dd className="text-base font-medium">{formatCurrencyString({ value: totalAmount, currency: "USD" })}</dd>
        </div>
      </dl>

      <div className="mt-6 text-center">
        {isDisabled ? (
          <div
            className={`py-2 px-3 rounded-md bg-gray-400 cursor-not-allowed text-[#333]`}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? "Loading..." : "Checkout"}
          </div>
        ) : (
          <div className="w-full flex text-center mt-6">
            <Link
              href="#"
              onClick={onCheckout}
              className={`flex-grow py-2 px-3 rounded-md bg-[#ffc000] hover:bg-[#8d6a02] hover:text-white text-[#333]`}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? 'Loading...' : 'Checkout'}
            </Link>
          </div>
        )}
      </div>
      {/* Add the CheckoutModal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Checkout Modal"
        ariaHideApp={false}
        overlayClassName="bg-black bg-opacity-75 fixed inset-0 z-50"
      >

        <CheckoutModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          checkoutData={checkoutData}
          shippingAmount={shippingAmount}
          //@ts-ignore
          cartDetails={cartDetails}
          className="absolute bottom-0 right-0"
        />
      </Modal>
      <Script>
        {``}
      </Script>
      <Script src="https://secure.transactiongateway.com/token/Collect.js" data-checkout-key="27fTc9-QNjJ76-5g5TfC-aQxZq6"
        data-variant="inline"
        data-field-ccnumber-placeholder="0000 0000 0000 0000"
        data-field-ccexp-placeholder="10 / 23"
        data-field-cvv-placeholder="123"
        data-custom-css='{}'
      />
    </section>
  )
}
