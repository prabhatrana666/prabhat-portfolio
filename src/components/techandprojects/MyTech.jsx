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
    SiReact, SiRedux, SiFirebase, SiBootstrap, SiGithub, SiGit, SiCss, SiHtml5, SiExpress,
    SiMongodb,
    SiNodedotjs,
    SiJavascript,
} from "react-icons/si";

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
                        <motion.div
                            whileHover={{
                                scale: 1.15,
                                rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <SiReact
                                className="skill-icon tech_iconss"
                                size={70}
                                color="#61DAFB"
                                role="img"
                                aria-label="React"
                            />
                        </motion.div>
                        <p>React</p>
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
                        <motion.div
                            whileHover={{
                                scale: 1.18,
                                rotate: 8,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                        >
                            <SiJavascript
                                className="skill-icon tech_iconss"
                                size={70}
                                role="img"
                                aria-label="JavaScript"
                                color="#F7DF1E"
                            />
                        </motion.div>

                        <p>JavaScript</p>
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
                        <motion.div
                            whileHover={{
                                scale: 1.18,
                                rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <SiNodedotjs
                                className="skill-icon tech_iconss"
                                size={70}
                                role="img"
                                aria-label="Nodejs"
                                color="#5FA04E"
                            />
                        </motion.div>
                        <p>Node.js</p>
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
                        <motion.div
                            whileHover={{
                                scale: 1.18,
                                rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <SiExpress
                                className="skill-icon tech_iconss"
                                size={70}
                                role="img"
                                aria-label="Express"
                                color="#000000"
                            />
                        </motion.div>
                        <p>Express.js</p>
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
                        <motion.div
                            whileHover={{
                                scale: 1.18,
                                rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <SiMongodb
                                className="skill-icon tech_iconss"
                                size={70}
                                role="img"
                                aria-label="Mongodb"
                                color="#47A248"
                            />
                        </motion.div>
                        <p>MongoDB</p>
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
                    ><motion.div
                        whileHover={{
                            scale: 1.18,
                            rotate: 8,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                            <SiFirebase
                                className="skill-icon tech_iconss"
                                size={70}
                                role="img"
                                aria-label="Firebase"
                                color="#DD2C00"
                            />
                        </motion.div>
                        <p>Firebase</p>
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


                        <motion.div
                            whileHover={{
                                scale: 1.18,
                                rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <SiRedux className="skill-icon tech_iconss"
                                role="img"
                                aria-label="Redux"
                                color="#764ABC" />
                        </motion.div>
                        <p>Redux</p>
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
                        <motion.div
                            whileHover={{
                                scale: 1.18,
                                rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <SiBootstrap
                                className="skill-icon tech_iconss"
                                size={70}
                                role="img"
                                aria-label="Bootstrap"
                                color="#7952B3"
                            />
                        </motion.div>
                        <p>Bootstrap</p>
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
                        <motion.div
                            whileHover={{
                                scale: 1.18,
                                rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <SiHtml5
                                className="skill-icon tech_iconss"
                                size={70}
                                role="img"
                                aria-label="Bootstrap"
                                color="#E34F26"
                            />
                        </motion.div>
                        <p>HTML5</p>
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
                        <motion.div
                            whileHover={{
                                scale: 1.18,
                                rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <SiCss
                                className="skill-icon tech_iconss"
                                size={70}
                                role="img"
                                aria-label="Css"
                                color="#7952B3"
                            />
                        </motion.div>
                        <p>CSS3</p>
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
                        <motion.div
                            whileHover={{
                                scale: 1.18,
                                rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <SiGit
                                className="skill-icon tech_iconss"
                                size={70}
                                role="img"
                                aria-label="Git"
                                color="#F05032"
                            />
                        </motion.div>
                        <p>Git</p>
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
                        <motion.div
                            whileHover={{
                                scale: 1.18,
                                rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <SiGithub
                                className="skill-icon tech_iconss"
                                size={70}
                                color="#fff"
                                role="img"
                                aria-label="Github"
                            />
                        </motion.div>
                        <p>GitHub</p>
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
                        viewport={{
                            once: true,
                            amount: 0.15,
                            margin: "0px 0px -150px 0px",
                        }}
                    >
                        {AllProjectsData.map((project) => (
                            <div key={project.id} className="col-lg-4 col-md-6 col-12">

                                {/* CARD */}
                                <motion.div
                                    className="project-card my_new_project_card"
                                    variants={cardVariant}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.2 }}
                                    whileHover={{ scale: 1.05 }}
                                    style={{ willChange: "transform, opacity" }}
                                >

                                    {/* IMAGE (FIXED: NO whileInView HERE) */}
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image"
                                        initial={{ scale: 1.1, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />

                                    <div className="project-overlay">
                                        <div className="main_card_body">

                                            {/* TITLE */}
                                            <motion.h3
                                                className="project-title"
                                                initial={{ opacity: 0, y: 15 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4 }}
                                                viewport={{ once: true }}
                                            >
                                                {project.title}
                                            </motion.h3>

                                            {/* DESCRIPTION */}
                                            <motion.span
                                                className="project-category"
                                                initial={{ opacity: 0, y: 15 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, delay: 0.1 }}
                                                viewport={{ once: true }}
                                            >
                                                {project.description}
                                            </motion.span>

                                            {/* TECH STACK */}
                                            <motion.div
                                                className="project-tech"
                                                variants={staggerContainer}
                                                initial="hidden"
                                                whileInView="show"
                                                viewport={{ once: true }}
                                            >
                                                {project.tech.map((item, index) => (
                                                    <motion.span
                                                        key={index}
                                                        variants={textVariant}
                                                        whileHover={{ y: -5, scale: 1.1 }}
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
                                            transition={{ duration: 0.4, delay: 0.2 }}
                                            viewport={{ once: true }}
                                        >
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