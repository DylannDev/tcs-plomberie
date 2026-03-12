interface ArticleSchemaParams {
  title: string;
  description: string;
  slug: string;
  image: string;
  date: string;
  updatedAt?: string;
  category: string;
}

export function generateArticleSchema({
  title,
  description,
  slug,
  image,
  date,
  updatedAt,
  category,
}: ArticleSchemaParams) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: `https://tcs-plomberie-montpellier.fr${image}`,
    author: {
      "@type": "Organization",
      name: "TCS Plomberie",
      url: "https://tcs-plomberie-montpellier.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "TCS Plomberie",
      url: "https://tcs-plomberie-montpellier.fr",
      logo: {
        "@type": "ImageObject",
        url: "https://tcs-plomberie-montpellier.fr/icon.svg",
      },
    },
    datePublished: date,
    dateModified: updatedAt || date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://tcs-plomberie-montpellier.fr/blog/${slug}`,
    },
    articleSection: category,
  };
}
