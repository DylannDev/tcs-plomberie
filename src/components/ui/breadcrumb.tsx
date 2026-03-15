import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="mb-6">
      <ol className="flex items-center flex-wrap gap-1 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight className="size-3.5 text-dark-gray shrink-0" />
              )}
              {isLast ? (
                <span aria-current="page" className="text-black font-medium">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-dark-gray hover:text-sky-blue transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
