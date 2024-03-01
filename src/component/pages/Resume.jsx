import { useState } from "react";
import Header from "../Resume/Header";
import Stacks from "../Resume/Stacks";
import { About } from "../store/data";
import Typewriter from "typewriter-effect";

const Resume = () => {
  const [trigger, setTrigger] = useState();

  //    const [back2Top, setBack2Top] = useState();

  //    function scrollHandler() {
  //      if (window.scrollY >= 250) {
  //        setBack2Top(true);
  //      } else {
  //        setBack2Top(false);
  //      }
  //    }
  //    window.addEventListener("scroll", scrollHandler);
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

          <section className="my-12 text-md" id="Resume">
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
        </main>
      </section>
    </>
  );
};

export default Resume;
