import React from "react";
import Contact from "../components/Contact";
import HeroTwo from "../components/HeroTwo";

const contact = () => {
  return (
    <div>
      <HeroTwo
        heading="Contact Us"
        message="We'd love to hear from you. Fill in the form below and we will get in touch with you as quickly as possible."
      />
      <Contact />
    </div>
  );
};

export default contact;
