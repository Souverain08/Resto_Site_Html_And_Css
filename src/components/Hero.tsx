import { motion } from "framer-motion";
import banniere2 from "../assets/banniere2.jpg";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${banniere2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0d152c]/90 backdrop-blur-[2px]"></div>
        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(12, 211, 95, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          Restaurant{" "}
          <span className="gradient-text inline-block">Multi-Saveurs</span>{" "}
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/90"
          >
            À Goût Dans La Ville De{" "}
          </motion.span>
          <span className="gradient-text inline-block">KALEMIE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Découvrez une expérience culinaire unique où tradition et modernité se
          rencontrent
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-[#0cd35f] to-[#0aa34a] text-white font-bold text-lg rounded-full overflow-hidden glow-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Commander maintenant</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>

          <motion.button
            className="group relative px-8 py-4 bg-transparent border-2 border-[#0b918a] text-[#0b918a] font-bold text-lg rounded-full overflow-hidden hover:border-[#0cd35f] hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#0b918a] to-[#0cd35f]"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
            />
            <span className="relative z-10">Réserver</span>
          </motion.button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-8 h-8 border-2 border-[#0cd35f] rounded-full flex items-center justify-center">
            <motion.div
              className="w-2 h-2 bg-[#0cd35f] rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
