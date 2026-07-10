import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as lucide from 'lucide-react';
import './Weather.css';
import Navbar from '../../navbar/Navbar'; // Adjust import path
import Footer2 from '../../footer/Footer2'; // Adjust import path
import SEO from '../../seo/SEO';


const Weather = () => {
    // ============================================
    // 📌 STATE MANAGEMENT
    // ============================================
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('Delhi');
    const [inputValue, setInputValue] = useState('Delhi');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());

    // ============================================
    // 🔑 API CONFIGURATION
    // ============================================
    const API_KEY = '8a3d3716e5751c78bb26c840ef7cb253';
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

    // ============================================
    // ⏰ CLOCK UPDATE
    // ============================================
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // ============================================
    // 🌤️ FETCH WEATHER DATA
    // ============================================
    const fetchWeather = useCallback(async (cityName) => {
        if (!cityName || cityName.trim() === '') {
            setError('Please enter a city name');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `${BASE_URL}?q=${encodeURIComponent(cityName.trim())}&appid=${API_KEY}&units=metric`
            );

            if (!response.ok) {
                let errMsg = `City not found (${response.status})`;
                if (response.status === 401) errMsg = 'Invalid API key. Please check your OpenWeather key.';
                else if (response.status === 404) errMsg = `City "${cityName.trim()}" not found.`;
                else if (response.status === 429) errMsg = 'Too many requests. Please wait a moment.';
                throw new Error(errMsg);
            }

            const data = await response.json();
            setWeatherData(data);
            setCity(data.name || cityName);
            setInputValue(data.name || cityName);
            setError(null);
        } catch (err) {
            setError(err.message);
            setWeatherData(null);
        } finally {
            setLoading(false);
        }
    }, []);

    // ============================================
    // 🚀 INITIAL LOAD
    // ============================================
    useEffect(() => {
        fetchWeather('Delhi');
    }, [fetchWeather]);

    // ============================================
    // 🎯 EVENT HANDLERS
    // ============================================
    const handleSearch = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            fetchWeather(inputValue);
        }
    };

    const handleRefresh = () => {
        if (city) {
            fetchWeather(city);
        }
    };

    // ============================================
    // 🕐 TIME FORMATTER
    // ============================================
    const formatTime = (date) => {
        return date.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    // ============================================
    // 🎨 ICON COMPONENT
    // ============================================
    const Icon = ({ name, size = 24, className = '', animate = true }) => {
        const LucideIcon = lucide[name];
        if (!LucideIcon) return null;

        const iconElement = <LucideIcon size={size} className={className} />;

        if (animate) {
            return (
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1
                    }}
                >
                    {iconElement}
                </motion.div>
            );
        }

        return iconElement;
    };

    // ============================================
    // 📐 ANIMATION VARIANTS
    // ============================================
    const pageTransitionVariants = {
        initial: {
            opacity: 0,
            y: -100,
            scale: 0.95
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99],
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        exit: {
            opacity: 0,
            y: 100,
            scale: 0.95,
            transition: {
                duration: 0.5,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20
            }
        }
    };

    const detailItemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        }
    };

    const tempVariants = {
        initial: { scale: 0.5, opacity: 0 },
        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2
            }
        },
        exit: {
            scale: 0.5,
            opacity: 0,
            transition: { duration: 0.2 }
        }
    };

    // ============================================
    // 🎨 RENDER UI
    // ============================================
    return (

        <>
            <SEO
                title="Weather App | Real-Time Weather Forecast | React.js Project | Prabhat Rana"
                description="Check real-time weather conditions, temperature, humidity, wind speed, and weather forecasts with the Weather App built by Prabhat Rana. A fast, responsive React.js application providing accurate weather information."
                keywords="Weather App, Weather Forecast, Real-Time Weather, Live Weather, React Weather App, JavaScript Weather App, Temperature, Weather Dashboard, Weather Application, Prabhat Rana"
                canonicalUrl="/weather"
                type="website"
                image="/logo.png"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "@id": "https://prabhatrana.online/weather#application",

                    "name": "Weather App",
                    "applicationCategory": "WeatherApplication",
                    "operatingSystem": "Web",
                    "url": "https://prabhatrana.online/weather",

                    "description":
                        "A responsive Weather App built with React.js that provides real-time weather information, temperature, humidity, wind speed, and weather forecasts.",

                    "featureList": [
                        "Current Weather",
                        "Real-Time Temperature",
                        "Weather Forecast",
                        "Humidity Information",
                        "Wind Speed",
                        "Location Search",
                        "Responsive Design",
                        "Fast Weather Updates"
                    ],

                    "creator": {
                        "@type": "Person",
                        "@id": "https://prabhatrana.online/#person",
                        "name": "Prabhat Rana",
                        "jobTitle": "Frontend Developer",
                        "url": "https://prabhatrana.online",
                        "sameAs": [
                            "https://github.com/prabhatrana666",
                            "https://www.linkedin.com/in/prabhat-rana"
                        ]
                    },

                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD",
                        "availability": "https://schema.org/InStock"
                    },

                    "isPartOf": {
                        "@type": "WebSite",
                        "@id": "https://prabhatrana.online/#website"
                    }
                }}
            />
            <Navbar />

            {/* ✅ FIX: Wrap with AnimatePresence and add key */}
            <AnimatePresence mode="wait">
                <motion.div
                    key="weather-page"
                    className="weather-container"
                    variants={pageTransitionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <motion.div
                        className="weather-card"
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                    >
                        {/* Header */}
                        <motion.div className="weather-header" variants={itemVariants}>
                            <div className="location-group">
                                <Icon name="MapPin" size={28} className="icon-map" />
                                <motion.span
                                    className="location-name"
                                    key={weatherData?.name || city}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {weatherData?.name || city}
                                </motion.span>
                                <motion.span
                                    className="location-country"
                                    key={weatherData?.sys?.country}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                >
                                    {weatherData?.sys?.country || ''}
                                </motion.span>
                            </div>
                            <motion.div
                                className="timestamp"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon name="Clock" size={18} animate={false} />
                                <span>{formatTime(currentTime)}</span>
                            </motion.div>
                        </motion.div>

                        {/* Main Weather */}
                        <motion.div className="weather-main" variants={itemVariants}>
                            <div className="weather-icon-temp">
                                <AnimatePresence mode="wait">
                                    {weatherData?.weather?.[0]?.icon && (
                                        <motion.img
                                            key={weatherData.weather[0].icon}
                                            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                                            alt={weatherData.weather[0].description}
                                            className="weather-icon"
                                            initial={{ rotate: -180, scale: 0 }}
                                            animate={{ rotate: 0, scale: 1 }}
                                            exit={{ rotate: 180, scale: 0 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20
                                            }}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 10,
                                                transition: { duration: 0.2 }
                                            }}
                                        />
                                    )}
                                </AnimatePresence>
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={weatherData?.main?.temp}
                                        className="temp-big"
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        variants={tempVariants}
                                    >
                                        {weatherData?.main?.temp ? Math.round(weatherData.main.temp) : '--'}
                                    </motion.span>
                                </AnimatePresence>
                                <span className="temp-unit">°C</span>
                            </div>
                            <div className="weather-details">
                                <motion.span
                                    className="weather-description"
                                    key={weatherData?.weather?.[0]?.description}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {weatherData?.weather?.[0]?.description || '--'}
                                </motion.span>
                                <motion.span
                                    className="feels-like"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Icon name="Thermometer" size={20} animate={false} />
                                    Feels like <span>{weatherData?.main?.feels_like ? Math.round(weatherData.main.feels_like) : '--'}</span>°C
                                </motion.span>
                            </div>
                        </motion.div>

                        {/* Details Grid */}
                        <motion.div className="details-grid" variants={itemVariants}>
                            {[
                                { icon: 'Droplet', label: 'Humidity', value: weatherData?.main?.humidity, unit: '%' },
                                { icon: 'Wind', label: 'Wind', value: weatherData?.wind?.speed?.toFixed(1), unit: 'm/s' },
                                { icon: 'Eye', label: 'Visibility', value: weatherData?.visibility ? (weatherData.visibility / 1000).toFixed(1) : null, unit: 'km' },
                                { icon: 'Gauge', label: 'Pressure', value: weatherData?.main?.pressure, unit: 'hPa' }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    className="detail-item"
                                    variants={detailItemVariants}
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: 'rgba(255,255,255,0.6)',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.08)'
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <Icon name={item.icon} size={26} animate={false} />
                                    <div className="detail-info">
                                        <span className="detail-label">{item.label}</span>
                                        <motion.span
                                            className="detail-value"
                                            key={item.value}
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.2, delay: index * 0.05 }}
                                        >
                                            {item.value || '--'}<small>{item.unit}</small>
                                        </motion.span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Action Bar */}
                        <motion.form
                            className="action-bar"
                            onSubmit={handleSearch}
                            variants={itemVariants}
                        >
                            <motion.input
                                type="text"
                                className="city-input"
                                placeholder="🌍 Search any city..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                whileFocus={{
                                    scale: 1.02,
                                    boxShadow: '0 8px 25px rgba(28, 78, 128, 0.15)'
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />
                            <motion.button
                                type="submit"
                                className="btn btn-primary btn_weather"
                                disabled={loading}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <Icon name="Search" size={20} animate={false} />
                                Search
                            </motion.button>
                            <motion.button
                                type="button"
                                className="btn btn-secondary refresh_button"
                                onClick={handleRefresh}
                                disabled={loading}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <motion.div
                                    animate={loading ? { rotate: 360 } : { rotate: 0 }}
                                    transition={{ duration: 1, repeat: loading ? Infinity : 0, ease: "linear" }}
                                >
                                    <Icon name="RotateCcw" size={20} animate={false} />
                                </motion.div>
                                Refresh
                            </motion.button>
                        </motion.form>

                        {/* Status Messages */}
                        <AnimatePresence>
                            {loading && (
                                <motion.div
                                    className="status-message loading"
                                    initial={{ opacity: 0, y: -20, height: 0 }}
                                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                                    exit={{ opacity: 0, y: -20, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="loading-dots"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </motion.div>
                                    Loading weather data...
                                </motion.div>
                            )}

                            {error && (
                                <motion.div
                                    className="status-message error"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <Icon name="AlertCircle" size={20} animate={false} />
                                    {error}
                                </motion.div>
                            )}

                            {!loading && !error && weatherData && (
                                <motion.div
                                    className="status-message success"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    >
                                        <Icon name="CheckCircle" size={20} animate={false} />
                                    </motion.div>
                                    Weather updated for {weatherData.name}, {weatherData.sys?.country || ''}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </AnimatePresence>

            <Footer2 />
        </>
    );
};

export default Weather;