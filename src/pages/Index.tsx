import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MapPin, Signal, Wifi, Satellite } from "lucide-react";
import { Helmet } from "react-helmet-async";

const stats = [
  { value: "12.548+", label: "Desa Terkoneksi" },
  { value: "34", label: "Provinsi" },
  { value: "150K+", label: "Km Fiber Optik" },
  { value: "98%", label: "Cakupan 4G" },
];

const services = [
  {
    icon: Wifi,
    title: "Palapa Ring",
    description: "Jaringan backbone fiber optik nasional yang menghubungkan seluruh wilayah Indonesia.",
  },
  {
    icon: Signal,
    title: "BTS 4G/5G",
    description: "Pembangunan infrastruktur jaringan seluler untuk daerah tertinggal, terdepan, dan terluar.",
  },
  {
    icon: Satellite,
    title: "VSAT",
    description: "Layanan internet satelit untuk wilayah yang tidak terjangkau jaringan terestrial.",
  },
  {
    icon: MapPin,
    title: "Satelit Multifungsi",
    description: "Program satelit nasional untuk mendukung konektivitas dan keamanan digital Indonesia.",
  },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>BAKTI Komdigi | Badan Aksesibilitas Telekomunikasi dan Informasi</title>
        <meta name="description" content="Mewujudkan pemerataan akses telekomunikasi dan informasi di seluruh wilayah Indonesia untuk membangun masyarakat digital yang inklusif dan berdaya saing." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
            
            {/* Indonesia map silhouette effect using gradient */}
            <div className="absolute inset-0 opacity-10 bg-gradient-radial from-primary/30 via-transparent to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Badan Aksesibilitas Telekomunikasi dan Informasi
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 animate-fade-in-up leading-tight">
                Indonesia Terkoneksi,
                <br />
                <span className="gradient-text">Semakin Digital</span>
                <br />
                Semakin Maju
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "150ms" }}>
                Mewujudkan pemerataan akses telekomunikasi dan informasi di seluruh wilayah Indonesia untuk membangun masyarakat digital yang inklusif dan berdaya saing.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/layanan">
                    Jelajahi Layanan
                    <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl">
                  <Play size={20} className="fill-current" />
                  Video Profil
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "450ms" }}>
              {stats.map((stat, index) => (
                <div key={stat.label} className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Layanan Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                Program & Layanan Unggulan
              </h2>
              <p className="text-muted-foreground">
                Berbagai program strategis untuk mewujudkan Indonesia yang terkoneksi secara digital.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="glass-card rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="glass-card rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ada Pertanyaan? <span className="gradient-text">Hubungi Kami</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Tim kami siap membantu Anda dengan informasi seputar layanan dan program BAKTI Komdigi.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontak">
                  Hubungi Kami
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
