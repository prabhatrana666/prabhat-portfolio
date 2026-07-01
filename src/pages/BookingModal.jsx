import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingModal.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    User,
    MapPin,
    Navigation,
    CalendarDays,
    X
} from "lucide-react";

function BookingModal({ show, onClose, car }) {
    const [form, setForm] = useState({
        name: "",
        pickup: "",
        drop: "",
        date: ""
    });

    useEffect(() => {
        document.body.style.overflow = show ? "hidden" : "";
        return () => (document.body.style.overflow = "");
    }, [show]);

    if (!show) return null;
    const sendWhatsApp = (e) => {
        e.preventDefault();

        if (!form.name || !form.pickup || !form.drop || !form.date) {
            alert("Please fill all fields");
            return;
        }

        const message = `*Rental Enquiry*

Car: ${car.name}
Price: ${car.price}${car.unit}

Name: ${form.name}
Pickup: ${form.pickup}
Drop: ${form.drop}
Date: ${form.date}`;

        window.open(
            `https://wa.me/918851522173?text=${encodeURIComponent(message)}`,
            "_blank"
        );

        onClose();
    };

    return (
        <div className="modal fade show d-block booking-overlay">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content booking-modal border-0 booking-scroll">

                    {/* Close */}
                    <button className="btn-close btn-close-white booking-close" onClick={onClose}>

                    </button>

                    {/* Heading */}
                    <div className="mb-4">
                        <p className="booking-tag">RENTAL ENQUIRY</p>

                        <h2 className="booking-title">{car.name}</h2>

                        <h5 className="booking-price">
                            {car.price} <span>{car.unit}</span>
                        </h5>
                    </div>

                    {/* Form */}
                    <form onSubmit={sendWhatsApp}>

                        {/* Name */}
                        <div className="input-group custom-input mb-3">
                            <span className="input-group-text"><User size={18} /></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={(e) =>
                                    setForm({ ...form, name: e.target.value.replace(/[^A-Za-z ]/g, "") })
                                }
                            />
                        </div>

                        {/* Pickup */}
                        <div className="input-group custom-input mb-3">
                            <span className="input-group-text"><MapPin size={18} /></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Pickup Location"
                                value={form.pickup}
                                onChange={(e) =>
                                    setForm({ ...form, pickup: e.target.value })
                                }
                            />
                        </div>

                        {/* Drop */}
                        <div className="input-group custom-input mb-3">
                            <span className="input-group-text"><Navigation size={18} /></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Drop Location"
                                value={form.drop}
                                onChange={(e) =>
                                    setForm({ ...form, drop: e.target.value })
                                }
                            />
                        </div>

                        {/* Date */}
                        <div className="input-group custom-input mb-4 cxx_dats">
                            <span className="input-group-text">
                                <CalendarDays size={18} />
                            </span>

                            <DatePicker
                                selected={form.date}
                                onChange={(date) => setForm({ ...form, date })}
                                className="form-control "
                                placeholderText="Select Date"
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                            />
                        </div>

                        {/* Button */}
                        <button type="submit" className="btn booking-btn w-100">
                            SEND VIA WHATSAPP
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default BookingModal;