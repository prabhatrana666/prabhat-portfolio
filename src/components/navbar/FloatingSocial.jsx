import { useState } from "react";
import { FaWhatsapp, FaInstagram} from "react-icons/fa";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { HiPlus } from "react-icons/hi";

import "./FloatingSocial.css";

function FloatingSocial() {
    const [open, setOpen] = useState(false);

    return (
        <div className="floating-social">

            <div className={`social-links ${open ? "show" : ""}`}>
                <a
                    href="https://wa.me/918851522173"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn whatsapp"
                >
                    <FaWhatsapp />
                </a>

                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn instagram"
                >
                    <FaInstagram />
                </a>

                <a
                    href="https://x.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn twitter"
                >
                    <FaXTwitter />
                </a>

                <a
                    href="https://facebook.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn facebook"
                >
                    <FaFacebookF />
                </a>
            </div>

            <button
                className={`toggle-btn ${open ? "active" : ""}`}
                onClick={() => setOpen(!open)}
            >
                <HiPlus />
            </button>

        </div>
    );
}

export default FloatingSocial;