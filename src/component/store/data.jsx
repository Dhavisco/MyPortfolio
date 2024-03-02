import { BsPuzzle } from "react-icons/bs";
import { TbWritingSign } from "react-icons/tb";
import {
  //   FaXTwitter,
  //   FaMedium,
  //   FaDev,
  //   FaLinkedinIn,
  //   FaGithub,
  FaReact,
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
    name: "IT Support",
    icon: <FaRankingStar color="#445445" />,
  },

  {
    name: "Technical Writing",
    icon: <TbWritingSign color="#679d7f" />,
  },
  {
    name: "Graphics Design",
    icon: <FaPalette color="#00749C" />,
  },
  {
    name: "Web Development",
    icon: [<FaReact color="#da9797" key="reactIcon" />],
  },
  {
    name: "UI/UX Design",
    icon: <FaPalette color="#00749C" />,
  },
];

export const Experiences = [
  {
    institution: "PwC Nigeria ",
    date: "Jul 2022 - Jun 2023",
    title: "Human Capital Intern",
    skills:
      "Headshot Photography · IT Support · New Hire Onboarding · Assessment · HRIS · Human Capital Management · Recruitment",
    description:
      "Assisted in the Recruitment and Onboarding of staff in the firm",
  },
  {
    institution: "HNG Internship · Internship",
    date: "Sep-2023 - Oct-2023",
    title: "Frontend Engineer",
    skills: "Collaboration  · Analytical Skills · Frontend Development",
    description:
      "I developed web applications using javascript framework (REACT js)",
  },

  {
    institution: "Zuri Team, Inc. · Internship",
    date: "May 2022 - Aug 2022",
    title: " Full-stack Engineer ",
    skills:
      "Collaboration · Python · Mysqli · CSS · Django · JavaScript · FullStack Development",
    description:
      "I developed web applications using Django framework, collaborated with other developers to improve web application performance, and gained valuable experience in web development and teamwork.",
  },
  {
    institution: "Soft Nobel Technology",
    date: "Jan-2021 - Aug-2022",
    title: "Frontend Developer, UI/UX Designer",
    skills: "Systems Design · Analytical Skills · User Interface Design",
    description: " ",
  },
  {
    institution: "Federal Institute of Industrial Research, Oshodi - FIIRO",
    date: "Aug-2021 - Nov-2021",
    title: "Computer Science",
    skills:
      "Web Design · Workspace · Analytical Skills · User Interface Design",
    description:
      " I gained a solid understanding of programming, algorithms, data structures, and computer systems. I also worked on various projects including developing software applications, creating websites, and designing databases.",
  },
];

export const Education = [
  {
    institution: "Yaba College of Technology, Yaba, Lagos ",
    date: "May 2023 Tilldate",
    title: "Higher National Diploma, Computer Science",
    grade: "",
  },
  {
    institution: "Yaba College of Technology, Yaba, Lagos ",
    date: "Jan 2019 - Apr 2022",
    title: "Ordinary National Diploma, Computer Science",
    grade: "Grade: Distinction",
  },
];

export const Certification = [
  {
    course: "Google IT Support Professional Certificate ",
    date: "Issued Jul 2023",
    title: "Google",
    skills:
      "Customer Service · Troubleshooting · Cyber Security · System Administration · IT Security · IT Support · Network Infrastructure Services",
    link: "https://coursera.org/share/d5b962b73e349409b85693bc8b55edd6",
  },

  {
    course: "Foundations of User Experience (UX) Design",
    date: "Issued Oct 2023",
    title: "Coursera",
    skills: "User Experience (UX) · UX Research · Prototype · Wireframe",
    link: "https://www.coursera.org/account/accomplishments/certificate/BGQWBV2NLRJ8",
  },
];

export const Projects = [
  {
    title: "MovieBox",
    description:
      "MovieBox is a web application that displays information about top-rated movies. Users can explore movie details, including title, release date, genre, and ratings.",
    technologies: "React · Tailwind CSS · TMDB API",
    link: "https://movie-box-dhavisco.vercel.app/",
    repo: "https://github.com/Dhavisco/MovieBox",
  },
  {
    title: "Portfolio",
    description:
      "My portfolio web application serves as a dynamic and engaging online platform showcasing professional skills, projects, experiences, and recommendations",
    technologies: "React.js · Tailwind CSS · UI React",
    link: "https://davisco.vercel.app/",
    repo: "https://github.com/Dhavisco/MyPortfolio",
  },

  {
    title: "Task Tracker",
    description:
      "This is a task management application built with React.js. It allows users to create, edit, delete, and filter tasks. The application also features local storage integration to persist tasks across page refreshes",
    technologies: "React.js · Tailwind CSS · JavaScript · HTML · CSS",
    link: "https://task-tracker-gold.vercel.app/",
    repo: "https://github.com/Dhavisco/Task-Tracker",
  },
  {
    title: "Expense Tracker",
    description:
      "Expense Tracker is a React.js application that allows users to keep track of their expenses. Users can add expenses by inputting details of an expense, including Expense Title, amount, and date. The application then compiles these entries into a list, providing users with a clear overview of their expenses.",
    technologies: "React.js · JavaScript · HTML · CSS",
    link: "https://expense-tracker-dhavisco.vercel.app/",
    repo: "https://github.com/Dhavisco/Expense-Tracker/tree/master",
  },

  {
    title: "Login Page",
    description: "This Web Application is a demo to practice input validation",
    technologies: "React.js · JavaScript · HTML · CSS",
    link: "https://login-page-nine-sage.vercel.app/",
    repo: "https://github.com/Dhavisco/Login-Page",
  },

  {
    title: "Budget App",
    description:
      "The budget App is a Single-page Application(SPA) created using HTML,CSS, and JavaScript. The Web App helps you calculate your budget by inputing your income, expenses and it calculates your total income, expenses and balance. You can also delete some of your options using the delete Icon.",
    technologies: "JavaScript · HTML · CSS",
    link: "https://dhavisco.github.io/Budget-App",
    repo: "https://github.com/Dhavisco/Budget-App",
  },
];

export const Recommendations = [
  {

  }
];
