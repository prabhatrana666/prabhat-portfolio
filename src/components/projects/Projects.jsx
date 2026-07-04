import "../techandprojects/MyTech.css";
import "./Projects.css"
import {
    Ticket,
    Clock,
    Sparkles,
    ShieldCheck,
    CreditCard,
    PhoneCall,
} from "lucide-react";
import {
    Code2,
    Palette,
    Smartphone,
    Database,
    Rocket,
    Layers3
} from "lucide-react";
import {
    MonitorSmartphone,
    Search,
    Globe,
    Gauge,
    Wrench,
    Boxes,
} from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { FaGithub } from "react-icons/fa6"; import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HiOutlineExternalLink } from "react-icons/hi";
import AllProjectsData from '../../data/AllProjectsData'
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer2 from "../footer/Footer2";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 60,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};
// console.log(AllProjectsData.length);

function Projects() {


    return (
        <>
            <Navbar />
            {/* My Projects Section */}

            <div className="my_tech_stack container">
                <div className="section-header text-center mt-5">

                    <span className="why-label">FEATURED WORK</span>

                    <h2 className="why-title">
                        FEATURED  <span>PROJECTS</span>
                    </h2>

                    <p className="why-description">
                        A collection of projects built with modern technologies, clean architecture, responsive design, and scalable solutions to solve real-world challenges.
                    </p>
                </div>
                <div className="container mt-5">
                    <div className="row g-4">
                        {AllProjectsData.map((project) => (
                            <div
                                key={project.id}
                                className="col-lg-4 col-md-6 col-12"
                            >
                                <div className="project-card my_new_project_card">

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image"
                                    />

                                    <div className="project-overlay">
                                        <div className="main_card_body">
                                            <h3 className="project-title">{project.title}</h3>

                                            <span className="project-category">
                                                {project.description}
                                            </span>

                                            <div className="project-tech">
                                                {project.tech.map((item, index) => (
                                                    <span key={index}>{item}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="project-buttons">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="project-btn github_button"
                                            >
                                                <FaGithub size={18} />
                                                GitHub
                                            </a>

                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="project-btn primary"
                                            >
                                                <HiOutlineExternalLink size={18} />
                                                Live Demo
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            {/* My Form */}
            <div className="section-header text-center mb-5 mt-5">
                <span className="why-label">START A PROJECT</span>

                <h2 className="why-title">
                    LET'S BUILD  <span>SOMETHING AMAZING</span>
                </h2>

                <p className="why-description">
                   Have a project in mind? Share your requirements and I'll get back to you with the best solution tailored to your goals.
                </p>
             

              
            </div>

            <form className="project-inquiry-form mb-5">

                <div className="row g-4">

                    <div className="col-lg-4">
                        <label>Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className="col-lg-4">
                        <label>Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="col-lg-4">
                        <label>Company (Optional)</label>
                        <input
                            type="text"
                            placeholder="Company or Organization"
                        />
                    </div>

                    <div className="col-lg-6">
                        <label>Project Type</label>

                        <select>
                            <option>Select Project Type</option>
                            <option>Business Website</option>
                            <option>Portfolio Website</option>
                            <option>E-Commerce</option>
                            <option>Admin Dashboard</option>
                            <option>Landing Page</option>
                            <option>Full Stack Application</option>
                            <option>UI Development</option>
                            <option>Website Redesign</option>
                            <option>Bug Fixes</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="col-lg-6">
                        <label>Estimated Budget</label>

                        <select>
                            <option>Select Budget</option>
                            <option>$100 - $300</option>
                            <option>$300 - $700</option>
                            <option>$700 - $1500</option>
                            <option>$1500+</option>
                        </select>
                    </div>

                    <div className="col-lg-6">
                        <label>Timeline</label>

                        <select>
                            <option>Select Timeline</option>
                            <option>ASAP</option>
                            <option>1 Week</option>
                            <option>2-4 Weeks</option>
                            <option>1-2 Months</option>
                            <option>Flexible</option>
                        </select>
                    </div>

                    <div className="col-12">
                        <label>Project Requirements</label>

                        <textarea
                            rows="6"
                            placeholder="Tell me about your project, features, goals, preferred technologies, or any other requirements..."
                        ></textarea>
                    </div>

                    <div className="col-12 text-center">

                        <button className="send-btn">
                            Send Project Inquiry
                        </button>

                    </div>

                </div>

            </form>

            <Footer2 />

        </>

    );
}

export default Projects;