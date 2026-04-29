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
  ShieldCheck,
  Database,
  LockKeyhole,
  Users,
  Cookie,
  ClipboardCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade | Contabilconsultoria",
  description:
    "Política de Privacidade da Borges Ferreira Consultoria Contabil e Empresarial LTDA.",
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

const privacySections = [
  {
    icon: Database,
    title: "1. Informações que podemos coletar",
    content: [
      "Podemos coletar informações fornecidas diretamente pelo usuário, como nome, telefone, e-mail, CPF, dados de contato e demais informações necessárias para atendimento, análise e orientação.",
      "Também podemos coletar informações técnicas de navegação, como endereço IP, tipo de dispositivo, navegador utilizado, páginas acessadas e interações realizadas no site.",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "2. Como utilizamos seus dados",
    content: [
      "As informações coletadas podem ser utilizadas para realizar atendimento, responder solicitações, analisar possibilidades de solução, entrar em contato com o usuário e melhorar a experiência no site.",
      "Também podemos utilizar os dados para cumprir obrigações legais, regulatórias, contratuais e para proteger os direitos da empresa e dos usuários.",
    ],
  },
  {
    icon: Users,
    title: "3. Compartilhamento de informações",
    content: [
      "Os dados poderão ser compartilhados apenas quando necessário para execução dos serviços, cumprimento de obrigações legais, prevenção de fraudes, proteção de direitos ou mediante autorização do usuário.",
      "Não comercializamos dados pessoais dos usuários.",
    ],
  },
  {
    icon: LockKeyhole,
    title: "4. Segurança dos dados",
    content: [
      "Adotamos medidas técnicas e organizacionais para proteger as informações contra acesso não autorizado, alteração, divulgação ou destruição indevida.",
      "Apesar dos esforços de segurança, nenhum ambiente digital é completamente livre de riscos. Por isso, recomendamos que o usuário também proteja seus dados e dispositivos.",
    ],
  },
  {
    icon: Cookie,
    title: "5. Cookies e tecnologias semelhantes",
    content: [
      "O site poderá utilizar cookies e tecnologias semelhantes para melhorar a navegação, analisar desempenho, personalizar conteúdos e entender como os visitantes interagem com as páginas.",
      "O usuário pode configurar seu navegador para bloquear ou excluir cookies, mas isso pode afetar algumas funcionalidades do site.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "6. Direitos do titular dos dados",
    content: [
      "Nos termos da Lei Geral de Proteção de Dados, o usuário pode solicitar confirmação de tratamento, acesso, correção, exclusão, portabilidade ou informações sobre o uso de seus dados pessoais.",
      "As solicitações relacionadas a dados pessoais podem ser feitas pelo e-mail informado nesta página.",
    ],
  },
];

export default function PoliticaDePrivacidadePage() {
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
              Privacidade e segurança
            </span>

            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight mt-5 mb-5">
              Política de Privacidade
            </h1>

            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              Esta Política de Privacidade explica como coletamos, utilizamos,
              armazenamos e protegemos as informações dos usuários que acessam
              nosso site ou entram em contato conosco.
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
              Dados da empresa
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
            {privacySections.map(({ icon: Icon, title, content }) => (
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
              Fale conosco
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Para dúvidas sobre esta Política de Privacidade ou para solicitar
              informações sobre seus dados pessoais, entre em contato pelos
              canais abaixo:
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