import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        id: 1,
        name: "Volunteer Management Website(BhaloKaj)",
        client: {
            stack: "React, Tailwind CSS, daisyUI",
            github: "https://github.com/programming-hero-web-course2/b10a11-client-side-Rimaakter1?tab=readme-ov-file",
            live: "https://bhalokaj-a037f.web.app/",
        },
        server: {
            stack: " MongoDB, Express JS",
            github: "https://github.com/programming-hero-web-course2/b10a11-server-side-Rimaakter1",
        },
        description: "This is the  implementation of the Volunteer Management Website. It provides a user interface for creating, updating, and managing volunteer opportunities and allows users to sign up as volunteers for posted opportunities.",
        image: "/src/assets/project-1.jpg",
    },
    {
        id: 2,
        name: "GameEcho: A Game Review Application",
        client: {
            stack: "React, Tailwind CSS, daisyUI",
            github: "",
            live: "https://gameecho-ca02a.web.app/",
        },
        server: {
            stack: " MongoDB, Express JS",
            github: "#",
        },
        description:
            "GameEcho is a user-friendly platform designed to enhance the gaming community by providing a space to explore, review, and share opinions on games. With its clean and responsive interface, it ensures a Continuous experience across devices, making it easy for users to manage reviews and build a personalized watchlist.",
        image: "/src/assets/project-2.avif",
    },
    {
        id: 3,
        name: "Discount PRO: A Coupon Collecting Application",
        stack: "React, Firebase, Tailwind CSS, DaisyUI",
        github: "https://github.com/programming-hero-web-course1/b10-a9-authentication-Rimaakter1",
        live: "https://discountden.web.app/",
        description:
            "Discount PRO is a user-friendly application designed to help users find and use discount coupons for popular e-commerce shops. It simplifies the process of discovering and applying discount codes, making it easier for users to save money.",
        image: "/src/assets/project-3.avif",
    },
];


const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-extrabold text-center text-teal-400 mb-12">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="group rounded-xl overflow-hidden shadow-lg bg-gray-800 hover:bg-gradient-to-br hover:from-teal-900 hover:to-gray-700 transform transition duration-300 hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.figure
                                whileHover={{ scale: 1.1 }}
                                className="overflow-hidden"
                            >
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-all duration-300"
                                />
                            </motion.figure>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-teal-300 mb-2 group-hover:text-teal-400 transition-colors duration-300">
                                    {project.name}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="mt-4">
                                    <h4 className="text-lg font-semibold text-gray-300 mb-2">
                                        {
                                            project?.client?.stack ? "Client Side" : "Links"
                                        }
                                    </h4>
                                    <p className="text-gray-400 text-sm mb-2">{project?.client?.stack || project.stack}</p>
                                    <div className="flex gap-3 mb-4">
                                        <a
                                            href={project?.client?.live || project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary flex items-center space-x-2 px-4 py-2 hover:bg-teal-500"
                                        >
                                            <FaExternalLinkAlt />
                                            <span>Live</span>
                                        </a>
                                        <a
                                            href={project?.client?.github || project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-secondary flex items-center space-x-2 px-4 py-2 hover:bg-gray-600"
                                        >
                                            <FaGithub />
                                            <span>GitHub</span>
                                        </a>
                                    </div>
                                </div>
                                {
                                    project?.server?.stack && <div>
                                        <h4 className="text-lg font-semibold text-gray-300 mb-2">
                                            Server Side
                                        </h4>
                                        <p className="text-gray-400 text-sm mb-2">{project?.server?.stack}</p>
                                        <div className="flex gap-3">
                                            <a
                                                href={project?.server?.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-secondary flex items-center space-x-2 px-4 py-2 hover:bg-gray-600"
                                            >
                                                <FaGithub />
                                                <span>GitHub</span>
                                            </a>

                                        </div>
                                    </div>
                                }
                                <Link
                                    to={`/project/${project.id}`}
                                    className="btn btn-accent flex items-center space-x-2 px-4 py-2 hover:bg-teal-600 mt-8"
                                >
                                    <span>Details</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
