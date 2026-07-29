import { Helmet } from 'react-helmet-async'
import { company } from '../../data/company.js'

export default function SEO({ title, description, path = '/', image, schema, noindex = false }) {
  const fullTitle = title ? `${title} | ${company.brandName}` : company.brandName
  const canonicalUrl = `${company.siteUrl}${path === '/' ? '' : path}`
  const ogImage = image ? `${company.siteUrl}${image}` : `${company.siteUrl}${company.ogImage}`
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : []

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  )
}
