import "./MyTech.css";
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

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 60 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const textVariant = {
    hidden: { opacity: 0, x: -40 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 }
    }
};

const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15
        }
    }
};
const headerVariant = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
            staggerChildren: 0.15
        }
    }
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

function MyTech() {


    return (
        <>

            {/* My Tech Section */}

            <div className="my_tech_stack">
                <div className="section-header text-center mt-4">

                    <span className="why-label">MY TECH STACK</span>

                    <h2 className="why-title">
                        TECHNOLOGY <span>I USE</span>
                    </h2>
                    <p className="why-description">
                        Modern technologies and tools I use to build fast, responsive,
                        scalable, and user-friendly web applications.
                    </p>
                </div>
                <motion.div
                    className="skills-grid container"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >

                    <motion.div
                        className="skill-card"
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            scale: 1.05,
                            rotateX: 6,
                            rotateY: -6,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.img
                            src="https://cdn.simpleicons.org/react"
                            alt="React"
                            whileHover={{
                                scale: 1.15,
                                rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <h5>React</h5>
                    </motion.div>

                    {/* JavaScript */}
                    <motion.div
                        className="skill-card"
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            scale: 1.05,
                            rotateX: 6,
                            rotateY: -6,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <motion.img
                            src="https://cdn.simpleicons.org/javascript"
                            alt="JavaScript"
                            whileHover={{
                                scale: 1.18,
                                rotate: 8,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                        />

                        <h5>JavaScript</h5>
                    </motion.div>

                    {/* Node.js */}
                    <motion.div
                        className="skill-card"
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            scale: 1.05,
                            rotateX: 6,
                            rotateY: -6,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <motion.img
                            src="https://cdn.simpleicons.org/nodedotjs"
                            alt="Node.js"
                            whileHover={{
                                scale: 1.18,
                                rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <h5>Node.js</h5>
                    </motion.div>

                    {/* Express.js */}
                    <motion.div
                        className="skill-card"
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            scale: 1.05,
                            rotateX: 6,
                            rotateY: -6,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <motion.img
                            src="https://cdn.simpleicons.org/express"
                            alt="Express"
                            whileHover={{
                                scale: 1.18,
                                rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <h5>Express.js</h5>
                    </motion.div>

                    {/* MongoDB */}
                    <motion.div
                        className="skill-card"
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            scale: 1.05,
                            rotateX: 6,
                            rotateY: -6,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <motion.img
                            src="https://cdn.simpleicons.org/mongodb"
                            alt="MongoDB"
                            whileHover={{
                                scale: 1.18,
                                rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <h5>MongoDB</h5>
                    </motion.div>

                    {/* Firebase */}
                    <motion.div
                        className="skill-card"
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            scale: 1.05,
                            rotateX: 6,
                            rotateY: -6,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <motion.img
                            src="https://cdn.simpleicons.org/firebase"
                            alt="Firebase"
                            whileHover={{
                                scale: 1.18,
                                rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <h5>Firebase</h5>
                    </motion.div>

                    {/* Redux */}
                    <motion.div
                        className="skill-card"
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            scale: 1.05,
                            rotateX: 6,
                            rotateY: -6,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <motion.img
                            src="https://cdn.simpleicons.org/redux"
                            alt="Redux"
                            whileHover={{
                                scale: 1.18,
                                rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <h5>Redux</h5>
                    </motion.div>

                    {/* Bootstrap */}
                    <motion.div
                        className="skill-card"
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            scale: 1.05,
                            rotateX: 6,
                            rotateY: -6,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <motion.img
                            src="https://cdn.simpleicons.org/bootstrap"
                            alt="Bootstrap"
                            whileHover={{
                                scale: 1.18,
                                rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <h5>Bootstrap</h5>
                    </motion.div>

                    {/* HTML5 */}
                    <motion.div
                        className="skill-card"
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            scale: 1.05,
                            rotateX: 6,
                            rotateY: -6,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <motion.img
                            src="https://cdn.simpleicons.org/html5"
                            alt="HTML5"
                            whileHover={{
                                scale: 1.18,
                                rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <h5>HTML5</h5>
                    </motion.div>

                    {/* CSS3 */}
                    <motion.div
                        className="skill-card"
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            scale: 1.05,
                            rotateX: 6,
                            rotateY: -6,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <motion.img
                            src="https://cdn.simpleicons.org/css"
                            alt="CSS3"
                            whileHover={{
                                scale: 1.18,
                                rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <h5>CSS3</h5>
                    </motion.div>

                    {/* Git */}
                    <motion.div
                        className="skill-card"
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            scale: 1.05,
                            rotateX: 6,
                            rotateY: -6,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <motion.img
                            src="https://cdn.simpleicons.org/git"
                            alt="Git"
                            whileHover={{
                                scale: 1.18,
                                rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <h5>Git</h5>
                    </motion.div>

                    {/* GitHub */}
                    <motion.div
                        className="skill-card"
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            scale: 1.05,
                            rotateX: 6,
                            rotateY: -6,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <motion.img
                            src="https://cdn.simpleicons.org/github"
                            alt="GitHub"
                            whileHover={{
                                scale: 1.18,
                                rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <h5>GitHub</h5>
                    </motion.div>
                </motion.div>

            </div>


            {/* My Projects Section */}

            <div className="my_tech_stack container">
                <div className="section-header text-center mt-5">

                    <span className="why-label">FEATURED WORK</span>

                    <h2 className="why-title">
                        RECENT <span>PROJECTS</span>
                    </h2>

                    <p className="why-description">
                        Explore a selection of real-world web applications showcasing modern frontend development, full-stack solutions, responsive design, and seamless API integrations.
                    </p>
                </div>
               
                 <div className="container mt-5">
                    <motion.div
                        className="row g-4"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {AllProjectsData.map((project) => (
                            <div
                                key={project.id}
                                className="col-lg-4 col-md-6 col-12"
                            >
                                <motion.div
                                    className="project-card my_new_project_card"
                                    variants={cardVariant}
                                    whileHover={{ scale: 1.05 }}
                                >

                                    {/* IMAGE */}
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image"
                                        initial={{ scale: 1.2, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.6 }}
                                    />

                                    <div className="project-overlay">

                                        <div className="main_card_body">

                                            {/* TITLE */}
                                            <motion.h3
                                                className="project-title"
                                                variants={textVariant}
                                            >
                                                {project.title}
                                            </motion.h3>

                                            {/* DESCRIPTION */}
                                            <motion.span
                                                className="project-category"
                                                variants={textVariant}
                                            >
                                                {project.description}
                                            </motion.span>

                                            {/* TECH STACK (snake-like stagger effect) */}
                                            <motion.div
                                                className="project-tech"
                                                variants={staggerContainer}
                                            >
                                                {project.tech.map((item, index) => (
                                                    <motion.span
                                                        key={index}
                                                        variants={textVariant}
                                                        whileHover={{
                                                            y: -5,
                                                            scale: 1.1
                                                        }}
                                                    >
                                                        {item}
                                                    </motion.span>
                                                ))}
                                            </motion.div>
                                        </div>

                                        {/* BUTTONS */}
                                        <motion.div
                                            className="project-buttons"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <a href={project.github} target="_blank" className="project-btn github_button">
                                                <FaGithub size={18} />
                                                GitHub
                                            </a>

                                            <a href={project.live} target="_blank" className="project-btn primary">
                                                <HiOutlineExternalLink size={18} />
                                                Live Demo
                                            </a>
                                        </motion.div>

                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

        </>

    );
}

export default MyTech;