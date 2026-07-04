import { Typewriter } from "react-simple-typewriter";
import "./MainLandingPage.css"
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { FaGithub } from "react-icons/fa6"; import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HiOutlineExternalLink } from "react-icons/hi";
import AllProjectsData from '../../data/AllProjectsData'

function MainLandingPage() {
  
// console.log(AllProjectsData)
    return (
        <>
            <section className="hero-section py-5">
                <div className="container">
                    <div className="row align-items-center">

                        {/* ================= LEFT ================= */}

                        <div className="col-lg-6">
                            <div className="hero-left">

                                <p className="hero-tag">👋 Hello, I'm</p>

                                <h1 className="hero-title">
                                    Prabhat Rana
                                </h1>

                                <h2 className="hero-role">
                                    <Typewriter
                                        words={[
                                            "Full Stack Developer",
                                            "React Developer",
                                            "Frontend Developer",
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
                                    <button className="btn btn-primary">
                                        Hire Me
                                    </button>

                                    <button className="btn btn-outline-primary ms-3">
                                        View Projects
                                    </button>
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
                                    modules={[Autoplay, Pagination, EffectCoverflow]}
                                    effect="coverflow"
                                    grabCursor
                                    centeredSlides
                                    slidesPerView={"auto"}
                                    loop
                                    speed={900}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
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
                                            <div
                                                style={{
                                                    height: "450px",
                                                    background: "#524caf",
                                                    color: "#fff",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    borderRadius: "20px"
                                                }}
                                            >
                                                {project.title}
                                            </div>

                                        </SwiperSlide>

                                    ))}

                                </Swiper>

                            </motion.div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default MainLandingPage;