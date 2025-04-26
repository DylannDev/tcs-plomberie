import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/src/components/ui/typography";
import { Badge } from "@/src/components/ui/badge";
import { motion } from "framer-motion";

interface BlogPost {
  title: string;
  description: string;
  category: "plomberie" | "chauffage" | "climatisation";
  image: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="group cursor-pointer rounded-3xl shadow-md transition-all duration-300 h-full flex flex-col hover:shadow-lg"
      >
        <div className="relative w-full h-[300px] overflow-hidden rounded-tl-3xl rounded-tr-3xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col gap-2 px-8 py-10">
          <Badge className="mb-3 capitalize text-sm">{post.category}</Badge>
          <Typography
            as="h2"
            variant="2xl"
            weight="bold"
            className="text-black mb-2 group-hover:text-yellow transition-colors duration-300 line-clamp-3"
          >
            {post.title}
          </Typography>
          <Typography as="p" variant="lg" className="text-dark-gray">
            {post.description}
          </Typography>
        </div>
      </motion.div>
    </Link>
  );
}
