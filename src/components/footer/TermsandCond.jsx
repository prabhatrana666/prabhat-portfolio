import React from 'react';
import './CommonLinks.css';
import Footer from './Footer';
import Navbar from '../navbar/Navbar';
import { Phone, Mail, FileText, CheckCircle, AlertCircle, Info } from 'lucide-react';

function TermsandCond() {
    return (
        <>
            <Navbar />
            <section className="terms-section mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="terms-card">
                                {/* Header */}
                                <div className="policy-header">
                                    <h1 className="policy-title">TERMS & CONDITIONS</h1>
                                    <div className="official-notice">
                                        <span className="notice-text">OFFICIAL NOTICE</span>
                                    </div>
                                </div>

                                {/* Terms Badge */}
                                <div className="terms-badge">
                                    {/* <FileText size={40} className="terms-icon" /> */}
                                    <span className="badge-text">PLEASE READ</span>
                                    <span className="badge-text-highlight">CAREFULLY</span>
                                </div>

                                {/* Content */}
                                <div className="policy-content">
                                    <p className="policy-description">
                                        By using Hello11 services, you agree to the following terms and conditions. Please read them carefully before proceeding.
                                    </p>

                                    <div className="terms-list">
                                        <div className="terms-item">
                                            <CheckCircle size={18} className="terms-item-icon" />
                                            <div>
                                                <h4 className="terms-item-title">Service Agreement</h4>
                                                <p className="terms-item-text">
                                                    Hello11 provides transportation services through verified partners. All bookings are subject to availability and driver confirmation.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="terms-item">
                                            <CheckCircle size={18} className="terms-item-icon" />
                                            <div>
                                                <h4 className="terms-item-title">Payment Terms</h4>
                                                <p className="terms-item-text">
                                                    Payments for rides are made directly to drivers. Hello11 charges a partner commission which is non-refundable as per our refund policy.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="terms-item">
                                            <CheckCircle size={18} className="terms-item-icon" />
                                            <div>
                                                <h4 className="terms-item-title">User Responsibilities</h4>
                                                <p className="terms-item-text">
                                                    Users must provide accurate information, treat drivers with respect, and comply with all applicable laws during the ride.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="terms-item">
                                            <CheckCircle size={18} className="terms-item-icon" />
                                            <div>
                                                <h4 className="terms-item-title">Cancellation Policy</h4>
                                                <p className="terms-item-text">
                                                    Cancellations made within 15 minutes of booking may incur a cancellation fee. Please refer to our cancellation policy for details.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="terms-note">
                                        <AlertCircle size={18} className="terms-note-icon" />
                                        <p className="terms-note-text">
                                            <strong>Important:</strong> These terms are subject to change without prior notice. Continued use of our services constitutes acceptance of the updated terms.
                                        </p>
                                    </div>

                                    <div className="terms-update">
                                        <Info size={16} className="terms-update-icon" />
                                        <p className="terms-update-text">
                                            Last Updated: {new Date().toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
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

export default TermsandCond;