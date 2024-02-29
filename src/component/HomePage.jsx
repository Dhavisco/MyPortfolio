import Typewriter from 'typewriter-effect'
import Socials from './Socials';

const HomePage = () => {
  return (
    <div
      id="home"
      className="flex flex-col pt-12 px-2 items-center h-screen bg-cover bg-[#161616e3]"
    >
      <img
        src="../src/assets/myimage.jpg"
        alt="David Olaniyi"
        className="rounded-3xl mx-auto w-[14rem] h-[14rem] object-cover border-gray-500 shadow-lg sm:w-48 sm:h-48 "
      />
      <h1 className="text-3xl text-center mt-2 text-white font-bold">
        Hi, I&apos;m David Olaniyi
      </h1>
      <div className="mt-2 px-3 py-1 bg-gradient-to-r from-blue-600 to-gray-600 text-white sm:text-sm">
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

      <div className="text-sm font-normal text-gray-500 lg:text-xl  lg:w-4/5 py-4 leading-normal text-center flex  justify-center flex-col items-center">
        I&apos;m a skilled software engineer creating efficient and
        user-friendly solutions to enhance productivity.
        <Socials/>
      </div>

      <div className="">
        <a
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-gray-500 group-hover:from-blue-600 group-hover:to-gray-500 bg-[#242424] focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-sm"
          href={"/"}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#242424] dark:bg-[#242424] rounded-md group-hover:bg-opacity-0 text-white justify">
            RESUME
          </span>
        </a>
        <a
          href="/contact"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-gray-500 group-hover:from-blue-600 group-hover:to-gray-500 hover:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-sm"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#242424] dark:bg-[#242424] rounded-md group-hover:bg-opacity-0 text-white">
            QUOTES
          </span>
        </a>
      </div>
    </div>
  );
};

export default HomePage
