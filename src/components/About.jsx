import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImg from "../assets/aboutImg.jpg";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section id="about" className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 data-aos="fade-up" className="text-4xl font-bold mb-12 text-center text-teal-400">
                    About Me
                </h2>
                <div className="lg:flex items-center space-y-8 lg:space-y-0 lg:space-x-16">
                    {/* Left Content */}
                    <div data-aos="fade-left" className="lg:w-1/2 space-y-6 text-center lg:text-left">
                        <p className="text-lg leading-relaxed">
                            Hi, I’m <span className="text-teal-400 font-medium">Rima Akter</span>, a passionate <span className="text-teal-400 font-medium">Frontend Developer</span> who enjoys building modern, user-friendly web experiences. My journey into coding started with curiosity and a desire to bring ideas to life through interactive and visually appealing designs.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-300">
                            I specialize in <span className="text-yellow-400 font-medium">React.js, JavaScript, and Tailwind CSS</span>, creating seamless and dynamic web applications. I also have experience with <span className="text-blue-400 font-medium">MongoDB, HTML, Bootstrap</span>, and other web technologies, allowing me to work across different parts of the development process.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-300">
                            Outside of coding, I love <span className="text-yellow-400 font-medium">dancing</span> and <span className="text-blue-400 font-medium">traveling</span>. Exploring new places and cultures fuels my creativity, helping me bring fresh perspectives to my projects.
                        </p>
                    </div>

                    {/* Right Content */}
                    <div data-aos="fade-right" className="lg:w-1/2">
                        <div className="w-full mx-auto">
                            <img
                                src={aboutImg}
                                alt="About Me"
                                className="w-96 h-96 lg:w-[28rem] lg:h-[28rem] mx-auto rounded-xl shadow-lg object-cover border-4 border-teal-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Highlights Section */}
                <div className="mt-16">
                    <h3 data-aos="fade-up" className="text-3xl font-semibold text-center text-teal-400 mb-8">
                        My Highlights
                    </h3>
                    <div className="flex flex-wrap justify-center gap-10 text-center">
                        <div data-aos="zoom-in" className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition">
                            <h4 className="text-xl font-bold text-teal-400">100+</h4>
                            <p className="text-gray-300">Hours of Coding Practice</p>
                        </div>
                        <div data-aos="zoom-in" className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition">
                            <h4 className="text-xl font-bold text-yellow-400">5+</h4>
                            <p className="text-gray-300">Personal Projects</p>
                        </div>
                        <div data-aos="zoom-in" className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition">
                            <h4 className="text-xl font-bold text-pink-400">Eager</h4>
                            <p className="text-gray-300">Learner and Innovator</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
