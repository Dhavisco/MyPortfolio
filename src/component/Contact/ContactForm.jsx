import { useForm, ValidationError } from "@formspree/react";
import { formspreeId } from "../store/data";
import { useEffect } from "react";
import PropTypes from "prop-types";
import img from "../../assets/avatar.png";

const ContactForm = ({ onSuccess }) => {
  const formId = formspreeId[0].id;
  const [state, handleSubmit] = useForm(formId);

   useEffect(() => {
     if (state.succeeded) {
       onSuccess();
     }
   }, [state.succeeded, onSuccess]);
  if (state.succeeded) {
    return (
      <>
        <p className="font-[Poppins] lg:text-base text-sm font-light text-left">
          Thank you for Reaching out! I will respond as soon as possible
        </p>
        <div className="flex justify-center mt-7">
          <img src={img} alt="" loading="lazy" className="h-[17rem] rounded-full" />
        </div>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="flex flex-col font-[Poppins] items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
        <input
          id="Full Name"
          type="text"
          name="Full Name"
          placeholder="Full Name"
          required
          onInvalid={(e) =>
            e.target.setCustomValidity("Please enter your full name.")
          }
          onInput={(e) => e.target.setCustomValidity("")}
          className=" text-sm text-gray-500 font-light shadow-md shadow-gray-900 duration-300 transform border-solid border border-[#808080b9] bg-black p-4 rounded-lg"
        />
        <ValidationError
          prefix="Full Name"
          field="Full Name"
          errors={state.errors}
        />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
          onInvalid={(e) =>
            e.target.setCustomValidity("Please enter a valid email address.")
          }
          onInput={(e) => e.target.setCustomValidity("")}
          className="text-sm text-gray-500 font-light shadow-md shadow-gray-900 duration-300 transform border-solid border border-[#808080b9] bg-black p-4 rounded-lg"
        />

        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-xs font-light pl-2"
        />
      </div>
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        required
        onInvalid={(e) =>
          e.target.setCustomValidity("Please type in your message.")
        }
        onInput={(e) => e.target.setCustomValidity("")}
        className="text-base text-gray-500 font-light shadow-md shadow-gray-900 duration-300 transform border-solid border border-[#808080b9] bg-black px-4 py-2 rounded-lg w-full h-[10rem]"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="w-full px-4 py-2 text-white font-medium bg-gradient-to-r from-green-600 to-gray-500 group-hover:from-green-600 group-hover:to-gray-500 focus:ring-blue-300 dark:focus:ring-green-800 shadow-sm hover:first-line:bg-gradient-to-l hover:from-green-600 hover:to-green-500 active:bg-green-600 rounded-lg duration-150 "
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default ContactForm;

