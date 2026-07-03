import React from "react";
import {
    PhoneCall,
    Mail,
    MapPin,
    ArrowUp,
} from "lucide-react";
import './Footer2.css';
import LazyGoogleMap from "./LazyGoogleMap";
import {
    FaWhatsapp,
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import logo from "../../../public/logo.png";

const Footer2 = () => {
    const quickLinks = [
        { name: "Home", link: "/" },
        { name: "About", link: "/" },
        { name: "Projects", link: "/" },
        { name: "Gallery", link: "/" },
        { name: "Services", link: "/" },
    ];
    const featuredProjects = [
        {
            name: "QR Code Generator",
            link: "/",
        },
        {
            name: "Portfolio",
            link: "/",
        },
        {
            name: "E-Commerce",
            link: "/",
        },
        {
            name: "Food Delivery",
            link: "/",
        },
        {
            name: "Weather App",
            link: "/",
        },
    ];

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row gy-5">

                    {/* Brand */}
                    <div className="col-6 col-md-6 col-lg-3 foot_mob">
                        <img
                            src={logo}
                            alt="Traviyo"
                            className="footer-logo mb-4"
                        />

                        <p className="footer-tagline">
                            Frontend Developer passionate about crafting beautiful, responsive, and scalable web applications using React.js, JavaScript, Bootstrap, and modern development practices.

                        </p>
                        <div className="footer-social d-flex gap-3 mt-4">

                            <a
                                href="https://wa.me/918851522173"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="scroll-btn"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp />
                            </a>

                            <a
                                href="https://github.com/prabhatrana666"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="scroll-btn"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://linkedin.com/in/prabhat-rana"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="scroll-btn"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>

                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-6 col-md-6 col-lg-2 foot_mob">
                        <h5 className="footer-title">Quick Links</h5>

                        <ul className="list-unstyled">
                            {quickLinks.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.link} className="footer-link">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Destinations */}
                    <div className="col-6 col-md-6 col-lg-2 foot_mob">
                        <h5 className="footer-title">Featured Projects</h5>

                        <ul className="list-unstyled">
                            {featuredProjects.map((project) => (
                                <li key={project.name}>
                                    <Link to={project.link} className="footer-link">
                                        {project.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-6 col-md-6 col-lg-2 foot_mob">
                        <h5 className="footer-title">Contact Us</h5>

                        <ul className="list-unstyled footer-contact">

                            <li className="mb-3">
                                <a href="tel:+919289918991" className="footer-link d-flex align-items-start">
                                    <PhoneCall size={18} className="me-2 mt-1 flex-shrink-0" />
                                    <span>+91 88515 22173</span>
                                </a>
                            </li>

                            <li className="mb-3">
                                <a href="mailto:sales@traviyo.com" className="footer-link d-flex align-items-start">
                                    <Mail size={18} className="me-2 mt-1 flex-shrink-0" />
                                    <span>prabhatrana2024@<br></br>gmail.com</span>
                                </a>
                            </li>

                            <li className="mb-3">
                                <a
                                    rel="noopener noreferrer"
                                    className="footer-link d-flex align-items-start"
                                >
                                    <MapPin size={18} className="me-2 mt-1 flex-shrink-0" />
                                    <span>

                                        Noida, Uttar Pradesh, India
                                    </span>
                                </a>
                            </li>


                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 foot_mob">
                        <h5 className="footer-title">My Location</h5>
                        <LazyGoogleMap />
                    </div>

                </div>
                <hr className="my-5" />

                <div className="text-center pb-4 position-relative">

                    <p className="mb-0">
                        © 2026 All Rights Reserved | Designed & Developed by{" "}
                        <a
                            href="https://wa.me/918851522173?text=Hi%20Prabhat,%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20project."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="developer-link fw-bold"
                        >
                            Prabhat Rana
                        </a>
                    </p>

                    <button
                        className="btn btn-primary rounded-circle position-absolute top-50 start-50 translate-middle"
                        style={{ background: 'var(--primary)', height: '3em' }}
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                    >
                        <ArrowUp size={18} />
                    </button>

                </div>
            </div>

        </footer>
    );
};

export default Footer2;