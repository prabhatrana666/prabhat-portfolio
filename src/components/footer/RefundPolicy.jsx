import React from 'react';
import './CommonLinks.css';
import Footer from './Footer';
import Navbar from '../navbar/Navbar';
import { Phone, Mail } from "lucide-react";

function RefundPolicy() {
    return (
        <>
            <Navbar />
            <section className="refund-policy-section mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="refund-policy-card">
                                {/* Header */}
                                <div className="policy-header">
                                    <h1 className="policy-title">REFUND POLICY</h1>
                                    <div className="official-notice">
                                        <span className="notice-text">OFFICIAL NOTICE</span>
                                    </div>
                                </div>

                                {/* Non-Refundable Badge */}
                                <div className="non-refundable-badge">
                                    <span className="badge-text">STRICTLY</span>
                                    <span className="badge-text-highlight">NON-REFUNDABLE</span>
                                </div>

                                {/* Content */}
                                <div className="policy-content">
                                    <p className="policy-description">
                                        All payments made towards Hello11 Partner Commission via the Razorpay gateway are
                                        <span className="highlight-text"> strictly non-refundable.</span>
                                    </p>

                                    <p className="policy-description">
                                        Ride fares are paid directly to drivers. Hello11 does not collect ride payments from users and
                                        is not responsible for any fare refunds.
                                    </p>
                                </div>

                                {/* Contact Support */}
                                <div className="contact-support">
                                    <h3 className="contact-title">CONTACT SUPPORT</h3>

                                    <div className="contact-details">

                                        <div className="contact-item">
                                            <Phone size={18} className="contact-icon" />
                                            <a
                                                href="tel:+919628911211"
                                                className="contact-link"
                                            >
                                                +91 96289 11211
                                            </a>
                                        </div>

                                        <div className="contact-item">
                                            <Mail size={18} className="contact-icon" />
                                            <a
                                                href="mailto:support@hello11.in"
                                                className="contact-link"
                                            >
                                                support@hello11.in
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    );
}

export default RefundPolicy;