// World.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as lucide from 'lucide-react';
import './World.css';

const World = () => {
  // ============================================
  // 📌 STATE MANAGEMENT
  // ============================================
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');

  // ============================================
  // 🌍 API CONFIGURATION
  // ============================================
  // Note: Using the REST Countries API with your API key
  const API_KEY = 'rc_live_de71b69f1f144f93936dcb33c522259a';
  const API_URL = 'https://api.restcountries.com/v5/all';

  // ============================================
  // 📡 FETCH COUNTRIES DATA
  // ============================================
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(API_URL, {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error(`Failed to fetch countries (${response.status})`);
        }
        
        const data = await response.json();
        
        // Sort by name initially
        const sortedData = data.sort((a, b) => 
          a.name.common.localeCompare(b.name.common)
        );
        
        setCountries(sortedData);
        setFilteredCountries(sortedData);
      } catch (err) {
        console.error('Error fetching countries:', err);
        setError(err.message || 'Failed to load countries. Please try again.');
        setCountries([]);
        setFilteredCountries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // ============================================
  // 🔍 FILTER & SEARCH LOGIC
  // ============================================
  useEffect(() => {
    let result = countries;

    // Filter by region
    if (selectedRegion !== 'All') {
      result = result.filter(country => 
        country.region === selectedRegion
      );
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(country =>
        country.name.common.toLowerCase().includes(term) ||
        country.name.official.toLowerCase().includes(term) ||
        (country.capital && country.capital.some(cap => 
          cap.toLowerCase().includes(term)
        ))
      );
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.common.localeCompare(b.name.common);
      } else if (sortBy === 'population') {
        return (b.population || 0) - (a.population || 0);
      } else if (sortBy === 'area') {
        return (b.area || 0) - (a.area || 0);
      }
      return 0;
    });

    setFilteredCountries(result);
  }, [countries, selectedRegion, searchTerm, sortBy]);

  // ============================================
  // 📊 REGIONS
  // ============================================
  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

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
        staggerChildren: 0.05
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

  const countryCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    hover: {
      scale: 1.05,
      y: -8,
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  // ============================================
  // 📊 FORMAT NUMBERS
  // ============================================
  const formatNumber = (num) => {
    if (!num) return 'N/A';
    return new Intl.NumberFormat('en-US').format(num);
  };

  // ============================================
  // 📝 GET INITIALS FOR FALLBACK FLAG
  // ============================================
  const getInitials = (countryName) => {
    return countryName
      .split(' ')
      .slice(0, 2)
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase();
  };

  // ============================================
  // 🎨 RENDER UI
  // ============================================
  return (
    <>
      <motion.div
        className="world-container"
        variants={pageTransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div 
          className="world-header"
          variants={itemVariants}
        >
          <div className="world-title-section">
            <motion.h1 
              className="world-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Icon name="Globe" size={36} className="title-icon" animate={false} />
              Explore the World
            </motion.h1>
            <motion.p 
              className="world-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover countries, cultures, and statistics from around the globe
            </motion.p>
          </div>

          {/* Statistics */}
          <motion.div 
            className="world-stats"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="stat-item">
              <span className="stat-value">{countries.length}</span>
              <span className="stat-label">Countries</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">{filteredCountries.length}</span>
              <span className="stat-label">Showing</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Controls */}
        <motion.div 
          className="world-controls"
          variants={itemVariants}
        >
          <div className="search-section">
            <div className="search-box">
              <Icon name="Search" size={20} animate={false} />
              <input
                type="text"
                className="search-input"
                placeholder="Search by country or capital..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <motion.button
                  className="clear-search"
                  onClick={() => setSearchTerm('')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon name="X" size={16} animate={false} />
                </motion.button>
              )}
            </div>
          </div>

          <div className="filter-section">
            <div className="filter-group">
              <Icon name="Filter" size={18} animate={false} />
              <select
                className="filter-select"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                {regions.map(region => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <Icon name="ArrowUpDown" size={18} animate={false} />
              <select
                className="filter-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Sort by Name</option>
                <option value="population">Sort by Population</option>
                <option value="area">Sort by Area</option>
              </select>
            </div>

            <div className="view-toggle">
              <motion.button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="LayoutGrid" size={18} animate={false} />
              </motion.button>
              <motion.button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="List" size={18} animate={false} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div 
          className="results-count"
          variants={itemVariants}
        >
          <span>
            {filteredCountries.length} countries found
            {searchTerm && ` for "${searchTerm}"`}
            {selectedRegion !== 'All' && ` in ${selectedRegion}`}
          </span>
        </motion.div>

        {/* Countries Grid/List */}
        {loading ? (
          <motion.div 
            className="loading-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="loading-spinner">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Icon name="Loader2" size={48} animate={false} />
              </motion.div>
              <p>Loading countries...</p>
            </div>
          </motion.div>
        ) : error ? (
          <motion.div 
            className="error-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Icon name="AlertCircle" size={48} animate={false} />
            <h3>Oops! Something went wrong</h3>
            <p>{error}</p>
            <motion.button
              className="retry-btn"
              onClick={() => window.location.reload()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon name="RefreshCw" size={20} animate={false} />
              Retry
            </motion.button>
          </motion.div>
        ) : filteredCountries.length === 0 ? (
          <motion.div 
            className="empty-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Icon name="SearchX" size={48} animate={false} />
            <h3>No countries found</h3>
            <p>Try adjusting your search or filters</p>
          </motion.div>
        ) : (
          <motion.div 
            className={`countries-container ${viewMode === 'grid' ? 'grid-view' : 'list-view'}`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="wait">
              {filteredCountries.map((country) => (
                <motion.div
                  key={country.cca3 || country.name.common}
                  className={`country-card ${viewMode === 'list' ? 'list-mode' : ''}`}
                  variants={countryCardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  layout
                  onClick={() => setSelectedCountry(country)}
                >
                  <div className="country-flag">
                    {country.flags?.svg || country.flags?.png ? (
                      <img 
                        src={country.flags.svg || country.flags.png} 
                        alt={`${country.name.common} flag`}
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `
                            <div class="flag-fallback">
                              ${getInitials(country.name.common)}
                            </div>
                          `;
                        }}
                      />
                    ) : (
                      <div className="flag-fallback">
                        {getInitials(country.name.common)}
                      </div>
                    )}
                  </div>
                  
                  <div className="country-info">
                    <h3 className="country-name">
                      {country.name.common}
                      {country.name.official !== country.name.common && (
                        <span className="country-official-name">
                          {country.name.official}
                        </span>
                      )}
                    </h3>
                    
                    <div className="country-details">
                      <div className="country-detail">
                        <Icon name="MapPin" size={14} animate={false} />
                        <span>{country.capital?.[0] || 'N/A'}</span>
                      </div>
                      <div className="country-detail">
                        <Icon name="Users" size={14} animate={false} />
                        <span>{formatNumber(country.population)}</span>
                      </div>
                      <div className="country-detail">
                        <Icon name="Globe" size={14} animate={false} />
                        <span>{country.region || 'N/A'}</span>
                      </div>
                      {country.area && (
                        <div className="country-detail">
                          <Icon name="Ruler" size={14} animate={false} />
                          <span>{formatNumber(country.area)} km²</span>
                        </div>
                      )}
                    </div>

                    {country.currencies && (
                      <div className="country-currencies">
                        {Object.values(country.currencies).map((currency, idx) => (
                          <span key={idx} className="currency-tag">
                            {currency.name} ({currency.symbol})
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <motion.button
                    className="country-view-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCountry(country);
                    }}
                  >
                    <Icon name="ChevronRight" size={20} animate={false} />
                  </motion.button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </motion.div>

      {/* Country Detail Modal */}
      <AnimatePresence>
        {selectedCountry && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCountry(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="modal-close"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedCountry(null)}
              >
                <Icon name="X" size={24} animate={false} />
              </motion.button>

              <div className="modal-grid">
                <div className="modal-flag">
                  {selectedCountry.flags?.svg || selectedCountry.flags?.png ? (
                    <img 
                      src={selectedCountry.flags.svg || selectedCountry.flags.png} 
                      alt={`${selectedCountry.name.common} flag`}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="flag-fallback large">
                            ${getInitials(selectedCountry.name.common)}
                          </div>
                        `;
                      }}
                    />
                  ) : (
                    <div className="flag-fallback large">
                      {getInitials(selectedCountry.name.common)}
                    </div>
                  )}
                </div>

                <div className="modal-info">
                  <h2 className="modal-country-name">
                    {selectedCountry.name.common}
                  </h2>
                  <p className="modal-official-name">
                    {selectedCountry.name.official}
                  </p>

                  <div className="modal-details-grid">
                    <div className="modal-detail-item">
                      <span className="modal-detail-label">Capital</span>
                      <span className="modal-detail-value">
                        {selectedCountry.capital?.[0] || 'N/A'}
                      </span>
                    </div>
                    <div className="modal-detail-item">
                      <span className="modal-detail-label">Population</span>
                      <span className="modal-detail-value">
                        {formatNumber(selectedCountry.population)}
                      </span>
                    </div>
                    <div className="modal-detail-item">
                      <span className="modal-detail-label">Area</span>
                      <span className="modal-detail-value">
                        {selectedCountry.area ? `${formatNumber(selectedCountry.area)} km²` : 'N/A'}
                      </span>
                    </div>
                    <div className="modal-detail-item">
                      <span className="modal-detail-label">Region</span>
                      <span className="modal-detail-value">
                        {selectedCountry.region || 'N/A'}
                      </span>
                    </div>
                    <div className="modal-detail-item">
                      <span className="modal-detail-label">Subregion</span>
                      <span className="modal-detail-value">
                        {selectedCountry.subregion || 'N/A'}
                      </span>
                    </div>
                    <div className="modal-detail-item">
                      <span className="modal-detail-label">Timezone</span>
                      <span className="modal-detail-value">
                        {selectedCountry.timezones?.[0] || 'N/A'}
                      </span>
                    </div>
                  </div>

                  {selectedCountry.currencies && (
                    <div className="modal-currencies">
                      <h4>Currencies</h4>
                      <div className="modal-currency-list">
                        {Object.entries(selectedCountry.currencies).map(([code, currency]) => (
                          <div key={code} className="modal-currency-item">
                            <span className="currency-code">{code}</span>
                            <span className="currency-name">{currency.name}</span>
                            <span className="currency-symbol">{currency.symbol}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedCountry.languages && (
                    <div className="modal-languages">
                      <h4>Languages</h4>
                      <div className="modal-language-tags">
                        {Object.values(selectedCountry.languages).map((language, idx) => (
                          <span key={idx} className="language-tag">
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedCountry.borders && selectedCountry.borders.length > 0 && (
                    <div className="modal-borders">
                      <h4>Borders</h4>
                      <div className="modal-border-list">
                        {selectedCountry.borders.map((border, idx) => (
                          <span key={idx} className="border-tag">
                            {border}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedCountry.maps?.googleMaps && (
                    <motion.a
                      href={selectedCountry.maps.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-map-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon name="Map" size={20} animate={false} />
                      View on Google Maps
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default World;