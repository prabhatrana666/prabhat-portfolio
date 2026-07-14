import Navbar from "../../components/navbar/Navbar";
import "./AdminLogin.css"
import Footer2 from "../footer/Footer2";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
    ShieldCheck,
    LockKeyhole,
    BriefcaseBusiness,
    FolderKanban,
    Users,
    Database,
    Activity,
    CheckCircle2,
} from "lucide-react";
import { Mail, BarChart3, Shield } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import upi from "../../../public/logo.png"
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";

function AdminLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showOTP, setShowOTP] = useState(false);
    const [otp, setOtp] = useState("");
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user || user.email !== "prabhatrana2024@gmail.com") {
                navigate("/admin");
            }
        });

        return unsubscribe;
    }, []);
    // Modify your handleForgotPassword
    const handleForgotPassword = async () => {
        console.log("🔍 Forgot password clicked");
        console.log("📧 Email entered:", email);

        if (!email) {
            console.log("❌ No email provided");
            toast.error("Please enter your email address first");
            return;
        }

        try {
            console.log("📤 Sending password reset email to:", email);
            await sendPasswordResetEmail(auth, email);
            console.log("✅ Email sent successfully!");
            toast.success("Password reset email sent! Check your inbox.");
        } catch (error) {
            console.log("❌ Error details:", error);
            console.log("❌ Error code:", error.code);
            console.log("❌ Error message:", error.message);

            if (error.code === "auth/user-not-found") {
                toast.error("No account found with this email");
            } else if (error.code === "auth/invalid-email") {
                toast.error("Invalid email format");
            } else {
                toast.error(error.message);
            }
        }
    };

    const handleSendOTP = async () => {
        if (!email) {
            toast.error("Please enter your email address");
            return;
        }

        try {
            // Generate 6-digit OTP
            const generatedOTP = Math.floor(100000 + Math.random() * 900000);

            // Store OTP temporarily (you'll need to implement backend verification)
            sessionStorage.setItem("resetOTP", generatedOTP);
            sessionStorage.setItem("resetEmail", email);

            // In real scenario, send email via backend API
            toast.success(`OTP sent to ${email} 📧`);
            setShowOTP(true);

        } catch (error) {
            toast.error("Failed to send OTP. Please try again.");
        }
    };

    // check email and password

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;

            if (user.email === "prabhatrana2024@gmail.com") {
                toast.success("Admin Login Successful ✅");

                setTimeout(() => {
                    navigate("/dashboard");
                }, 1000);
            } else {
                toast.error("Not authorized user ❌");
            }

        } catch (error) {
            console.log(error);
            console.log(error.code);
            console.log(error.message);

            toast.error(error.message);
        }
    };

    // Motion Effect

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 60,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };
    return (
        <>
            <Navbar />
            <motion.section
                className="admin-login-section py-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
            >
                <div className="container py-5">

                    <div className="row admin-login-wrapper g-0">

                        {/* LEFT */}

                        <div className="col-lg-5 admin-left d-none d-lg-block">

                            <div className="admin-left-content">

                                <div className="admin-badge">
                                    🔐 Secure Admin Portal
                                </div>

                                <h2 className="admin-title">
                                    Manage Your Portfolio
                                    <span>With Confidence</span>
                                </h2>

                                <p className="admin-description">
                                    Access your dashboard to manage projects,
                                    certificates, resume, payments, messages and
                                    portfolio content securely.
                                </p>

                                <div className="admin-feature">

                                    <div className="feature-box">
                                        <ShieldCheck size={22} />
                                        <div>
                                            <h6>Secure Authentication</h6>
                                            <p>Protected administrator access.</p>
                                        </div>
                                    </div>

                                    <div className="feature-box">
                                        <FolderKanban size={22} />
                                        <div>
                                            <h6>Project Management</h6>
                                            <p>Update portfolio instantly.</p>
                                        </div>
                                    </div>

                                    <div className="feature-box d-none">
                                        <Mail size={22} />
                                        <div>
                                            <h6>Contact Requests</h6>
                                            <p>Manage client enquiries.</p>
                                        </div>
                                    </div>

                                    <div className="feature-box d-none">
                                        <BarChart3 size={22} />
                                        <div>
                                            <h6>Dashboard Analytics</h6>
                                            <p>Monitor portfolio activity.</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="col-lg-7">

                            <div className="login-card">

                                <div className="text-center">

                                    <div className="login-logo">
                                        <img src={upi} style={{ height: '83px', width: '83px', borderRadius: '50%' }} />
                                    </div>

                                    <h2 className="login-title">
                                        Administrator Login
                                    </h2>

                                    <p className="login-subtitle">
                                        Authorized access only.
                                    </p>

                                    <div className="admin-warning">
                                        ⚠ Unauthorized access is strictly prohibited. This portal is reserved exclusively for the website administrator.
                                    </div>

                                </div>

                                <form className="mt-4" onSubmit={handleLogin}>

                                    <div className="mb-4">

                                        <label>Email Address</label>

                                        <div className="input-group custom-input mt-2">

                                            <span className="input-group-text">
                                                <Mail size={18} />
                                            </span>

                                            <input
                                                type="email"
                                                className="form-control"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter admin email"
                                                required
                                            />

                                        </div>

                                    </div>
                                    <label>Password</label>
                                    <div className="input-group custom-input mt-2">

                                        <span className="input-group-text">
                                            <LockKeyhole size={18} />
                                        </span>

                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="form-control border-end-0 adminlogins"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter password"
                                            required
                                        />

                                        <span
                                            className="input-group-text password-toggle"
                                            onClick={() => setShowPassword(!showPassword)}
                                            role="button"
                                        >
                                            {showPassword ? (
                                                <EyeOff size={18} />
                                            ) : (
                                                <Eye size={18} />
                                            )}
                                        </span>

                                    </div>

                                    <div className="d-flex justify-content-end align-items-center mb-4 mt-2">

                                        <div className="form-check d-none">

                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                            />

                                            <label className="form-check-label">
                                                Remember Me
                                            </label>

                                        </div>

                                        <a href="/admin"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleForgotPassword();
                                            }}
                                            className="text-white text-decoration-none">
                                            Forgot Password?
                                        </a>

                                    </div>

                                    <button
                                        className="btn login-btn-custom w-100"
                                    >
                                        Sign In Securely
                                    </button>

                                </form>

                                <div className="security-note d-none">

                                    <ShieldCheck size={18} />

                                    Protected by encrypted authentication.
                                    This login is reserved exclusively for the website administrator.

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </motion.section>

            <Footer2 />
        </>
    );
}

export default AdminLogin;