import Typewriter from 'typewriter-effect'
import Socials from './Socials';
import img from "../assets/myimage.png";
import "./HomePage.css"

const HomePage = () => {
  return (
    <div id="home" className=" pt-8 md:pt-4 px-6 bg-[#000000] h-screen">
      <div>
        <a
          className=" font-bold text-xl text-white lg:text-3xl cursor-pointer"
          style={{ fontFamily: "Dancing Script" }}
          href="/"
        >
          David Olaniyi
        </a>
      </div>

      <div className="text-s flex flex-col items-center bg-cover font-[Poppins]">
        <img
          src={img}
          alt="David Olaniyi"
          className="flex mx-auto w-[15rem] h-[18rem] md:w-[16rem] md:h-[20rem] object-cover border-gray-500"
        />

        <h1 className="text-2xl lg:text-5xl text-center mt-2.5 font-[Poppins] text-white font-extrabold">
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

        <div className="font-light text-xs text-gray-500 lg:text-lg sm:w-1/2 py-3 leading-normal text-center flex justify-center flex-col items-center">
          I&apos;m a skilled frontend engineer creating efficient and
          user-friendly solutions to enhance productivity.
          <Socials />
        </div>

        <div className="button">
          <a
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-gray-500 group-hover:from-blue-600 group-hover:to-gray-500 bg-[#242424] focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-sm"
            href={"/resume"}
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
              Contact
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage
