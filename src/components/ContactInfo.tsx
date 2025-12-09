import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    title: "Alamat Kantor",
    content: "Centennial Tower Lt. 42-45, Jl. Gatot Subroto Kav. 24-25, Jakarta Selatan 12930",
  },
  {
    icon: Phone,
    title: "Telepon",
    content: "(021) 31936590",
  },
  {
    icon: Mail,
    title: "Email",
    content: "humas@baktikominfo.id",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin - Jumat: 08.00 - 17.00 WIB",
  },
];

export const ContactInfo = () => {
  return (
    <div className="space-y-6">
      {contactItems.map((item, index) => (
        <div
          key={item.title}
          className="glass-card rounded-xl p-5 flex items-start gap-4 animate-fade-in-up group hover:border-primary/30 transition-all duration-300"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
            <item.icon size={22} />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
