import React from 'react';
import { motion } from 'framer-motion';
import myImg from "../assets/portfolio-img.png";


const HeroSection = () => {
    return (
        <div className='bg-gray-900'>
            <div
                id="hero"
                className="w-11/12 mx-auto text-white py-16"
            >
                <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-6 lg:px-16 space-y-10 lg:space-y-0">

                    <div className="lg:w-1/2 space-y-6 text-center lg:text-left">

                        <motion.h1
                            className="text-5xl font-extrabold mb-4 leading-tight text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Welcome, I'm <span className="text-teal-400">Rima Akter</span>
                        </motion.h1>

                        <motion.p
                            className="text-lg font-light text-gray-300 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 1 }}
                        >
                            Turning ideas into reality as a{" "}
                            <span className="text-teal-400 font-medium">Frontend Developer</span>
                        </motion.p>

                        <div className="flex justify-center lg:justify-start space-x-6 mt-4">
                            <motion.a
                                href="https://github.com/Rimaakter1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline border-gray-600 hover:border-teal-500 hover:bg-teal-500 hover:text-white text-gray-300"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                            >
                                <i className="fab fa-github"></i>GitHub
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/rima-akter-2abb2a216/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline border-gray-600 hover:border-blue-500 hover:bg-blue-500 hover:text-white text-gray-300"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7, duration: 1 }}
                            >
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </motion.a>
                            <motion.a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline border-gray-600 hover:border-pink-500 hover:bg-pink-500 hover:text-white text-gray-300"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9, duration: 1 }}
                            >
                                <i className="fab fa-facebook"></i> Facebook
                            </motion.a>
                        </div>

                        <div className="pt-4">
                            <motion.a
                                href="/resume.pdf"
                                download
                                className="bg-gradient-to-r from-blue-400 to-teal-400 text-white font-bold px-10 py-4 rounded-lg shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 border border-gray-700 hover:border-teal-500"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                            >
                                Download Resume
                            </motion.a>
                        </div>

                    </div>

                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <motion.img
                            src={myImg}
                            alt="Profile"
                            className="w-80 h-80 bg-white lg:w-96 lg:h-96 rounded-full shadow-xl object-cover border-4 border-teal-500"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 1 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
