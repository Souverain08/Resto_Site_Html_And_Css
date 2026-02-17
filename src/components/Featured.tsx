import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import banniere6 from "../assets/banniere6.jpg";
import banniere7 from "../assets/Banniere7.jpg";

const Featured = () => {
  const featuredItems = [
    {
      title: "PIZZA",
      content:
        "Découvrez nos pizzas artisanales préparées avec des ingrédients frais et une passion pour le goût authentique. Un voyage culinaire à chaque bouchée.",
      image: banniere6,
      reversed: false,
    },
    {
      title: "SAVEURS LOCALES",
      content:
        "Explorez la richesse des saveurs de Kalemie à travers nos plats traditionnels revisités par nos chefs experts.",
      image: banniere7,
      reversed: true,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0cd35f]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0b918a]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        {featuredItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: item.reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col ${item.reversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}
          >
            <motion.div
              className="flex-1 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#0cd35f]/20 to-[#0b918a]/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#0cd35f] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#0cd35f] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            <motion.div
              className="flex-1 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <Sparkles className="text-[#0cd35f]" size={24} />
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                  {item.title}
                </h2>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                {item.content}
              </p>

              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-[#0cd35f] to-[#0aa34a] text-white font-bold rounded-xl overflow-hidden shadow-lg hover:shadow-xl glow-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Découvrir le met
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
