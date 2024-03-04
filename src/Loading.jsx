import { RiLoader2Fill } from "react-icons/ri";
import img from "./assets/avatar.png";
function Loading() {
  return (
    <div
      role="status"
      className="flex items-center place-content-center bg-black h-screen w-screen relative"
    >
      <div className="flex-1 text-center pt-5 justify-center items-center flex relative flex-col">
        <img src={img} alt="loader" className="animate-pulse w-[30%] lg:w-[14rem] lg:h-[16rem] ml-2" />{" "}
        <RiLoader2Fill className="text-white mt-2 animate-spin" />
        <p className="brandname lg:text-4xl text-white text-2xl animate-pulse">
          LOADING...
        </p>
      </div>
    </div>
  );
}

export default Loading;
