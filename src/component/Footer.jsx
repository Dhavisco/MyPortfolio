import {socials} from "./store/data"

const Footer = () => {
  return (
    <section>
      <hr className="my-9 " />
      <div className="lg:text-lg text-md mt-2 flex flex-col lg:flex-row md:flex-row gap-y-6  lg:justify-between md:justify-between justify-center items-center">
        <p className="hover:text-green-400 cursor-pointer">
          David Olaniyi ❤ ¤ &nbsp; Lagos, Nigeria.
        </p>
        <p className="flex lg:text-md text-sm">
          {socials.map((value, index) => (
            <a
              key={index}
              href={value.link}
              className={`lg:text-2xl text px-2.5 text-md`}
            >
              {" "}
              {value.icon}
            </a>
          ))}
        </p>
        <div className="text-xs md:text-sm">&copy; Davisco 2024.</div>
      </div>
    </section>
  );
}

export default Footer
