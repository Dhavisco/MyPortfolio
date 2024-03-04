import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {

const formId = import.meta.env.REACT_APP_FORMSPREE_ID;

  const [state, handleSubmit] = useForm(`${formId}`);
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
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
        className="w-full px-4 py-2 text-white font-medium bg-gradient-to-r from-blue-600 to-gray-500 group-hover:from-blue-600 group-hover:to-gray-500 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-sm hover:first-line:bg-gradient-to-l hover:from-gray-600 hover:to-blue-500 active:bg-indigo-600 rounded-lg duration-150 "
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;

