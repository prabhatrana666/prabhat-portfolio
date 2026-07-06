// Nasa.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as lucide from 'lucide-react';
import './Nasa.css';
import Footer2 from '../../footer/Footer2';
import Navbar from '../../navbar/Navbar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Nasa = () => {
    // ============================================
    // 📌 STATE MANAGEMENT
    // ============================================
    const [apodData, setApodData] = useState(null);
    const [asteroids, setAsteroids] = useState([]);
    const [filteredAsteroids, setFilteredAsteroids] = useState([]);
    const [loading, setLoading] = useState(true);
    const [apodLoading, setApodLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchDate, setSearchDate] = useState('');
    const [selectedAsteroid, setSelectedAsteroid] = useState(null);
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('name');
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('apod');
    const [expanded, setExpanded] = useState(false);
    // const [searchDate, setSearchDate] = useState(null);
    // ============================================
    // 🚀 NASA API CONFIGURATION
    // ============================================
    const NASA_API_KEY = 'dvcfKralVtr6OW4tEj0Bwt8seQmCAZm9HhAkyYZt';
    const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;
    const ASTEROID_URL = `https://api.nasa.gov/neo/rest/v1/feed?api_key=${NASA_API_KEY}`;

    // ============================================
    // 📡 FETCH APOD (Astronomy Picture of the Day)
    // ============================================
    const fetchApod = async (date = '') => {
        try {
            setApodLoading(true);
            let url = APOD_URL;
            if (date) {
                url += `&date=${date}`;
            }

            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch APOD');
            const data = await response.json();
            setApodData(data);
            setError(null);
        } catch (err) {
            console.error('APOD Error:', err);
            setError('Failed to load Astronomy Picture of the Day');
        } finally {
            setApodLoading(false);
        }
    };

    // ============================================
    // 📡 FETCH ASTEROIDS (Near Earth Objects)
    // ============================================
    const fetchAsteroids = async () => {
        try {
            setLoading(true);
            // Get today's date and 7 days from now
            const today = new Date();
            const endDate = new Date(today);
            endDate.setDate(today.getDate() + 7);

            const startStr = today.toISOString().split('T')[0];
            const endStr = endDate.toISOString().split('T')[0];

            const url = `${ASTEROID_URL}&start_date=${startStr}&end_date=${endStr}`;

            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch asteroids');
            const data = await response.json();

            // Process asteroid data
            let allAsteroids = [];
            if (data.near_earth_objects) {
                Object.values(data.near_earth_objects).forEach(dateAsteroids => {
                    allAsteroids = [...allAsteroids, ...dateAsteroids];
                });
            }

            // Remove duplicates (by id)
            const uniqueAsteroids = Array.from(
                new Map(allAsteroids.map(item => [item.id, item])).values()
            );

            setAsteroids(uniqueAsteroids);
            setFilteredAsteroids(uniqueAsteroids);
            setError(null);
        } catch (err) {
            console.error('Asteroid Error:', err);
            setError('Failed to load asteroid data');
        } finally {
            setLoading(false);
        }
    };

    // ============================================
    // 🚀 INITIAL LOAD
    // ============================================
    useEffect(() => {
        fetchApod();
        fetchAsteroids();
    }, []);

    // ============================================
    // 🔍 SEARCH & FILTER ASTEROIDS
    // ============================================
    useEffect(() => {
        let result = asteroids;

        if (searchTerm.trim()) {
            const term = searchTerm.toLowerCase().trim();
            result = result.filter(asteroid =>
                asteroid.name.toLowerCase().includes(term) ||
                asteroid.id.includes(term)
            );
        }

        // Sort
        result = [...result].sort((a, b) => {
            if (sortBy === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'size') {
                return (b.estimated_diameter?.meters?.estimated_diameter_max || 0) -
                    (a.estimated_diameter?.meters?.estimated_diameter_max || 0);
            } else if (sortBy === 'distance') {
                return (a.close_approach_data?.[0]?.miss_distance?.kilometers || 0) -
                    (b.close_approach_data?.[0]?.miss_distance?.kilometers || 0);
            }
            return 0;
        });

        setFilteredAsteroids(result);
    }, [asteroids, searchTerm, sortBy]);

    // ============================================
    // 📅 DATE HANDLER
    // ============================================
    const handleDateSearch = (e) => {
        e.preventDefault();
        if (searchDate) {
            const formattedDate =
                `${searchDate.getFullYear()}-${String(searchDate.getMonth() + 1).padStart(2, "0")}-${String(searchDate.getDate()).padStart(2, "0")}`;

            fetchApod(formattedDate);
        }
    };

    // ============================================
    // 🎨 ICON COMPONENT
    // ============================================
    const Icon = ({ name, size = 24, className = '' }) => {
        const LucideIcon = lucide[name];
        if (!LucideIcon) return null;
        return <LucideIcon size={size} className={className} />;
    };

    // ============================================
    // 📊 FORMAT NUMBERS
    // ============================================
    const formatNumber = (num) => {
        if (!num) return 'N/A';
        return new Intl.NumberFormat('en-US').format(num);
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // ============================================
    // 🎯 GET HAZARD STATUS
    // ============================================
    const getHazardStatus = (asteroid) => {
        if (asteroid.is_potentially_hazardous_asteroid) {
            return { label: '☠️ Potentially Hazardous', class: 'hazardous' };
        }
        return { label: '✅ Safe', class: 'safe' };
    };

    // ============================================
    // 📐 ANIMATION VARIANTS
    // ============================================
    const pageVariants = {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
        exit: { opacity: 0, y: 50, transition: { duration: 0.4 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
    };

    // ============================================
    // 🎨 RENDER UI
    // ============================================
    return (
        <>
            <Navbar />
            <motion.div
                className="nasa-container"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {/* Header */}
                <div className="nasa-header">
                    <div className="header-content">
                        <div className="header-title">
                            <Icon name="Rocket" size={40} className="header-icon" />
                            <div>
                                <h1>NASA Space Explorer</h1>
                                <p>Discover the universe with real NASA data</p>
                            </div>
                        </div>
                        <div className="header-actions">
                            <span className="api-status">🟢 Live API</span>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="nasa-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'apod' ? 'active' : ''}`}
                        onClick={() => setActiveTab('apod')}
                    >
                        <Icon name="Image" size={20} />
                        Picture of the Day
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'asteroids' ? 'active' : ''}`}
                        onClick={() => setActiveTab('asteroids')}
                    >
                        <Icon name="AlertTriangle" size={20} />
                        Asteroids Tracker
                    </button>
                </div>

                {/* APOD Section */}
                {activeTab === 'apod' && (
                    <motion.div
                        className="apod-section"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                    >
                        <div className="apod-search">
                            {/* <form onSubmit={handleDateSearch} className="date-search-form">
                                <input
                                    type="date"
                                    className="date-input"
                                    value={searchDate}
                                    onChange={(e) => setSearchDate(e.target.value)}
                                    max={new Date().toISOString().split('T')[0]}
                                />
                                <button type="submit" className="search-date-btn">
                                    <Icon name="Calendar" size={18} />
                                    View Date
                                </button>
                                <button
                                    type="button"
                                    className="today-btn"
                                    onClick={() => {
                                        setSearchDate('');
                                        fetchApod();
                                    }}
                                >
                                    Today
                                </button>
                            </form> */}

                            <form onSubmit={handleDateSearch} className="date-search-form">

                                <DatePicker
                                    selected={searchDate}
                                    onChange={(date) => setSearchDate(date)}
                                    maxDate={new Date()}
                                    dateFormat="yyyy-MM-dd"
                                    placeholderText="Select date"
                                    className="date-input"
                                />

                                <button type="submit" className="search-date-btn">
                                    <Icon name="Calendar" size={18} />
                                    View Date
                                </button>

                                <button
                                    type="button"
                                    className="today-btn"
                                    onClick={() => {
                                        setSearchDate(null);
                                        fetchApod();
                                    }}
                                >
                                    Today
                                </button>

                            </form>
                        </div>

                        {apodLoading ? (
                            <div className="apod-loading">
                                <div className="spinner"></div>
                                <p>Loading cosmic wonders...</p>
                            </div>
                        ) : apodData ? (
                            <motion.div
                                className="apod-card"
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="apod-image-container">
                                    {apodData.media_type === 'video' ? (
                                        <iframe
                                            src={apodData.url}
                                            className="apod-video"
                                            title="APOD Video"
                                            allowFullScreen
                                        />
                                    ) : (
                                        <img
                                            src={apodData.hdurl || apodData.url}
                                            alt={apodData.title}
                                            className="apod-image"
                                            loading="lazy"
                                        />
                                    )}
                                    <div className="apod-image-overlay">
                                        <span className="apod-date">{formatDate(apodData.date)}</span>
                                    </div>
                                </div>
                                <div className="apod-content">
                                    <h2 className="apod-title">{apodData.title}</h2>
                                    {/* <p className="apod-explanation">{apodData.explanation}</p> */}
                                    <div>
                                        <p className={expanded ? "apod-explanation expanded" : "apod-explanation"}>
                                            {apodData.explanation}
                                        </p>

                                        <button
                                            className="read-more-btn d-md-none"
                                            onClick={() => setExpanded(!expanded)}
                                        >
                                            {expanded ? "Read Less" : "Read More"}
                                        </button>
                                    </div>
                                    {apodData.copyright && (
                                        <p className="apod-copyright d-none">📷 {apodData.copyright}</p>
                                    )}
                                </div>
                            </motion.div>
                        ) : (
                            <div className="apod-error">
                                <Icon name="AlertCircle" size={48} />
                                <p>No data available</p>
                            </div>
                        )}
                    </motion.div>
                )}

                {/* Asteroids Section */}
                {activeTab === 'asteroids' && (
                    <motion.div
                        className="asteroids-section"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                    >
                        {/* Controls */}
                        <div className="asteroid-controls">
                            <div className="search-box">
                                <Icon name="Search" size={20} />
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Search asteroids by name or ID..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="control-group">
                                <select
                                    className="sort-select"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="name">Sort by Name</option>
                                    <option value="size">Sort by Size</option>
                                    <option value="distance">Sort by Distance</option>
                                </select>
                                <div className="view-toggle">
                                    <button
                                        className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                        onClick={() => setViewMode('grid')}
                                    >
                                        <Icon name="LayoutGrid" size={18} />
                                    </button>
                                    <button
                                        className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                                        onClick={() => setViewMode('list')}
                                    >
                                        <Icon name="List" size={18} />
                                    </button>
                                </div>
                                <button
                                    className="refresh-btn"
                                    onClick={fetchAsteroids}
                                    disabled={loading}
                                >
                                    <Icon name="RefreshCw" size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="asteroid-stats">
                            <div className="stat-card">
                                <span className="stat-value">{filteredAsteroids.length}</span>
                                <span className="stat-label">Near-Earth Objects</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-value">
                                    {filteredAsteroids.filter(a => a.is_potentially_hazardous_asteroid).length}
                                </span>
                                <span className="stat-label">Potentially Hazardous</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-value">
                                    {Math.round(
                                        filteredAsteroids.reduce((acc, a) =>
                                            acc + (a.estimated_diameter?.meters?.estimated_diameter_max || 0), 0
                                        ) / filteredAsteroids.length || 0
                                    )}
                                </span>
                                <span className="stat-label">Avg Diameter (m)</span>
                            </div>
                        </div>

                        {/* Results */}
                        {loading ? (
                            <div className="loading-container">
                                <div className="spinner"></div>
                                <p>Tracking asteroids...</p>
                            </div>
                        ) : error ? (
                            <div className="error-container">
                                <Icon name="AlertCircle" size={48} />
                                <h3>Error Loading Asteroids</h3>
                                <p>{error}</p>
                                <button className="retry-btn" onClick={fetchAsteroids}>
                                    <Icon name="RefreshCw" size={20} />
                                    Retry
                                </button>
                            </div>
                        ) : filteredAsteroids.length === 0 ? (
                            <div className="empty-container">
                                <Icon name="SearchX" size={48} />
                                <h3>No asteroids found</h3>
                                <p>Try adjusting your search</p>
                            </div>
                        ) : (
                            <div className={`asteroids-grid ${viewMode === 'list' ? 'list-view' : 'grid-view'}`}>
                                {filteredAsteroids.map((asteroid) => {
                                    const hazard = getHazardStatus(asteroid);
                                    const closeApproach = asteroid.close_approach_data?.[0];
                                    const diameter = asteroid.estimated_diameter?.meters?.estimated_diameter_max;

                                    return (
                                        <motion.div
                                            key={asteroid.id}
                                            className={`asteroid-card ${viewMode === 'list' ? 'list-mode' : ''}`}
                                            variants={cardVariants}
                                            initial="hidden"
                                            animate="visible"
                                            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
                                            onClick={() => setSelectedAsteroid(asteroid)}
                                        >
                                            <div className="asteroid-icon">
                                                <Icon name="Orbit" size={viewMode === 'list' ? 32 : 48} />
                                            </div>
                                            <div className="asteroid-info">
                                                <h3 className="asteroid-name">{asteroid.name}</h3>
                                                <div className="asteroid-details">
                                                    <span className={`hazard-badge ${hazard.class}`}>
                                                        {hazard.label}
                                                    </span>
                                                    {diameter && (
                                                        <span className="detail-badge">
                                                            <Icon name="Ruler" size={12} />
                                                            {Math.round(diameter)}m
                                                        </span>
                                                    )}
                                                    {closeApproach && (
                                                        <span className="detail-badge">
                                                            <Icon name="Clock" size={12} />
                                                            {formatDate(closeApproach.close_approach_date)}
                                                        </span>
                                                    )}
                                                </div>
                                                {closeApproach && (
                                                    <div className="approach-details">
                                                        <span>
                                                            Distance: {formatNumber(
                                                                Math.round(closeApproach.miss_distance?.kilometers)
                                                            )} km
                                                        </span>
                                                        <span>
                                                            Speed: {formatNumber(
                                                                Math.round(closeApproach.relative_velocity?.kilometers_per_hour)
                                                            )} km/h
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                            <button className="view-details-btn">
                                                <Icon name="ChevronRight" size={20} />
                                            </button>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        )}
                    </motion.div>
                )}
            </motion.div>

            {/* Asteroid Detail Modal */}
            <AnimatePresence>
                {selectedAsteroid && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedAsteroid(null)}
                    >
                        <motion.div
                            className="modal-content asteroid-modal"
                            initial={{ scale: 0.8, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 50 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close nasa_modal" onClick={() => setSelectedAsteroid(null)}>
                                <Icon name="X" size={24} />
                            </button>

                            <div className="asteroid-modal-content">
                                <div className="asteroid-modal-header">
                                    <Icon name="Orbit" size={48} />
                                    <h2>{selectedAsteroid.name}</h2>
                                    <p className="asteroid-id">ID: {selectedAsteroid.id}</p>
                                </div>

                                <div className="asteroid-modal-grid">
                                    <div className="modal-stat-card">
                                        <span className="modal-stat-label">Diameter</span>
                                        <span className="modal-stat-value">
                                            {Math.round(selectedAsteroid.estimated_diameter?.meters?.estimated_diameter_max || 0)} m
                                        </span>
                                    </div>
                                    <div className="modal-stat-card">
                                        <span className="modal-stat-label">Hazardous</span>
                                        <span className="modal-stat-value">
                                            {selectedAsteroid.is_potentially_hazardous_asteroid ? '☠️ Yes' : '✅ No'}
                                        </span>
                                    </div>
                                    <div className="modal-stat-card">
                                        <span className="modal-stat-label">Relative Velocity</span>
                                        <span className="modal-stat-value">
                                            {formatNumber(Math.round(
                                                selectedAsteroid.close_approach_data?.[0]?.relative_velocity?.kilometers_per_hour || 0
                                            ))} km/h
                                        </span>
                                    </div>
                                    <div className="modal-stat-card">
                                        <span className="modal-stat-label">Miss Distance</span>
                                        <span className="modal-stat-value">
                                            {formatNumber(Math.round(
                                                selectedAsteroid.close_approach_data?.[0]?.miss_distance?.kilometers || 0
                                            ))} km
                                        </span>
                                    </div>
                                    <div className="modal-stat-card">
                                        <span className="modal-stat-label">Close Approach Date</span>
                                        <span className="modal-stat-value">
                                            {formatDate(selectedAsteroid.close_approach_data?.[0]?.close_approach_date)}
                                        </span>
                                    </div>
                                    <div className="modal-stat-card">
                                        <span className="modal-stat-label">Orbiting Body</span>
                                        <span className="modal-stat-value">
                                            {selectedAsteroid.close_approach_data?.[0]?.orbiting_body || 'Earth'}
                                        </span>
                                    </div>
                                </div>

                                {selectedAsteroid.orbital_data && (
                                    <div className="orbital-data">
                                        <h3>Orbital Information</h3>
                                        <div className="orbital-grid">
                                            <div className="orbital-item">
                                                <span className="orbital-label">Orbit ID</span>
                                                <span>{selectedAsteroid.orbital_data?.orbit_id}</span>
                                            </div>
                                            <div className="orbital-item">
                                                <span className="orbital-label">Eccentricity</span>
                                                <span>{selectedAsteroid.orbital_data?.eccentricity}</span>
                                            </div>
                                            <div className="orbital-item">
                                                <span className="orbital-label">Inclination</span>
                                                <span>{selectedAsteroid.orbital_data?.inclination}°</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <a
                                    href={selectedAsteroid.nasa_jpl_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nasa-link"
                                >
                                    <Icon name="ExternalLink" size={18} />
                                    View on NASA JPL Website
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <Footer2 />
        </>
    );
};

export default Nasa;