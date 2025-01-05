import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { div } from "framer-motion/client";

const Contact = () => {
    const [formData, setFormData] = useState({
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_9givffr", "template_n9m4fsp", e.target, "wOubICLtzKBTPTmak")
            .then(
                (result) => {
                    setStatus("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    setStatus("Error in sending message. Please try again!");
                }
            );
    };

    return (
        <div id="contact" className="bg-gradient-to-r from-gray-800 via-gray-900 to-black">
            <div

                className="py-20 w-11/12 mx-auto  text-white"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-extrabold text-center text-teal-400 mb-12">
                        Contact Me
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-12">
                        <div>
                            <div className="card bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
                                <div className="card-body p-8">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Your Email"
                                                className="input input-bordered w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Your Message"
                                                className="textarea textarea-bordered w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                            ></textarea>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="btn btn-accent w-full px-6 py-3 rounded-full text-white text-lg hover:bg-teal-500 transition-colors duration-300"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                    {status && (
                                        <div
                                            className={`mt-4 text-center ${status.includes("success") ? "text-green-500" : "text-red-500"
                                                }`}
                                        >
                                            {status}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-center space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 text-lg font-semibold text-gray-200">
                                    <FaPhone className="text-teal-400" />
                                    <a href="tel:+123456789" className="hover:text-teal-500">
                                        +123 456 789
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3 text-lg font-semibold text-gray-200">
                                    <FaWhatsapp className="text-teal-400" />
                                    <a
                                        href="https://wa.me/1123456789"
                                        className="hover:text-teal-500"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        +123 456 789
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3 text-lg font-semibold text-gray-200">
                                    <FaMapMarkerAlt className="text-teal-400" />
                                    <span>Chittagong, Bangladesh</span>
                                </div>
                                <div className="flex items-center space-x-3 text-lg font-semibold text-gray-200">
                                    <FaEnvelope className="text-teal-400" />
                                    <a
                                        href="mailto:email@example.com"
                                        className="hover:text-teal-500"
                                    >
                                        rimac201262@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
