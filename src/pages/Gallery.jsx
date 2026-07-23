import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { ArrowRight, Users, Fuel, Settings, Phone, MessageCircle } from "lucide-react";
import GalleryData from "./GalleryData";
import "./Gallery.css"
import { useState, useEffect } from "react";
import BookingModal from "./BookingModal";
import { motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import Footer2 from "../components/footer/Footer2";
import SEO from "../components/seo/SEO";


function Rent() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  //lazy loading
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setVisibleCount(5); // Mobile
    } else {
      setVisibleCount(9); // Tablet/Desktop
    }
  }, []);
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
      <SEO
        title="Certificates & Achievements | Prabhat Rana | Frontend Developer"
        description="Explore the certificates, achievements, coding badges, professional recognitions, and technical accomplishments of Prabhat Rana, a Frontend Developer specializing in React.js, React Native, JavaScript, MERN Stack, and modern web development."
        keywords="Prabhat Rana Certificates, Achievements, Coding Certificates, React.js Developer, Frontend Developer Portfolio, MERN Stack Developer, Code360 Badges, Professional Certifications, Technical Achievements, Web Development Portfolio"
        canonicalUrl="/gallery"
        type="website"
        image="/logo.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": "https://prabhatrana.online/gallery#certificates",

          "url": "https://prabhatrana.online/gallery",
          "name": "Certificates & Achievements | Prabhat Rana",
          "description":
            "Explore the certificates, coding achievements, technical badges, and professional accomplishments earned by Prabhat Rana in frontend development and modern web technologies.",

          "mainEntity": {
            "@type": "Person",
            "@id": "https://prabhatrana.online/#person",
            "name": "Prabhat Rana",
            "jobTitle": "Frontend Developer",
            "url": "https://prabhatrana.online",
            "sameAs": [
              "https://github.com/prabhatrana666",
              "https://www.linkedin.com/in/prabhat-rana"
            ]
          }
        }}
      />
      <Navbar />

      {/* ===== GARAGE SECTION ===== */}
      <section className="h11-gallery-section mt-4">
        <div className="container">

          {/* HEADER */}
          <div className="h11-gallery-header">
            <p className="h11-gallery-subtitle">CERTIFICATIONS</p>

            <h2 className="h11-gallery-title">
              MY <span>CERTIFICATES</span>
            </h2>

            <p className="h11-gallery-desc">
              A collection of industry-recognized certifications showcasing my continuous learning, technical expertise, and commitment to staying up to date with modern web development technologies.
            </p>
          </div>
          {/* CAR GRID WITH ANIMATION */}
          <motion.div
            className="row g-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {GalleryData.slice(0, visibleCount).map((car, index) => (
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
                      loading="lazy"
                      decoding="async"
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
        {visibleCount < GalleryData.length && (
          <div className="text-center mt-4">
            <button
              className="btn btn-primary view_more_button"
              onClick={() =>
                setVisibleCount((prev) =>
                  Math.min(prev + (window.innerWidth < 768 ? 4 : 8), GalleryData.length)
                )
              }
            >
              View More
            </button>
          </div>
      )}
      <Footer2 />
    </>
  );
}

export default Rent;