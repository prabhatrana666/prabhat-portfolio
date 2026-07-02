import {
    Home,
    KeyRound,
    Images,
    User,
    MapPin,
    Phone,
    Mail,
    Download,
    MessageCircle,
    FileText,
    ShieldCheck,
    RotateCcw,
    BriefcaseBusiness,
    Trash2,
    ExternalLink,
    FileLock,
    Shield
} from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaYoutube
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css"
import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LazyGoogleMap from "./LazyGoogleMap";

export default function Footer() {
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth", // or "auto"
        });
    };
    return (
        <footer className="h11f-footer">
            <div className="container">

                {/* Logo */}
                <div className="text-center mb-5">
                    <img
                        src={logo}
                        alt="logo"
                        className="h11f-logo"
                    />

                    <div className="h11f-divider"></div>

                    <p className="h11f-tagline">
                        YOUR TRUSTED PUPPY PARTNER SINCE 2019
                    </p>
                </div>

                {/* Cards */}
                <div className="row g-4">

                    {/* Explore */}
                    <div className="col-lg-4">
                        <div className="h11f-card">

                            <h5 className="h11f-heading">
                                <span></span> EXPLORE
                            </h5>

                            <div className="row g-3">

                                <div className="col-6">
                                    <div className="h11f-menu-box" onClick={() => navigateTo("/")}>
                                        <Home size={22} />
                                        <span className="foot_nav">HOME</span>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="h11f-menu-box" onClick={() => navigateTo("/rent")}>
                                        <BriefcaseBusiness size={22} />
                                        <span className="foot_nav">SERVICES</span>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="h11f-menu-box" onClick={() => navigateTo("/gallery")}>
                                        <Images size={22} />
                                        <span className="foot_nav">GALLERY</span>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="h11f-menu-box" onClick={() => navigateTo("/about")}>
                                        <User size={22} />
                                        <span className="foot_nav">ABOUT</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Reach Us */}
                    <div className="col-lg-4">
                        <div className="h11f-card">

                            <h5 className="h11f-heading">
                                <span></span> REACH US
                            </h5>

                            <div className="h11f-contact-box">
                                <MapPin />
                                <div>
                                    <small>LOCATION</small>
                                    <h6>Sarvodaya Nagar, Allahpur, Prayagraj</h6>
                                </div>
                            </div>

                            <div className="h11f-contact-box"
                                onClick={() => window.location.href = "tel:+918840358106"}
                            >
                                <Phone />
                                <div>
                                    <small>CALL 24/7</small>
                                    <h6>+91 88403 58106</h6>
                                </div>
                            </div>

                            <div className="h11f-contact-box"
                                onClick={() => window.location.href = "mailto:garimapriyanshu71095@gmail.com"}
                            >
                                <Mail />
                                <div>
                                    <small>EMAIL SUPPORT</small>
                                    <h6>garimapriyanshu71095@gmail.com</h6>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* App */}
                    <div className="col-lg-4">
                        <div className="h11f-card">

                            {/* <h5 className="h11f-heading">
                                <span></span> GET THE APP
                            </h5> */}
                            <h5 className="h11f-heading">
                                <span></span> FIND US
                            </h5>
                            {/* 
                            <div className="h11f-map">
                                <iframe
                                    title="Cherry Paws Kennel Location"
                                    src="https://www.google.com/maps?q=Sarvodaya+Nagar,+Allahpur,+Prayagraj&output=embed"
                                    width="100%"
                                    height="220"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div> */}
                            <LazyGoogleMap />
                            <a href="/" className="h11f-app-btn d-none">
                                <div >
                                    <small>AVAILABLE ON</small>
                                    <h4>PLAY STORE</h4>
                                </div>

                                <Download />
                            </a>

                            <div className="mt-5">
                                <small className="h11f-social-label">
                                    CONNECT US
                                </small>

                                <div className="d-flex gap-3 mt-3">

                                    <a
                                        href="https://wa.me/918840358106"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h11f-social-btn"
                                        aria-label="Chat with us on WhatsApp"
                                    >
                                        <FaWhatsapp size={20} aria-hidden="true" />
                                    </a>

                                    <a
                                        href="https://www.instagram.com/priyanshu_yadav588/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h11f-social-btn"
                                        aria-label="Visit our Instagram profile"
                                    >
                                        <FaInstagram size={20} aria-hidden="true" />
                                    </a>

                                    <a
                                        href="https://www.youtube.com/@cherrypawskennel2019?app=desktop&fbclid=PAb21jcASrmp1leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaeN6xJEamFqRQ_QpnPCjgkWVvMD4JBIf4-7lp2MI_D4TDznfG0MvQxzAdpO6g_aem_TQRJkrGq8fkwkE7822hUsw"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h11f-social-btn"
                                        aria-label="Visit our YouTube channel"
                                    >
                                        <FaYoutube size={20} aria-hidden="true" />
                                    </a>

                                    <a
                                        href="https://www.facebook.com/61576528201218"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h11f-social-btn"
                                        aria-label="Visit our Facebook page"
                                    >
                                        <FaFacebookF size={20} aria-hidden="true" />
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Policies */}
                <div className="h11f-policy-wrap d-none">

                    <Link
                        to="/terms"
                        className="h11f-policy-btn"
                    >
                        <FileText size={16} color="var(--primary)" />
                        TERMS & CONDITIONS
                    </Link>
                    <Link
                        to="/privacy"
                        className="h11f-policy-btn"
                    >
                        <FileLock size={16} color="var(--primary)" />
                        PRIVACY POLICY
                    </Link>
                    <Link
                        to="/refund"
                        className="h11f-policy-btn"
                    >
                        <RotateCcw size={16} color="var(--primary)" />
                        REFUND POLICY
                    </Link>

                    <Link
                        to="/insurance"
                        className="h11f-policy-btn"
                    >
                        <ShieldCheck size={16} color="var(--primary)" />
                        INSURANCE POLICY
                    </Link>


                    <div className="h11f-status d-none">
                        <span></span>
                        SYSTEMS LIVE
                    </div>

                </div>

                {/* Bottom */}
                <div className="h11f-bottom">

                    <p>
                        © {new Date().getFullYear()} Cherry Paws Kennel. Owned by Priyanshu Yadav.
                    </p>
                    <div className="h11f-dev">
                        DEVELOPED & DESIGNED BY

                        <a
                            href="https://wa.me/918851522173"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            PRABHAT RANA
                            <ExternalLink size={14} />
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
}