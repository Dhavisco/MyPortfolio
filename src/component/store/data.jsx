import { BsPuzzle } from "react-icons/bs";
import { TbDeviceMobile, TbWorldLongitude } from "react-icons/tb";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaReact,
  FaCss3,
  FaInstagram,
  FaLink,
} from "react-icons/fa6";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiBootstrap,
  SiFirebase,
  SiMongodb,
  SiPython,
  SiJavascript,
  SiPhp,
  SiFigma,
  SiHtml5,
  SiVite,
  SiNpm,
  SiYarn,
  SiGit,
  SiVisualstudiocode,
  SiSqlite,
  SiWordpress,
  SiCplusplus,
} from "react-icons/si";

export const About = [
  {
    about: `I'm David Olaniyi, a frontend engineer with expertise in web and mobile development. Possessing a broad range of abilities and a talent for resolving issues, I perform best in dynamic settings that foster creativity and innovation.

My specialty is creating solutions with a stack that consists of majorly JavaScript, Python, and other OOP languages with frameworks. Creating user-friendly interfaces, building software, or offering technical support are just a couple of the ways I'm dedicated to exceeding clients' expectations with my work.  My interpersonal skills are reliable, and I am competent at communicating with different kinds of stakeholders.
`,
  },
  {
    more: `Through my internship in HR at a consulting firm (PwC Nigeria) and remote roles, I have worked with individuals from a variety of cultural backgrounds, timezones and gained experience in developing solutions to fit their unique needs.  I'm driven by a passion for excellence and constantly willing to take on new tasks and broaden my perspectives.
    My core technical skills include frontend development (HTML5, CSS3, JavaScript ES6+, TypeScript), frameworks and libraries (React.js, React Native, Next.js, Zustand, Redux, React Query), UI/UX implementation (Tailwind CSS, Bootstrap, Shadcn, Framer Motion), API integration and authentication (Axios, NextAuth, Firebase, Supabase), backend fundamentals (Node.js, Express.js, MongoDB with Mongoose, SQL with Sequelize), and version control and collaboration (Git, GitHub).
    `,
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
    name: "Web Application",
    icon: <TbWorldLongitude color="#679d7f" />,
  },

  {
    name: "Mobile Application",
    icon: <TbDeviceMobile color="#00749C" />,
  },

  // {
  //   name: "IT Support",
  //   icon: <FaRankingStar color="#445445" />,
  // },

  // {
  //   name: "Technical Writing",
  //   icon: <TbWritingSign color="#679d7f" />,
  // },
  // {
  //   name: "Data Analytics",
  //   icon: <SiGoogledatastudio color="#00749C" />,
  // },
  {
    name: "Web Development",
    icon: [<FaReact color="#da9797" key="reactIcon" />],
  },
  // {
  //   name: "UI/UX Design",
  //   icon: <FaPalette color="#00749C" />,
  // },
];

