import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const education = [
    {
        degree: "Bachelor of Science in Computer Science and Engineering",
        institution: "International Islamic University Chittagong",
        year: "2024",
        cgpa: "3.64",
    },
    {
        degree: "Higher Secondary School Certificate",
        institution: "Bangladesh Nou Bahini School and College",
        year: "2019",
        gpa: "4.00",
    },
    {
        degree: "Secondary School Certificate",
        institution: "South Patenga City Corporation High School",
        year: "2017",
        gpa: "5.00",
    },
];

const Education = () => {
    return (
        <section id="education" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="container mx-auto text-white px-6 md:px-16">
                <h2 className="text-5xl font-extrabold text-center text-teal-400 mb-12">
                    My Education
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden bg-gray-800 p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.3 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-transparent opacity-0 group-hover:opacity-30 transition-all duration-500"></div>

                            <div className="flex items-center space-x-6 mb-6">
                                <div className="bg-teal-500 p-4 rounded-full text-gray-900 shadow-lg">
                                    <FaGraduationCap className="text-3xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                                    <h4 className="text-lg text-teal-300">{edu.institution}</h4>
                                    <p className="text-sm text-gray-400">{edu.year}</p>
                                </div>
                            </div>

                            <p className="text-lg text-gray-300 mt-3">
                                {edu.cgpa ? 'CGPA' : 'GPA'}:
                                <span className="text-teal-400 font-semibold ml-2">{edu.cgpa || edu.gpa}</span>
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
