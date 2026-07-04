import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { TestimonialData } from "./TestimonialData";
import "swiper/css";
import "swiper/css/navigation";
import './Testimonials.css';
import ChooseUs from "../chooseus/ChooseUs";

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <ChooseUs />
      <div className="section-title mt-5">
        <span className="small-label">WALL OF FAME</span>

        <h2 className="main-title">
          ELITE <span>FEEDBACK</span>
        </h2>

        <p className="feedback-description container">
          Client satisfaction is my top priority. I build fast, responsive, and scalable web applications with clean code and modern technologies. Here's what clients and collaborators have to say about working with me.
        </p>
      </div>

      <div className="elite-carousel-wrapper">
        <div ref={prevRef} className="elite-prev swiper-button text-center">
          <span className="arrows">‹</span>
        </div>

        <div ref={nextRef} className="elite-next swiper-button text-center">
          <span className="arrows">›</span>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          loop
          autoplay={{ delay: 4000 }}
          spaceBetween={25}
          className="elite-feedback-carousel mt-5 container"
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {TestimonialData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="feedback-card">
                <div className="rating">★★★★★</div>
                <p>{item.review}</p>
                <img src={item.images} className="imagesss" alt="" />
                <h4>{item.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}