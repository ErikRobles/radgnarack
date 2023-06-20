import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleAnalytics from './components/GoogleAnalytics';


import "./globals.css";
import CookieBanner from './components/CookieBanner';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-GP0GQ2E306" />
      <body>
        <Navbar />
        {children}
        <CookieBanner />
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
