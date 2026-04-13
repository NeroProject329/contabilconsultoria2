"use client";

import { motion } from "framer-motion";
import { openZap } from "@/lib/zap-api";
const CTASection = () => {
  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-foreground/5 backdrop-blur-sm" />
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl animate-float" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Pronto para ficar{" "}
            <span className="text-accent">no azul?</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Descubra as soluções exclusivas disponíveis para você agora mesmo.
          </p>
          <motion.button
            className="btn-primary-hero bg-accent hover:bg-accent/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => void openZap("Olá! Quero consultar grátis agora.")}
          >
            Consultar Grátis Agora
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
