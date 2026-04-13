"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import solutionsImg from "@/assets/solutions-person.jpg";
import { openZap } from "@/lib/zap-api";
const features = [
  "Processo 100% online",
  "Dados protegidos",
  "Resultado imediato",
  "Sem burocracia",
];

const SolutionsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ x: -40 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="img-hover-zoom img-shine">
              <img
                src={solutionsImg.src}
                alt="Cliente satisfeito"
                className="w-full max-w-md mx-auto object-cover"
                loading="lazy"
                width={600}
                height={700}
              />
            </div>
            <motion.div
              className="absolute -bottom-4 right-4 sm:-right-4 md:right-8 glass-card p-3 sm:p-4"
              initial={{  scale: 0.8 }}
              whileInView={{scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-sm text-muted-foreground">Economia média</p>
              <p className="font-heading text-2xl font-bold text-primary">R$ 5.000+</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 40 }}
            whileInView={{  x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">Soluções Especiais</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
              Conheça nossas soluções{" "}
              <span className="text-gradient">especiais e confiáveis!</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Com nosso serviço especializado, proporcionamos soluções viáveis para tornar suas obrigações mais acessíveis.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-2"
                  initial={{  x: 20 }}
                  whileInView={{  x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <button className="btn-primary-solution" onClick={() => void openZap("Olá! Quero ver as soluções disponíveis.")}>
  Ver Soluções Disponíveis
</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
