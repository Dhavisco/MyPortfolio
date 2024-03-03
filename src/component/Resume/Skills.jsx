const skills = [
  { id: 1, name: "HTML5", icon: "/path/to/html5-icon.svg" },
  { id: 2, name: "CSS3", icon: "/path/to/css3-icon.svg" },
  { id: 3, name: "JavaScript", icon: "/path/to/javascript-icon.svg" },
  { id: 4, name: "React", icon: "/path/to/react-icon.svg" },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <div id="skills" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div key={skill.id} className="flex flex-col items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-20 h-20 mb-2"
              />
              <p className="text-md">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
