import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const sections = [
    {
      title: "Le Restaurant",
      links: ["A Propos", "Nos Services", "Carrières", "Presse"],
    },
    {
      title: "Nos Partenaires",
      links: ["Partenaires 1", "Partenaires 2", "Partenaires 3", "Affiliation"],
    },
    {
      title: "Liens Utiles",
      links: ["Aide", "Conditions", "Confidentialité", "Support"],
    },
    {
      title: "Nos Offres",
      links: ["Spéciaux", "Réductions", "Cartes Cadeaux", "Abonnements"],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook },
    { name: "Instagram", icon: Instagram },
    { name: "Twitter", icon: Twitter },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0d152c] to-[#0a0f1f] pt-20 pb-10 px-4 border-t border-[#0cd35f]/20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0cd35f]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h3 className="text-[#c3f5e0] font-bold mb-6 text-lg">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-white/60 hover:text-[#0cd35f] transition-colors relative inline-block group"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0cd35f] to-[#0b918a] group-hover:w-full transition-all duration-300" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider with gradient */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#0cd35f]/30 to-transparent mb-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 text-sm flex items-center gap-2"
          >
            © {new Date().getFullYear()} KB RESTO. Fait avec{" "}
            <Heart
              size={14}
              className="text-[#ff7a63] fill-current animate-pulse-glow"
            />{" "}
            Tous droits réservés.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-6"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-gradient-to-r hover:from-[#0cd35f] hover:to-[#0b918a] hover:border-transparent transition-all group"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
