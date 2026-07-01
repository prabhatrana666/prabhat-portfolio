import React from 'react';
import './CommonLinks.css';
import Footer from './Footer';
import Navbar from '../navbar/Navbar';
import { Phone, Mail, Shield, CheckCircle, Eye, Lock, UserCheck } from 'lucide-react';

function PrivacyPolicy() {
    return (
        <>
            <Navbar />

            <section className="privacy-policy-section mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="privacy-policy-card">
                                {/* Header */}
                                <div className="policy-header">
                                    <h1 className="policy-title">PRIVACY POLICY</h1>
                                    <div className="official-notice">
                                        <span className="notice-text">OFFICIAL NOTICE</span>
                                    </div>
                                </div>

                                {/* Privacy Badge */}
                                <div className="privacy-badge">
                                    {/* <Shield size={40} className="shield-icon" /> */}
                                    <span className="badge-text">YOUR DATA IS</span>
                                    <span className="badge-text-highlight">SAFE & SECURE</span>
                                </div>

                                {/* Content */}
                                <div className="policy-content">
                                    <p className="policy-description">
                                        At Hello11, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
                                    </p>

                                    <div className="policy-list">
                                        <div className="policy-item">
                                            <Eye size={18} className="policy-icon" />
                                            <div>
                                                <h4 className="policy-item-title">Information We Collect</h4>
                                                <p className="policy-item-text">
                                                    We collect basic information such as name, contact details, location, and ride history to provide and improve our services.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="policy-item">
                                            <Lock size={18} className="policy-icon" />
                                            <div>
                                                <h4 className="policy-item-title">Data Security</h4>
                                                <p className="policy-item-text">
                                                    Your data is encrypted and stored securely. We use industry-standard protocols to protect your information from unauthorized access.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="policy-item">
                                            <UserCheck size={18} className="policy-icon" />
                                            <div>
                                                <h4 className="policy-item-title">Your Rights</h4>
                                                <p className="policy-item-text">
                                                    You have the right to access, modify, or delete your personal data at any time. Contact our support team for assistance.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="policy-note">
                                        <p className="note-text">
                                            <strong>Note:</strong> We do not share your personal information with third parties without your explicit consent, except as required by law.
                                        </p>
                                    </div>

                                    <div className="policy-update">
                                        <p className="update-text">
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

export default PrivacyPolicy;