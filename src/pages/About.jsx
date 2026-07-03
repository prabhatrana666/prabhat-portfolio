import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Users, Fuel, Settings, Phone, MessageCircle } from "lucide-react";
import poster from "../assets/my_images.png";
import {
SiReact,
SiReactrouter,
SiRedux,
SiJavascript,
SiTypescript,
SiHtml5,
SiCss3,
SiBootstrap,
SiTailwindcss,
SiNodedotjs,
SiExpress,
SiMongodb,
SiFirebase,
SiSupabase,
SiGit,
SiGithub,
SiPostman,
SiFigma,
SiVercel,
SiNetlify,
SiSocketdotio
} from "react-icons/si";
import {
  ShieldCheck,
  Crosshair,
  BadgeCheck,
} from "lucide-react";
import "./About.css";
import Footer2 from "../components/footer/Footer2";

const features = [
  {
    icon: <ShieldCheck size={28} />,
    title: "CLEAN CODE",
    desc: "I build scalable, maintainable, and well-structured applications by following modern development standards and best practices.",
  },
  {
    icon: <Crosshair size={28} />,
    title: "PROBLEM SOLVING",
    desc: "With 1.5+ years of experience, I transform complex requirements into efficient, user-focused, and reliable frontend solutions.",
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "QUALITY DELIVERY",
    desc: "Focused on performance, responsive design, accessibility, and pixel-perfect implementation to deliver production-ready applications.",
  },
];
function About() {
  return (
    <>
      <Navbar />


      {/* Top Section */}

      <section className="hl-section mt-2">
        <div className="container">
          <div className="row align-items-center">

            {/* Left Content */}
            <div className="col-lg-6">
              <motion.div
                className="hl-content"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="hl-subtitle">
                  <span></span>
                  ABOUT ME
                </div>

                <h1 className="hl-title">
                  PRABHAT
                  <br />
                  <span>RANA</span>
                </h1>

                {/* <p className="hl-description">
                  I'm a passionate Frontend Developer with <strong>1.5+ years of professional experience</strong> building responsive, scalable, and high-performance web applications. <br />I specialize in React.js, JavaScript, Redux Toolkit, and modern frontend technologies, transforming ideas into intuitive digital experiences through clean architecture, reusable components, and user-centric design.
                </p> */}
                <p className="hl-description">
                  I'm a passionate Frontend Developer with <strong>1.5+ years of professional experience</strong> building responsive, scalable, and high-performance web and mobile applications.
                  <br />
                  I specialize in <strong>React.js</strong>, <strong>React Native</strong>, <strong>JavaScript</strong>, <strong>Redux Toolkit</strong>, and modern frontend technologies, transforming ideas into intuitive digital experiences through clean architecture, reusable components, and user-centric design.
                </p>
              </motion.div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 text-center">
              <motion.div
                className="hl-image-wrapper"
                style={{
                  borderRadius: '110px 0 110px 0', borderTop: '2px solid #7c3aed',
                  borderLeft: '2px solid #7c3aed'
                }}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src={poster}
                  alt="Hello11 Poster"
                  className="img-fluid hl-image"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>


      {/* Middle Section */}

      <section className="pf-section mt-5">
        <div className="container">

          {/* Feature Cards */}
          <div className="row justify-content-center g-4">

            {features.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <motion.div
                  className="pf-card"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="pf-icon">
                    {item.icon}
                  </div>

                  <h5>{item.title}</h5>

                  <p>{item.desc}</p>
                </motion.div>
              </div>
            ))}

          </div>

          {/* Technology I work with */}


          <p className="section-subtitle">TECH STACK</p>

          <h2 className="section-title">
            Technologies <span>I Work With</span>
          </h2>

          <p className="section-description">
            A carefully selected set of modern technologies I use to build scalable, high-performance web and mobile applications—from intuitive user interfaces to secure backend services and seamless deployments.
          </p>


          {/* Mission Box */}
          <motion.div
            className="pf-mission"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >
            <span>
              "PASSIONATE ABOUT TURNING IDEAS INTO
              <strong> HIGH-PERFORMANCE WEB APPLICATIONS</strong>
              <br />
              THROUGH INNOVATION, PRECISION, AND CONTINUOUS LEARNING."
            </span>

          </motion.div>

        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <div className="rtr-instant-card mt-5 p-5 container sddd">

        <div className="text-center position-relative anout_me">

          <p className="rtr-subtitle">
            ABOUT ME
          </p>

          <h3 className="rtr-instant-title font-italic my_title">
            CRAFTING <span>DIGITAL EXPERIENCES</span>
          </h3>

          <p className="small_texts">
            I'm a Full Stack Developer with professional experience in frontend development, passionate about building fast, responsive, and user-focused web applications. I transform ideas into modern digital experiences through clean code, scalable architecture, and intuitive design.
          </p>

          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">

            <a
              href="https://wa.me/918851522173"
              target="_blank"
              rel="noreferrer"
              className="rtr-whatsapp-btn"
            >
              <MessageCircle size={20} />
              CHAT ON WHATSAPP
            </a>

            <a
              href="tel:+918851522173"
              className="rtr-call-btn"
            >
              <Phone size={20} />
              CALL +91 88515 22173
            </a>

          </div>

        </div>

      </div>
      <Footer2 />
    </>
  )

}

export default About;