"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Consegui resolver tudo com descontos incríveis! O processo foi super fácil e transparente. Recomendo a todos!",
    name: "Marcelle Santos",
    role: "Cliente desde 2023",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  },
  {
    text: "Finalmente consegui limpar meu nome! A equipe foi muito atenciosa e me ajudou a encontrar as melhores soluções.",
    name: "João Alves",
    role: "Empreendedor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    text: "Estava muito preocupada com minha situação, mas consegui resolver tudo rapidamente. Excelente serviço!",
    name: "Maria Oliveira",
    role: "Professora",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">Depoimentos</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            Junte-se aos mais de 16 milhões de brasileiros que já fizeram certo conosco.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              className="glass-card p-8"
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="img-hover-zoom img-shine w-12 h-12 rounded-full">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">{t.name}</h4>
                  <p className="text-muted-foreground text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
