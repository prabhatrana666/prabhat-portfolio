import "./Hero.css";
import { motion } from "framer-motion";
import { Crown } from "lucide-react";
import { User, MapPin, Search, Car, ArrowRight, Phone } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { fetchLocationSuggestions } from "../api/locationApi";
import { Shield, Star, Headset } from "lucide-react";
import carImage from "../../assets/hero_car-removebg.png"

function Hero() {
  const [name, setName] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [vehicle, setVehicle] = useState("Choose Car");
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropSuggestions, setDropSuggestions] = useState([]);
  const [showPickupSuggestions, setShowPickupSuggestions] = useState(false);
  const [showDropSuggestions, setShowDropSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);

  const pickupRef = useRef(null);
  const dropRef = useRef(null);
  const debounceTimerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickupRef.current && !pickupRef.current.contains(event.target)) {
        setShowPickupSuggestions(false);
      }
      if (dropRef.current && !dropRef.current.contains(event.target)) {
        setShowDropSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  const handlePickupChange = (e) => {
    const value = e.target.value;
    setPickup(value);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(async () => {
      try {
        if (value.trim().length >= 2) {
          setLoading(true);
          setShowPickupSuggestions(true);
          const results = await fetchLocationSuggestions(value);
          setPickupSuggestions(results || []);
        } else {
          setPickupSuggestions([]);
          setShowPickupSuggestions(false);
        }
      } catch (error) {
        console.error("Error in pickup search:", error);
        setPickupSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 300);
  };

  const handleDropChange = (e) => {
    const value = e.target.value;
    setDrop(value);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(async () => {
      try {
        if (value.trim().length >= 2) {
          setLoading(true);
          setShowDropSuggestions(true);
          const results = await fetchLocationSuggestions(value);
          setDropSuggestions(results || []);
        } else {
          setDropSuggestions([]);
          setShowDropSuggestions(false);
        }
      } catch (error) {
        console.error("Error in drop search:", error);
        setDropSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 300);
  };

  const selectPickupSuggestion = (suggestion) => {
    const locationName = suggestion?.properties?.formatted ||
      suggestion?.properties?.name ||
      suggestion?.properties?.address_line1 ||
      "";
    setPickup(locationName);
    setPickupSuggestions([]);
    setShowPickupSuggestions(false);
  };

  const selectDropSuggestion = (suggestion) => {
    const locationName = suggestion?.properties?.formatted ||
      suggestion?.properties?.name ||
      suggestion?.properties?.address_line1 ||
      "";
    setDrop(locationName);
    setDropSuggestions([]);
    setShowDropSuggestions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !pickup || !drop) {
      alert("Please fill all fields");
      return;
    }

    const message = `
New Ride Booking:

Passenger: ${name}
Pickup: ${pickup}
Drop: ${drop}
Vehicle: ${vehicle}
  `;

    window.open(
      `https://wa.me/918851522173?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const renderSuggestions = (suggestions, onSelect, type) => {
    if (loading) {
      return <li className="suggestion-loading">Loading...</li>;
    }

    if (!suggestions || suggestions.length === 0) {
      return <li className="suggestion-no-results">No results found</li>;
    }

    return suggestions.map((item, index) => {
      const displayName = item?.properties?.formatted ||
        item?.properties?.name ||
        item?.properties?.address_line1 ||
        "Unknown location";
      return (
        <li
          key={item?.properties?.place_id || index}
          className="suggestion-item"
          onClick={() => onSelect(item)}
        >
          {type === 'pickup' ?
            <MapPin size={16} color="var(--primary)" /> :
            <Search size={16} color="var(--primary)" />
          }
          <span>{displayName}</span>
        </li>
      );
    });
  };


  // Car Image

  const stats = [
    {
      icon: <Shield size={40} strokeWidth={1.5} />,
      number: "100+",
      label: "VERIFIED PARTNERS",
      color: "#f4c400"
    },
    {
      icon: <Star size={40} strokeWidth={1.5} />,
      number: "4.9/5",
      label: "RATED",
      color: "#f4c400"
    },
    {
      icon: <Headset size={40} strokeWidth={1.5} />,
      number: "24/7",
      label: "SUPPORT",
      color: "#f4c400"
    }
  ];

  return (
    <>
      <section className="hero">
        <motion.span
          className="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Crown size={18} strokeWidth={2} color="#f4c400" />
          <span>PREMIUM TAXI AND CAB SERVICES</span>
        </motion.span>

        {/* <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          DURI PATA
          <span> NA CHALE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Comfortable, safe, and always on time.
          Your premium journey starts here.
        </motion.p> */}

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          DURI PATA
          <span> NA CHALE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Experience premium taxi and cab services across Delhi NCR with HELLO11.
          Whether you're booking an airport transfer, local city ride, corporate
          travel, or an outstation journey.
        </motion.p>
        <form className="booking-form mt-5" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>PASSENGER</label>
            <div className="input-box">
              <User size={24} color="var(--primary)" />
              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                  setName(value);
                }}
              />
            </div>
          </div>

          <div className="form-group" ref={pickupRef}>
            <label>PICKUP</label>
            <div className="input-box">
              <MapPin size={24} color="var(--primary)" />
              <input
                type="text"
                placeholder="Search Pickup"
                value={pickup}
                onChange={handlePickupChange}
                onFocus={() => {
                  if (pickup.trim().length >= 2 && pickupSuggestions.length > 0) {
                    setShowPickupSuggestions(true);
                  }
                }}
              />
            </div>
            {showPickupSuggestions && (
              <ul className="suggestions-list">
                {renderSuggestions(pickupSuggestions, selectPickupSuggestion, 'pickup')}
              </ul>
            )}
          </div>

          <div className="form-group" ref={dropRef}>
            <label>DROP</label>
            <div className="input-box">
              <Search size={24} color="var(--primary)" />
              <input
                type="text"
                placeholder="Search Drop"
                value={drop}
                onChange={handleDropChange}
                onFocus={() => {
                  if (drop.trim().length >= 2 && dropSuggestions.length > 0) {
                    setShowDropSuggestions(true);
                  }
                }}
              />
            </div>
            {showDropSuggestions && (
              <ul className="suggestions-list">
                {renderSuggestions(dropSuggestions, selectDropSuggestion, 'drop')}
              </ul>
            )}
          </div>

          <div className="form-group">
            <label>VEHICLE</label>
            <div className="input-box">
              <Car size={24} color="var(--primary)" />
              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
              >
                <option>Choose Car</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Innova</option>
                <option>Tempo Traveller</option>
              </select>
            </div>
          </div>

          <button type="submit" className="book-btn2">
            BOOK RIDE <ArrowRight size={20} />
          </button>
        </form>
      </section>

      {/* Car Image Section */}

      <div className="car-showcase">
        <img
          src={carImage}
          alt="Hello11 Taxi"
          className="car-image"
        />

        <div className="feature-badges">
          <div className="badge">
            <Shield size={18} color="var(--primary)" />
            VERIFIED PARTNERS
          </div>

          <div className="badge">
            <Star size={18} color="var(--primary)" />
            4.9/5 RATED
          </div>

          <div className="badge">
            <Phone size={18} color="var(--primary)" />
            24/7 SUPPORT
          </div>
        </div>
      </div>
    </>

  );
}

export default Hero;