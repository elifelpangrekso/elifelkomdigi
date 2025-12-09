import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
  { icon: Youtube, href: "#", label: "Youtube", color: "hover:bg-red-600" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
];

export const SocialLinks = () => {
  return (
    <div className="glass-card rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
      <h3 className="font-semibold text-foreground mb-4">Ikuti Kami</h3>
      <div className="flex items-center gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className={`w-11 h-11 rounded-lg bg-secondary flex items-center justify-center text-foreground transition-all duration-300 hover:scale-110 hover:text-foreground ${social.color}`}
          >
            <social.icon size={20} />
          </a>
        ))}
      </div>
    </div>
  );
};
