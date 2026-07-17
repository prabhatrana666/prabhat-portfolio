import Navbar from "../../components/navbar/Navbar";
import "./PayNow.css"
import Footer2 from "../footer/Footer2";
import { useState } from "react";
import { motion } from "framer-motion";

import {
    Building2,
    QrCode,
    CreditCard,
    Globe,
    Copy,
    CheckCircle2,
    ShieldCheck,
} from "lucide-react";
import toast from "react-hot-toast";
import upi from "../../assets/upi.png"
import SEO from "../seo/SEO";

function PayNow() {
    const [activeTab, setActiveTab] = useState("razorpay");

    const copyText = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success("Copied to clipboard!", {
                duration: 2000,
            });
        } catch (error) {
            toast.error("Failed to copy!");
        }
    };
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
            y: 60,
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

    const scaleIn = {
        hidden: {
            opacity: 0,
            scale: 0.9,
        },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };
    return (
        <>
            <SEO
                title="Secure Payment | Hire Prabhat Rana | Frontend Developer"
                description="Make a secure online payment to Prabhat Rana for frontend development services, React.js projects, React Native applications, MERN Stack solutions, website development, and freelance web development services."
                keywords="Secure Payment, Pay Prabhat Rana, Frontend Developer Payment, React.js Development Services, React Native Developer, MERN Stack Developer, Website Development Payment, Freelance Web Developer, Online Payment, Web Development Services"
                canonicalUrl="/pay"
                type="website"
                image="/logo.png"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "@id": "https://prabhatrana.online/pay#payment",

                    "url": "https://prabhatrana.online/pay",
                    "name": "Secure Payment | Prabhat Rana",
                    "description":
                        "Secure payment page for frontend development services, React.js projects, React Native applications, MERN Stack solutions, website development, and freelance web development.",

                    "mainEntity": {
                        "@type": "Person",
                        "@id": "https://prabhatrana.online/#person",
                        "name": "Prabhat Rana",
                        "jobTitle": "Frontend Developer",
                        "url": "https://prabhatrana.online",
                        "sameAs": [
                            "https://github.com/prabhatrana666",
                            "https://www.linkedin.com/in/prabhat-rana"
                        ]
                    },

                    "isPartOf": {
                        "@type": "WebSite",
                        "@id": "https://prabhatrana.online/#website"
                    }
                }}
            />
            <Navbar />
            <motion.section
                className="pay-section py-5"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >


                <div className="container">

                    <motion.div
                        className="pay-header text-center"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >

                        <motion.p
                            className="section-subtitle payment_title"
                            variants={fadeUp}
                        >
                            PAYMENT
                        </motion.p>

                        <motion.h2
                            className="section-title payment_section_title"
                            variants={fadeUp}
                        >
                            Secure <span>Payment</span>
                        </motion.h2>

                        <motion.p
                            className="section-description payment_section_description"
                            variants={fadeUp}
                        >
                            Choose your preferred payment method below.
                            Every transaction is processed securely.
                        </motion.p>

                    </motion.div>
                    {/* Tabs */}

                    <div className="payment-tabs mt-5">
                        <button
                            className={activeTab === "razorpay" ? "active" : ""}
                            onClick={() => setActiveTab("razorpay")}
                        >
                            <CreditCard size={18} />
                            Razorpay
                        </button>
                        <button
                            className={activeTab === "bank" ? "active" : ""}
                            onClick={() => setActiveTab("bank")}
                        >
                            <Building2 size={18} />
                            Bank Transfer
                        </button>

                        <button
                            className={activeTab === "upi" ? "active" : ""}
                            onClick={() => setActiveTab("upi")}
                        >
                            <QrCode size={18} />
                            UPI QR
                        </button>

                        <button
                            className={activeTab === "paypal" ? "active" : ""}
                            onClick={() => setActiveTab("paypal")}
                        >
                            <Globe size={18} />
                            PayPal
                        </button>

                    </div>

                    {/* Bank */}

                    {activeTab === "bank" && (

                        <div className="payment-card">

                            <h4 className="text-white">
                                Bank Transfer Details
                            </h4>

                            <div className="payment-row">
                                <span>Account Holder</span>

                                <div>
                                    Prabhat Rana
                                    <Copy
                                        size={18}
                                        onClick={() => copyText(" Prabhat Rana")}
                                    />
                                </div>
                            </div>

                            <div className="payment-row">
                                <span>Account Number</span>

                                <div>
                                    77648100002755
                                    <Copy
                                        size={18}
                                        onClick={() => copyText("123456789012")}
                                    />
                                </div>
                            </div>

                            <div className="payment-row">
                                <span>IFSC Code</span>

                                <div>
                                    BARB0VJSENO
                                    <Copy
                                        size={18}
                                        onClick={() => copyText("SBIN0001234")}
                                    />
                                </div>
                            </div>

                            <div className="payment-row">
                                <span>Bank</span>

                                <div>
                                    Bank of Baroda
                                </div>
                            </div>

                        </div>

                    )}

                    {/* UPI */}

                    {activeTab === "upi" && (

                        <div className="payment-card text-center">

                            <img
                                src={upi}
                                alt="UPI QR"
                                className="upi-image"
                            />

                            <h5 className="mt-4 text-white">
                                UPI ID
                            </h5>

                            <div className="upi-id">

                                6396551799-2@axl

                                <Copy
                                    size={18}
                                    className="copytext"
                                    onClick={() => copyText("yourname@okhdfcbank")}
                                />

                            </div>

                        </div>

                    )}

                    {/* PayPal */}

                    {activeTab === "paypal" && (

                        <div className="payment-card text-center">

                            <Globe
                                size={60}
                                className="paypal-icon"
                            />

                            <h4 className="mt-3 text-white">
                                PayPal
                            </h4>

                            <p className="text-white">
                                paypal.me/kqhwh

                                <Copy
                                    size={18}
                                    className="copytext ms-3"
                                    onClick={() => copyText("paypal.me/kqhwh")}
                                />
                            </p>

                            <button
                                className="btn btn-primary"
                                onClick={() =>
                                    window.open(
                                        "https://paypal.me/kqhwh",
                                        "_blank"
                                    )
                                }
                            >
                                Pay with PayPal
                            </button>

                        </div>

                    )}

                    {/* Rozorpay */}

                    {activeTab === "razorpay" && (

                        <div className="payment-card text-center">

                            <CreditCard 
                                size={60}
                                className="paypal-icon"
                            />

                            <h4 className="mt-3 text-white">
                                Razorpay
                            </h4>

                            <p className="text-white">
                                razorpay.me/@prabhatranadev

                                <Copy
                                    size={18}
                                    className="copytext ms-3"
                                    onClick={() => copyText("razorpay.me/@prabhatranadev")}
                                />
                            </p>

                            <button
                                className="btn btn-primary"
                                onClick={() =>
                                    window.open(
                                        "https://razorpay.me/@prabhatranadev",
                                        "_blank"
                                    )
                                }
                            >
                                Pay with Razorpay
                            </button>

                        </div>

                    )}

                    <div className="secure-info">
                        <CheckCircle2 size={18} className="remarks" />
                        <span>Please mention your Project Name or Invoice ID in the payment remarks.</span>
                    </div>
                </div>



            </motion.section>

            <Footer2 />
        </>
    );
}

export default PayNow;