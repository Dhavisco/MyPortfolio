import { SiBuymeacoffee } from "react-icons/si";

import img from "../../assets/myimage.png";
import { Link } from "react-router-dom";

const Header = () => {

  const coffeeLink = "https://www.buymeacoffee.com/davisco";

  return (
    <>
      <section className="flex justify-between lg:py-2 pt-6 pb-4 lg:items-center font-[Poppins]">
        <div className="flex flex-col mb-4 gap-y-1">
          <img
            src={img}
            alt="img"
            className="flex items-center place-content-center rounded-full lg:h-[11rem] lg:w-[8rem] h-[5rem] w-[4rem] cursor-pointer"
          />
          <Link
            to="/"
            className=" font-bold text-3xl lg:text-4xl cursor-pointer"
            style={{ fontFamily: "Dancing Script" }}
          >
            {" "}
            David Olaniyi{" "}
          </Link>
          <div className="lg:text-md md:text-sm text-[.5em] font-bold lg:font-semibold">
            {" "}
            <span>
              {" "}
              <Link to="/" className="cursor-pointer hover:text-green-500 transition-colors duration-300 ease-in-out">
                @Davisco
              </Link>{" "}
              <span className="text-green-500">&nbsp;¤ &nbsp;Lagos, Nigeria. </span>
            </span>
          </div>
        </div>
        <div className="flex  gap-y-2 lg:items-center items-start font-['Inter']">
          <div className="flex justify-center items-center  ">
            <Link
              to="/contact"
              className="w-max items-center gap-3 relative flex justify-center p-0.5 mb-2 mr-2 overflow-hidden cursor-pointer
                         font-medium rounded-full  py-2 hover:ring-green-900 transition-all ease-in-out hover:ring-2 border  ring-gray-300 hover:scale-95 active:scale-90"
            >
              <span className="w-max items-center gap-2 flex px-5  transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0 lg:text-md text-xs">
                Hire Me
              </span>
            </Link>
          </div>
          <div className="lg:block hidden">
            <a
              href={coffeeLink}
              className="  gap-3 relative inline-flex justify-center p-0.5 mb-2 mr-2 overflow-hidden cursor-pointer
                         font-medium  rounded-full hover:text-green-900  py-2 hover:ring-green-900 transition-all ease-in-out hover:ring-2 border ring-gray-300  hover:scale-95 active:scale-90"
            >
              <span className="text-green-500  items-center gap-2 flex relative px-5  transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0  lg:text-md text-xs">
                Sponsor{" "}
                <span>
                  <SiBuymeacoffee color="green" />
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};


export default Header;
