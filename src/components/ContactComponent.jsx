import { CONTACT } from "../constants/index";
const ContactComponent = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tight">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="my-4">{CONTACT.email}</a>
      </div>
    </div>
  );
};

export default ContactComponent;
