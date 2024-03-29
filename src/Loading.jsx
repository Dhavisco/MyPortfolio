import { RiLoader2Fill } from "react-icons/ri";
import img from "./assets/avatar.png";
function Loading() {
  return (
    <div
      role="status"
      className="flex items-center place-content-center bg-black h-screen w-screen relative"
    >
      <div className="flex-1 text-center pt-2 justify-center items-center flex relative flex-col">
        <img
          src={img}
          alt="loader" loading="lazy"
          className="w-[30%] lg:w-[14rem] lg:h-[16rem] ml-2"
        />{" "}
        <RiLoader2Fill className="text-white mt-2 animate-spin" />
        <p
          className="lg:text-4xl mt-1 text-white text-2xl tracking-wide animate-pulse"
          style={{ fontFamily: "Dancing Script" }}
        >
          LOADING...
        </p>
      </div>
    </div>
  );
}

export default Loading;
