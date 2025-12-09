import { Link } from "react-router-dom";
import { Eye, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  views: number;
  category: string;
  featured?: boolean;
}

export const NewsCard = ({
  id,
  title,
  excerpt,
  image,
  date,
  views,
  category,
  featured = false,
}: NewsCardProps) => {
  if (featured) {
    return (
      <article className="glass-card rounded-2xl overflow-hidden group animate-fade-in-up">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative aspect-video md:aspect-auto overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                {category}
              </span>
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {date}
              </span>
              <span className="flex items-center gap-1.5">
                <Eye size={14} />
                {views} views
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {title}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
              {excerpt}
            </p>
            <Button variant="hero" size="default" className="w-fit" asChild>
              <Link to={`/berita/${id}`}>
                Selengkapnya
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="glass-card rounded-xl overflow-hidden group animate-fade-in-up hover:border-primary/30 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
            {category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Eye size={12} />
            {views}
          </span>
        </div>
        <h3 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
          {excerpt}
        </p>
        <Link
          to={`/berita/${id}`}
          className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-2.5 transition-all duration-300"
        >
          Selengkapnya
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
};
