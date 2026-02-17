import { motion } from "framer-motion";
import { Star } from "lucide-react";
import repas1 from "../assets/repas/repas1.jpg";
import repas2 from "../assets/repas/repas2.jpg";
import repas3 from "../assets/repas/repas3.jpg";
import repas9 from "../assets/repas/repas9.jpg";

const Menu = () => {
  const categories = [
    "Tous les Menus",
    "Petit Déjeuner",
    "Saveurs Africaines",
    "L'occident",
  ];

  const menuItems = [
    {
      id: 1,
      title: "Spécialité Maison",
      image: repas1,
      desc: "Un mélange unique de saveurs locales et internationales.",
      badge: "Populaire",
    },
    {
      id: 2,
      title: "Petit Déjeuner Royal",
      image: repas2,
      desc: "Commencez votre journée avec énergie et gourmandise.",
      badge: "Nouveau",
    },
    {
      id: 3,
      title: "Délice Africain",
      image: repas3,
      desc: "Le goût authentique du terroir, préparé avec soin.",
      badge: "Chef's Choice",
    },
    {
      id: 4,
      title: "Menu Gourmand",
      image: repas9,
      desc: "Une sélection raffinée pour les palais les plus exigeants.",
      badge: "Premium",
    },
  ];

  return (
    <section
      id="nos-offres"
      className="py-20 px-4 bg-[#0d152c] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0cd35f]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4"
        >
          <span className="gradient-text">Nos Variétés</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-center mb-12 text-lg"
        >
          Découvrez notre sélection de plats exceptionnels
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                i === 0
                  ? "bg-gradient-to-r from-[#0cd35f] to-[#0aa34a] text-white shadow-lg glow-primary"
                  : "glass text-white hover:border-[#0cd35f] border border-white/10"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card-premium group cursor-pointer"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-[#ff7a63] to-[#ff5a3d] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  <Star size={12} fill="currentColor" />
                  {item.badge}
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#0cd35f]/30 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#0cd35f] transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-4 text-[#0cd35f] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Découvrir
                  <span>→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
