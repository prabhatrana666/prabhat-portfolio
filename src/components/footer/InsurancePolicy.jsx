import React from 'react';
import './CommonLinks.css';
import Footer from './Footer';
import Navbar from '../navbar/Navbar';
import { Phone, Mail, Shield} from "lucide-react";
import { AlertTriangle, CheckCircle } from 'lucide-react';
function InsurancePolicy() {
    return (
        <>
            <Navbar />
            <section className="insurance-policy-section mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="insurance-policy-card">
                                {/* Header */}
                                <div className="policy-header">
                                    <h1 className="policy-title">INSURANCE POLICY</h1>
                                    <div className="official-notice">
                                        <span className="notice-text">OFFICIAL NOTICE</span>
                                    </div>
                                </div>

                                {/* Insurance Badge */}
                                <div className="insurance-badge">
                                    {/* <Shield size={40} className="shield-icon" /> */}
                                    <span className="badge-text">FULLY</span>
                                    <span className="badge-text-highlight">INSURED</span>
                                </div>

                                {/* Content */}
                                <div className="policy-content">
                                    <p className="policy-description">
                                        All Hello11 vehicles are <span className="highlight-text">fully insured</span> with comprehensive coverage including:
                                    </p>

                                    <ul className="policy-list">
                                        <li>
                                            <CheckCircle size={18} className="list-icon" />
                                            <span>Third-party liability insurance</span>
                                        </li>
                                        <li>
                                            <CheckCircle size={18} className="list-icon" />
                                            <span>Passenger accident coverage up to ₹15 Lakhs</span>
                                        </li>
                                        <li>
                                            <CheckCircle size={18} className="list-icon" />
                                            <span>Vehicle damage and theft protection</span>
                                        </li>
                                        <li>
                                            <CheckCircle size={18} className="list-icon" />
                                            <span>24/7 roadside assistance</span>
                                        </li>
                                    </ul>

                                    <div className="policy-note">
                                        <AlertTriangle size={18} className="note-icon" />
                                        <p className="note-text">
                                            In case of any accident or damage, please contact our support team immediately for assistance with the insurance claim process.
                                        </p>
                                    </div>
                                </div>

                                {/* Contact Support */}
                                <div className="contact-support">
                                    <h3 className="contact-title">CONTACT SUPPORT</h3>

                                    <div className="contact-details">
                                        <div className="contact-item">
                                            <Phone size={18} className="contact-icon" />
                                            <a href="tel:+919628911211" className="contact-link">
                                                +91 96289 11211
                                            </a>
                                        </div>

                                        <div className="contact-item">
                                            <Mail size={18} className="contact-icon" />
                                            <a href="mailto:support@hello11.in" className="contact-link">
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
    )

}

export default InsurancePolicy;