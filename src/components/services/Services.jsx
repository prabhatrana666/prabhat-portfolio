import Navbar from "../../components/navbar/Navbar";
import "./Services.css"
import Footer2 from "../footer/Footer2";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    Rocket,
    CalendarDays,
    Send,
    MessageSquare,
    ShieldCheck,
    Headset,
    Clock3,
    Headphones,
    Lightbulb,
    ClipboardList,
    PencilRuler,
    Code2,
    Bug,
    RocketIcon,
    CheckCircle2,
    Cpu,
    Database,
    GitBranch,
    Globe,
    Layers3,
    Smartphone,
    ServerCog,
    LockKeyhole,
    Workflow,
} from "lucide-react";
import {
    Building2,
    QrCode,
    Copy,
    User,
    Mail,
    PhoneCall,
    BriefcaseBusiness,
    IndianRupee
} from "lucide-react";
import Swal from "sweetalert2";
import logo from '../../../public/logo.png'
import {
    MonitorSmartphone,
    Gauge,
    ArrowRight,
} from "lucide-react";
import toast from "react-hot-toast";
import upi from "../../assets/upi.png"
import { useNavigate } from "react-router-dom";
import SEO from "../seo/SEO";


function Services() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const processSteps = [
        { title: "Discover", desc: "Understand project goals.", icon: <Lightbulb size={36} /> },
        { title: "Planning", desc: "Create roadmap.", icon: <ClipboardList size={36} /> },
        { title: "UI Design", desc: "Modern interface.", icon: <PencilRuler size={36} /> },
        { title: "Development", desc: "Clean architecture.", icon: <Code2 size={36} /> },
        { title: "Testing", desc: "Quality assurance.", icon: <Bug size={36} /> },
        { title: "Launch", desc: "Production deployment.", icon: <RocketIcon size={36} /> },
    ];
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.25,   // slower stagger
                delayChildren: 0.2       // wait before starting
            },
        },
    };
    const card = {
        hidden: {
            opacity: 0,
            scale: 1.15,   // starts zoomed IN
            y: 20
        },
        show: {
            opacity: 1,
            scale: 1,      // zooms OUT to normal
            y: 0,
            transition: {
                duration: 0.9,
                ease: [0.25, 1, 0.36, 1], // very smooth professional curve
            }
        }
    };
    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 80
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };
    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };
    const fadeLeft = {
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
    const fadeRight = {
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
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const validateForm = () => {

        if (formData.name.trim().length < 3) {
            toast.error("Enter a valid name");
            return false;
        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email)) {
            toast.error("Enter a valid email");
            return false;
        }

        if (!/^\d{10}$/.test(formData.mobile)) {
            toast.error("Enter a valid mobile number");
            return false;
        }

        if (!formData.service) {
            toast.error("Select a service");
            return false;
        }

        if (formData.message.trim().length < 20) {
            toast.error(
                "Project description should contain at least 20 characters."
            );
            return false;
        }

        return true;
    };
    const sendToTelegram = async () => {
        const BOT_TOKEN = "8778289101:AAH4I9bcqMGMOg7uQS_-FjbhmNle0JFn4_w";
        const CHAT_ID = "1704641369";

        const message = `
🚀 New Service Inquiry

👤 Name: ${formData.name}

📧 Email: ${formData.email}

📱 Mobile: ${formData.mobile}

💼 Service: ${formData.service}

💰 Budget: ${formData.budget}

📅 Timeline: ${formData.timeline}

📝 Message:

${formData.message}
`;

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
                }),
            }
        );

        if (!response.ok) {
            throw new Error("Telegram Error");
        }
    };
    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);

        try {

            await sendToTelegram();

            // toast.success(
            //     "Thank you! Your inquiry has been sent successfully."
            // );

            Swal.fire({
                icon: "success",
                title: "Thank you!",
                text: "Your inquiry has been sent successfully.",
                confirmButtonColor: "#524caf"
            });

            setFormData({
                name: "",
                email: "",
                mobile: "",
                service: "",
                budget: "",
                timeline: "",
                message: "",
            });

        } catch (err) {

            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "Failed to send inquiry. Please try again.",
                confirmButtonColor: "#524caf"
            });

        } finally {

            setLoading(false);

        }
    };
    return (
        <>
            <SEO
                title="Frontend Development Services | React.js & MERN Stack | Prabhat Rana"
                description="Discover the frontend development services offered by Prabhat Rana, including React.js development, React Native, MERN Stack applications, Progressive Web Apps (PWAs), responsive website development, UI implementation, performance optimization, and modern web solutions."
                keywords="Frontend Development Services, React.js Developer, React Native Developer, MERN Stack Developer, Web Development Services, Responsive Website Development, Progressive Web Apps, UI Development, JavaScript Developer, Prabhat Rana"
                canonicalUrl="/services"
                type="website"
                image="/logo.png"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "@id": "https://prabhatrana.online/services#services",

                    "name": "Frontend Development Services",
                    "url": "https://prabhatrana.online/services",
                    "description":
                        "Professional frontend development services including React.js, React Native, MERN Stack development, Progressive Web Apps (PWAs), responsive website development, UI implementation, and performance optimization.",

                    "provider": {
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

                    "serviceType": [
                        "React.js Development",
                        "React Native Development",
                        "Frontend Development",
                        "MERN Stack Development",
                        "Progressive Web App Development",
                        "Responsive Web Development",
                        "UI Development",
                        "Website Performance Optimization"
                    ]
                }}
            />
            <Navbar />
            <section className="services-section py-5">

                <div className="container">

                    {/* Hero */}

                    <motion.section
                        className="row align-items-center services-hero"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div className="col-lg-6" variants={item}>

                            <span className="services-subtitle">
                                WHAT I OFFER
                            </span>

                            <h2 className="services-title mt-3">
                                Modern Web Solutions
                                Tailored For     <span className="your_business"> Your Business</span>
                            </h2>

                            <p className="services-description mt-4">

                                I design and develop fast, scalable and visually engaging
                                digital experiences that help businesses establish a
                                strong online presence. From frontend interfaces to
                                complete web applications, every solution is crafted with
                                performance, security and user experience in mind.

                            </p>

                            <div className="services-hero-buttons mt-4">

                                <button
                                    className="btn service-btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#enquiryModal"
                                >
                                    Get Started
                                    <ArrowRight size={18} />
                                </button>
                                {/* Enquiry Modal */}
                                <div
                                    className="modal fade"
                                    id="enquiryModal"
                                    tabIndex="-1"
                                    aria-labelledby="enquiryModalLabel"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog modal-lg modal-dialog-centered">
                                        <div className="modal-content enquiry-modal">

                                            {/* Header */}
                                            <div className="modal-header border-0 pb-0">
                                                <div className="w-100 text-center">

                                                    <img
                                                        src={logo}
                                                        alt="Rahul"
                                                        className="enquiry-profile"
                                                    />

                                                    <h2 className="mt-3 fw-bold">
                                                        Let's Discuss Your Project
                                                    </h2>

                                                    <p className="text-muted">
                                                        Fill in your project details and I'll get back to you
                                                        within 24-48 hours.
                                                    </p>

                                                </div>

                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                ></button>
                                            </div>

                                            <form onSubmit={handleSubmit}>
                                                <div className="modal-body">

                                                    <div className="row g-4">

                                                        {/* Name */}
                                                        <div className="col-6 col-md-6 enquiry_form_mains">
                                                            <label className="form-label">
                                                                Full Name
                                                            </label>

                                                            <input
                                                                type="text"
                                                                name="name"
                                                                value={formData.name}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter your full name"
                                                                required
                                                            />
                                                        </div>

                                                        {/* Email */}
                                                        <div className="col-6 col-md-6 enquiry_form_mains">
                                                            <label className="form-label">
                                                                Email Address
                                                            </label>

                                                            <input
                                                                type="email"
                                                                name="email"
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Enter your email"
                                                                required
                                                            />
                                                        </div>

                                                        {/* Mobile */}
                                                        <div className="col-6 col-md-6 enquiry_form_mains">
                                                            <label className="form-label">
                                                                Mobile Number
                                                            </label>

                                                            <input
                                                                type="tel"
                                                                name="mobile"
                                                                value={formData.mobile}
                                                                placeholder="Enter your mobile"
                                                                onChange={(e) => {

                                                                    const value = e.target.value
                                                                        .replace(/\D/g, "")
                                                                        .slice(0, 10);

                                                                    setFormData({
                                                                        ...formData,
                                                                        mobile: value,
                                                                    });

                                                                }}
                                                                className="form-control"
                                                                placeholder="+91 XXXXX XXXXX"
                                                                required
                                                            />
                                                        </div>

                                                        {/* Service */}
                                                        <div className="col-6 col-md-6 enquiry_form_mains">
                                                            <label className="form-label">
                                                                Required Service
                                                            </label>

                                                            <select className="form-select"
                                                                name="service"
                                                                value={formData.service}
                                                                onChange={handleChange} required>
                                                                <option value="">
                                                                    Select Service
                                                                </option>

                                                                <option>
                                                                    Frontend Development
                                                                </option>

                                                                <option>
                                                                    Website Development
                                                                </option>

                                                                <option>
                                                                    Full Stack Development
                                                                </option>

                                                                <option>
                                                                    Progressive Web App
                                                                </option>

                                                                <option>
                                                                    Performance Optimization
                                                                </option>

                                                                <option>
                                                                    Authentication & Security
                                                                </option>

                                                                <option>
                                                                    API Development
                                                                </option>

                                                                <option>
                                                                    UI / UX Development
                                                                </option>

                                                                <option>
                                                                    Other
                                                                </option>

                                                            </select>
                                                        </div>

                                                        {/* Budget */}
                                                        <div className="col-6 col-md-6 enquiry_form_mains">
                                                            <label className="form-label">
                                                                Project Budget
                                                            </label>

                                                            <select className="form-select"
                                                                name="budget"
                                                                value={formData.budget}
                                                                onChange={handleChange}
                                                                required>

                                                                <option value="">
                                                                    Select Budget
                                                                </option>

                                                                <option>
                                                                    Below ₹25,000
                                                                </option>

                                                                <option>
                                                                    ₹25,000 - ₹50,000
                                                                </option>

                                                                <option>
                                                                    ₹50,000 - ₹1,00,000
                                                                </option>

                                                                <option>
                                                                    ₹1,00,000 - ₹3,00,000
                                                                </option>

                                                                <option>
                                                                    Above ₹3,00,000
                                                                </option>

                                                                <option>
                                                                    Not Sure
                                                                </option>

                                                            </select>
                                                        </div>

                                                        {/* Timeline */}
                                                        <div className="col-6 col-md-6 enquiry_form_mains">
                                                            <label className="form-label">
                                                                Project Timeline
                                                            </label>

                                                            <select className="form-select"
                                                                name="timeline"
                                                                value={formData.timeline}
                                                                onChange={handleChange}
                                                                required>

                                                                <option value="">
                                                                    Select Timeline
                                                                </option>

                                                                <option>
                                                                    Urgent (Within 1 Week)
                                                                </option>

                                                                <option>
                                                                    2 - 4 Weeks
                                                                </option>

                                                                <option>
                                                                    1 - 2 Months
                                                                </option>

                                                                <option>
                                                                    2 - 3 Months
                                                                </option>

                                                                <option>
                                                                    Flexible
                                                                </option>

                                                            </select>
                                                        </div>

                                                        {/* Remarks */}
                                                        <div className="col-12 enquiry_form_mains">

                                                            <label className="form-label">
                                                                Project Requirements
                                                            </label>

                                                            <textarea
                                                                rows="5"
                                                                name="message"
                                                                value={formData.message}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                placeholder="Tell me about your project..."
                                                                required
                                                            ></textarea>

                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="modal-footer border-0">

                                                    <button
                                                        type="button"
                                                        className="btn btn-light"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        Cancel
                                                    </button>

                                                    {/* <button
                                                        type="submit"
                                                        className="btn enquiry-submit-btn"
                                                    >
                                                        Submit Enquiry
                                                    </button> */}
                                                    <button
                                                        className="btn enquiry-submit-btn"
                                                        disabled={loading}
                                                    >

                                                        <Send size={18} className="me-2" />

                                                        {loading
                                                            ? "Sending..."
                                                            : "Request Free Consultation"}

                                                    </button>

                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="btn service-btn-outline"
                                    onClick={() => navigate("/project")}
                                >
                                    View Projects
                                </button>

                            </div>



                        </motion.div>

                        <motion.div className="col-lg-6 mt-lg-0" variants={item}>

                            <div className="hero-service-box">

                                <div className="service-stat-card">

                                    <h3>

                                        20+

                                    </h3>

                                    <p>

                                        Technologies Used

                                    </p>

                                </div>

                                <div className="service-stat-card">

                                    <h3>

                                        100%

                                    </h3>

                                    <p>

                                        Responsive Layouts

                                    </p>

                                </div>
                                <div className="service-stat-card">

                                    <h3>Pixel Perfect</h3>
                                    <p>Modern UI & UX Design</p>

                                </div>
                                <div className="service-stat-card">

                                    <h3>

                                        SEO

                                    </h3>

                                    <p>

                                        SEO Optimized Website

                                    </p>

                                </div>



                            </div>
                            <div className="hero-highlights mt-4">

                                <div>

                                    <CheckCircle2 size={18} />

                                    Responsive Design

                                </div>

                                <div>

                                    <CheckCircle2 size={18} />

                                    SEO Friendly

                                </div>

                                <div>

                                    <CheckCircle2 size={18} />

                                    Secure Development

                                </div>

                                <div>

                                    <CheckCircle2 size={18} />

                                    Fast Performance

                                </div>

                            </div>

                        </motion.div>
                    </motion.section>

                    {/* Services */}


                    <motion.div
                        className="text-center mt-5 mb-5 professional_service"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >


                        <p className="services-small-title">

                            PROFESSIONAL SERVICES

                        </p>

                        <h2 className="services-heading">
                            What I Can Build <span class="your_business">For You</span>
                        </h2>

                    </motion.div>

                    <motion.div
                        className="row g-4"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        {/* Card */}

                        <div className="col-lg-4 col-md-6" variants={card}>

                            <div className="service-card">

                                <div className="service-icon">

                                    <MonitorSmartphone size={36} />

                                </div>

                                <h4>

                                    Frontend Development

                                </h4>

                                <p>

                                    Beautiful, responsive and interactive user interfaces
                                    built with React, JavaScript, Redux and Bootstrap.

                                </p>

                                <ul>

                                    <li>React.js</li>

                                    <li>Redux Toolkit</li>

                                    <li>Bootstrap</li>

                                    <li>Framer Motion</li>

                                </ul>

                            </div>

                        </div>



                        {/* Card */}

                        <div className="col-lg-4 col-md-6" variants={card}>

                            <div className="service-card">

                                <div className="service-icon">

                                    <Globe size={36} />

                                </div>

                                <h4>

                                    Website Development

                                </h4>

                                <p>

                                    Complete business websites, landing pages, portfolios and custom responsive solutions.
                                    Focused on performance and modern UI/UX.

                                </p>

                                <ul>

                                    <li>Business Websites</li>

                                    <li>Landing Pages</li>

                                    <li>Portfolio Sites</li>

                                    <li>SEO Ready</li>

                                </ul>

                            </div>

                        </div>



                        {/* Card */}

                        <div className="col-lg-4 col-md-6" variants={card}>

                            <div className="service-card">

                                <div className="service-icon">

                                    <ServerCog size={36} />

                                </div>

                                <h4>

                                    Full Stack Development

                                </h4>

                                <p>

                                    Complete frontend and backend applications using
                                    modern technologies and scalable architecture.

                                </p>

                                <ul>

                                    <li>Node.js</li>

                                    <li>Express.js</li>

                                    <li>REST API</li>

                                    <li>MongoDB</li>

                                </ul>

                            </div>

                        </div>



                        {/* Card */}

                        <div className="col-lg-4 col-md-6" variants={card}>

                            <div className="service-card">

                                <div className="service-icon">

                                    <Smartphone size={36} />

                                </div>

                                <h4>

                                    Progressive Web Apps

                                </h4>

                                <p>

                                    Convert your website into an installable web app
                                    with offline support and app-like experience.

                                </p>

                                <ul>

                                    <li>PWA</li>

                                    <li>Offline Support</li>

                                    <li>Push Ready</li>

                                    <li>Mobile Optimized</li>

                                </ul>

                            </div>

                        </div>



                        {/* Card */}

                        <div className="col-lg-4 col-md-6" variants={card}>

                            <div className="service-card">

                                <div className="service-icon">

                                    <Gauge size={36} />

                                </div>

                                <h4>

                                    Performance Optimization

                                </h4>

                                <p>

                                    Improve loading speed, performance,
                                    Core Web Vitals and overall user experience.

                                </p>

                                <ul>

                                    <li>Lazy Loading</li>

                                    <li>Image Optimization</li>

                                    <li>Code Splitting</li>

                                    <li>Fast Loading</li>

                                </ul>

                            </div>

                        </div>



                        {/* Card */}

                        <div className="col-lg-4 col-md-6" variants={card}>

                            <div className="service-card">

                                <div className="service-icon">

                                    <ShieldCheck size={36} />

                                </div>

                                <h4>

                                    Authentication & Security

                                </h4>

                                <p>

                                    Secure authentication systems and protected
                                    applications following modern security standards.

                                </p>

                                <ul>

                                    <li>JWT</li>

                                    <li>OAuth</li>

                                    <li>SSO</li>

                                    <li>Bcrypt</li>

                                </ul>

                            </div>

                        </div>


                    </motion.div>

                </div>

            </section>

            {/* ================= WHY CHOOSE ME ================= */}

            <section className="why-section py-5 why-section_service" style={{ backgroundColor: 'white' }}>

                <div className="container">
                    <motion.div className="text-center mb-5"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}>


                        <p className="services-small-title">
                            WHY CHOOSE ME
                        </p>

                        <h2 className="services-heading ms-2">
                            More Than <span className="your_business">Just Development</span>
                        </h2>

                        <p className="services-description mx-auto">

                            Every project is built with performance, scalability and
                            maintainability in mind. My goal is to deliver digital
                            products that not only look great but also perform exceptionally.

                        </p>

                    </motion.div>

                    <div className="row g-4">

                        <div className="col-6 col-lg-3 col-md-6">

                            <div className="why-card">

                                <Rocket size={38} />

                                <h5>
                                    Fast Delivery
                                </h5>

                                <p>

                                    Efficient development process ensuring timely project delivery.

                                </p>

                            </div>

                        </div>

                        <div className="col-6 col-lg-3 col-md-6">

                            <div className="why-card">

                                <ShieldCheck size={38} />

                                <h5>
                                    Secure Code
                                </h5>

                                <p>

                                    Modern authentication, protected APIs and secure coding practices.

                                </p>

                            </div>

                        </div>

                        <div className="col-6 col-lg-3 col-md-6">

                            <div className="why-card">

                                <Headset size={38} />

                                <h5>
                                    Ongoing Support
                                </h5>

                                <p>

                                    Continuous improvements, maintenance and technical assistance.

                                </p>

                            </div>

                        </div>

                        <div className="col-6 col-lg-3 col-md-6">

                            <div className="why-card">

                                <Clock3 size={38} />

                                <h5>
                                    Performance First
                                </h5>

                                <p>

                                    Optimized applications delivering smooth user experiences.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= DEVELOPMENT PROCESS ================= */}

            <section className="process-section py-5">

                <div className="container">

                    <motion.div className="text-center mb-5"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}>
                        <p className="services-small-title">

                            DEVELOPMENT PROCESS

                        </p>

                        <h2 className="services-heading ms-2">

                            From Idea To <span className="your_business">Deployment</span>

                        </h2>
                    </motion.div>


                    <div className="row g-4">
                        {processSteps.map((item, index) => (
                            <div className="col-lg-2 col-md-4 col-6" key={index}>
                                <div className="process-card">

                                    {/* Number Badge (JS CONTROLLED) */}
                                    <div className="process-number">
                                        {index + 1}
                                    </div>

                                    {item.icon}

                                    <h6>{item.title}</h6>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </section>


            {/* ================= TECHNOLOGY STACK ================= */}

            <section className="technology-section py-5">

                <div className="container">

                    <motion.div className="text-center mb-4"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}>
                        <p className="services-small-title">

                            TECHNOLOGY STACK

                        </p>

                        <h2 className="services-heading ms-2">

                            Modern Technologies <span className="your_business">I Work With</span>

                        </h2>

                        <p className="services-description mx-auto">

                            I use industry-standard technologies to build scalable,
                            maintainable and high-performance applications.

                        </p>
                    </motion.div>


                    <div className="row">

                        <div className="col-lg-6">

                            <div className="tech-box">

                                <h4>

                                    Frontend

                                </h4>

                                <div className="tech-tags">

                                    <span><Globe size={16} /> HTML5</span>

                                    <span><Globe size={16} /> CSS3</span>

                                    <span><Cpu size={16} /> JavaScript (ES6+)</span>

                                    <span><Layers3 size={16} /> React.js</span>

                                    <span><Workflow size={16} /> Redux Toolkit</span>

                                    <span><Smartphone size={16} /> Bootstrap 5</span>

                                    <span><CheckCircle2 size={16} /> Framer Motion</span>

                                    <span><GitBranch size={16} /> Git & GitHub</span>

                                    <span><Globe size={16} /> Responsive Design</span>

                                    <span><Globe size={16} /> PWA Basics</span>

                                    <span><Globe size={16} /> API Integration</span>

                                    <span><Globe size={16} /> Performance Optimization</span>

                                </div>

                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className="tech-box">

                                <h4>

                                    Backend

                                </h4>

                                <div className="tech-tags">

                                    <span><ServerCog size={16} /> Node.js</span>

                                    <span><ServerCog size={16} /> Express</span>

                                    <span><Database size={16} /> MongoDB</span>

                                    <span><LockKeyhole size={16} /> JWT</span>

                                    <span><ShieldCheck size={16} /> OAuth</span>

                                    <span><ShieldCheck size={16} /> SSO</span>

                                    <span><Workflow size={16} /> REST API</span>

                                    <span><CheckCircle2 size={16} /> Bcrypt</span>
                                    <span><Database size={16} /> Firebase (Auth + Firestore)</span>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="project-note mt-5">

                        <div className="project-note-icon">

                            <CheckCircle2 size={24} />

                        </div>

                        <div>

                            <h5>

                                Ready for Real-World Projects

                            </h5>

                            <p>

                                Whether it's a startup, business website, admin dashboard,
                                portfolio, landing page or complete full-stack application,
                                I build scalable solutions focused on quality, performance
                                and long-term maintainability.

                            </p>

                        </div>

                    </div>

                </div>
                {/* ============================
        SERVICE INQUIRY
============================= */}

                <motion.section
                    className="service-inquiry-section py-5"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >

                    <div className="container">

                        {/* Heading */}

                        <motion.div
                            className="text-center inquiry-header mb-5"
                            variants={fadeUp}
                        >

                            <p className="services-small-title">

                                START YOUR PROJECT

                            </p>

                            <h2 className="services-heading ms-2">

                                Request A <span className="your_business">Free Consultation</span>

                            </h2>

                            <p className="services-description mx-auto">

                                Have a project idea or need a modern web solution?
                                Fill out the form below and I'll get back to you within
                                24–48 hours with the best approach for your requirements.

                            </p>

                        </motion.div>

                        <div className="row align-items-center g-5">

                            {/* ================= LEFT ================= */}

                            <motion.div
                                className="col-lg-5"
                                variants={fadeLeft}
                            >

                                <div className="consultation-card">

                                    <span className="consultation-badge">

                                        🚀 FREE CONSULTATION

                                    </span>

                                    <h3>

                                        Let's Build Something Amazing Together

                                    </h3>

                                    <p>

                                        Whether you're launching a startup, redesigning
                                        an existing website or building a complete web
                                        application, I'm here to help turn your ideas
                                        into scalable digital products.

                                    </p>

                                    <div className="consultation-features">

                                        <div className="consultation-item">

                                            <CheckCircle2 size={18} />

                                            Free Project Discussion

                                        </div>

                                        <div className="consultation-item">

                                            <Clock3 size={18} />

                                            Response Within 24–48 Hours

                                        </div>

                                        <div className="consultation-item">

                                            <ShieldCheck size={18} />

                                            Secure & Confidential

                                        </div>

                                        <div className="consultation-item">

                                            <Rocket size={18} />

                                            Modern Development Stack

                                        </div>

                                        <div className="consultation-item">

                                            <Code2 size={18} />

                                            Clean & Scalable Code

                                        </div>

                                        <div className="consultation-item">

                                            <Headphones size={18} />

                                            Ongoing Technical Support

                                        </div>

                                    </div>

                                </div>

                            </motion.div>

                            {/* ================= RIGHT ================= */}

                            <motion.div
                                className="col-lg-7"
                                variants={fadeRight}
                            >

                                <div className="inquiry-form-wrapper">

                                    <h4 className="mb-4">

                                        Project Inquiry Form

                                    </h4>

                                    <form
                                        className="inquiry-form"
                                        onSubmit={handleSubmit}
                                    >

                                        <div className="row g-4">

                                            {/* Name */}

                                            <div className="col-md-6">

                                                <label className="form-label">

                                                    Full Name

                                                </label>

                                                <div className="input-group custom-input">

                                                    <span className="input-group-text">

                                                        <User size={18} />

                                                    </span>

                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                        placeholder="Enter your full name"
                                                    />

                                                </div>

                                            </div>

                                            {/* Email */}

                                            <div className="col-md-6">

                                                <label className="form-label">

                                                    Email Address

                                                </label>

                                                <div className="input-group custom-input">

                                                    <span className="input-group-text">

                                                        <Mail size={18} />

                                                    </span>

                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                        placeholder="Enter your email"
                                                    />

                                                </div>

                                            </div>

                                            {/* Mobile */}

                                            <div className="col-md-6">

                                                <label className="form-label">

                                                    Mobile Number

                                                </label>

                                                <div className="input-group custom-input">

                                                    <span className="input-group-text">

                                                        <PhoneCall size={18} />

                                                    </span>
                                                    <input
                                                        type="tel"
                                                        name="mobile"
                                                        value={formData.mobile}
                                                        placeholder="Enter your mobile"
                                                        onChange={(e) => {

                                                            const value = e.target.value
                                                                .replace(/\D/g, "")
                                                                .slice(0, 10);

                                                            setFormData({
                                                                ...formData,
                                                                mobile: value,
                                                            });

                                                        }}
                                                        className="form-control"
                                                    />

                                                </div>

                                            </div>

                                            {/* Service */}

                                            <div className="col-md-6">

                                                <label className="form-label">

                                                    Required Service

                                                </label>

                                                <div className="input-group custom-input">

                                                    <span className="input-group-text">

                                                        <BriefcaseBusiness size={18} />

                                                    </span>

                                                    <select
                                                        name="service"
                                                        value={formData.service}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                        required
                                                    >

                                                        <option value="">

                                                            Select Service

                                                        </option>

                                                        <option>

                                                            Frontend Development

                                                        </option>

                                                        <option>

                                                            Website Development

                                                        </option>

                                                        <option>

                                                            Full Stack Development

                                                        </option>

                                                        <option>

                                                            Progressive Web App

                                                        </option>

                                                        <option>

                                                            API Integration

                                                        </option>

                                                        <option>

                                                            UI / UX Improvement

                                                        </option>

                                                        <option>

                                                            Other

                                                        </option>

                                                    </select>

                                                </div>

                                            </div>

                                            {/* Budget */}

                                            <div className="col-md-6">

                                                <label className="form-label">

                                                    Estimated Budget

                                                </label>

                                                <div className="input-group custom-input">

                                                    <span className="input-group-text">

                                                        <IndianRupee size={18} />

                                                    </span>

                                                    <select
                                                        name="budget"
                                                        value={formData.budget}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                    >

                                                        <option>

                                                            Select Budget

                                                        </option>

                                                        <option>

                                                            Under ₹10,000

                                                        </option>

                                                        <option>

                                                            ₹10,000 - ₹25,000

                                                        </option>

                                                        <option>

                                                            ₹25,000 - ₹50,000

                                                        </option>

                                                        <option>

                                                            ₹50,000+

                                                        </option>

                                                    </select>

                                                </div>

                                            </div>

                                            {/* Timeline */}

                                            <div className="col-md-6">

                                                <label className="form-label">

                                                    Project Timeline

                                                </label>

                                                <div className="input-group custom-input">

                                                    <span className="input-group-text">

                                                        <CalendarDays size={18} />

                                                    </span>

                                                    <select
                                                        name="timeline"
                                                        value={formData.timeline}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                    >

                                                        <option>

                                                            Select Timeline

                                                        </option>

                                                        <option>

                                                            ASAP

                                                        </option>

                                                        <option>

                                                            Within 1 Week

                                                        </option>

                                                        <option>

                                                            Within 1 Month

                                                        </option>

                                                        <option>

                                                            Flexible

                                                        </option>

                                                    </select>

                                                </div>

                                            </div>

                                            {/* Message */}

                                            <div className="col-12">

                                                <label className="form-label">

                                                    Project Description

                                                </label>

                                                <div className="input-group custom-input textarea-box">

                                                    <span className="input-group-text align-items-start pt-3">

                                                        <MessageSquare size={18} />

                                                    </span>

                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        rows="4"
                                                        className="form-control"
                                                    />

                                                </div>

                                            </div>

                                            {/* Button */}

                                            <div className="col-12">

                                                <button
                                                    className="btn inquiry-btn w-100"
                                                    disabled={loading}
                                                >

                                                    <Send size={18} className="me-2" />

                                                    {loading
                                                        ? "Sending..."
                                                        : "Request Free Consultation"}

                                                </button>

                                            </div>

                                            {/* Footer Note */}

                                            <div className="col-12">

                                                <div className="inquiry-note">

                                                    <ShieldCheck
                                                        size={18}
                                                        className="me-2"
                                                    />

                                                    Your information is kept confidential and
                                                    will only be used to discuss your project.

                                                </div>

                                            </div>

                                        </div>

                                    </form>

                                </div>

                            </motion.div>

                        </div>

                    </div>

                </motion.section>
            </section>

            <Footer2 />
        </>
    );
}

export default Services;