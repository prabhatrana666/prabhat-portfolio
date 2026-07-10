// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  image,
  type = 'website',
  structuredData = null
}) => {
  const siteUrl = 'https://prabhatrana.online';
  const fullUrl = `${siteUrl}${canonicalUrl}`;
  const imageUrl = image ? `${siteUrl}${image}` : `${siteUrl}/logo.png`;

  return (
    <Helmet>
      {/* ===== BASIC META TAGS ===== */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="author" content="Prabhat Rana" />
      <meta name="theme-color" content="#0d6efd" />

      {/* ===== OPEN GRAPH ===== */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Prabhat Rana Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* ===== TWITTER CARDS ===== */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@yourtwitter" />
      <meta name="twitter:creator" content="@yourtwitter" />

      {/* ===== STRUCTURED DATA (JSON-LD) ===== */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;