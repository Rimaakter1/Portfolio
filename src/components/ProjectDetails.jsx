import React from "react";
import { useParams } from "react-router-dom";

const projectDetails = {
    1: {
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
    2: {
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
    3: {
        id: 3,
        name: "Discount PRO: A Coupon Collecting Application",
        stack: "React, Firebase, Tailwind CSS, DaisyUI",
        github: "https://github.com/programming-hero-web-course1/b10-a9-authentication-Rimaakter1",
        live: "https://discountden.web.app/",
        description:
            "Discount PRO is a user-friendly application designed to help users find and use discount coupons for popular e-commerce shops. It simplifies the process of discovering and applying discount codes, making it easier for users to save money.",
        image: "/src/assets/project-3.avif",
    }
};

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectDetails[id];

    if (!project) {
        return <div className="text-center text-white">Project not found!</div>;
    }

    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold text-teal-400 mb-8">
                        {project.name}
                    </h2>
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full rounded-md shadow-lg mb-8"
                    />
                    <h3 className="text-lg text-teal-400 font-semibold mb-4">
                        Full Description:
                    </h3>
                    <p className="text-lg text-gray-300 mb-8">{project.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xl text-gray-200 font-semibold mb-2">
                                Client Side
                            </h4>
                            <p className="text-gray-400 mb-4">{project?.client?.stack}</p>
                            <a
                                href={project?.client?.live || project?.live}
                                className="btn btn-primary mb-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Site
                            </a>
                            <a
                                href={project?.client?.github || project?.github}
                                className="btn btn-secondary mb-2 ml-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                        {
                            project?.server && <div>
                                <h4 className="text-xl text-gray-200 font-semibold mb-2">
                                    Server Side
                                </h4>
                                <p className="text-gray-400 mb-4">{project?.server?.stack}</p>
                                <p className="text-gray-400 mb-4">{project?.server?.details}</p>
                                <a
                                    href={project?.server?.github}
                                    className="btn btn-secondary mb-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
