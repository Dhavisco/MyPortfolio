import { socials } from "../store/data";

const Socials = () => {
  return (
    <div>
      <div className="flex py-4 space-x-3 sm:mt-0 leading-normal flex-center text-center">
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
      </div>
    </div>
  );
};

export default Socials;
