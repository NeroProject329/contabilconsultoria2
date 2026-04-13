"use client";

import { motion } from "framer-motion";
import step1Img from "@/assets/step1.jpg";
import step2Img from "@/assets/step2.jpg";
import step3Img from "@/assets/step3.jpg";

const steps = [
  {
    number: 1,
    title: "Alcance sua liberdade econômica",
    description: "Facilite o processo sem a necessidade de realizar chamadas telefônicas e aproveite descontos justos.",
    image: step1Img,
  },
  {
    number: 2,
    title: "Acompanhe seu status",
    description: "Veja quem consultou seu nome e mantenha-se atualizado sobre a situação, tudo de forma totalmente grátis.",
    image: step2Img,
  },
  {
    number: 3,
    title: "Explore as soluções",
    description: "Confira as soluções que temos para você e deseje uma vida livre de preocupações.",
    image: step3Img,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-badge mb-4">Passo a Passo</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4">
            Como funciona
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            Simples, rápido e transparente. Veja como é fácil resolver sua situação financeira.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="glass-card overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <div className="img-hover-zoom img-shine relative rounded-none">
                <img
                  src={step.image.src}
                  alt={step.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute top-4 left-4 step-number z-10">
                  {step.number}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
