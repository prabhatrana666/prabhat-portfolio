import "./AnimationCar.css";
import { motion } from "framer-motion";
// import carImage from "../../assets/hero_images.webp";

import carimage from "../../assets/car_image.webp"
import { col } from "framer-motion/client";

function AnimationCar() {
  return (
    <section className="road-section mt-5">

      <motion.div
        className="car-wrapper"
        initial={{ x: "-35vw" }}
        animate={{ x: "110vw" }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1,
        }}
      >
        <div className="headlight d-none"></div>

        <motion.img
          src={carimage}
          alt="Taxi"
          width="200"
          height="200"
          className="running-car my_carsss"
          style={{ transform: "scaleX(-1)" }}
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.h1
        className="road-title text-de fst-italic"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{
          opacity: [0, 0, 1, 1],
          scale: [0.8, 0.8, 1, 1],
          y: [20, 20, 0, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeOut",
        }}
      >
        PRABHAT<span style={{ color: 'var(--primary)' }}>RANA</span>
      </motion.h1>

    </section>
  );
}

export default AnimationCar;