import Head from "../component/Head";
import ContactForm from "../component/Contact/ContactForm";
import { useState } from "react";


const Contact = () => {
 
   const [isSubmitted, setIsSubmitted] = useState(false);


  return (
    <main className="bg-black h-screen max-h-content">
      <Head />
      <main className="py-14 px-1">
        <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8">
          <div className="max-w-lg mx-auto space-y-3 sm:text-center text-sm">
            <h1 className="py-4 px-2 mb-3 text-semibold font-[Poppins] text-2xl text-white mt-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-green-500 border-b-2 text-3xl">
                Get in touch&nbsp;
              </span>
            </h1>
            {!isSubmitted && (
              <p className="font-light text-sm">
                Let&apos;s Connect! Share your thoughts and get in touch using
                the form below.
              </p>
            )}
          </div>
          <div className="mt-12 max-w-lg mx-auto">
            <ContactForm onSuccess={() => setIsSubmitted(true)} />
          </div>
        </div>
      </main>
    </main>
  );
};

export default Contact;


