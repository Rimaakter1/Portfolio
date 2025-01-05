import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const education = [
    {
        degree: "Bachelor of Science in Computer Science and Engineering",
        institution: "International Islamic University Chittagong",
        year: "2024",
        cgpa: "3.8",
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
        <div id="education" className="bg-gradient-to-r from-gray-900 to-black py-20">
            <div className="container mx-auto text-white px-6 md:px-16">
                <h2 className="text-5xl font-extrabold text-center text-teal-500 mb-12">
                    My Education
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800 p-8 rounded-3xl shadow-xl group hover:bg-teal-800 transition-all duration-500"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.3 }}
                        >
                            <div className="flex items-center space-x-6 mb-6">
                                <FaGraduationCap className="text-white text-5xl transform group-hover:scale-125 transition-all duration-300" />
                                <div>
                                    <h3 className="text-xl mb-5 font-semibold text-white">{edu.degree}</h3>
                                    <h4 className="text-lg text-teal-300">{edu.institution}</h4>
                                    <p className="text-sm text-gray-400">{edu.year}</p>
                                    <p className="mt-2 text-teal-200 text-lg">
                                        {edu.cgpa ? 'CGPA' : 'GPA'}: <span className="font-semibold">{edu.cgpa || edu.gpa}</span>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