export const Experiences = [
  {
    institution:
      "Databox Technologies - Atlanta, Georgia, United States · Remote",
    date: "Jan 2025 - Present",
    title: "Frontend Engineer Intern",
    skills:
      "Collaboration · Analytical Skills · Frontend Development · React.js · TypeScript · Research · Automation · Problem Solving",
    description:
      "I am currently working as a Frontend Engineer Intern at Databox Technologies. I work directly with the CEO of Fostr, where I am responsible for developing and maintaining web applications, websites, Conducted data analysis and market research, leading to the addition of new community members(Fostr). I collaborate with cross-functional teams to deliver software solutions.",
  },

  {
    institution: "PwC Nigeria ",
    date: "Jul 2022 - Jun 2023",
    title: "Human Capital Intern",
    skills:
      "Headshot Photography · IT Support · New Hire Onboarding · Assessment · HRIS · Human Capital Management · Recruitment · Collaboration  · Analytical Skills",
    description:
      "Assisted in the Recruitment and Onboarding of staff in the firm",
  },
  {
    institution: "HNG Internship · Internship",
    date: "Sep 2023 - Oct 2023",
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
    date: "Jan 2021 - Aug 2022",
    title: "Frontend Developer, UI/UX Designer",
    skills: "Systems Design · Analytical Skills · User Interface Design",
    description: " ",
  },
  {
    institution: "Federal Institute of Industrial Research, Oshodi - FIIRO",
    date: "Aug 2021 - Nov 2021",
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
    date: "May 2023 - May 2025",
    title: "Higher National Diploma, Computer Science",
    grade: "Grade: Distinction",
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
    course: "Google Advanced Data Analytics Professional Certificate ",
    date: "Issued Nov 2024",
    title: "Google",
    skills:
      "Data Aggregation · Data Analytics · Data Cleaning · Data Visualization · Tableau · Presentations",
    link: "https://coursera.org/share/d5b962b73e349409b85693bc8b55edd6",
  },
  {
    course: "Google Data Analytics Professional Certificate ",
    date: "Issued May 2024",
    title: "Google",
    skills:
      "Data Aggregation · Data Analytics · Data Cleaning · Data Visualization · Spreadsheets · SQL · Presentations",
    link: "https://coursera.org/share/d5b962b73e349409b85693bc8b55edd6",
  },
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

export const certLink =
  "https://www.linkedin.com/in/dhavisco/details/certifications/";

export const Projects = [
  {
    title: "MovieZone",
    description:
      "A modern and responsive movie application showcasing trending and regular movies. This app features a carousel for trending movies, bookmarking functionality, and an intuitive user interface designed for a seamless experience.",
    technologies: "Next.js · TypeScript · TailwindCSS · Formik/Yup",
    link: "https://movieezone.vercel.app/",
    repo: "https://github.com/Dhavisco/entertainment-app",
  },

  {
    title: "Shortly",
    description: "A web application that shorten any valid URL.",
    technologies:
      "React.js · TypeScript · TailwindCSS · React Query · API Integration",
    link: "https://daveshortly.vercel.app/",
    repo: "https://github.com/Dhavisco/entertainment-app",
  },

  {
    title: "AR",
    description: "A simple wedding invite webpage",
    technologies: "HTML · CSS · JavaScript",
    link: "https://ar-weddinginvite.vercel.app/",
    repo: "https://github.com/Dhavisco/AR",
  },

  {
    title: "BankApp",
    description:
      "This is a financial services web application where users can securely log in, sign up, and manage their financial activities.",
    technologies:
      "React.js · TypeScript · React Query · API Fetch (Postman) · TailwindCss · Formik/Yup",
    link: "https://bank-app-gamma-five.vercel.app/",
    repo: "https://github.com/Dhavisco/BankApp",
  },
  {
    title: "CropsDss",
    description:
      "This is a farmer's decision support system that recommends crops based on weather forecast in their area.",
    technologies: "React.js · JavaScript · API Fetch (FAST API) · TailwindCss",
    link: "https://cropsdss.vercel.app/",
    repo: "https://github.com/Dhavisco/Farmer-s-DSS-System-based-on-weather-forecasting",
  },
  {
    title: "ReactMeal",
    description:
      "This project is a food ordering application that allows users to select cuisines, check prices, and place orders. The orders are then sent to the respective restaurants for preparation.",
    technologies: "React.js · JavaScript · HTML · CSS · Firebase",
    link: "https://reactmealz.vercel.app/",
    repo: "https://github.com/Dhavisco/Food-Order-App",
  },

  {
    title: "MovieBox",
    description:
      "MovieBox is a web application that displays information about top-rated movies. Users can explore movie details, including title, release date, genre, and ratings.",
    technologies: "React.js · JavaScript · HTML · Tailwind CSS · TMDB API",
    link: "https://movie-box-dhavisco.vercel.app/",
    repo: "https://github.com/Dhavisco/MovieBox",
  },
  {
    title: "Portfolio",
    description:
      "My portfolio web application serves as a dynamic and engaging online platform showcasing professional skills, projects, experiences, and recommendations",
    technologies:
      "React.js · Tailwind CSS · UI React · JavaScript · HTML · CSS",
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
    title: "Space Travel Website",
    description:
      "Space Tourism Website project is a front-end website designed to test and improve my skills in responsive web design and modern JavaScript and CSS frameworks, specifically ReactJs and Tailwind CSS. The goal is to build out a Space Tourism Website and get it looking as close to the design as possible, ensuring that the component is responsive and functional across all devices.",
    technologies: "React.js · Tailwind CSS · JavaScript · HTML · CSS",
    link: "https://daviscospace-tourism-website.vercel.app/",
    repo: "https://github.com/Dhavisco/Space-Tourism-Website",
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

export const githubRepo = "https://github.com/Dhavisco?tab=repositories";

export const Recommendations = [
  {
    name: "Ifelunwa Ada",
    date: "May 18, 2025",
    title:
      "Technical Account Manager at Oracle | Cloud Practitioner | Solutions Consultant",
    desc: "It was a pleasure working with David during a product hackathon at FOSTR, David demonstrated exceptional resilience, intelligence, and a proactive approach to problem-solving. Even when team morale dipped, David remained a consistent and uplifting force, always ready to tackle challenges and propose innovative solutions. His technical skills shone through in building a polished, user-friendly landing page for our application, which played a key role in our hackathon success. David’s dedication, collaborative spirit, and ability to deliver under pressure makes him an outstanding candidate for any team. I highly recommend him for any role where creativity and dependability are valued.",
  },

  {
    name: "Busola Francisca Martins PHRi, ACIPM",
    date: "December 8, 2023",
    title: "Human Resource Generalist",
    desc: "The first thing that caught my attention when David started his internship was his willingness and readiness to learn. He also impressed me with his proactiveness and initiative. He always gave update on tasks assigned to him and he never considered any task beyond his capabilities. I am confident that David will have a bright future in his chosen career path and he will be an asset to any employer.",
  },

  {
    name: "Idanesi Igwonobe",
    date: "October 13, 2023",
    title:
      "HR Business Partnering | Talent Acquisition | Performance Management | HRIS Analyst | HR Analytics",
    desc: "David is a smart, hardworking, and caring individual who takes initiative. He is a fast learner and is not afraid to ask questions for clarity. He is a reliable team player and the go-to person for tasks. During his time with us, he has shown significant personal growth and development. He makes use of his IT expertise to improve efficiency in his work and he consistently embodies PwC's values. He was a great addition to the team during his internship. I’m looking forward to your future wins",
  },

  {
    name: "Ebenezer Akintomide",
    date: "August 12, 2023",
    title: "HR Manager at Cowrywise",
    desc: "David is very proactive. He anticipates needs and works to meet them. He is a self starter that is willing to put in the time and work required to get things done.",
  },

  {
    name: "Anuli Adelekan",
    date: "August 3, 2023",
    title: "Human Resources Generalist",
    desc: "David is an extremely diligent worker with an exceptional work ethic; he effortlessly adapts to any given scenario, and I found him to be highly skilled. What makes him stand out is his willingness to help others, He is highly recommended and an excellent team member.",
  },

  {
    name: "Folajomi Agoro",
    date: "August 2, 2023",
    title:
      "Senior Associate Facility | Project Management | Building Data Analyst | Freelance Writer | Sports Enthusiast",
    desc: "David Olaniyi is hard working, team oriented and always provided prompt feedback on assigned tasks when necessary. I had the pleasure of working with him in a number of cross departmental engagements for a year and I will highly recommend him for any future roles as he is always willing to learn and improve.",
  },
];

export const Recomlink =
  "https://www.linkedin.com/in/dhavisco/details/recommendations/?detailScreenTabIndex=0";

export const tools = [
  {
    name: "React",
    svg: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    icon: <SiReact className="text-[#61DAFB]" />,
  },
  {
    name: "Python",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    icon: <SiPython className="text-[#3776AB]" />,
  },
  {
    name: "JavaScript",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    icon: <SiJavascript className="text-[#F7DF1E]" />,
  },
  {
    name: "TypeScript",
    svg: "https://raw.githubusercontent.com/wappalyzer/wappalyzer/master/src/drivers/webextension/images/icons/TypeScript.svg",
    icon: <SiTypescript className="text-[#3178C6]" />,
  },
  {
    name: "PHP",
    svg: "https://www.vectorlogo.zone/logos/php/php-icon.svg",
    icon: <SiPhp className="text-[#777BB4]" />,
  },
  {
    name: "HTML",
    svg: "https://raw.githubusercontent.com/uiwjs/file-icons/master/icon/html.svg",
    icon: <SiHtml5 className="text-[#E34F26]" />,
  },
  {
    name: "CSS",
    svg: "https://raw.githubusercontent.com/manuelbieh/logo-file-icons/master/icons/css.svg",
    icon: <FaCss3 className="text-[#1572B6]" />,
  },
  {
    name: "TailwindCss",
    svg: "https://raw.githubusercontent.com/bestofjs/bestofjs-webui/master/public/logos/tailwindcss.dark.svg",
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
  },
  {
    name: "Bootstrap",
    svg: "https://raw.githubusercontent.com/get-icon/geticon/master/icons/bootstrap.svg",
    icon: <SiBootstrap className="text-[#7952B3]" />,
  },
  {
    name: "Vite",
    svg: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/vitejs.svg",
    icon: <SiVite className="text-[#646CFF]" />,
  },
  {
    name: "Git",
    svg: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_git2.svg",
    icon: <SiGit className="text-[#F05032]" />,
  },
  {
    name: "NPM",
    svg: "https://raw.githubusercontent.com/leungwensen/svg-icon/master/dist/svg/logos/npm.svg",
    icon: <SiNpm className="text-[#CB3837]" />,
  },
  {
    name: "Yarn",
    svg: "https://raw.githubusercontent.com/leungwensen/svg-icon/master/dist/svg/logos/npm.svg",
    icon: <SiYarn className="text-[#2C8EBB]" />,
  },
  {
    name: "VsCode",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    icon: <SiVisualstudiocode className="text-[#007ACC]" />,
  },
  {
    name: "Figma",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    icon: <SiFigma className="text-[#A259FF]" />,
  },
  {
    name: "Next Js",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    icon: <SiNextdotjs className="text-[#FFFFFF]" />,
  },
  {
    name: "FireBase",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    icon: <SiFirebase className="text-[#FFCA28]" />,
  },
  {
    name: "Mongo Db",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    icon: <SiMongodb className="text-[#47A248]" />,
  },
  {
    name: "SQL",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    icon: <SiSqlite className="text-[#003B57]" />,
  },
  {
    name: "WordPress",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    icon: <SiWordpress className="text-[#21759B]" />,
  },

  {
    name: "C++",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    icon: <SiCplusplus className="text-[#00599C]" />,
  },
];

export const socials = [
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn className="text-[#0072b1] hover:text-[#0073b1c7]" />,
    link: "https://linkedin.com/in/dhavisco",
  },
  {
    name: "Twitter",
    icon: <FaXTwitter className="text-sky-500 hover:text-sky-700" />,
    link: "https://twitter.com/olaniyidaviday1",
  },
  {
    name: "Github",
    icon: <FaGithub className="text-gray-500 hover:text-gray-700" />,
    link: "https://github.com/dhavisco",
  },
  {
    name: "linkTree",
    icon: <FaLink className="text-green-400 hover:text-green-700" />,
    link: "https://linktr.ee/Dhavisco",
  },
  {
    name: "instagram",
    icon: <FaInstagram className="text-red-300 hover:text-red-600" />,

    link: "https://instagram.com/ayomi_dave",
  },
];

export const formspreeId = [
  {
    id: "mbjqppgw",
  },
];
