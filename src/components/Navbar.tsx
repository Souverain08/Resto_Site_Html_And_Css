import { Search, Phone, ChefHat, X, Menu, MapPin, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Accueil", href: "#accueil" },
    { name: "Menu", href: "#nos-offres" },
    { name: "À Propos", href: "#a-propos" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-2 bg-nav-scrolled backdrop-blur-xl"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="relative w-full mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <motion.a
              href="/"
              className="flex items-center gap-4 group relative z-10"
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative">
                <motion.div
                  className={`relative overflow-hidden rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 ${
                    isScrolled ? "w-10 h-10" : "w-12 h-12"
                  }`}
                  style={{
                    background:
                      "linear-gradient(135deg, #0cd35f 0%, #0aa34a 100%)",
                  }}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                >
                  <ChefHat
                    className={`${
                      isScrolled ? "w-5 h-5" : "w-6 h-6"
                    } text-white relative z-10`}
                    strokeWidth={2.5}
                  />
                  <div className="absolute inset-0 bg-white/20" />
                </motion.div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-2xl font-black text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #0cd35f, #0cd35f)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    KB
                  </span>
                  <span className="text-2xl font-black text-white">RESTO</span>
                </div>
              </div>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative px-5 py-2 group block"
                >
                  <span className="relative z-10 text-[15px] font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                    {item.name}
                  </span>
                  {hoveredItem === item.name && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 rounded-lg bg-white/10 backdrop-blur-sm"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-5">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-white/10 hover:bg-[#0cd35f] text-white transition-colors border border-white/10"
              >
                <Search size={18} strokeWidth={2.5} />
              </motion.button>

              <motion.a
                href="tel:+243"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`hidden sm:inline relative group overflow-hidden rounded-full font-bold text-white shadow-lg transition-all duration-300 ${
                  isScrolled ? "px-5 py-2.5" : "px-6 py-3"
                }`}
                style={{
                  background: "linear-gradient(to right, #0cd35f, #0b918a)",
                }}
              >
                <div className="relative flex items-center gap-2 z-10">
                  <Phone size={16} className="fill-current" />
                  <span className="text-sm">Réserver</span>
                </div>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.a>

              {/* Mobile Menu Button - Visible ONLY on small screens */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed w-full inset-0 bg-black/70 backdrop-blur-sm lg:hidden z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] z-[70] bg-[#0d152c] border-l border-white/10 lg:hidden flex flex-col shadow-2xl"
            >
              <div className="p-6 flex items-center justify-between border-b border-white/10">
                <span className="text-xl font-bold text-white">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all active:scale-95"
                  >
                    <span className="text-lg font-medium">{item.name}</span>
                  </motion.a>
                ))}
              </div>

              <div className="p-6 border-t border-white/10 space-y-4">
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <MapPin size={16} className="text-[#0cd35f]" />
                  <span>Kalemie, RDC</span>
                </div>
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <Clock size={16} className="text-[#0cd35f]" />
                  <span>08:00 - 22:00</span>
                </div>
                <button
                  className="w-full py-3 mt-4 rounded-xl text-white font-bold transition-colors shadow-lg"
                  style={{ background: "#0cd35f" }}
                >
                  Réserver une table
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
