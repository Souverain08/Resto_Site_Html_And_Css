import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

const ReservationForm = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section
      id="contact"
      className="py-20 px-4 flex items-center justify-center bg-fixed bg-cover bg-center relative min-h-[600px]"
      style={{ backgroundImage: 'url("/src/assets/banniere5.jpg")' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>

      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(12, 211, 95, 0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 glass-premium p-12 rounded-3xl max-w-2xl w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
            <span className="gradient-text">Passer une commande</span>
          </h2>
          <p className="text-white/60">Remplissez le formulaire ci-dessous</p>
        </motion.div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="relative space-y-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <input
                type="text"
                placeholder="Votre nom complet"
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className={`w-full bg-white/10 border ${
                  focusedField === "name"
                    ? "border-[#0cd35f] ring-2 ring-[#0cd35f]/30"
                    : "border-white/20"
                } rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none transition-all`}
              />
            </motion.div>

            <motion.div
              className="relative space-y-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <input
                type="email"
                placeholder="exemple@gmail.com"
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={`w-full bg-white/10 border ${
                  focusedField === "email"
                    ? "border-[#0cd35f] ring-2 ring-[#0cd35f]/30"
                    : "border-white/20"
                } rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none transition-all`}
              />
            </motion.div>

            <motion.div
              className="relative space-y-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <input
                type="text"
                placeholder="Choisir un Menu"
                onFocus={() => setFocusedField("menu")}
                onBlur={() => setFocusedField(null)}
                className={`w-full bg-white/10 border ${
                  focusedField === "menu"
                    ? "border-[#0cd35f] ring-2 ring-[#0cd35f]/30"
                    : "border-white/20"
                } rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none transition-all`}
              />
            </motion.div>

            <motion.div
              className="relative space-y-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <input
                type="number"
                placeholder="Nombre de personnes"
                onFocus={() => setFocusedField("people")}
                onBlur={() => setFocusedField(null)}
                className={`w-full bg-white/10 border ${
                  focusedField === "people"
                    ? "border-[#0cd35f] ring-2 ring-[#0cd35f]/30"
                    : "border-white/20"
                } rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none transition-all`}
              />
            </motion.div>
          </div>

          <motion.button
            type="submit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-[#FF7A63] to-[#ff5a3d] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl glow-accent transition-all relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Send size={20} />
              Envoyer la commande
            </span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ReservationForm;
