import React from "react";
import Contact from "../components/Contact";
import HeroTwo from "../components/HeroTwo";

type ContactPageProps = {
  heading: string;
  message: string;
};

const ContactPage = ({ heading, message }: ContactPageProps) => {
  return (
    <div>
      <HeroTwo
        heading="Contact Us"
        message="Interested in getting a rack? Please fill out the form below and a member of our team will get back with you as soon as possible"
      />
      <Contact />
    </div>
  );
};

export default ContactPage;