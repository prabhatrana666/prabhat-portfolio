import { Typewriter } from "react-simple-typewriter";
import "./MainLandingPage.css"
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
import SEO from "../seo/SEO";

function MainLandingPage() {

    // console.log(AllProjectsData)
    const navigate = useNavigate();
    return (
        <>
            <SEO
                title="Prabhat Rana - Frontend Developer Portfolio | React.js Developer"
                description="Prabhat Rana is a Frontend Developer specializing in React.js, React Native, JavaScript, MERN Stack, Progressive Web Apps (PWAs), responsive web development, and modern UI development."
                keywords="Prabhat Rana, Frontend Developer, React.js Developer, React Native Developer, JavaScript Developer, MERN Stack Developer, Web Developer, UI Developer, Progressive Web Apps, Responsive Web Development, Portfolio"
                canonicalUrl="/"
                type="website"
                image="/logore.png"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "@id": "https://prabhatrana.online/#person",

                    "name": "Prabhat Rana",
                    "givenName": "Prabhat",
                    "familyName": "Rana",

                    "url": "https://prabhatrana.online",
                    "image": "https://prabhatrana.online/logo.png",

                    "jobTitle": "Frontend Developer",

                    "description":
                        "Frontend Developer specializing in React.js, JavaScript, MERN Stack, Progressive Web Apps (PWA), responsive web development, and SEO-friendly websites.",

                    "email": "mailto:your-email@example.com",

                    "nationality": "Indian",

                    "knowsAbout": [
                        "React.js",
                        "JavaScript",
                        "TypeScript",
                        "HTML5",
                        "CSS3",
                        "Bootstrap",
                        "Tailwind CSS",
                        "Redux",
                        "React Router",
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                        "REST API",
                        "Firebase",
                        "Git",
                        "GitHub",
                        "Progressive Web Apps",
                        "SEO",
                        "Responsive Web Design"
                    ],

                    "sameAs": [
                        "https://github.com/prabhatrana666",
                        "https://www.linkedin.com/in/prabhat-rana"
                    ]
                }}
            />
            <section className="hero-section py-5">
                <div className="container">
                    <div className="row align-items-center">

                        {/* ================= LEFT ================= */}

                        <div className="col-lg-6">
                            <div className="hero-left">

                                <p className="hero-tag"> Hello, I'm</p>

                                <h1 className="hero-title">
                                    Prabhat Rana
                                </h1>

                                <h2 className="hero-role">
                                    <Typewriter
                                        words={[
                                            "React Developer",
                                            "Frontend Developer",
                                            "Full Stack Developer",
                                            "MERN Stack Developer",
                                        ]}
                                        loop={0}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1500}
                                    />
                                </h2>

                                <p className="hero-description">
                                    I build fast, responsive, and modern web applications using React,
                                    JavaScript, Node.js, Express.js, MongoDB, and Firebase.
                                    Passionate about creating clean UI, scalable solutions,
                                    and exceptional user experiences.
                                </p>

                                <div className="hero-buttons">
                                    <Link to="/contact" className="btn btn-primary contact_me">
                                        Contact Me
                                    </Link>
                                    <Link to="/projects" className="btn btn-primary view_projects">
                                        View Projects
                                    </Link>


                                </div>

                            </div>
                        </div>

                        {/* ================= RIGHT ================= */}

                        <div className="col-lg-6">

                            <motion.div
                                initial={{ opacity: 0, x: 80 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                            >

                                <Swiper
                                    modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
                                    navigation={{
                                        nextEl: ".hero-next",
                                        prevEl: ".hero-prev",
                                    }}
                                    effect="coverflow"
                                    grabCursor
                                    centeredSlides
                                    slidesPerView={"auto"}
                                    loop
                                    speed={900}
                                    autoplay={false}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: "auto",
                                        },
                                    }}
                                    coverflowEffect={{
                                        rotate: 0,
                                        stretch: 20,
                                        depth: 180,
                                        modifier: 1,
                                        scale: 0.88,
                                        slideShadows: false,
                                    }}
                                    className="hero-project-swiper"
                                >

                                    {AllProjectsData.map((project) => (

                                        <SwiperSlide
                                            key={project.id}
                                            className="hero-project-slide"
                                        >

                                            <div className="project-card">



                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="project-image"
                                                />



                                                <div className="project-overlay">


                                                    <div className="main_card_body">
                                                        <h3 className="project-title">
                                                            {project.title}
                                                        </h3>
                                                        <span className="project-category">
                                                            {project.description}
                                                        </span>
                                                        <div className="project-tech">

                                                            {project.tech.map((item, index) => (

                                                                <span key={index}>
                                                                    {item}
                                                                </span>

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


                                        </SwiperSlide>


                                    ))}

                                </Swiper>
                                <div className="hero-navigation">

                                    <button className="hero-prev" aria-label="Previous slide">
                                        <ChevronLeft size={22} />
                                    </button>

                                    <button className="hero-next" aria-label="Next slide">
                                        <ChevronRight size={22} />
                                    </button>

                                </div>
                            </motion.div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );


};


export default MainLandingPage;