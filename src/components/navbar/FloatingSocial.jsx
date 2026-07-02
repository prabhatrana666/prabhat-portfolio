import { useState } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaGithub, FaLinkedin, FaFacebookF, FaRegMessage } from "react-icons/fa6";
import { HiPlus } from "react-icons/hi";
import { useForm } from "react-hook-form";
import logo from "../../../public/logo1.png";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaCommentDots,
    FaTimes,
} from "react-icons/fa";
import "./FloatingSocial.css";
import { sendTelegramEnquiry } from "../api/telegramApi";

function FloatingSocial() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmitForm = async (e) => {
        e.preventDefault();

        await sendTelegramEnquiry(
            formData,
            setLoading,
            () =>
                setFormData({
                    name: "",
                    email: "",
                    mobile: "",
                    message: "",
                })
        );
    };

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
  <button
                    className="social-btn query message"
                    data-bs-toggle="modal"
                    data-bs-target="#enquiryModal"
                >
                    <FaRegMessage />
                </button>
                <a
                    href="https://github.com/prabhatrana666"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn github"
                >
                    <FaGithub />
                </a>
              
                <a
                    href="https://www.linkedin.com/in/prabhat-rana/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn linkedin"
                >
                    <FaLinkedin />
                </a>


            </div>

            <button
                className={`toggle-btn ${open ? "active" : ""}`}
                onClick={() => setOpen(!open)}
            >
                <HiPlus />
            </button>

            {/* Enquiry Modal */}
            <div
                className="modal fade"
                id="enquiryModal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content portfolio-enquiry-modal">

                        <div className="modal-header portfolio-enquiry-header border-0">

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>

                            <div className="portfolio-enquiry-brand text-center w-100">

                                <img
                                    src={logo}
                                    alt="Company Logo"
                                    className="portfolio-enquiry-logo"
                                />

                                <h4 className="portfolio-enquiry-title">
                                    Enquiry Now
                                </h4>

                                <p className="portfolio-enquiry-subtitle">
                                    We'd love to hear from you. Fill out the form below and we will get back to you shortly.
                                </p>

                            </div>

                        </div>

                        <div className="modal-body">
                            <form onSubmit={handleSubmitForm}>

                                <div className="mb-3 position-relative">
                                    <FaUser className="portfolio-enquiry-icon" />
                                    <input
                                        type="text"
                                        className="form-control portfolio-enquiry-input"
                                        required
                                        placeholder="Full Name"
                                        value={formData.name}
                                        name="name"
                                        onChange={handleChange}
                                        onInput={(e) => {
                                            e.target.value = e.target.value.replace(/[0-9]/g, "");
                                        }}
                                    />
                                </div>

                                <div className="mb-3 position-relative">
                                    <FaEnvelope className="portfolio-enquiry-icon" />
                                    <input
                                        type="email"
                                        className="form-control portfolio-enquiry-input"
                                        value={formData.email}
                                        onChange={handleChange}
                                        name="email"
                                        placeholder="Email Address"
                                        required
                                    />
                                </div>

                                <div className="mb-3 position-relative">
                                    <FaPhone className="portfolio-enquiry-icon" />
                                    <input
                                        type="tel"
                                        className="form-control portfolio-enquiry-input"
                                        placeholder="Mobile Number"
                                        required
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        maxLength={10}
                                        name="mobile"
                                        pattern="[0-9]{10}"
                                        onInput={(e) => {
                                            e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
                                        }}
                                    />
                                </div>

                                <div className="mb-4 position-relative">
                                    <FaCommentDots className="portfolio-enquiry-icon portfolio-enquiry-textarea-icon" />
                                    <textarea
                                        rows="4"
                                        required
                                        name="message"
                                        onChange={handleChange}
                                        value={formData.message}
                                        className="form-control portfolio-enquiry-input portfolio-enquiry-textarea"
                                        placeholder="Write your message..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="portfolio-enquiry-btn w-100"
                                    disabled={loading}
                                >
                                    {loading ? "Sending..." : "Submit Enquiry"}
                                </button>

                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>



    );
}

export default FloatingSocial;