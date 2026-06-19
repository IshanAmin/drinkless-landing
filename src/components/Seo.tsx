import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
}

const SITE_NAME = "Sobr";
const BASE_URL = "https://drinkless-landing.lovable.app";

export default function Seo({ title, description, path = "", image, type = "website" }: SeoProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}
