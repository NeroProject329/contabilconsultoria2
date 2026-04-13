"use client";

import { motion } from "framer-motion";
import { Shield, Zap, CheckCircle } from "lucide-react";
import heroWomanMobile from "@/assets/hero-woman-mobile.png";
import heroWomanDesktop from "@/assets/hero-woman-desktop.png";
import { openZap } from "@/lib/zap-api";


const HeroSection = () => {
  return (
    <section className="hero-gradient relative min-h-[100svh] flex items-center overflow-hidden pt-10 lg:pt-0">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-40 md:w-72 h-40 md:h-72 rounded-full bg-primary-foreground/5 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-52 md:w-96 h-52 md:h-96 rounded-full bg-primary-foreground/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-5 sm:px-6 py-6 pt-4 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-accent text-xl sm:text-2xl mb-2 font-heading font-bold italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Exclusivos
            </motion.p>

             <motion.h1
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Volte para o Azul
              <br />
              Hoje Mesmo!
            </motion.h1>

            <motion.p
              className="text-primary-foreground/80 text-lg mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Verifique as soluções disponíveis para você de forma rápida, prática e 100% online.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <button
  className="btn-primary-hero bg-background text-primary hover:bg-background/90"
  onClick={() => void openZap("Olá! Quero consultar grátis agora.")}
>
  Consultar Grátis
</button>
              <button
  className="btn-outline-hero"
  onClick={() => void openZap("Olá! Quero saber mais sobre as soluções disponíveis.")}
>
  Saiba Mais
</button>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 sm:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">100% Seguro</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-medium">Rápido</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Confiável</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center order-last lg:order-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
              {/* Rotating dashed border + dots container */}
              <div className="absolute inset-0 animate-[spin_40s_linear_infinite]">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-foreground/30" />
                {/* Decorative dots on the orbit */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-primary-foreground/60" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-primary-foreground/60" />
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-primary-foreground/60" />
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-primary-foreground/60" />
                <div className="absolute top-[15%] right-[10%] w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-accent/80" />
                <div className="absolute bottom-[15%] left-[10%] w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-accent/80" />
                <div className="absolute top-[15%] left-[10%] w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-primary-foreground/40" />
                <div className="absolute bottom-[15%] right-[10%] w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-primary-foreground/40" />
              </div>
              
              {/* Inner solid circle with image */}
              <div className="absolute inset-4 sm:inset-5 lg:inset-8 rounded-full overflow-hidden bg-primary/30 shadow-2xl">
                <img
                  src={heroWomanDesktop.src}
                  alt="Mulher segurando celular"
                  className="hidden sm:block w-full h-full object-cover object-top"
                  width={800}
                  height={800}
                />
                <img
                  src={heroWomanMobile.src}
                  alt="Mulher segurando celular"
                  className="block sm:hidden w-full h-full object-cover object-top"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(0, 0%, 100%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
