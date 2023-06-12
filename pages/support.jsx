import React from "react";
import Contact from "../components/Contact";
import HeroTwo from "../components/HeroTwo";

const support = () => {
  return (
    <div>
      <HeroTwo
        heading="Support"
        message="Please fill out the form below and a member of our team will get back with you as soon as possible"
      />
      <Contact />
    </div>
  );
};

export default support;