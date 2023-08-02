import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import { Metadata } from "next";
import { Providers } from "./components/providers";
import Script from "next/script";


// create metadata for the page
export const metadata = {
  title: "Radgnarack | Racks for Electric Bikes",
  description: "This site features rad racks for electric bikes - Radgnarack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <GoogleAnalytics GA_MEASUREMENT_ID="G-GP0GQ2E306" />
      <body>
        <Providers>
        <Navbar />
        {children}
        <CookieBanner />
        <ToastContainer />
        <Footer />
        </Providers>
        
      </body>
    </html>
   

  );
}
