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
function MainLandingPage() {

    // console.log(AllProjectsData)
    const navigate = useNavigate();
    return (
        <>
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
                                    <Link to="/contact" className="btn btn-primary">
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
                                    modules={[Pagination, Navigation,Autoplay, EffectCoverflow]}
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

                                    <button className="hero-prev">
                                        <ChevronLeft size={22} />
                                    </button>

                                    <button className="hero-next">
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
}

export default MainLandingPage;