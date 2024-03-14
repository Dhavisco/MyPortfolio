import Typewriter from "typewriter-effect";
import Socials from "./Socials";
import img from "../../assets/bitmoji.png";
import "./HomePage.css";
import { Link } from "react-router-dom";
import Loading from "../../Loading";
import { useState, useEffect } from "react";
const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div id="home" className="home pt-8 lg:pt-6 px-6 h-screen">
      <div>
        <Link
          to="/"
          className=" font-bold text-xl hover:text-green-400 text-white lg:text-3xl cursor-pointer transition-colors duration-300 ease-in-out"
          style={{ fontFamily: "Dancing Script" }}
        >
          <span className="text-green-400 hover:text-white transition-colors duration-300 ease-in-out">
            *
          </span>{" "}
          Davisco
        </Link>
      </div>

      <div className="text-s flex flex-col items-center bg-cover font-[Poppins]">
        <img
          src={img}
          alt="David Olaniyi" loading="lazy"
          className="flex mx-auto w-[10rem] h-[13rem] md:w-[10rem] md:h-[14rem] object-cover rounded-full border-gray-500"
        />

        <h1 className="text-2xl lg:text-4xl text-center mt-2.5 font-[Poppins] text-white font-extrabold">
          David Olaniyi
        </h1>
        <div className="mt-2 px-3 bg-gradient-to-r from-green-600 to-gray-600 text-white sm:text-sm">
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

        <div className="font-light text-sm text-gray-500 lg:text-lg sm:w-1/2 py-3 leading-normal text-center flex justify-center flex-col items-center">
          I&apos;m a skilled frontend engineer creating efficient and
          user-friendly solutions to enhance productivity.
          <Socials />
        </div>

        <div className="button">
          <a
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-600 to-gray-500 group-hover:from-green-600 group-hover:to-gray-500 bg-[#242424] focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-sm"
            href={"/resume"}
          >
            <span className="relative text-sm font-extralight px-5 py-2.5 transition-all ease-in duration-75 bg-[#242424] dark:bg-[#242424] rounded-md group-hover:bg-opacity-0 text-white justify">
              RESUME
            </span>
          </a>
          <a
            href={"/contact"}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-600 to-gray-500 group-hover:from-green-600 group-hover:to-gray-500 hover:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-sm"
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

export default HomePage;
