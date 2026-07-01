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
    Trash2,
    ExternalLink,
    FileLock ,
    Shield 
} from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css"
import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
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
                        DELHI'S MOST TRUSTED RIDE
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
                                    <div className="h11f-menu-box" onClick={() => navigate("/")}>
                                        <Home size={22} />
                                        <span className="foot_nav">HOME</span>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="h11f-menu-box" onClick={() => navigate("/rent")}>
                                        <KeyRound size={22} />
                                        <span className="foot_nav">RENT</span>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="h11f-menu-box" onClick={() => navigate("/gallery")}>
                                        <Images size={22} />
                                        <span className="foot_nav">GALLERY</span>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="h11f-menu-box" onClick={() => navigate("/about")}>
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
                                    <h6>Delhi, India</h6>
                                </div>
                            </div>

                            <div className="h11f-contact-box">
                                <Phone />
                                <div>
                                    <small>CALL 24/7</small>
                                    <h6>+91 96289 11211</h6>
                                </div>
                            </div>

                            <div className="h11f-contact-box">
                                <Mail />
                                <div>
                                    <small>EMAIL SUPPORT</small>
                                    <h6>support@hello11.in</h6>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* App */}
                    <div className="col-lg-4">
                        <div className="h11f-card">

                            <h5 className="h11f-heading">
                                <span></span> GET THE APP
                            </h5>

                            <a href="/" className="h11f-app-btn">
                                <div>
                                    <small>AVAILABLE ON</small>
                                    <h4>PLAY STORE</h4>
                                </div>

                                <Download />
                            </a>

                            <div className="mt-5">
                                <small className="h11f-social-label">
                                    CONNECT SOCIALLY
                                </small>

                                <div className="d-flex gap-3 mt-3">
                                    <a href="/" className="h11f-social-btn">
                                        <FaFacebookF size={20} />
                                    </a>

                                    <a href="/" className="h11f-social-btn">
                                        <  FaWhatsapp
                                            size={20} />
                                    </a>

                                    <a href="https://instagram.com/yourusername" className="h11f-social-btn">
                                        <FaInstagram size={20} />
                                    </a>
                                    <a href="https://x.com/yourusername" className="h11f-social-btn">
                                        <FaXTwitter size={20} />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Policies */}
                <div className="h11f-policy-wrap">

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
                        <FileLock  size={16} color="var(--primary)" />
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
                        © {new Date().getFullYear()} HELLO11. BUILT FOR THE ELITE.
                    </p>

                    <div className="h11f-dev">
                        DEVELOPED & DESIGNED BY

                        <a href="https://prabhatrana.netlify.app/" target="_blank">
                            PRABHAT RANA
                            <ExternalLink size={14} />
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
}