import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Building2,
  FileText,
  Mail,
  MapPin,
  Phone,
  Scale,
  CheckCircle,
  AlertCircle,
  ShieldCheck,
  MessageCircle,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso | Contabilconsultoria",
  description:
    "Termos de Uso da Borges Ferreira Consultoria Contabil e Empresarial LTDA.",
};

const companyInfo = [
  {
    icon: Building2,
    label: "Razão Social",
    value: "Borges Ferreira Consultoria Contabil e Empresarial LTDA",
  },
  {
    icon: FileText,
    label: "CNPJ",
    value: "57.924.057/0001-02",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value:
      "Avenida Manoel Monteiro - Lado Par, 390, Quadra15 Lote 21 Andar 2, Vila Jardim Salvador - Trindade/Trindade, CEP: 75388-455",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@contabilconsultoria.com",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(62) 98583-8656",
  },
];

const termsSections = [
  {
    icon: CheckCircle,
    title: "1. Aceitação dos termos",
    content: [
      "Ao acessar este site, utilizar nossos canais de atendimento ou solicitar informações, o usuário declara que leu, compreendeu e concorda com estes Termos de Uso.",
      "Caso não concorde com alguma condição, recomendamos que não utilize o site ou os serviços oferecidos por meio dele.",
    ],
  },
  {
    icon: Scale,
    title: "2. Sobre os serviços",
    content: [
      "A Borges Ferreira Consultoria Contabil e Empresarial LTDA atua com consultoria, atendimento, orientação e intermediação de soluções conforme as necessidades apresentadas pelo usuário.",
      "As informações exibidas no site possuem caráter informativo e comercial, podendo ser atualizadas, alteradas ou removidas a qualquer momento.",
    ],
  },
  {
    icon: AlertCircle,
    title: "3. Condições e disponibilidade",
    content: [
      "A disponibilidade de soluções, condições, descontos, prazos ou benefícios pode variar conforme análise, perfil do usuário, regras de terceiros, parceiros, credores ou instituições relacionadas.",
      "Nenhuma informação exibida no site deve ser interpretada como garantia absoluta de aprovação, desconto, resultado financeiro ou contratação.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "4. Responsabilidades do usuário",
    content: [
      "O usuário se compromete a fornecer informações verdadeiras, completas e atualizadas quando solicitado.",
      "O uso indevido do site, o envio de dados falsos, a tentativa de fraude, invasão, cópia indevida ou qualquer prática ilícita poderá resultar na suspensão do atendimento e adoção das medidas cabíveis.",
    ],
  },
  {
    icon: MessageCircle,
    title: "5. Atendimento e comunicação",
    content: [
      "O contato com o usuário poderá ocorrer por telefone, e-mail, WhatsApp ou outros canais informados no momento do atendimento.",
      "Ao enviar seus dados, o usuário autoriza o contato para continuidade do atendimento, envio de informações, confirmação de dados e apresentação de soluções relacionadas à solicitação feita.",
    ],
  },
  {
    icon: FileText,
    title: "6. Propriedade intelectual",
    content: [
      "Todos os textos, imagens, marcas, elementos visuais, estrutura, layout, identidade e demais conteúdos presentes no site pertencem à empresa ou são utilizados mediante autorização/licença.",
      "É proibida a cópia, reprodução, distribuição, modificação ou uso comercial do conteúdo sem autorização prévia.",
    ],
  },
  {
    icon: RefreshCw,
    title: "7. Alterações dos termos",
    content: [
      "Estes Termos de Uso poderão ser atualizados a qualquer momento para refletir mudanças nos serviços, no site, na legislação ou nas práticas da empresa.",
      "A versão mais recente estará sempre disponível nesta página.",
    ],
  },
];

export default function TermosDeUsoPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <section className="hero-gradient relative overflow-hidden py-20 sm:py-24">
        <div className="absolute top-10 left-10 w-40 md:w-72 h-40 md:h-72 rounded-full bg-primary-foreground/5 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-52 md:w-96 h-52 md:h-96 rounded-full bg-primary-foreground/5 blur-3xl animate-float" />

        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-foreground/85 hover:text-accent transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o início
          </Link>

          <div className="max-w-3xl">
            <span className="section-badge bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
              Regras de utilização
            </span>

            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight mt-5 mb-5">
              Termos de Uso
            </h1>

            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              Estes Termos de Uso estabelecem as regras para acesso,
              navegação, utilização do site e relacionamento inicial com a
              Borges Ferreira Consultoria Contabil e Empresarial LTDA.
            </p>

            <p className="text-primary-foreground/70 text-sm mt-5">
              Última atualização: 29 de abril de 2026.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="glass-card p-6 md:p-8 mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Identificação da empresa
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {companyInfo.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl bg-background/70 border border-border/60 p-4"
                >
                  <div className="flex items-center gap-2 text-primary font-bold mb-2">
                    <Icon className="w-5 h-5" />
                    {label}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {termsSections.map(({ icon: Icon, title, content }) => (
              <article key={title} className="glass-card p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">
                      {title}
                    </h2>

                    <div className="space-y-3">
                      {content.map((text) => (
                        <p
                          key={text}
                          className="text-muted-foreground leading-relaxed"
                        >
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="glass-card p-6 md:p-8 mt-8 border-accent/30">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
              Contato
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Para dúvidas sobre estes Termos de Uso, entre em contato pelos
              canais oficiais:
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:contato@contabilconsultoria.com"
                className="btn-primary-solution inline-flex justify-center"
              >
                contato@contabilconsultoria.com
              </a>

              <a
                href="tel:+5562985838656"
                className="btn-primary-solution inline-flex justify-center bg-accent hover:bg-accent/90"
              >
                (62) 98583-8656
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}