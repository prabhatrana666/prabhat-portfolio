import "../techandprojects/MyTech.css";
import "./Projects.css"
import { useState } from "react";
import Swal from "sweetalert2";
import {
    Ticket,
    Clock,
    Sparkles,
    ShieldCheck,
    CreditCard,
    Phone,
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
import {
    BriefcaseBusiness,
    Wallet,
    CalendarDays,
} from "lucide-react";
import { FaRegCommentDots, FaPaperPlane } from "react-icons/fa";
import { User, Mail, Building2 } from "lucide-react";
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
const formVariant = {
    hidden: { opacity: 0, x: 120 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};
const textVariant2 = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};
// console.log(AllProjectsData.length);


function Projects() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { name, email, mobile, message } = formData;

        // only required fields validation
        if (!name || !mobile || !message) {
            Swal.fire("Error", "Please fill required fields", "error");
            return;
        }

        const text = `
📩 New Project Inquiry From Projects Section

👤 Name: ${name}
📧 Email: ${email || "Not provided"}
📱 Mobile: ${mobile}
📝 Message: ${message}
`;

        try {
            await fetch(`https://api.telegram.org/bot8778289101:AAH4I9bcqMGMOg7uQS_-FjbhmNle0JFn4_w/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: "1704641369",
                    text: text
                })
            });

            Swal.fire("Message Received", "We will contact you soon.", "success");

            setFormData({
                name: "",
                email: "",
                mobile: "",
                message: ""
            });

        } catch (error) {
            Swal.fire("Error", "Failed to send message", "error");
        } finally {
            setLoading(false);
        }
    };
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



            {/* My Form */}
            <motion.div
                className="section-header text-center mb-5 mt-5"
                variants={headerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.span className="why-label" variants={textVariant}>
                    START A PROJECT
                </motion.span>

                <motion.h2 className="why-title" variants={textVariant}>
                    LET'S BUILD <span>SOMETHING AMAZING</span>
                </motion.h2>

                <motion.p className="why-description" variants={textVariant}>
                    Have a project in mind? Share your requirements and I'll get back to you with the best solution tailored to your goals.
                </motion.p>
            </motion.div>
            <motion.form
                className="project-inquiry-form mb-5"
                onSubmit={handleSubmit}
                variants={formVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >

                <div className="row g-4">

                    <div className="col-lg-4">
                        <label className="form-label">Full Name</label>

                        <div className="input-group custom-input">
                            <span className="input-group-text">
                                <User size={18} />
                            </span>

                            <input
                                type="text"
                                className="form-control"
                                value={formData.name}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                                    setFormData({ ...formData, name: value });
                                }}
                                required
                                placeholder="Enter your full name"
                            />
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <label className="form-label">Email Address</label>

                        <div className="input-group custom-input">
                            <span className="input-group-text">
                                <Mail size={18} />
                            </span>

                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <label className="form-label">Phone</label>

                        <div className="input-group custom-input">
                            <span className="input-group-text">
                                <Phone size={18} />
                            </span>

                            <input
                                type="tel"
                                className="form-control"
                                required
                                name="mobile"
                                onChange={handleChange}
                                value={formData.mobile}
                                placeholder="Enter your mobile"
                                maxLength={10}
                                pattern="[0-9]{10}"
                            />
                        </div>
                    </div>

                    <div className="col-12">
                        <label>
                            <FaRegCommentDots size={16} style={{ marginRight: "6px" }} />
                            Project Requirements
                        </label>

                        <textarea
                            rows="6"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project..."
                            required
                        ></textarea>
                    </div>

                    <div className="col-12 text-center">
                        <button
                            className="send-btn"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span className="spinner"></span>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane size={16} style={{ marginRight: "8px" }} />
                                    Send Project Inquiry
                                </>
                            )}
                        </button>
                    </div>

                </div>

            </motion.form>
            <Footer2 />

        </>

    );
}

export default Projects;