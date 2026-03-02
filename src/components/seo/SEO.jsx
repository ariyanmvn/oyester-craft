import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords }) {
  const siteTitle = 'Oyster Craft';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'Oyster Craft - Handcrafted jute and leather bags, tissue boxes, and accessories from Bangladesh.'} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || 'Oyster Craft - Handcrafted jute and leather bags, tissue boxes, and accessories from Bangladesh.'} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
