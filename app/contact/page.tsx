import Contact from "../components/Contact";
import HeroTwo from "../components/HeroTwo";


const ContactPage = () => {
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