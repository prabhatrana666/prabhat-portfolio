import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { ArrowRight, Users, Fuel, Settings, Phone, MessageCircle } from "lucide-react";
import GalleryData from "./GalleryData";
import "./Gallery.css"
import { useState } from "react";
import BookingModal from "./BookingModal";
import { motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";

function Rent() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openBooking = (car) => {
    setSelectedCar(car);
    setShowModal(true);
  };

  const closeBooking = () => {
    setShowModal(false);
    setSelectedCar(null);
  };

  // 🔥 Animation Variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const card = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Navbar />

      {/* ===== GARAGE SECTION ===== */}
      <section className="h11-gallery-section mt-5">
        <div className="container">

          {/* HEADER */}
          <div className="h11-gallery-header">
            <p className="h11-gallery-subtitle">OUR COLLECTION</p>

            <h2 className="h11-gallery-title">
              PREMIUM <span>FLEET</span>
            </h2>

            <p className="h11-gallery-desc">
              EXPLORE OUR DIVERSE RANGE OF VEHICLES, PERFECTLY MAINTAINED TO ENSURE COMFORT, LUXURY, AND RELIABILITY FOR EVERY JOURNEY
            </p>
          </div>

          {/* CAR GRID WITH ANIMATION */}
          <motion.div
            className="row g-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {GalleryData.map((car, index) => (
              <motion.div
                className="col-lg-3 col-md-6"
                key={index}
                variants={card}
              >
                <div className="h11-gallery-card">

                  {/* <div className="h11-gallery-image-wrap">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="h11-gallery-image"
                    />
                  </div> */}
                  <div className="h11-gallery-image-wrap">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="h11-gallery-image"
                    />

                    <button
                      className="h11-gallery-overlay-btn"
                      onClick={() => setSelectedImage(car.image)}
                    >
                      <Maximize2 size={20} />
                    </button>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
      {selectedImage && (
        <div
          className="h11-gallery-modal"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="h11-gallery-close"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>

          <img
            src={selectedImage}
            alt="Preview"
            className="h11-gallery-modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      <Footer />
    </>
  );
}

export default Rent;