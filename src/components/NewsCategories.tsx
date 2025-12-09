import { cn } from "@/lib/utils";

interface NewsCategoriesProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const NewsCategories = ({
  categories,
  activeCategory,
  onCategoryChange,
}: NewsCategoriesProps) => {
  return (
    <div className="glass-card rounded-xl p-5 animate-fade-in-up">
      <h3 className="font-bold text-foreground mb-4">Kategori Berita</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
