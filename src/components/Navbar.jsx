import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <div className="bg-base-100 sticky top-0 z-50">
            <div className="navbar w-11/12  md:w-10/12 mx-auto  shadow-lg ">
                <div className="navbar-start">
                    <img className="w-20 h-20" src={logo} alt="" />
                    <p className="text-3xl text-primary font-Parkinsans animate-fadeIn">Rima</p>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        <li>
                            <a href="#hero" className="hover:text-primary">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-primary">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#education" className="hover:text-primary">
                                Education
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="hover:text-primary">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-primary">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-primary">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a
                        href="/resume.pdf"
                        download
                        className="btn hidden md:inline-flex bg-gradient-to-r border-none from-purple-500 to-blue-500 text-white font-bold px-10 py-4 rounded-lg shadow-lg transform transition-all hover:scale-105"
                    >
                        Download Resume
                    </a>

                    <div className="dropdown dropdown-end md:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a href="#hero" className="hover:text-primary">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-primary">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="hover:text-primary">
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-primary">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-primary">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="btn bg-gradient-to-r border-none from-purple-500 to-blue-500 text-white font-bold py-4 rounded-lg mt-2"
                                >
                                    Download Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
