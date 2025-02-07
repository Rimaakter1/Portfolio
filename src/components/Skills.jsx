import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaBootstrap, FaDatabase, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiExpress, SiVercel, SiNetlify, SiFirebase } from "react-icons/si";
import { PiBracketsCurlyBold } from "react-icons/pi"; // Placeholder icon for Pixso
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
    {
        category: "Frontend",
        items: [
            { name: "React", level: 90, icon: <FaReact size={40} color="#61DBFB" /> },
            { name: "JavaScript", level: 85, icon: <FaJsSquare size={40} color="#F7DF1E" /> },
            { name: "HTML", level: 95, icon: <FaHtml5 size={40} color="#E44D26" /> },
            { name: "CSS", level: 85, icon: <FaCss3Alt size={40} color="#1572B6" /> },
            { name: "Bootstrap", level: 75, icon: <FaBootstrap size={40} color="#7952B3" /> },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", level: 80, icon: <FaNodeJs size={40} color="#3C873A" /> },
            { name: "Express.js", level: 75, icon: <SiExpress size={40} color="#ffffff" /> },
            { name: "MongoDB", level: 80, icon: <FaDatabase size={40} color="#4DB33D" /> },
        ],
    },
    {
        category: "Tools & Deployment",
        items: [
            { name: "Figma", level: 85, icon: <FaFigma size={40} color="#F24E1E" /> },
            { name: "Pixso", level: 80, icon: <PiBracketsCurlyBold size={40} color="#F4A261" /> }, // Pixso added
            { name: "Vercel", level: 90, icon: <SiVercel size={40} color="#ffffff" /> },
            { name: "Netlify", level: 85, icon: <SiNetlify size={40} color="#00C7B7" /> },
            { name: "Firebase", level: 80, icon: <SiFirebase size={40} color="#FFA611" /> }, // Firebase added
        ],
    },
];

const Skills = () => {
    return (
        <div id="skills" className="bg-gray-900">
            <div className="py-20 w-11/12 md:w-10/12 mx-auto text-white">
                <div className="container mx-auto">
                    <h2 className="text-center text-4xl font-extrabold mb-12 text-teal-500">
                        My Skills
                    </h2>

                    {skills.map((skillCategory, index) => (
                        <div key={index} className="mb-12">
                            <h3 className="text-3xl font-bold text-center text-gray-300 mb-8">
                                {skillCategory.category}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                                {skillCategory.items.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="p-6 bg-gray-800 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105"
                                    >
                                        <div className="flex justify-center mb-4">{skill.icon}</div>
                                        <h3 className="text-2xl font-semibold mb-4">{skill.name}</h3>
                                        <div className="w-24 mx-auto">
                                            <CircularProgressbar
                                                value={skill.level}
                                                text={`${skill.level}%`}
                                                styles={buildStyles({
                                                    textColor: "#fff",
                                                    pathColor: "#14b8a6",
                                                    trailColor: "rgba(255,255,255,0.2)",
                                                })}
                                            />
                                        </div>
                                        <p className="mt-3 text-gray-300">Proficiency</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
