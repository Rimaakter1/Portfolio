import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-800 py-16 text-white">
            <div className="container mx-auto px-8">

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 animate__animated animate__fadeIn animate__delay-2s">
                    <div className="footer-column space-y-4">
                        <h3 className="text-xl font-semibold text-teal-400">About Me</h3>
                        <p>
                            I am a passionate Web Developer with a focus on frontend technologies. Crafting intuitive and responsive websites is my mission.
                        </p>
                    </div>

                    <div className="footer-column space-y-4">
                        <h3 className="text-xl font-semibold text-teal-400">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-teal-400 transition-all duration-300">Home</a></li>
                            <li><a href="#about" className="hover:text-teal-400 transition-all duration-300">About</a></li>
                            <li><a href="#projects" className="hover:text-teal-400 transition-all duration-300">Projects</a></li>
                            <li><a href="#contact" className="hover:text-teal-400 transition-all duration-300">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-column space-y-4">
                        <h3 className="text-xl font-semibold text-teal-400">Social Media</h3>
                        <div className="flex space-x-6">
                            <a href="https://twitter.com" className="hover:text-teal-400 transition-all duration-300 text-3xl">
                                <FaTwitter />
                            </a>
                            <a href="https://facebook.com" className="hover:text-teal-400 transition-all duration-300 text-3xl">
                                <FaFacebook />
                            </a>
                            <a href="https://instagram.com" className="hover:text-teal-400 transition-all duration-300 text-3xl">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" className="hover:text-teal-400 transition-all duration-300 text-3xl">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com" className="hover:text-teal-400 transition-all duration-300 text-3xl">
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    <div className="footer-column space-y-4">
                        <h3 className="text-xl font-semibold text-teal-400">Contact Information</h3>
                        <div className="space-y-2">
                            <p className="flex items-center space-x-3">
                                <FaPhoneAlt />
                                <a href="tel:+1234567890" className="text-teal-400 hover:underline transition-all duration-300">+1 (234) 567-890</a>
                            </p>
                            <p className="flex items-center space-x-3">
                                <FaMapMarkerAlt />
                                <a href="https://goo.gl/maps/123456" className="text-teal-400 hover:underline transition-all duration-300" target="_blank" rel="noopener noreferrer">123 Example St, New York, USA</a>
                            </p>
                            <p className="flex items-center space-x-3">
                                <i className="fas fa-envelope"></i>
                                <a href="mailto:your-email@example.com" className="text-teal-400 hover:underline transition-all duration-300">your-email@example.com</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center my-8">
                    <div className="h-0.5 w-24 bg-teal-400"></div>
                </div>

                <div className="text-center text-sm animate__animated animate__fadeIn animate__delay-3s">
                    <p>&copy; 2025 Rima Akter. All Rights Reserved.</p>
                </div>

                <div className="text-center mt-10">
                    <a
                        href="#"
                        className="text-white bg-teal-500 hover:bg-teal-600 rounded-full px-6 py-3 text-lg transition-all duration-300"
                    >
                        Back to Top
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
