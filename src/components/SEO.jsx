// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

export const SEO = ({ article }) => {
  const DOMAIN = 'https://hiring.rolehivex.online';
  
  // 1. Determine Metadata (Article vs. Home Page)
  const meta = {
    title: article 
      ? `${article.title} | RoleHiveX` 
      : 'RoleHiveX Enterprise | The OS for Modern Hiring',
    
    desc: article 
      ? article.desc 
      : 'RoleHiveX is the new standard for technical recruitment. Verify skills, automate sourcing, and hire top engineering talent in 48 hours.',
    
    // Fallback image if no article is selected (Make sure this exists or use a generic one)
    image: article 
      ? article.img 
      : 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    
    url: article 
      ? `${DOMAIN}/?post=${article.id}` 
      : DOMAIN,
      
    type: article ? 'article' : 'website'
  };

  // 2. Structured Data (JSON-LD)
  // This helps Google display the "Article" card in search results
  const structuredData = article ? {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "image": [article.img],
    "datePublished": new Date(article.date).toISOString(),
    "dateModified": new Date(article.date).toISOString(), // Assuming last mod is pub date for now
    "author": [{
      "@type": "Organization",
      "name": "RoleHiveX",
      "url": DOMAIN
    }],
    "publisher": {
      "@type": "Organization",
      "name": "RoleHiveX",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ui-avatars.com/api/?name=R&background=000&color=fff" // Replace with your actual logo URL if you have one
      }
    },
    "description": article.desc
  } : {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": DOMAIN,
    "name": "RoleHiveX Enterprise",
    "description": meta.desc,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${DOMAIN}/?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      {/* --- Standard Metadata --- */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.desc} />
      <link rel="canonical" href={meta.url} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* --- Open Graph (Facebook / LinkedIn / Discord) --- */}
      <meta property="og:site_name" content="RoleHiveX" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.desc} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* --- Twitter Card --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content="hiring.rolehivex.online" />
      <meta name="twitter:url" content={meta.url} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.desc} />
      <meta name="twitter:image" content={meta.image} />

      {/* --- Google Structured Data --- */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
