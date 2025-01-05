import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaBootstrap } from 'react-icons/fa';

const skills = [
    { name: "React", level: "90%", icon: <FaReact size={60} />, cardColor: "bg-gray-800" },
    { name: "JavaScript", level: "85%", icon: <FaJsSquare size={60} />, cardColor: "bg-gray-800" },
    { name: "Tailwind CSS", level: "80%", icon: <FaCss3Alt size={60} />, cardColor: "bg-gray-800" },
    { name: "HTML", level: "95%", icon: <FaHtml5 size={60} />, cardColor: "bg-gray-800" },
    { name: "CSS", level: "85%", icon: <FaCss3Alt size={60} />, cardColor: "bg-gray-800" },
    { name: "Bootstrap", level: "75%", icon: <FaBootstrap size={60} />, color: "bg-gradient-to-r from-purple-500 to-pink-600", cardColor: "bg-gray-800" },
];


const Skills = () => {
    return (
        <div id="skills" className='bg-gray-900'>
            <div className="py-20 w-11/12 md:w-10/12 mx-auto  text-white">
                <div className="container mx-auto">
                    <h2 className="text-center text-4xl font-extrabold mb-12 text-teal-500">
                        My Skills
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className={`p-6 bg-white  bg-opacity-15 shadow-lg rounded-lg text-center transform transition-transform duration-300 hover:scale-105`}
                            >
                                <div className="mb-4 text-teal-400">
                                    {skill.icon}
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">{skill.name}</h3>
                                <div className="relative pt-1">
                                    <div className="flex mb-2 items-center justify-between">
                                        <span className="text-sm font-medium">{skill.level}</span>
                                    </div>
                                    <div className="flex mb-2 items-center justify-between">
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div
                                                className="h-2 rounded-full"
                                                style={{
                                                    width: skill.level,
                                                    backgroundColor: `hsl(${Math.random() * 360}, 100%, 65%)`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-3 text-gray-300">Proficiency</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
