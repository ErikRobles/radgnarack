"use client";
import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
    //For Testing
    console.log("Cookie Consent: ", cookieConsent);

  }, [cookieConsent]);

  return (
    <div
      className={`my-10 mx-auto max-w-max md:max-w-screen-sm text-white
                        fixed bottom-0 left-0 right-0 bg-opacity-75
                        ${cookieConsent != null ? "hidden" : "flex"} px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-black rounded-lg shadow z-2000`}
    >
      <div className="text-center">
        <Link href="../cookies">
          <p>
            We use <span className="font-bold text-[#ffc000]">cookies</span> on
            our site.
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button className="px-5 py-2 text-gray-300 rounded-md border-gray-900" onClick={() => setCookieConsent(false)}>
          Decline
        </button>
        <button className="bg-[#ffc000] px-5 py-2 text-black rounded-lg" onClick={() => setCookieConsent(true)}>
          Allow Cookies
        </button>
      </div>
    </div>
  );
}
