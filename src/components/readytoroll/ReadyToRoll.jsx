import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ReadyToRoll.css"
import Swal from "sweetalert2";
import {
    User,
    MapPin,
    Navigation,
    CalendarDays,
    MessageCircle,
    Phone,
    ArrowRight,
    ShieldCheck,
    Code,
    Mail,
    Layers,
    MessageSquare,
    Zap,
    Car,
    Headphones,
} from "lucide-react";
import { text } from "framer-motion/client";

export default function ReadyToRoll() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        remarks: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // console.log(import.meta.env);

    const BOT_TOKEN = "8778289101:AAH4I9bcqMGMOg7uQS_-FjbhmNle0JFn4_w";
    const CHAT_ID = "1704641369";

    // console.log(BOT_TOKEN);
    // console.log(CHAT_ID);

    const handleTelegramBooking = async () => {
        if (
            !formData.name ||
            !formData.phone ||
            !formData.email ||
            !formData.remarks
        ) {
            Swal.fire({
                icon: "warning",
                title: "Missing Fields",
                text: "Please fill all fields.",
            });
            return;
        }
        setIsSubmitting(true);

        const message = `
🚀 <b>New Request From Home Page</b>

👤 <b>Name:</b> ${formData.name}
📍 <b>Phone:</b> ${formData.phone}
🎯 <b>Email:</b> ${formData.email}
📝 <b>Remarks:</b> ${formData.remarks}
`;

        try {
            const response = await fetch(
                `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        chat_id: CHAT_ID,
                        text: message,
                        parse_mode: "HTML",
                    }),
                }
            );

            const data = await response.json();

            if (data.ok) {
                Swal.fire({
                    icon: "success",
                    title: "Request Sent!",
                    text: "Thank you for visiting my portfolio! I'll connect with you shortly.",
                    confirmButtonText: "OK",
                });

                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    remarks: "",
                });
            } else {
                throw new Error(data.description);
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Failed",
                text: "Something went wrong. Please try again.",
            });

            console.error(error);
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (
        <>
            <section className="rtr-section py-5 mt-5">
                <div className="container">

                    <div className="text-center mb-5">
                        <p className="rtr-subtitle">
                            TURN IDEAS INTO REALITY
                        </p>

                        <h2 className="rtr-title">
                            LET'S <span>BUILD IT</span>
                        </h2>
                    </div>

                    <div className="rtr-card p-4 p-lg-5">

                        <div className="row g-4 align-items-center">

                            <div className="col-lg">
                                <div className="rtr-input-wrapper">
                                    <User size={18} className="rtr-input-icon" />
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/[0-9]/g, '');
                                            handleChange({
                                                target: {
                                                    name: 'name',
                                                    value: value
                                                }
                                            });
                                        }}
                                        className="rtr-input"
                                    />
                                </div>
                            </div>

                            <div className="col-lg">
                                <div className="rtr-input-wrapper">
                                    <Phone size={18} className="rtr-input-icon" />
                                    {/* <input
                                        type="tel"
                                        name="phone"
                                        required
                                        pattern="[0-9]{10}"
                                        placeholder="Your Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="rtr-input"
                                    /> */}
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="Your Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="rtr-input"
                                        pattern="[0-9]{10}"
                                        maxLength={10}
                                        inputMode="numeric"
                                        title="Please enter a valid 10-digit phone number"
                                    />
                                </div>
                            </div>

                            <div className="col-lg">
                                <div className="rtr-input-wrapper">
                                    <Mail size={18} className="rtr-input-icon" />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="rtr-input"
                                    />
                                </div>
                            </div>

                            <div className="col-lg">
                                <div className="rtr-input-wrapper">
                                    <MessageSquare size={18} className="rtr-input-icon" />
                                    <input
                                        type="text"
                                        name="remarks"
                                        placeholder="Enter Remarks..."
                                        value={formData.remarks}
                                        onChange={handleChange}
                                        className="rtr-input"
                                    />
                                </div>
                            </div>

                            {/* <div className="col-lg-auto">
                                <button
                                    onClick={handleTelegramBooking}
                                    className="rtr-book-btn"
                                >
                                    Connect Now
                                    <ArrowRight size={18} />
                                </button>
                            </div> */}
                            <div className="col-lg-auto">
                                <button
                                    onClick={handleTelegramBooking}
                                    className="rtr-book-btn"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span
                                                className="spinner-border spinner-border-sm me-2"
                                                role="status"
                                                aria-hidden="true"
                                            ></span>
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            Connect Now
                                            <ArrowRight className="rtr-arrow" size={18} />
                                        </>
                                    )}
                                </button>
                            </div>

                        </div>

                        <div className="rtr-features-row">

                            <div className="rtr-feature-item">
                                <Code size={16} />
                                Clean Code
                            </div>

                            <div className="rtr-feature-item">
                                <Layers size={16} />
                                Scalable UI
                            </div>

                            <div className="rtr-feature-item">
                                <Zap size={16} />
                                Fast Performance
                            </div>

                        </div>

                    </div>

                    <div className="rtr-instant-card mt-5 p-5 sddd">

                        <div className="text-center position-relative">

                            <p className="rtr-subtitle">
                                DON'T WANT TO WAIT?
                            </p>

                            <h3 className="rtr-instant-title">
                                CONNECT <span>INSTANTLY</span>
                            </h3>

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

                </div>
            </section>
        </>

    );
}