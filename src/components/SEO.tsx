import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  breadcrumbs?: BreadcrumbItem[];
  image?: string;
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical = 'https://syntellum.si/',
  type = 'website',
  schema,
  breadcrumbs,
  image = 'https://syntellum.si/assets/images/hero_enterprise_operations_1792436542613.jpg',
  noindex = false,
}) => {
  const fullTitle = title.includes('Syntellum Systems') 
    ? title 
    : `${title} | Syntellum Systems`;

  // Standardize canonical to always ensure proper formatting
  const formattedCanonical = canonical.startsWith('http') 
    ? canonical 
    : `https://syntellum.si${canonical.startsWith('/') ? canonical : `/${canonical}`}`;

  // Assemble breadcrumb JSON-LD if provided
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((crumb, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'name': crumb.name,
      'item': crumb.url.startsWith('http') ? crumb.url : `https://syntellum.si${crumb.url.startsWith('/') ? crumb.url : `/${crumb.url}`}`,
    }))
  } : null;

  const combinedSchemas: Array<Record<string, unknown>> = [];
  if (schema) {
    if (Array.isArray(schema)) {
      combinedSchemas.push(...schema);
    } else {
      combinedSchemas.push(schema);
    }
  }
  if (breadcrumbSchema) {
    combinedSchemas.push(breadcrumbSchema);
  }

  return (
    <Helmet>
      {/* Primary Page Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={formattedCanonical} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      {/* Open Graph / Social Sharing */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={formattedCanonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Syntellum Systems" />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Structured Data (JSON-LD) */}
      {combinedSchemas.length > 0 && combinedSchemas.map((s, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};
