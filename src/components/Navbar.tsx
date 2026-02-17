import { Search, Phone, ChefHat } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { name: "Accueil", href: "#accueil" },
    { name: "Menu", href: "#nos-offres" },
    { name: "À Propos", href: "#a-propos" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Navbar Container with Glassmorphism */}
      <div className="relative">
        {/* Background with blur */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d152c]/95 via-[#0d152c]/90 to-[#0d152c]/95 backdrop-blur-2xl border-b border-[#0cd35f]/20" />

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0cd35f]/5 to-transparent" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo Section */}
            <motion.a
              href="/"
              className="flex items-center gap-4 group relative z-10"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              {/* Logo Icon with animated glow */}
              <div className="relative">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0cd35f] via-[#0aa34a] to-[#0b918a] flex items-center justify-center shadow-2xl relative overflow-hidden"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <ChefHat
                    className="w-7 h-7 text-white relative z-10"
                    strokeWidth={2.5}
                  />
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
                {/* Pulsing glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0cd35f] to-[#0b918a] blur-xl opacity-40"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>

              {/* Logo Text */}
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black bg-gradient-to-r from-[#0cd35f] via-[#0aa34a] to-[#0cd35f] bg-clip-text text-transparent">
                    KB
                  </span>
                  <span className="text-3xl font-black text-white">RESTO</span>
                </div>
                <div className="flex items-center gap-2 -mt-1">
                  <div className="h-px w-8 bg-gradient-to-r from-[#0cd35f] to-transparent" />
                  <span className="text-[9px] font-bold text-[#0cd35f] tracking-[0.2em] uppercase">
                    Kalemie
                  </span>
                </div>
              </div>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                  onHoverStart={() => setHoveredItem(item.name)}
                  onHoverEnd={() => setHoveredItem(null)}
                  className="relative"
                >
                  <a
                    href={item.href}
                    className="relative px-6 py-3 text-white/80 font-semibold text-[15px] hover:text-white transition-colors duration-300 block"
                  >
                    {item.name}

                    {/* Hover background */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-white/5"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: hoveredItem === item.name ? 1 : 0,
                        scale: hoveredItem === item.name ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Underline */}
                    <motion.div
                      className="absolute bottom-1 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r from-[#0cd35f] via-[#0aa34a] to-[#0cd35f]"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{
                        scaleX: hoveredItem === item.name ? 1 : 0,
                        opacity: hoveredItem === item.name ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Search Button - Desktop */}
              <motion.button
                whileHover={{ scale: 1.08, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex w-12 h-12 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#0cd35f]/40 text-white/60 hover:text-[#0cd35f] transition-all duration-300 backdrop-blur-sm"
              >
                <Search size={20} strokeWidth={2} />
              </motion.button>

              {/* Call Button */}
              <motion.a
                href="tel:+243"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative group overflow-hidden"
              >
                <div className="relative flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#0cd35f] via-[#0aa34a] to-[#0cd35f] rounded-xl font-bold text-white shadow-lg shadow-[#0cd35f]/20 hover:shadow-xl hover:shadow-[#0cd35f]/40 transition-all duration-300">
                  <Phone size={18} strokeWidth={2.5} />
                  <span className="hidden sm:inline text-[15px]">Réserver</span>

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0cd35f] to-[#0b918a] text-white shadow-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
