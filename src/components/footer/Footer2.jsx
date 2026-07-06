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

import { Link, useNavigate } from "react-router-dom";

import logo from "../../../public/logo.png";

const Footer2 = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);

        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 50);
    };
    const quickLinks = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Projects", link: "/" },
        { name: "Contact", link: "/contact" },
        { name: "Services", link: "/services" },
    ];
    const featuredProjects = [
        {
            name: "QR Code Generator",
            link: "/qrcode",
        },
        {
            name: "Weather App",
            link: "/weather",
        },
        {
            name: "NASA Space Explorer",
            link: "/nasa",
        },

    ];


    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row gy-5">

                    {/* Brand */}
                    <div className="col-6 col-md-6 col-lg-3 foot_mob">
                        {/* <img
                            src={logo}
                            alt="Traviyo"
                            className="footer-logo mb-4"
                        /> */}
                        <img
                            src={logo}
                            alt="Traviyo"
                            className="footer-logo mb-4"
                            onClick={() => handleNavigate("/")}
                            style={{ cursor: "pointer" }}
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
                        <p className="footer-title">Quick Links</p>

                        <ul className="list-unstyled">
                            {quickLinks.map((item) => (

                                <li key={item.name}>
                                    <button
                                        className="footer-link border-0 bg-transparent p-0"
                                        onClick={() => handleNavigate(item.link)}
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Featured Projects */}
                    <div className="col-6 col-md-6 col-lg-2 foot_mob">
                        <p className="footer-title">Featured Projects</p>

                        <ul className="list-unstyled">
                            {featuredProjects.map((project) => (
                                <li key={project.name}>
                                    <Link
                                        to="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavigate(project.link);
                                        }}
                                        className="footer-link"
                                    >
                                        {project.name}
                                    </Link>
                                    {/* <button
                                        className="footer-link"
                                        onClick={() => handleNavigate(project.link)}
                                    >
                                        {project.name}
                                    </button> */}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-6 col-md-6 col-lg-2 foot_mob">
                        <p className="footer-title">Contact Us</p>

                        <ul className="list-unstyled footer-contact">

                            <li className="mb-3">
                                <a href="tel:+919289918991" className="footer-link d-flex align-items-start">
                                    <PhoneCall size={18} className="me-2 mt-1 flex-shrink-0" />
                                    <span>+91 88515 22173</span>
                                </a>
                            </li>

                            <li className="mb-3">
                                <a href="mailto:prabhatrana.dev@gmail.com" className="footer-link d-flex align-items-start">
                                    <Mail size={18} className="me-2 mt-1 flex-shrink-0" />
                                    <span>prabhatrana.dev@<br></br>gmail.com</span>
                                </a>
                            </li>

                            {/* <li className="mb-3">
                                <a
                                    rel="noopener noreferrer"
                                    className="footer-link d-flex align-items-start"
                                >
                                    <MapPin size={18} className="me-2 mt-1 flex-shrink-0" />
                                    <span>

                                        Noida, Uttar Pradesh, India
                                    </span>
                                </a>
                            </li> */}
                            <li className="mb-3">
                                <div className="d-flex align-items-start address">
                                    <MapPin size={18} className="me-2 mt-1 flex-shrink-0" />
                                    <span className="address_content">Noida, Uttar Pradesh, India</span>
                                </div>
                            </li>


                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 foot_mob">
                        <p className="footer-title">My Location</p>
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
                        className="btn btn-primary rounded-circle position-absolute top-50 start-50 translate-middle bottom_button"
                        style={{ background: 'var(--primary)', height: '3em', width: '4%', padding: '14px' }}
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