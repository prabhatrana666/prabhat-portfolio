import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ReadyToRoll.css"

import {
    User,
    MapPin,
    Navigation,
    CalendarDays,
    MessageCircle,
    Phone,
    ArrowRight,
    ShieldCheck,
    Car,
    Headphones,
} from "lucide-react";

export default function ReadyToRoll() {
    const [formData, setFormData] = useState({
        name: "",
        pickup: "",
        drop: "",
    });

    const [date, setDate] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleWhatsAppBooking = () => {
        if (
            !formData.name ||
            !formData.pickup ||
            !formData.drop ||
            !date
        ) {
            alert("Please fill all fields");
            return;
        }

        const formattedDate = date.toLocaleDateString("en-IN");

        const message = `
 New Taxi Booking Request

 Name: ${formData.name}
 Pickup: ${formData.pickup}
 Drop: ${formData.drop}
 Date: ${formattedDate}
`;

        const whatsappNumber = "918851522173";

        window.open(
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                message
            )}`,
            "_blank"
        );
    };

    return (
        <>
            <section className="rtr-section py-5 mt-5">
                <div className="container">

                    <div className="text-center mb-5">
                        <p className="rtr-subtitle">
                            INSTANT RESERVATION
                        </p>

                        <h2 className="rtr-title">
                            READY TO <span>ROLL?</span>
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
                                    <MapPin size={18} className="rtr-input-icon" />
                                    <input
                                        type="text"
                                        name="pickup"
                                        placeholder="Pickup Point"
                                        value={formData.pickup}
                                        onChange={handleChange}
                                        className="rtr-input"
                                    />
                                </div>
                            </div>

                            <div className="col-lg">
                                <div className="rtr-input-wrapper">
                                    <Navigation size={18} className="rtr-input-icon" />
                                    <input
                                        type="text"
                                        name="drop"
                                        placeholder="Drop Point"
                                        value={formData.drop}
                                        onChange={handleChange}
                                        className="rtr-input"
                                    />
                                </div>
                            </div>

                            <div className="col-lg">
                                <div className="rtr-input-wrapper">
                                    <CalendarDays size={18} className="rtr-input-icon" />

                                    <DatePicker
                                        selected={date}
                                        onChange={(d) => setDate(d)}
                                        minDate={new Date()}
                                        dateFormat="dd-MM-yyyy"
                                        placeholderText="Select Date"
                                        className="rtr-input"
                                    />
                                </div>
                            </div>

                            <div className="col-lg-auto">
                                <button
                                    onClick={handleWhatsAppBooking}
                                    className="rtr-book-btn"
                                >
                                    BOOK NOW
                                    <ArrowRight size={18} />
                                </button>
                            </div>

                        </div>

                        <div className="rtr-features-row">

                            <div className="rtr-feature-item">
                                <ShieldCheck size={16} />
                                Fixed Prices
                            </div>

                            <div className="rtr-feature-item">
                                <Car size={16} />
                                Clean Cars
                            </div>

                            <div className="rtr-feature-item">
                                <Headphones size={16} />
                                24/7 Support
                            </div>

                        </div>

                    </div>

                    <div className="rtr-instant-card mt-5 p-5 sddd">

                        <div className="text-center position-relative">

                            <p className="rtr-subtitle">
                                DON'T WANT TO WAIT?
                            </p>

                            <h3 className="rtr-instant-title">
                                BOOK <span>INSTANTLY</span>
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
                                    CALL +91 96289 11211
                                </a>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>

    );
}