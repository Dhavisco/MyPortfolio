import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../Loading";
function Head() {
  const [toggle, setToggle] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <nav
        className={
          " w-screen fixed bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-4 shadow-md z-50"
        }
      >
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
          <Link to="/" className="flex items-center">
            <span
              className="self-center text-2xl font-semibold whitespace-nowrap text-white hover:text-green-400 brandname transition-colors duration-300 ease-in-out"
              style={{ fontFamily: "Dancing Script" }}
            >
              <span className="text-green-400 hover:text-white transition-colors duration-300 ease-in-out">
                *
              </span>{" "}
              Davisco
            </span>
          </Link>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-green-600 rounded-lg md:hidden outline-none focus:outline-none hover:text-gray-700 transition-colors duration-300 ease-in-out"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
              </svg>
            </button>
          </div>
          <div
            id="mega-menu"
            className={
              toggle
                ? "items-center justify-between hidden w-full md:flex md:w-auto md:order-1 backdrop-blur-lg bg-opacity-0 shadow-md bg-black z-50"
                : "items-center justify-between  w-full md:flex md:w-auto md:order-1 g-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 shadow-md bg-black z-50"
            }
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link
                  to="/"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0  md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-green-500 md:dark:hover:bg-transparent dark:border-gray-700 hover:text-[#242424] transition-colors duration-300 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  id="mega-menu-dropdown-a"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0  md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-green-500 md:dark:hover:bg-transparent dark:border-gray-700 hover:text-[#242424] transition-colors duration-300 ease-in-out"
                >
                  Resume
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent  md:hover:text-green-600 md:p-0  md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-green-500 md:dark:hover:bg-transparent dark:border-gray-700 hover:text-[#242424] transition-colors duration-300 ease-in-out"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Head;
