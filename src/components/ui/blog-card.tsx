import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/src/components/ui/typography";
import { Badge } from "@/src/components/ui/badge";

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

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="group cursor-pointer rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative w-full h-[300px] overflow-hidden rounded-tl-3xl rounded-tr-3xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
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
      </Link>
    </div>
  );
};
