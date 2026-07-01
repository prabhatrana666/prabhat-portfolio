import "./OurGarage.css";
import { motion } from "framer-motion";
import { carData } from "../../../data/carsData"
import { col } from "framer-motion/client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
    Gauge,
    Settings,
    Users
} from "lucide-react";
import BookingModal from "./BookingModal";

function OurGarage() {

    const [current, setCurrent] = useState(0);
    const [showModal, setShowModal] = useState(false);

    // const nextSlide = () => {
    //     setCurrent((prev) => (prev + 1) % carData.length);
    // };

    // const prevSlide = () => {
    //     setCurrent(
    //         (prev) => (prev - 1 + cars.length) % carData.length
    //     );
    // };
    const nextSlide = () => {
        setCurrent((prev) => {
            if (!carData || carData.length === 0) return 0;
            return (prev + 1) % carData.length;
        });
    };

    const prevSlide = () => {
        setCurrent((prev) => {
            if (!carData || carData.length === 0) return 0;
            return (prev - 1 + carData.length) % carData.length;
        });
    };
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         nextSlide();
    //     }, 5000);

    //     return () => clearInterval(timer);
    // }, []);
    useEffect(() => {
        if (!carData || carData.length === 0) return;

        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % carData.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [carData.length]);
    const activeCar = carData[current];

    return (
        <section className="garage-section">

            {/* Heading */}
            {/* <div className="garage-header container text-center mt-5">
                <span className="premium_fleet">PREMIUM FLEET</span>
                <h2 className="our_garage">
                    OUR <span style={{ color: 'var(--primary)' }}>GARAGE</span>
                </h2>
            </div> */}
            <div className="garage-header container text-center mt-5">
                <span className="premium_fleet">PREMIUM FLEET</span>

                <h2 className="our_garage">
                    OUR <span style={{ color: "var(--primary)" }}>GARAGE</span>
                </h2>

                <p className="garage-description">
                    Explore our premium fleet of clean, comfortable, and well-maintained
                    vehicles designed to suit every travel need. Whether you're booking a
                    local city ride, airport transfer, corporate trip, or outstation journey,
                    HELLO11 offers reliable taxis driven by experienced chauffeurs to ensure a
                    safe, punctual, and enjoyable travel experience.
                </p>
            </div>
            {/* Slider */}
            <div className="garage-slider">

                <button
                    className="slider-btn left-btn"
                    onClick={prevSlide}
                >
                    <ChevronLeft />
                </button>

                <img
                    src={
                        carData[
                            (current - 1 + carData.length) %
                            carData.length
                        ].image
                    }
                    alt=""
                    className="side-car left"
                />

                <motion.img
                    key={current}
                    src={activeCar.image}
                    alt={activeCar.name}
                    className="active-car"
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                />

                <img
                    src={
                        carData[
                            (current + 1) %
                            carData.length
                        ].image
                    }
                    alt=""
                    className="side-car right"
                />

                <button
                    className="slider-btn right-btn"
                    onClick={nextSlide}
                >
                    <ChevronRight />
                </button>

            </div>

            {/* Car Details */}
            <motion.div
                key={activeCar.name}
                className="car-details"
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.4,
                }}
            >

                <h2 className="car-name">
                    {activeCar.name}
                </h2>

                <div className="car-specs">

                    <div className="spec-card">
                        <Gauge
                            size={18}
                            color="var(--primary)"
                        />
                        <span>SPEED</span>
                        <h4>{activeCar.speed}</h4>
                    </div>

                    <div className="spec-card">
                        <Settings
                            size={18}
                            color="var(--primary)"
                        />
                        <span>GEAR</span>
                        <h4>{activeCar.gear}</h4>
                    </div>

                    <div className="spec-card">
                        <Users
                            size={18}
                            color="var(--primary)"
                        />
                        <span>SEATS</span>
                        <h4>{activeCar.seats}</h4>
                    </div>

                </div>

                <div className="car-footer">

                    <div className="price">
                        <span>RATE</span>

                        <h3>
                            {activeCar.rate}
                            <small>/ KM</small>
                        </h3>
                    </div>

                    <button
                        className="confirm-btn"
                        onClick={() => setShowModal(true)}
                    >
                        CONFIRM {activeCar.name}
                        <ChevronRight size={18} />
                    </button>

                </div>

            </motion.div>

            {/* Modale Section */}

            {showModal && (
                <BookingModal
                    carName={activeCar.name}
                    onClose={() => setShowModal(false)}
                />
            )}
        </section>
    );
}

export default OurGarage;