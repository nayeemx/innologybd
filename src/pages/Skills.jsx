import {
    FaPhp,
    FaDatabase,
    FaReact,
  } from "react-icons/fa";
  import { SiTailwindcss, SiPostgresql, SiAdobe } from "react-icons/si";
  import { MdOutlineDesignServices } from "react-icons/md";
  
  function Skills() {
    const skills = [
      { name: "React", icon: <FaReact className="text-cyan-500" size={40} /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-500" size={40} /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-500" size={40} /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" size={40} /> },
      { name: "MySQL", icon: <FaDatabase className="text-teal-500" size={40} /> },
      { name: "Video Editing", icon: <SiAdobe className="text-red-600" size={40} /> },
      { name: "UI/UX Design", icon: <MdOutlineDesignServices className="text-purple-500" size={40} /> },
    ];
  
    return (
      <section id="skills" className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div key={index} className="text-center justify-items-center">
              {skill.icon}
              <p className="mt-2 text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Skills;  