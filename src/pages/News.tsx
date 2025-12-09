import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NewsCard } from "@/components/NewsCard";
import { NewsCategories } from "@/components/NewsCategories";
import { NewsSearch } from "@/components/NewsSearch";
import { newsData, newsCategories } from "@/data/newsData";
import { Newspaper } from "lucide-react";

const News = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = useMemo(() => {
    return newsData.filter((news) => {
      const matchesCategory =
        activeCategory === "Semua" || news.category === activeCategory;
      const matchesSearch =
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredNews = filteredNews[0];
  const regularNews = filteredNews.slice(1);

  return (
    <>
      <Helmet>
        <title>Berita | BAKTI Komdigi</title>
        <meta
          name="description"
          content="Berita terbaru seputar program dan layanan BAKTI Komdigi dalam mewujudkan pemerataan infrastruktur digital Indonesia."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
                <Newspaper size={16} />
                Berita & Informasi
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
                Berita <span className="gradient-text">Terkini</span>
              </h1>
              <p
                className="text-lg text-muted-foreground animate-fade-in-up"
                style={{ animationDelay: "100ms" }}
              >
                Informasi terbaru seputar program dan layanan BAKTI Komdigi
                dalam mewujudkan pemerataan infrastruktur digital Indonesia.
              </p>
            </div>
          </div>
        </section>

        {/* Search & Categories */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-80">
                <NewsSearch
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                />
              </div>
              <div className="flex-1">
                <NewsCategories
                  categories={newsCategories}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                />
              </div>
            </div>
          </div>
        </section>

        {/* News Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredNews.length === 0 ? (
              <div className="text-center py-16">
                <Newspaper size={48} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Tidak Ada Berita
                </h3>
                <p className="text-muted-foreground">
                  Tidak ditemukan berita dengan kriteria pencarian tersebut.
                </p>
              </div>
            ) : (
              <div className="space-y-12">
                {/* Featured News */}
                {featuredNews && (
                  <NewsCard
                    key={featuredNews.id}
                    id={featuredNews.id}
                    title={featuredNews.title}
                    excerpt={featuredNews.excerpt}
                    image={featuredNews.image}
                    date={featuredNews.date}
                    views={featuredNews.views}
                    category={featuredNews.category}
                    featured
                  />
                )}

                {/* Regular News Grid */}
                {regularNews.length > 0 && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularNews.map((news, index) => (
                      <div
                        key={news.id}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <NewsCard
                          id={news.id}
                          title={news.title}
                          excerpt={news.excerpt}
                          image={news.image}
                          date={news.date}
                          views={news.views}
                          category={news.category}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default News;
