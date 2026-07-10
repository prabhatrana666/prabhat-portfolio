// src/components/DefaultSEO.jsx
import { Helmet } from 'react-helmet-async';

const DefaultSEO = () => {
  return (
    <Helmet>
      {/* This is your FALLBACK - only shows if page doesn't have SEO */}
      <title>Your Brand - Default Title</title>
      <meta name="description" content="Default description" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default DefaultSEO;