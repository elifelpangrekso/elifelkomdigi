import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface NewsSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const NewsSearch = ({ searchQuery, onSearchChange }: NewsSearchProps) => {
  return (
    <div className="relative animate-fade-in-up">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
      />
      <Input
        type="text"
        placeholder="Cari berita..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-11"
      />
    </div>
  );
};
