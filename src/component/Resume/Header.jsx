// import { useState } from "react";
// import { SiBuymeacoffee } from "react-icons/si";
// import { Modal } from "./Modal";
import img from "../../assets/myimage.png";

const Header = () => {
//   const [trigger, setTrigger] = useState();

//   const modalSwitch = () => {
//     setTrigger(true);
//   };

  return (
    <>
      {/* <section className="absolute">
        <Modal trigger={trigger} />
      </section> */}

      <section className="flex justify-between lg:py-2 pt-12 pb-4 lg:items-center font-[Poppins]">
        <div className="flex flex-col mb-4 gap-y-1">
          <img
            src={img}
            alt="img"
            className="flex items-center place-content-center rounded-full lg:h-[11rem] lg:w-[8rem] h-[5rem] w-[4.1rem] cursor-pointer"
            // onClick={modalSwitch}
          />
          <a className=" font-bold text-3xl lg:text-4xl  cursor-pointer" href="/">
            {" "}
            David Olaniyi{" "}
          </a>
          <div className="lg:text-md md:text-sm text-[.5em] font-bold lg:font-semibold">
            {" "}
            <span>
              {" "}
              <a href="#" className="cursor-pointer">
                @Davisco
              </a>{" "}
              &nbsp;¤ &nbsp;Lagos, Nigeria.{" "}
            </span>
          </div>
        </div>
        <div className="flex  gap-y-2 lg:items-center items-start font-['Inter']">
          <div className="flex justify-center items-center  ">
            <a
              className="w-max items-center gap-3 relative flex justify-center p-0.5 mb-2 mr-2 overflow-hidden cursor-pointer
                         font-medium rounded-full  py-2 hover:ring-green-900 transition-all ease-in-out hover:ring-2 border  ring-gray-300 hover:scale-95 active:scale-90"
            >
              <span className="w-max items-center gap-2 flex px-5  transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0 lg:text-md text-xs">
                Hire Me
              </span>
            </a>
          </div>
          <div className="lg:block hidden">
            <a
              className="  gap-3 relative inline-flex justify-center p-0.5 mb-2 mr-2 overflow-hidden cursor-pointer
                         font-medium  rounded-full text-green-900 py-2 hover:ring-green-900 transition-all ease-in-out hover:ring-2 border ring-gray-300  hover:scale-95 active:scale-90"
            >
              <span className="text-green-900 items-center gap-2 flex relative px-5  transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0  lg:text-md text-xs">
                Sponsor{" "}
                {/* <span>
                  <SiBuymeacoffee color="green" />
                </span> */}
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};


export default Header;
