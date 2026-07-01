import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Users, Fuel, Settings, Phone, MessageCircle } from "lucide-react";
import poster from "../assets/poster.webp";

import {
  ShieldCheck,
  Crosshair,
  BadgeCheck,
} from "lucide-react";
import "./About.css";

const features = [
  {
    icon: <ShieldCheck size={28} />,
    title: "SAFETY FIRST",
    desc: "Every drive is backed by verified drivers and insured for long-distance travel.",
  },
  {
    icon: <Crosshair size={28} />,
    title: "PRECISION",
    desc: "We value your time. GPS tracked rides ensure a hassle-free journey.",
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "ELITE QUALITY",
    desc: "Premium well-maintained vehicles provide a smooth and comfortable ride.",
  },
];

function About() {
  return (
    <>
      <Navbar />


      {/* Top Section */}

      <section className="hl-section">
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
                  OUR LEGACY
                </div>

                <h1 className="hl-title">
                  BORN IN
                  <br />
                  <span>DELHI</span>
                </h1>

                <p className="hl-description">
                  "Hello11 is not just a taxi service; it's a promise of safety
                  and punctuality that started in the heart of Sant Kabir Nagar."
                </p>
              </motion.div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 text-center">
              <motion.div
                className="hl-image-wrapper"
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

          {/* Mission Box */}
          <motion.div
            className="pf-mission"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >
            <span>
              "OUR MISSION IS TO MAKE PREMIUM TRAVEL{" "}
              <strong>AFFORDABLE</strong>
              <br />
              FOR EVERY FAMILY IN KHALILABAD."
            </span>
          </motion.div>

        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <div className="rtr-instant-card mt-5 p-5 container sddd">

        <div className="text-center position-relative">

          <p className="rtr-subtitle">
            GET IN TOUCH
          </p>

          <h3 className="rtr-instant-title font-italic my_title">
            TRAVEL WITH <span>HELLO11</span>
          </h3>
          <p className="small_texts">PREMIUM RIDES, TRUSTED DRIVERS, AND UNMATCHED COMFORT — ALL AT YOUR FINGERTIPS</p>
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
              CALL +91 96289 11211
            </a>

          </div>

        </div>

      </div>
      <Footer />
    </>
  )

}

export default About;