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
      {/* <div className="section-title mt-5">
        <span className="small-label">WALL OF FAME</span>
        <h2 className="main-title">
          ELITE <span>FEEDBACK</span>
        </h2>
      </div> */}
      <div className="section-title mt-5">
        <span className="small-label">WALL OF FAME</span>

        <h2 className="main-title">
          ELITE <span>FEEDBACK</span>
        </h2>

        <p className="feedback-description container">
          Customer satisfaction is at the heart of everything we do. From airport
          transfers and local city rides to corporate travel and outstation
          journeys, HELLO11 is trusted by passengers for its punctual service,
          professional chauffeurs, clean vehicles, and transparent pricing.
          Discover what our valued customers have to say about their travel
          experience with us.
        </p>
      </div>

      {/* Custom arrows */}
      {/* <div ref={prevRef} className="elite-prev swiper-button text-center">
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
      </Swiper> */}



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