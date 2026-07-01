import { useState } from "react";
import { X } from "lucide-react";
import './BookingModal.css';
import DatePicker from 'react-datepicker';

function BookingModal({ carName, onClose }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [name, setName] = useState("");
    const [pickup, setPickup] = useState("");
    const [drop, setDrop] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format the date to YYYY-MM-DD
        const formattedDate = selectedDate
            ? selectedDate.toISOString().split('T')[0]
            : 'Not selected';

        const message = `
New Booking

Car: ${carName}
Name: ${name}
Pickup: ${pickup}
Drop: ${drop}
Date: ${formattedDate}
`;

        window.open(
            `https://wa.me/918851522173?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    return (
        <div className="modal-overlay">
            <div className="booking-modal">
                <button className="close-btn" onClick={onClose}>
                    <X />
                </button>

                <h2>
                    BOOK <span>{carName}</span>
                </h2>

                <p>FILL DETAILS TO PROCEED</p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^[A-Za-z\s]*$/.test(value)) {
                                setName(value);
                            }
                        }}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Enter starting point"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Enter destination"
                        value={drop}
                        onChange={(e) => setDrop(e.target.value)}
                        required
                    />

                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="dd-MM-yyyy"
                        placeholderText="Select date"
                        minDate={new Date()}   // 👈 this blocks past dates
                        required
                    />

                    <button type="submit" className="book-now-btn">
                        BOOK NOW
                    </button>
                </form>
            </div>
        </div>
    );
}

export default BookingModal;