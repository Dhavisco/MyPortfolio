import Typewriter from 'typewriter-effect'
import Socials from './Socials';
import img from "../assets/myimage.png";
import "./HomePage.css"

const HomePage = () => {
  return (
    <div
      id="home"
      className="text-s flex flex-col pt-8 px-4 items-center h-screen bg-cover font-[Poppins] bg-[#0a0a0af6]"
    >
      <img
        src={img}
        alt="David Olaniyi"
        className="mx-auto w-[14rem] h-[18rem] object-cover border-gray-500 sm:w-48 sm:h-48 "
      />
      <h1 className="text-2xl text-center mt-2 font-[Poppins] text-white font-extrabold">
        David Olaniyi
      </h1>
      <div className="mt-2 px-3 bg-gradient-to-r from-blue-600 to-gray-600 text-white sm:text-sm">
        <Typewriter
          options={{ loop: true }}
          onInit={(writer) => {
            writer.typeString("A Frontend Engineer...");
            writer.pauseFor(5000);
            writer.deleteAll();

            writer.typeString("A Tech Enthusiast...");
            writer.pauseFor(5000);
            writer.deleteAll();
            writer.typeString("IT Support Specialist...");
            writer.pauseFor(5000);
            writer.deleteAll();

            writer.typeString("An Open Source Contributor...");
            writer.pauseFor(5000).start();
          }}
        />
      </div>

      <div className="font-light text-sm text-gray-500 lg:text-xl  lg:w-4/5 py-3 leading-normal text-center flex justify-center flex-col items-center">
        I&apos;m a skilled frontend engineer creating efficient and
        user-friendly solutions to enhance productivity.
        <Socials />
      </div>

      <div className="">
        <a
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-gray-500 group-hover:from-blue-600 group-hover:to-gray-500 bg-[#242424] focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-sm"
          href={"/"}
        >
          <span className="relative text-sm font-extralight px-5 py-2.5 transition-all ease-in duration-75 bg-[#242424] dark:bg-[#242424] rounded-md group-hover:bg-opacity-0 text-white justify">
            RESUME
          </span>
        </a>
        <a
          href={"/"}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-gray-500 group-hover:from-blue-600 group-hover:to-gray-500 hover:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-sm"
        >
          <span className="relative text-sm font-extralight px-5 py-2.5 transition-all ease-in duration-75 bg-[#242424] dark:bg-[#242424] rounded-md group-hover:bg-opacity-0 text-white">
            QUOTES
          </span>
        </a>
      </div>
    </div>
  );
};

export default HomePage
