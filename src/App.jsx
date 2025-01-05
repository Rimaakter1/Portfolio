import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <About />
            <Education></Education>
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
