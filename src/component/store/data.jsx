import { BsPuzzle } from "react-icons/bs";
import { TbWritingSign } from "react-icons/tb";
import {
  //   FaXTwitter,
  //   FaMedium,
  //   FaDev,
  //   FaLinkedinIn,
  //   FaGithub,
  FaReact,
  FaShopify,
  FaRankingStar,
  FaPalette,
  //   FaCss3,
  
} from "react-icons/fa6";
// import {
//   SiTailwindcss,
//   SiNextdotjs,
//   SiReact,
//   SiTypescript,
//   SiBootstrap,
//   SiFirebase,
//   SiMongodb,
//   SiPython,
//   SiJavascript,
//   SiPhp,
//   SiRadstudio,
//   SiHtml5,
//   SiVite,
//   SiNpm,
//   SiGit,
//   SiVisualstudiocode,
//   SiSqlite,
//   SiWordpress,
// } from "react-icons/si";

export const About = [
  {
    about: `I'm David Olaniyi, a frontend engineer with expertise in web development, technical writing, and IT support. Possessing a broad range of abilities and a talent for resolving issues, I perform best in dynamic settings that foster creativity and innovation.

My specialty is creating solutions with a stack that consists of majorly JavaScript, Python, c++, and other OOP languages with frameworks. Creating user-friendly interfaces, building software, or offering technical support are just a couple of the ways I'm dedicated to exceeding clients' expectations with my work.  My interpersonal skills are reliable, and I am competent at communicating with different kinds of stakeholders.
`,
  },
  {
    more: `Through my internship in HR at a consulting firm (PwC Nigeria), I have worked with individuals from a variety of cultural backgrounds and gained experience in developing solutions to fit their unique needs.  I'm driven by a passion for excellence and constantly willing to take on new tasks and broaden my perspectives `,
  },
  {
    extra: ` Let's get in touch and discuss how we can use creativity, imagination, and technical expertise to make your projects come to life!`,
  },
];

export const Stack = [
  {
    name: "Frontend Engineering",
    icon: <BsPuzzle color="#57518b" />,
  },

  {
    name: "E-commerce",
    icon: <FaShopify color="#ffb170" />,
  },
  {
    name: "Technical Writing",
    icon: <TbWritingSign color="#679d7f" />,
  },
  {
    name: "Web Development",
    icon: [<FaReact color="#da9797" key="reactIcon" />],
  },

  {
    name: "IT Support",
    icon: <FaRankingStar color="#445445" />,
  },
  {
    name: "UI/UX Design",
    icon: <FaPalette color="#00749C" />,
  },
];
