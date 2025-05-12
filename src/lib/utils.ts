import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cities } from "../data";
import { blogPosts } from "../data/blogPosts";

interface BlogPost {
  slug: string;
}

interface City {
  slug: string;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatCityUrl = (city: string) => {
  return city
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
};

export const capitalizeCity = (city: string): string => {
  return city
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export function getDisplayCityFromSlug(slug: string): string {
  const match = cities.find((city) => formatCityUrl(city) === slug);
  return match || slug;
}

export function getBlogSlugs() {
  return (blogPosts as unknown as BlogPost[]).map((post) => ({
    slug: post.slug,
  }));
}

export function getCitySlugs() {
  return cities.map((city) => ({
    slug: formatCityUrl(city),
  }));
}
