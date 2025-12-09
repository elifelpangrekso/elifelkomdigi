export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  views: number;
  category: string;
}

export const newsData: NewsItem[] = [
  {
    id: "market-sounding-2025",
    title: "Penayangan Pengumuman Undangan Penjajakan Pasar (Market Sounding)",
    excerpt: "Berdasarkan hasil koordinasi antara Badan Aksesibilitas Telekomunikasi dan Informasi (BAKTI) – Kementerian Komunikasi dan Digital terkait program pemerataan infrastruktur digital.",
    content: "Berdasarkan hasil koordinasi antara Badan Aksesibilitas Telekomunikasi dan Informasi (BAKTI) – Kementerian Komunikasi dan Digital terkait program pemerataan infrastruktur digital di seluruh Indonesia.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop",
    date: "25 November 2025",
    views: 1,
    category: "Pengumuman",
  },
  {
    id: "pengadaan-satelit-bts",
    title: "Pengadaan Sewa Kapasitas Satelit (Leased Capacity Satellite) dan Kapasitas Backbone serta Perangkat Pendukungnya BTS 4G",
    excerpt: "Dalam rangka pemenuhan kebutuhan kapasitas satelit dalam mendukung terselenggaranya operasional dan pemeliharaan prasarana bidang teknologi informasi dan komunikasi BTS Lastmile.",
    content: "Dalam rangka pemenuhan kebutuhan kapasitas satelit dalam mendukung terselenggaranya operasional dan pemeliharaan prasarana bidang teknologi informasi dan komunikasi BTS Lastmile, diumumkan akan dilakukan Pengadaan Sewa Kapasitas Satelit.",
    image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&h=450&fit=crop",
    date: "29 Oktober 2025",
    views: 7,
    category: "Pengadaan",
  },
  {
    id: "pelatihan-literasi-tik",
    title: "Pelatihan Literasi TIK di Madrasah Aliyah As-Sakinah Bantimurung, Kabupaten Maros, Sulawesi Selatan",
    excerpt: "Badan Aksesibilitas Telekomunikasi dan Informasi (BAKTI) Komdigi terus berkomitmen menghadirkan pemerataan akses digital di seluruh Indonesia.",
    content: "Badan Aksesibilitas Telekomunikasi dan Informasi (BAKTI) Komdigi terus berkomitmen menghadirkan pemerataan akses digital di seluruh Indonesia melalui program pelatihan literasi TIK.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=450&fit=crop",
    date: "28 Oktober 2025",
    views: 3,
    category: "Berita",
  },
  {
    id: "dniks-bakti-komdigi",
    title: "Gandeng BAKTI Komdigi, DNIKS Dorong Teknologi Digital untuk Kesejahteraan Sosial",
    excerpt: "Dewan Nasional Indonesia untuk Kesejahteraan Sosial (DNIKS) menggandeng Badan Aksesibilitas Telekomunikasi dan Informasi (BAKTI) Komdigi terkait peningkatan keterampilan vokasi masyarakat.",
    content: "JAKARTA - Dewan Nasional Indonesia untuk Kesejahteraan Sosial (DNIKS) menggandeng Badan Aksesibilitas Telekomunikasi dan Informasi (BAKTI) Komdigi terkait peningkatan keterampilan vokasi masyarakat dalam pemanfatan teknologi digital.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=450&fit=crop",
    date: "26 September 2025",
    views: 12,
    category: "Siaran Pers",
  },
  {
    id: "gubernur-sulbar-audiensi",
    title: "Dorong Pemerataan Digital, Gubernur Sulbar Audiensi ke BAKTI Komdigi",
    excerpt: "Dalam upaya mewujudkan transformasi digital yang merata hingga ke pelosok negeri, Gubernur Sulawesi Barat menyambangi Kantor BAKTI Komdigi di Jakarta.",
    content: "Dalam upaya mewujudkan transformasi digital yang merata hingga ke pelosok negeri, Gubernur Sulawesi Barat, Suhardi Duka, menyambangi Kantor BAKTI Komdigi di Jakarta.",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&h=450&fit=crop",
    date: "25 September 2025",
    views: 10,
    category: "Siaran Pers",
  },
  {
    id: "palapa-ring-tengah",
    title: "Palapa Ring Paket Tengah Selesai Lebih Cepat dari Target",
    excerpt: "Proyek backbone fiber optik di wilayah tengah Indonesia rampung 3 bulan lebih awal dari jadwal yang telah ditetapkan.",
    content: "Proyek backbone fiber optik di wilayah tengah Indonesia rampung 3 bulan lebih awal dari jadwal. Pencapaian ini menunjukkan komitmen BAKTI dalam mempercepat pemerataan infrastruktur digital.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop",
    date: "28 November 2024",
    views: 156,
    category: "Berita",
  },
  {
    id: "starlink-kerjasama",
    title: "Kerja Sama BAKTI dengan Starlink untuk Daerah Terpencil",
    excerpt: "Kolaborasi strategis untuk mempercepat penyediaan internet satelit di wilayah yang sulit dijangkau jaringan terestrial.",
    content: "Kolaborasi strategis untuk mempercepat penyediaan internet satelit di wilayah yang sulit dijangkau jaringan terestrial. Kerjasama ini diharapkan dapat mempercepat pemerataan akses internet.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=450&fit=crop",
    date: "1 Desember 2024",
    views: 89,
    category: "Berita",
  },
  {
    id: "bts-4g-ntb",
    title: "Pembangunan BTS 4G di Nusa Tenggara Barat Capai 95%",
    excerpt: "Program pembangunan infrastruktur telekomunikasi di NTB hampir rampung, masyarakat di daerah 3T segera menikmati akses internet.",
    content: "Program pembangunan infrastruktur telekomunikasi di NTB hampir rampung. Masyarakat di daerah tertinggal, terdepan, dan terluar akan segera menikmati akses internet berkualitas.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=450&fit=crop",
    date: "15 November 2024",
    views: 45,
    category: "Berita",
  },
];

export const newsCategories = [
  "Semua",
  "Berita",
  "Siaran Pers",
  "Pengumuman",
  "Pengadaan",
  "Pengetahuan",
  "Baktizen",
];
