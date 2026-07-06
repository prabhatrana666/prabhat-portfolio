import React from "react";
import "./ContactUs.css";
import Navbar from "../navbar/Navbar";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
    MapPin,
    PhoneCall,
    Mail,
    Send,
    User,
    MessageSquare,
    Briefcase,
} from "lucide-react";
import LazyGoogleMap from "../footer/LazyGoogleMap";
import Footer2 from "../footer/Footer2";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ContactUs = () => {
    const [loading, setLoading] = useState(false);
    const [showMap, setShowMap] = useState(false);

    useEffect(() => {
        const alreadyLoaded = sessionStorage.getItem("map_loaded");

        if (alreadyLoaded) {
            setShowMap(true);
        } else {
            setShowMap(true);
            sessionStorage.setItem("map_loaded", "true");
        }
    }, []);
    const sendToTelegram = async (formData) => {
        const BOT_TOKEN = "8778289101:AAH4I9bcqMGMOg7uQS_-FjbhmNle0JFn4_w";
        const CHAT_ID = "1704641369";

        const message = `
📩 New Contact Form Submission

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
💼 Project: ${formData.project}
📝 Message: ${formData.message}
        `;

        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
            }),
        });

        if (!res.ok) {
            throw new Error("Telegram API failed");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        Swal.fire({
            title: "Sending Message...",
            text: "Please wait",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        const formData = {
            name: e.target.querySelector('input[type="text"]').value,
            email: e.target.querySelector('input[type="email"]').value,
            phone: e.target.querySelector('input[type="tel"]').value,
            project: e.target.querySelector("select").value,
            message: e.target.querySelector("textarea").value,
        };

        try {
            await sendToTelegram(formData);

            Swal.fire({
                icon: "success",
                title: "Message Sent!",
                text: "I will contact you soon 🚀",
            });

            e.target.reset();
        } catch (error) {
            console.log("Telegram Error:", error);
            Swal.fire({
                icon: "error",
                title: "Failed!",
                text: "Something went wrong. Try again.",
            });
        } finally {
            setLoading(false);
        }
    };


    // Motion Effect
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 70,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
            },
        },
    };
    const fadeLeft = {
        hidden: {
            opacity: 0,
            x: -80,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const fadeRight = {
        hidden: {
            opacity: 0,
            x: 80,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };
    return (
        <>
            <Navbar />
            {/* <section className="contact-section py-5" id="contact"> */}
            <motion.section
                className="contact-section py-5"
                id="contact"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="container">
                    {/* Heading */}
                    <motion.div
                        className="text-center mb-5"
                        variants={fadeUp}
                    >
                        <span className="contact-subtitle">
                            Get In Touch
                        </span>
                        <h2 className="contact-title mt-2">
                            Let's Build Something Amazing Together
                        </h2>
                        <p className="contact-description mx-auto">
                            Have a project in mind or need a modern, responsive website?
                            I'm available for freelance projects, frontend development,
                            and long-term collaborations. Let's bring your ideas to life.
                        </p>
                        <div className="availability-badge">
                            🟢 Available for Freelance Projects
                        </div>
                    </motion.div>
                    {/* Contact Cards */}


                    <motion.div className="row g-4 mb-5"
                        variants={fadeUp}>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-card">
                                <div className="contact-icon">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h5>Location</h5>
                                    <p>
                                        Noida, Uttar Pradesh,<br />
                                        India
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-card">
                                <div className="contact-icon">
                                    <PhoneCall size={24} />
                                </div>
                                <div>
                                    <h5>Call Me</h5>
                                    <a href="tel:+918851522173">
                                        +91 88515 22173
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="contact-card">
                                <div className="contact-icon">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h5>Email Me</h5>
                                    <a href="mailto:prabhatrana.dev@gmail.com">
                                        prabhatrana.dev@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form + Map */}
                    <div className="row g-5 align-items-stretch">
                        {/* Contact Form */}

                        <motion.div
                            className="col-lg-7"
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="show"
                            viewport={{
                                once: true,
                                amount: 0.4,
                            }}
                        >
                            <div className="contact-form-wrapper">
                                <h3 className="mb-4">
                                    Send Me a Message
                                </h3>

                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="row g-4">
                                        {/* Name */}
                                        <div className="col-md-6 mobile_view">
                                            <label className="form-label">Full Name</label>
                                            <div className="input-group custom-input contact_form">
                                                <span className="input-group-text">
                                                    <User size={18} />
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter your full name"
                                                    required
                                                    onInput={(e) =>
                                                        (e.target.value = e.target.value.replace(/[^A-Za-z ]/g, ""))
                                                    }
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="col-md-6 mobile_view">
                                            <label className="form-label">Email Address</label>
                                            <div className="input-group custom-input contact_form">
                                                <span className="input-group-text">
                                                    <Mail size={18} />
                                                </span>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="example@gmail.com"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="col-md-6 mobile_view">
                                            <label className="form-label">Phone Number</label>
                                            <div className="input-group custom-input contact_form">
                                                <span className="input-group-text">
                                                    <PhoneCall size={18} />
                                                </span>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    placeholder="Enter 10 digit mobile number"
                                                    required
                                                    maxLength={10}
                                                    pattern="[0-9]{10}"
                                                    title="Please enter exactly 10 digits"
                                                    onInput={(e) =>
                                                        (e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10))
                                                    }
                                                />
                                            </div>
                                        </div>

                                        {/* Subject Dropdown */}
                                        <div className="col-md-6 mobile_view">
                                            <label className="form-label">Project Type</label>
                                            <div className="input-group custom-input contact_form">
                                                <span className="input-group-text">
                                                    <Briefcase size={18} />
                                                </span>
                                                <select className="form-control" required>
                                                    <option value="">Choose Project Type</option>
                                                    <option value="Frontend Development">Frontend Development</option>
                                                    <option value="Full Stack Website">Full Stack Website</option>
                                                    <option value="Mobile App">Mobile App</option>
                                                    <option value="Freelance Collaboration">Freelance Collaboration</option>
                                                    <option value="Other Purpose">Other Purpose</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="col-12 mobile_view">
                                            <label className="form-label">Project Details</label>
                                            <div className="input-group custom-input textarea-box contact_form">
                                                <span className="input-group-text align-items-start pt-3">
                                                    <MessageSquare size={18} />
                                                </span>
                                                <textarea
                                                    rows="2"
                                                    className="form-control"
                                                    placeholder="Describe your project requirements..."
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>

                                        {/* Button */}
                                        <div className="col-12 text-center">
                                            <button
                                                type="submit"
                                                className="btn contact-btn w-100"
                                                disabled={loading}
                                            >
                                                <Send size={18} className="me-2" />
                                                {loading ? "Sending..." : "Send Message"}
                                            </button>
                                            <p className="form-note mt-3">
                                                ⚡ Usually replies within 24-48 hours
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </motion.div>

                        {/* Google Map */}

                        <motion.div
                            className="col-lg-5 maps"
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="show"
                            viewport={{
                                once: true,
                                amount: 0.4,
                            }}
                        >
                            <div className="map-wrapper">

                                {showMap && (
                                    <iframe
                                        title="My Location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46510.7623565456!2d77.3356386143719!3d28.600139047081285!2m3!1f0!2f0!3f1!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45f97fb7b77%3A0x57e50ec90fd80e55!2sNoida%20Sector-15!5e1!3m2!1sen!2sin!4v1783074226021!5m2!1sen!2sin"
                                        width="100%"
                                        height="350"
                                        style={{
                                            border: 0,
                                            borderRadius: "20px",
                                        }}
                                        loading="lazy"
                                        allowFullScreen
                                    />
                                )}
                                <div className="working-hours mt-4"> <h5>Problem Solver Mode</h5> <p className="mb-2"> I turn complex ideas into simple digital solutions </p> <span> Logic • Design • Execution </span> <hr /> <h6 className="mb-2"> ⚡ Core Strength </h6> <p className="mb-0"> Breaking problems into clean and scalable frontend solutions. </p> </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </motion.section >
            {/* </section> */}
            < Footer2 />
        </>
    );
};

export default ContactUs;