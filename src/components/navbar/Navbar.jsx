import "./Navbar.css";
import {
    FolderKanban,
    Images,
    Users,
    Phone,
    BriefcaseBusiness,
    Ellipsis,
    Menu,
    Smartphone,
    Download,
    QrCode,
    House,
    Sun,
    Moon,
    Eye,
    ShieldCheck,
    CreditCard
} from "lucide-react";
import { FiPhone } from "react-icons/fi";
import logo from "../../../public/logo.png";
import useScrollDirection from "../../hooks/useScrollDirection";
import { useNavigate, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";




function Navbar({ darkMode, setDarkMode }) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        setOpen(false);
        navigate(path);
    };
    // const handleNavigate = (path) => {
    //     navigate(path);

    //     window.scrollTo({
    //         top: 0,
    //         left: 0,
    //         behavior: "smooth",
    //     });
    // };

    return (
        <nav className="main-navbar navbar navbar-expand-lg bg-white shadow-sm px-3">
            <button
                className="navbar-toggler menu-btn"
                onClick={() => setOpen(!open)}
                aria-label="Toggle Menu"
            >
                <Menu size={28} strokeWidth={2.2} />
            </button>
            {/* Logo */}
            <a className="navbar-brand fw-bold brand-logo" href="/">
                <img src={logo} className="logo_image" />
            </a>

            {/* Desktop Menu (VISIBLE ONLY LG+) */}
            <ul className="navbar-nav mx-auto gap-3 d-none d-lg-flex ">

                <li className="nav-item main_nav">
                    <a className="nav-link" href="/">
                        <House size={18} className="me-2" />
                        Home
                    </a>
                </li>




                <li className="nav-item main_nav">
                    <a className="nav-link" href="/projects">
                        <FolderKanban size={18} className="me-2" />
                        Projects
                    </a>
                </li>


                <li className="nav-item main_nav">
                    <a className="nav-link" href="/about">
                        <Users size={18} className="me-2" />
                        About
                    </a>
                </li>
                <li className="nav-item main_nav">
                    <a className="nav-link" href="/contact">
                        <Phone size={18} className="me-2" />
                        Contact
                    </a>
                </li>
                <li className="nav-item main_nav">
                    <a className="nav-link" href="/gallery">
                        <Images size={18} className="me-2" />
                        Gallery
                    </a>
                </li>

                <li className="nav-item main_nav">
                    <a className="nav-link" href="/services">
                        <BriefcaseBusiness size={18} className="me-2" />
                        Services
                    </a>
                </li>
                <li className="nav-item main_nav">
                    <a className="nav-link" href="/pay">
                        <CreditCard size={18} className="me-2" />
                        Pay Now
                    </a>
                </li>
                <li className="nav-item dropdown main_nav">
                    <a
                        className="nav-link dropdown-toggle d-flex align-items-center"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <Ellipsis size={18} className="me-2" />
                        More
                    </a>

                    <ul className="dropdown-menu shadow border-0 rounded-3">

                        <li>
                            <a className="dropdown-item" href="/blogs">
                                Blogs
                            </a>
                        </li>

                        <li>
                            <a className="dropdown-item" href="/careers">
                                Careers
                            </a>
                        </li>

                        <li>
                            <a className="dropdown-item" href="/faq">
                                FAQ
                            </a>
                        </li>

                        {/* <li>
                            <hr className="dropdown-divider" />
                        </li> */}

                        <li>
                            <a className="dropdown-item" href="/privacy-policy">
                                Privacy Policy
                            </a>
                        </li>

                    </ul>
                </li>


            </ul>
            {/* 
            toggle theme */}
            {/* <button
                className="btn theme-btn"
                aria-label="Toggle Theme"
                onClick={() => setDarkMode(prev => !prev)}
            >
                {darkMode ? (
                    <Moon size={20} />
                ) : (
                    <Sun size={20} />
                )}
            </button> */}

            {/* Desktop Sign In (VISIBLE ONLY LG+) */}
            <div className="d-none d-lg-block">
                <a
                    href="https://drive.google.com/file/d/1sDM388sgdufORMyjtF4nRxLo8JvxkTJi/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn login-btn d-flex align-items-center"
                >
                    <Eye size={18} className="me-2" />
                    View Resume
                </a>
            </div>
            {/* Mobile Right Side */}
            <div className="d-flex align-items-center ms-auto gap-2 d-lg-none">

                {/* Mobile Sign In */}
                {/* <button className="btn login-btn">
                    <Download className="me-1" size={18} />Get App
                </button> */}
                {/* <button className="btn login-btn">
                    <Eye  className="me-1" size={18} />View Resume 
                </button> */}
                <a
                    href="https://drive.google.com/file/d/1sDM388sgdufORMyjtF4nRxLo8JvxkTJi/view"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="btn login-btn">
                        <Eye size={18} className="me-1" />
                        View Resume
                    </button>
                </a>

            </div>

            {/* MOBILE OFFCANVAS MENU */}
            <div className={`mobile-menu ${open ? "open" : ""}`}>

                <button
                    className="close-btn"
                    onClick={() => setOpen(false)}
                >
                    ✕
                </button>

                <ul className="mobile-nav">

                    <li onClick={() => handleNavigate("/contact")}>
                        <Phone size={18} />
                        <span>Contact Us</span>
                    </li>

                    <li onClick={() => handleNavigate("/services")}>
                        <BriefcaseBusiness size={18} />
                        <span>Services</span>
                    </li>
                    <li onClick={() => handleNavigate("/pay")}>
                        <CreditCard size={18} />
                        <span>Pay Now</span>
                    </li>
                    <li onClick={() => handleNavigate("/services")}>
                        <Ellipsis size={18} />
                        <span>More</span>
                    </li>
                </ul>

                <button
                    className="btn login-btn w-100 mt-3"
                    onClick={() => handleNavigate("/admin/login")}
                >
                    Admin Login
                </button>

            </div>

        </nav>
    );
}

export default Navbar;