import { useState } from "react";
import Header from "../component/Resume/Header";
import Stacks from "../component/Resume/Stacks";
import { About, Experiences, Education, Certification, Projects, Recommendations, Recomlink, tools } from "../component/store/data";
import Typewriter from "typewriter-effect";
import {FaExternalLinkAlt, FaRegArrowAltCircleUp} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  // Pagination,
  // Scrollbar,
  // A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Footer from "../component/Footer";

const Resume = () => {
  const [trigger, setTrigger] = useState();

     const [back2Top, setBack2Top] = useState();

     function scrollHandler() {
       if (window.scrollY >= 250) {
         setBack2Top(true);
       } else {
         setBack2Top(false);
       }
     }
     window.addEventListener("scroll", scrollHandler);
  return (
    <>
      <section
        className="flex flex-col lg:p-16 p-6 md:p-8 bg-black min-h-screen text-white font-[Poppins]"
        id="Home"
      >
        <header className="">
          <Header />
        </header>
        <main className="max-h-content">
          <section className="lg:mx-8 ">
            <Stacks />
          </section>

          <section className=" my-6 md:my-12 text-md" id="quote">
            <div className="quote h-14">
              <span className=" mb-5 lg:text-3xl flex  sm:text-2xl md:text-2xl  lg:text-justify items-center text-center justify-center lg:justify-normal">
                <span className="flex  px-6 sm:text-sm text-xs italic gap-1">
                  {" "}
                  <Typewriter
                    options={{ loop: true }}
                    onInit={(writer) => {
                      writer.typeString(
                        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
                      );
                      writer.pauseFor(5000);
                      writer.deleteAll();

                      writer.typeString(
                        "Your attitude determines your altitude. Rise above the challenges with a positive mindset and soar to new heights. - Zig Ziglar"
                      );
                      writer.pauseFor(5000);
                      writer.deleteAll();
                      writer.typeString(
                        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D.Roosevelt"
                      );
                      writer.pauseFor(5000);
                      writer.deleteAll();

                      writer.typeString(
                        "Don't watch the clock; do what it does. Keep going. - Sam Levenson"
                      );
                      writer.pauseFor(5000).start();
                    }}
                  />
                </span>
              </span>
            </div>

            {About.map((value, index) => (
              <div
                key={index}
                className="font-light tracking-wide leading-5 lg:text-base text-xs"
              >
                {value.about}
                {trigger ? (
                  <span>
                    <p className="py-2 font-light tracking-wide leading-5">
                      {value.more}
                    </p>
                    <p className="font-light tracking-wide leading-5">
                      {value.extra}
                    </p>
                  </span>
                ) : (
                  ""
                )}
              </div>
            ))}
            {trigger ? (
              ""
            ) : (
              <>
                <input
                  onClick={() => {
                    setTrigger(!trigger);
                  }}
                  type="button"
                  value="Readmore..."
                  className="text-md cursor-pointer font-bold py-3"
                />
              </>
            )}
          </section>

          <section className="" id="Experience ">
            <p className="text-xl md:text-2xl font-bold py-4 md:py-8 uppercase">
              Experience
            </p>
            <div className="md:pb-8 pb-4 pl-2">
              {Experiences.map((value, index) => (
                <div key={index} className="text-sm">
                  <div>{value.date}</div>
                  <div className="font-medium text-base md:text-lg uppercase">
                    {value.institution}
                  </div>
                  <div className="font-normal md:text-base">{value.title}</div>
                  <div className="text-xs md:text-sm font-light font pt-[2px]">
                    {value.skills}
                  </div>
                  <hr className="my-4 h-[0px]" />
                </div>
              ))}
            </div>
          </section>

          <section className="" id="Education ">
            <p className="text-xl md:text-2xl font-bold py-4 uppercase">
              Education
            </p>
            <div className="pb-4 md:pb-8 pl-2">
              {Education.map((value, index) => (
                <div key={index} className="text-sm">
                  <div>{value.date}</div>
                  <div className="font-medium text-base md:text-lg uppercase">
                    {value.institution}
                  </div>
                  <div className="font-normal md:text-base">{value.title}</div>
                  <div className="text-xs md:text-sm font-light pt-[2px]">
                    {value.grade}
                  </div>
                  <hr className="my-4 h-[0px]" />
                </div>
              ))}
            </div>
          </section>

          <section className="" id="Certification">
            <p className="text-xl md:text-2xl font-bold py-4 uppercase">
              Certification
            </p>
            <div className="pb-4 md:pb-8 pl-2">
              {Certification.map((value, index) => (
                <div key={index} className="text-sm">
                  <div>{value.date}</div>
                  <div className="font-medium text-base md:text-lg uppercase">
                    <a href={value.link} className="hover:text-green-600">
                      {value.course}
                    </a>
                  </div>
                  <div className="font-normal md:text-base">{value.title}</div>
                  <div className="text-xs md:text-sm font-light pt-[2px]">
                    {value.skills}
                  </div>
                  <hr className="my-4 h-[0px]" />
                </div>
              ))}
            </div>
          </section>
          <section className="" id="Project">
            <p className=" text-xl md:text-2xl font-bold py-4 uppercase">
              Project
            </p>
            <div className="pb-4 md:pb-8 pl-2">
              {Projects.map((value, index) => (
                <div key={index} className="text-sm">
                  <div className="font-medium text-lg md:text-xl uppercase">
                    <a href={value.link} className="hover:text-green-600">
                      {value.title}
                      <span className="text-[10px] text-gray-400 mx-2 hover:text-green-600 absolute">
                        <FaExternalLinkAlt />
                      </span>
                    </a>
                  </div>
                  <div className=" md:text-base font-normal">
                    {value.technologies}
                  </div>
                  <div className="text-xs md:text-sm font-light pt-[2px] tracking-wide leading-4">
                    {value.description}
                  </div>

                  <div className="flex mt-1.5">
                    <a
                      href={value.link}
                      className="w-max items-center gap-3 relative flex justify-center overflow-hidden cursor-pointer
                         font-normal rounded-full py-1 hover:ring-green-900 transition-all ease-in-out hover:ring-2 border  ring-gray-300 hover:scale-95 active:scale-90"
                    >
                      <div className="w-max items-center flex px-4 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0 lg:text-xs text-xs">
                        Live URL
                      </div>
                    </a>

                    <a
                      href={value.repo}
                      className=" overflow-hidden cursor-pointer
                         font-normal rounded-full py-1 ml-5 hover:ring-green-900 transition-all ease-in-out hover:ring-2 border  ring-gray-300 hover:scale-95 active:scale-90"
                    >
                      <div className="w-max items-center flex px-4 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0 lg:text-xs text-xs">
                        Repo URL
                      </div>
                    </a>
                  </div>

                  <hr className="my-4 h-[0px]" />
                </div>
              ))}
            </div>
          </section>

          <section className="" id="Recommendations ">
            <p className="text-xl md:text-2xl font-bold py-4 uppercase">
              {" "}
              <a href={Recomlink} className="hover:text-green-600">
                Recommendations
              </a>
            </p>
            <div className="pb-4 md:pb-8 pl-2">
              {Recommendations.map((value, index) => (
                <div key={index} className="text-sm">
                  <div>{value.date}</div>
                  <div className="font-medium text-base md:text-lg uppercase">
                    {value.name}
                  </div>
                  <div className="font-normal md:text-base">{value.title}</div>
                  <div className="text-xs md:text-sm font-light pt-[2px]">
                    {value.desc}
                  </div>
                  <hr className="my-4 h-[0px]" />
                </div>
              ))}
            </div>
          </section>

          <section id="tools" className=" my-1 md:my-7 md:h-16">
            <div className="">
              <Swiper
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                spaceBetween={15}
                slidesPerView={5}
              >
                {tools.map((val, key) => (
                  <SwiperSlide
                    key={key}
                    className="cursor-pointer hover:text-2xl"
                  >
                    <div className="flex items-center flex-col lg:text-4xl text-md">
                      {val.icon}{" "}
                      <div className="font['Inter'] cursor-pointer text-xs font-thin py-1">
                        {val.name}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        </main>

        <div className="relative ">
          <a
            href="#Home"
            className={
              !back2Top
                ? "hidden"
                : " hover:text-3xl hover:scale-90 active:scale-90 fixed text-2xl animate-bounce rounded-full bottom-10 right-5"
            }
            id="back2Top"
          >
            <FaRegArrowAltCircleUp />
          </a>
        </div>

        <footer>
          <Footer />
        </footer>
      </section>
    </>
  );
};

export default Resume;
