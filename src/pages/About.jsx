import SEO from "../components/seo/SEO";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Users, Fuel, Settings, Phone, MessageCircle } from "lucide-react";
import poster from "../assets/my_images.png";
import {
  UserRound,
  Laptop2,
  ServerCog,
  Database,
  Wrench,
  CheckCircle2,
  Rocket,
  Code2,
  Sparkles,
  LayoutDashboard,
  BriefcaseBusiness,
  Smartphone
} from "lucide-react";
import {
  ShieldCheck,
  Crosshair,
  BadgeCheck,
} from "lucide-react";
import "./About.css";
import Footer2 from "../components/footer/Footer2";
import { useEffect } from "react";

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
      <SEO
        title="About Prabhat Rana | Frontend Developer | React.js & MERN Stack"
        description="Learn about Prabhat Rana, a Frontend Developer specializing in React.js, React Native, JavaScript, MERN Stack, Progressive Web Apps (PWAs), responsive web development, and modern UI development. Explore my skills, experience, and professional journey."
        keywords="Prabhat Rana, About Prabhat Rana, Frontend Developer, React.js Developer, React Native Developer, JavaScript Developer, MERN Stack Developer, Web Developer, UI Developer, Responsive Web Development, Portfolio"
        canonicalUrl="/about"
        type="profile"
        image="/logo.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": "https://prabhatrana.online/about#about",

          "url": "https://prabhatrana.online/about",
          "name": "About Prabhat Rana",
          "description":
            "Learn about Prabhat Rana, a Frontend Developer specializing in React.js, React Native, JavaScript, MERN Stack, Progressive Web Apps (PWAs), responsive web development, and modern UI development.",

          "mainEntity": {
            "@type": "Person",
            "@id": "https://prabhatrana.online/#person",
            "name": "Prabhat Rana",
            "jobTitle": "Frontend Developer",
            "url": "https://prabhatrana.online",
            "sameAs": [
              "https://github.com/prabhatrana666",
              "https://www.linkedin.com/in/prabhat-rana"
            ]
          }
        }}
      />

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


          <section className="about-section section-padding mt-5" id="about">

            <div className="container">

              <div className="row align-items-center g-5">

                {/* LEFT */}

                <div className="col-lg-6">

                  <p className="section-subtitle mytech_title">
                    MY TECH STACK
                  </p>

                  <h2 className="section-title mb-4 aboutus-title">
                    Passionate Developer Building
                    <span> Modern Web Experiences</span>
                  </h2>

                  <p className="about-text">
                    I specialize in creating fast, scalable and responsive
                    web applications using modern JavaScript technologies.
                    My focus is on writing clean, reusable code while
                    delivering seamless user experiences with beautiful UI
                    and optimized performance.
                  </p>

                  <div className="feature-list mt-5">

                    <div className="feature-item">
                      <Rocket size={18} />
                      Fast Performance
                    </div>

                    <div className="feature-item">
                      <ShieldCheck size={18} />
                      Secure Applications
                    </div>

                    <div className="feature-item">
                      <LayoutDashboard size={18} />
                      Responsive Design
                    </div>

                    <div className="feature-item">
                      <Sparkles size={18} />
                      Pixel Perfect UI
                    </div>

                    <div className="feature-item">
                      <Code2 size={18} />
                      Clean Architecture
                    </div>

                    <div className="feature-item">
                      <CheckCircle2 size={18} />
                      SEO Friendly
                    </div>
                    <div className="feature-item">
                      <Smartphone size={18} />
                      Progressive Web Apps
                    </div>
                  </div>

                </div>

                {/* RIGHT */}

                <div className="col-lg-6">

                  <div className="row g-4">

                    <div className="col-md-6">

                      <div className="about-card">

                        <Laptop2 className="card-icon" />

                        <h4>Frontend</h4>

                        <div className="tech-tags">

                          <span>React</span>
                          <span>React Native</span>
                          <span>Redux Toolkit</span>
                          <span>JavaScript</span>
                          <span>PWA</span>
                          <span>Framer Motion</span>
                        </div>

                      </div>

                    </div>

                    <div className="col-md-6">

                      <div className="about-card">

                        <ServerCog className="card-icon" />

                        <h4>Backend</h4>

                        <div className="tech-tags">
                          <span>Node.js</span>
                          <span>Express.js</span>
                          <span>REST API</span>
                          <span>JWT</span>
                          <span>Bcrypt</span>
                          <span>OAuth 2.0</span>
                        </div>

                      </div>

                    </div>

                    <div className="col-md-6">

                      <div className="about-card">

                        <Database className="card-icon" />

                        <h4>Database</h4>

                        <div className="tech-tags">

                          <span>MongoDB</span>
                          <span>Firebase</span>
                          <span>Supabase</span>

                        </div>

                      </div>

                    </div>

                    <div className="col-md-6">

                      <div className="about-card">

                        <Wrench className="card-icon" />

                        <h4>Tools</h4>

                        <div className="tech-tags">

                          <span>Git</span>
                          <span>GitHub</span>
                          <span>Netlify</span>
                          <span>Figma</span>
                          <span>Visual Studio (C#)</span>
                          <span>Postman</span>
                          <span>Heroku</span>


                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* STATS */}

              <div className="row g-4 mt-5">

                <div className="col-lg-3 col-md-6">

                  <div className="stat-box">

                    <BriefcaseBusiness />

                    <h2>25+</h2>

                    <p>Projects Completed</p>

                  </div>

                </div>

                <div className="col-lg-3 col-md-6">

                  <div className="stat-box">

                    <Laptop2 />

                    <h2>15+</h2>

                    <p>Technologies</p>

                  </div>

                </div>

                <div className="col-lg-3 col-md-6">

                  <div className="stat-box">

                    <Rocket />

                    <h2>100%</h2>

                    <p>Responsive</p>

                  </div>

                </div>

                <div className="col-lg-3 col-md-6">

                  <div className="stat-box">

                    <UserRound />

                    <h2>Clean</h2>

                    <p>Code Quality</p>

                  </div>

                </div>

              </div>

            </div>

          </section>

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