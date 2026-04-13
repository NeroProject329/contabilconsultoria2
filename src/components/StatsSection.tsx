"use client";

import { motion } from "framer-motion";
import { Users, Percent, ShieldCheck, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "16M+", label: "Clientes Atendidos" },
  { icon: Percent, value: "98%", label: "Desconto Máximo" },
  { icon: ShieldCheck, value: "100%", label: "Seguro e Confiável" },
  { icon: Clock, value: "5 Anos", label: "No Mercado" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{  y: 30 }}
          whileInView={{  y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge mb-4">Confiança, Segurança, Eficiência</span>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Com segurança, nossa equipe especializada estará sempre ao seu lado para orientá-lo e garantir que você tome as melhores decisões.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6 text-center"
              initial={{  y: 40 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading text-3xl font-bold text-foreground">{stat.value}</h3>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
