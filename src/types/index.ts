interface CityPageProps {
  params: Promise<{ city: string }>;
}

interface SeoPageProps {
  city: string;
}

interface CitySeoPageProps {
  cityName: string;
  heroIntro: string;
  sections: Array<{
    title: string;
    content: string;
  }>;
  faq: import("@/src/data/cities-seo").CityFaqItem[];
}
