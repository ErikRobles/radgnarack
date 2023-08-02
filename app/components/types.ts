export interface CartItemType {
    _id: string;
    quantity: number;
    totalPrice: number;
    shippingAmount: number;
    totalAmount: number;
    productName: string;
    price: number;
    currency: string;
    // Add any other relevant product data you want to include in the checkoutData object
  }
  
  export interface CheckoutData {
    productName: string;
    price: number;
    currency: string;
    quantity: number;
    totalPrice: number;
    shippingAmount: number;
    totalAmount: number;
    // Add any other relevant product data you want to include in the checkoutData object
  }