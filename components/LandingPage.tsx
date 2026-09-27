"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { LandingAnimations } from "./LandingAnimations";
import { useWhatsApp } from "@/components/providers/WhatsAppProvider";

const WHATSAPP_MESSAGES = {
  header:
    "Olá! Gostaria de falar com um especialista sobre a minha situação financeira.",
  hero:
    "Olá! Quero entender quais opções estão disponíveis para a minha situação.",
  cta:
    "Olá! Gostaria de receber uma orientação sobre os próximos passos para organizar minha vida financeira.",
  floating:
    "Olá! Gostaria de falar com um especialista da Assessoria & Consulta.",
} as const;

const navItems = [
  ["Início", "#inicio"],
  ["Diferenciais", "#diferenciais"],
  ["Como funciona", "#processo"],
  ["Depoimentos", "#depoimentos"],
  ["Dúvidas", "#faq"],
  ["Contato", "#contato"],
] as const;

const benefits = [
  {
    icon: "users",
    title: "Atendimento Humano",
    description: "Você é ouvido com respeito, atenção e sem julgamentos.",
  },
  {
    icon: "shapes",
    title: "Análise Personalizada",
    description: "Cada orientação considera sua realidade e o seu momento.",
  },
  {
    icon: "spark",
    title: "Clareza e Agilidade",
    description: "Informações objetivas para você avançar sem complicação.",
  },
  {
    icon: "shield",
    title: "Segurança e Privacidade",
    description: "Seus dados são tratados com cuidado durante todo o atendimento.",
  },
  {
    icon: "target",
    title: "Melhor Caminho",
    description: "Você entende as opções e decide com mais tranquilidade.",
  },
];

const steps = [
  {
    icon: "message",
    title: "Conte sua situação",
    description: "Você explica o que precisa e compartilha as informações iniciais.",
  },
  {
    icon: "target",
    title: "Análise do caso",
    description: "Avaliamos o cenário para identificar possibilidades adequadas.",
  },
  {
    icon: "settings",
    title: "Orientação clara",
    description: "Apresentamos os caminhos disponíveis de forma simples e objetiva.",
  },
  {
    icon: "chart",
    title: "Acompanhamento",
    description: "Você recebe suporte para seguir cada etapa com mais segurança.",
  },
];

const testimonials = [
  {
    text: "Fui atendido com muita clareza e consegui entender melhor as opções para a minha situação.",
    name: "Marcelo Santos",
    role: "Cliente verificado",
    initials: "MS",
  },
  {
    text: "O atendimento foi humano, rápido e sem complicação. Me senti segura durante todo o processo.",
    name: "Juliana Oliveira",
    role: "Cliente verificada",
    initials: "JO",
  },
  {
    text: "Explicaram cada etapa com objetividade e me ajudaram a seguir pelo caminho mais adequado.",
    name: "Ricardo Almeida",
    role: "Cliente verificado",
    initials: "RA",
  },
];

const faqs = [
  {
    question: "Com quais situações vocês podem ajudar?",
    answer:
      "Analisamos cada caso individualmente para orientar sobre organização financeira, possibilidades de negociação e próximos passos.",
  },
  {
    question: "Como funciona o primeiro atendimento?",
    answer:
      "Começamos com uma conversa para entender sua situação, suas prioridades e o que você deseja resolver.",
  },
  {
    question: "O atendimento pode ser feito online?",
    answer:
      "Sim. Todo o processo pode acontecer de forma digital, com comunicação clara e suporte pelo WhatsApp.",
  },
  {
    question: "Em quanto tempo recebo uma orientação?",
    answer:
      "O prazo varia conforme a complexidade do caso e as informações disponíveis. Desde o início, você entende quais serão as próximas etapas.",
  },
  {
    question: "Meus dados ficam protegidos?",
    answer:
      "Sim. As informações são tratadas com confidencialidade e utilizadas somente para analisar e conduzir o atendimento.",
  },
  {
    question: "Vocês atendem pessoas de todo o Brasil?",
    answer:
      "Sim. O atendimento remoto permite orientar pessoas de diferentes regiões do país com praticidade e segurança.",
  },
];

function Icon({ name, size = 24 }: { name: string; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<string, ReactNode> = {
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    shapes: (
      <>
        <circle cx="7" cy="7" r="3" />
        <rect x="12" y="4" width="7" height="7" rx="2" />
        <path d="m8 20 4-7 4 7Z" />
      </>
    ),
    spark: (
      <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z" />
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3M22 12h-3M12 22v-3M2 12h3" />
      </>
    ),
    message: (
      <>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3v-7a4 4 0 0 1-1-3V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4Z" />
        <path d="M7 9h.01M12 9h.01M17 9h.01" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06-2.83 2.83-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 .6 1.65 1.65 0 0 0-.34 1.08V21h-4v-.08A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06-2.83-2.83.06-.06A1.65 1.65 0 0 0 3.6 15a1.65 1.65 0 0 0-.6-1 1.65 1.65 0 0 0-1.08-.34H2v-4h.08A1.65 1.65 0 0 0 3.6 8a1.65 1.65 0 0 0-.33-1.82l-.06-.06 2.83-2.83.06.06A1.65 1.65 0 0 0 8 3.6a1.65 1.65 0 0 0 1-.6 1.65 1.65 0 0 0 .34-1.08V2h4v.08A1.65 1.65 0 0 0 15 3.6a1.65 1.65 0 0 0 1.82-.33l.06-.06 2.83 2.83-.06.06A1.65 1.65 0 0 0 19.4 8c.14.39.36.74.66 1 .3.26.68.4 1.08.4H21v4h-.08A1.65 1.65 0 0 0 19.4 15Z" />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
        <path d="m4 7 5-4 6 6 7-6" />
      </>
    ),
    star: <path d="m12 2.8 2.7 5.47 6.03.88-4.36 4.25 1.03 6-5.4-2.84-5.4 2.84 1.03-6-4.36-4.25 6.03-.88Z" />,
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    phone: (
      <>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.8a2 2 0 0 1-.45 2.11L8.07 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.84.55 2.8.68A2 2 0 0 1 22 16.92Z" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    building: (
      <>
        <path d="M3 21h18" />
        <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
        <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    check: <path d="m5 12 4 4L19 6" />,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

type RevealVariant =
  | "up"
  | "down"
  | "left"
  | "right"
  | "scale"
  | "pop"
  | "rotate-left"
  | "rotate-right"
  | "blur"
  | "clip-left"
  | "clip-right";

function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}) {
  return (
    <div
      className={`reveal motion-item ${className}`}
      data-motion={variant}
      data-delay={delay}
    >
      {children}
    </div>
  );
}

type CountUpProps = {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

function CountUp({
  target,
  prefix = "",
  suffix = "",
  duration = 1500,
}: CountUpProps) {
  const elementRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const currentValueRef = useRef(0);

  const [value, setValue] = useState(0);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const animateTo = (
      destination: number,
      animationDuration: number,
    ) => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      if (reduceMotion) {
        currentValueRef.current = destination;
        setValue(destination);
        return;
      }

      const initialValue = currentValueRef.current;
      const difference = destination - initialValue;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;

        const progress = Math.min(
          elapsed / animationDuration,
          1,
        );

        const easedProgress =
          1 - Math.pow(1 - progress, 4);

        const nextValue = Math.round(
          initialValue + difference * easedProgress,
        );

        currentValueRef.current = nextValue;
        setValue(nextValue);

        if (progress < 1) {
          frameRef.current =
            window.requestAnimationFrame(animate);
        } else {
          frameRef.current = null;
          currentValueRef.current = destination;
          setValue(destination);
        }
      };

      frameRef.current =
        window.requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateTo(target, duration);
        } else {
          animateTo(
            0,
            Math.max(550, duration * 0.58),
          );
        }
      },
      {
        threshold: 0.4,
        rootMargin: "-5% 0px -5% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(
          frameRef.current,
        );
      }
    };
  }, [duration, target]);

  return (
    <strong ref={elementRef}>
      {prefix}
      {value.toLocaleString("pt-BR")}
      {suffix}
    </strong>
  );
}

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Assessoria & Consulta - início">
      <span className="brand-mark">A</span>
      <span>Assessoria &amp; Consulta</span>
    </a>
  );
}

function Header() {
  const { loading, open: openWhatsApp } = useWhatsApp();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavigation = (
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) => {
  event.preventDefault();

  const target = document.querySelector<HTMLElement>(href);

  if (!target) return;

  const headerHeight = 76;

  /*
   * Em Diferenciais, avançamos mais 130px.
   * Isso esconde completamente os cards do hero.
   */
  const extraOffset = href === "#diferenciais" ? 90 : 0;

  const targetPosition =
    target.getBoundingClientRect().top +
    window.scrollY -
    headerHeight +
    extraOffset;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });

  window.history.replaceState(null, "", href);
  setOpen(false);
};

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
       {navItems.map(([label, href]) => (
  <a
    key={href}
    href={href}
    onClick={(event) => handleNavigation(event, href)}
  >
    {label}
  </a>
))}
        </nav>
        <a
          className="button button-small header-cta"
          href="#whatsapp"
          aria-busy={loading}
          aria-disabled={loading}
          onClick={(event) => {
            event.preventDefault();
            openWhatsApp(WHATSAPP_MESSAGES.header);
          }}
        >
          {loading ? "Carregando..." : "Consultar agora"}
          <Icon name="arrow" size={16} />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
      <div className={`mobile-panel ${open ? "is-open" : ""}`}>
        <nav aria-label="Navegação mobile">
       {navItems.map(([label, href]) => (
  <a
    key={href}
    href={href}
    onClick={(event) => handleNavigation(event, href)}
  >
    {label}
  </a>
))}
          <a
            href="#whatsapp"
            aria-busy={loading}
            aria-disabled={loading}
            onClick={(event) => {
              event.preventDefault();
              setOpen(false);
              openWhatsApp(WHATSAPP_MESSAGES.header);
            }}
          >
            {loading ? "Carregando..." : "Falar com um especialista"}
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const { loading, open } = useWhatsApp();

  return (
    <section className="hero" id="inicio">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-content">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">Consultoria </div>
          <h1>
            <span>Aproveite descontos </span>
            <span>exclusivos e</span>
            <strong>ofertas únicas.</strong>
          </h1>
          <p>
            Descontos de até 98%. Fique hoje mesmo no Azul Verifique as ofertas disponíveis para você.
          </p>
          <div className="hero-actions">
            <a
              className="button button-light"
              href="#whatsapp"
              aria-busy={loading}
              aria-disabled={loading}
              onClick={(event) => {
                event.preventDefault();
                open(WHATSAPP_MESSAGES.hero);
              }}
            >
              {loading ? "Carregando..." : "Falar com um especialista"}
              <Icon name="arrow" size={17} />
            </a>
            <a className="button button-outline-light" href="#diferenciais">
              Conhecer soluções
            </a>
          </div>
          <div className="hero-trust">
            <span><Icon name="users" size={18} /> Atendimento humano</span>
            <span><Icon name="shield" size={18} /> Dados protegidos</span>
            <span><Icon name="chart" size={18} /> Orientação clara</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-a" aria-hidden="true" />
          <div className="orbit orbit-b" aria-hidden="true" />
          <div className="hero-person-wrap">
            <Image
              className="hero-person"
              src="/img-mulher.png"
              alt="Especialista em consultoria para pessoa física"
              fill
              priority
              sizes="(max-width: 640px) 96vw, (max-width: 960px) 72vw, 560px"
            />
          </div>
          <div className="experience-seal">
            <span>+16</span>
            <strong>anos</strong>
            <small>orientando pessoas</small>
          </div>
          <div className="spark spark-one" aria-hidden="true">✦</div>
          <div className="spark spark-two" aria-hidden="true">✦</div>
        </div>
      </div>
      <div className="hero-wave" aria-hidden="true" />
    </section>
  );
}

function Metrics() {
  const metricVariants: RevealVariant[] = ["left", "pop", "right"];

  const metrics = [
    {
      icon: "users",
      target: 16,
      prefix: "+",
      suffix: " anos",
      label: "De experiência",
      duration: 1300,
    },
    {
      icon: "chart",
      target: 1000,
      prefix: "+",
      suffix: "",
      label: "Pessoas atendidas",
      duration: 1800,
    },
    {
      icon: "star",
      target: 98,
      prefix: "",
      suffix: "%",
      label: "Satisfação dos clientes",
      duration: 1500,
    },
  ];

  return (
    <div className="metrics-shell">
      <div className="container metrics-grid">
        {metrics.map((metric, index) => (
          <Reveal
            key={metric.label}
            className="metric-card"
            delay={index * 110}
            variant={metricVariants[index]}
          >
          <span
            className="icon-box"
            data-icon={metric.icon}
          >
            <Icon name={metric.icon} size={29} />
          </span>

            <CountUp
              target={metric.target}
              prefix={metric.prefix}
              suffix={metric.suffix}
              duration={metric.duration}
            />

            <span>{metric.label}</span>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function Benefits() {
  const benefitVariants: RevealVariant[] = [
    "rotate-left",
    "up",
    "pop",
    "right",
    "rotate-right",
  ];

  return (
    <section className="section benefits-section" id="diferenciais">
      <div className="container">
        <div className="section-heading split-heading">
          <Reveal variant="left">
            <div>
              <span className="eyebrow">Por que escolher a gente</span>
              <h2>Consultoria feita para você, com <em>clareza e segurança.</em></h2>
            </div>
          </Reveal>

          <Reveal className="split-heading-copy" variant="right" delay={130}>
            <p>
              Unimos atendimento humano, análise cuidadosa e orientação objetiva para ajudar você a tomar decisões com mais tranquilidade.
            </p>
          </Reveal>
        </div>

        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <Reveal
              key={item.title}
              className="benefit-card"
              delay={index * 85}
              variant={benefitVariants[index]}
            >
              <span
  className="icon-box"
  data-icon={item.icon}
>
  <Icon name={item.icon} size={28} />
</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="card-shine" aria-hidden="true" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const stepVariants: RevealVariant[] = ["left", "pop", "down", "right"];

  return (
    <section className="section process-section" id="processo">
      <div className="process-glow" aria-hidden="true" />
      <div className="container process-layout">
        <Reveal className="process-intro" variant="left">
          <span className="eyebrow">Como funciona</span>
          <h2>Um processo simples para entender suas opções e <em>decidir com segurança.</em></h2>
        </Reveal>

        <div className="steps-grid">
          <div className="steps-line" aria-hidden="true" />
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              className="step-card"
              delay={index * 105}
              variant={stepVariants[index]}
            >
              <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="icon-box"><Icon name={step.icon} size={29} /></span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonialVariants: RevealVariant[] = [
    "rotate-left",
    "up",
    "rotate-right",
  ];

  return (
    <section className="section testimonials-section" id="depoimentos">
      <div className="container testimonials-layout">
       <Reveal className="testimonials-title" variant="left">
  <span className="eyebrow">Depoimentos</span>

  <h2>
    Quem recebe orientação, <em>segue com confiança.</em>
  </h2>
</Reveal>
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              className="testimonial-card"
              delay={index * 110}
              variant={testimonialVariants[index]}
            >
              <div className="stars" aria-label="5 estrelas">★★★★★</div>
              <p>“{item.text}”</p>
              <div className="person-row">
                <span className="avatar">{item.initials}</span>
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.role}</small>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqVariants: RevealVariant[] = [
    "left",
    "right",
    "up",
    "scale",
    "clip-left",
    "clip-right",
  ];

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-layout">
        <Reveal className="faq-title" variant="left">
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2>Respostas claras para você seguir com tranquilidade.</h2>
          <p>Entenda como funciona o atendimento e quais são os próximos passos.</p>
        </Reveal>
        <div className="faq-grid">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal
                key={item.question}
                delay={(index % 3) * 70}
                variant={faqVariants[index]}
              >
                <div className={`faq-item ${isOpen ? "is-open" : ""}`}>
                  <button type="button" onClick={() => setOpenIndex(isOpen ? -1 : index)} aria-expanded={isOpen}>
                    <span>{item.question}</span>
                    <span className="faq-plus"><Icon name="plus" size={18} /></span>
                  </button>
                  <div className="faq-answer">
                    <div><p>{item.answer}</p></div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { loading, open } = useWhatsApp();

  return (
    <section className="cta-section">
      <div className="container">
        <Reveal className="cta-card" variant="scale">
          <div className="cta-icon"><Icon name="message" size={34} /></div>
          <div>
            <h2>Pronto para cuidar melhor da sua vida financeira?</h2>
            <p>Fale com um especialista, conte sua situação e receba uma orientação clara sobre os próximos passos.</p>
          </div>
          <a
            className="button button-light"
            href="#whatsapp"
            aria-busy={loading}
            aria-disabled={loading}
            onClick={(event) => {
              event.preventDefault();
              open(WHATSAPP_MESSAGES.cta);
            }}
          >
            {loading ? "Carregando..." : "Consultar agora"}
            <Icon name="arrow" size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const { loading, open } = useWhatsApp();

  return (
    <footer className="footer" id="contato">
      <div className="container footer-grid">
        <Reveal className="footer-brand" variant="left">
          <Brand />
          <p>Orientação clara, atendimento humano e soluções pensadas para a realidade de cada pessoa.</p>
          <div className="social-row" aria-label="Redes sociais">
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Facebook">f</a>
          </div>
        </Reveal>

        <Reveal variant="up" delay={80}>
          <h3>Navegação</h3>
          <ul>
            {navItems.slice(0, 5).map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}
          </ul>
        </Reveal>

        <Reveal variant="up" delay={150}>
          <h3>Soluções</h3>
          <ul>
            <li>Análise da situação financeira</li>
            <li>Orientação para negociação</li>
            <li>Organização financeira</li>
            <li>Planejamento de pagamentos</li>
            <li>Atendimento online</li>
          </ul>
        </Reveal>

        <Reveal variant="right" delay={220}>
          <h3>Contato</h3>
          <ul className="contact-list">
            <li><Icon name="phone" size={17} /> (11) 99999-9999</li>
            <li><Icon name="building" size={17} /> <span>CNPJ:</span> 57.924.057/0001-02</li>
            <li><Icon name="mail" size={17} /> contato@consultoriacontabil.pro</li>
            <li><Icon name="pin" size={17} /> Avenida Manoel Monteiro - Lado Par 390 Quadra15 Lote 21 Andar 2, Vila Jardim Salvador,  Trindade/GO, 75388-455</li>
          </ul>
        </Reveal>
      </div>

      <Reveal className="container footer-bottom" variant="up" delay={120}>
        <span>© 2026 Assessoria &amp; Consulta. Todos os direitos reservados.</span>
        <span><a href="/politica-de-privacidade">Política de Privacidade</a><a href="/termos-de-uso">Termos de Uso</a></span>
      </Reveal>
      <a
        className="whatsapp-float"
        href="#whatsapp"
        aria-label="Falar no WhatsApp"
        aria-busy={loading}
        aria-disabled={loading}
        onClick={(event) => {
          event.preventDefault();
          open(WHATSAPP_MESSAGES.floating);
        }}
      >
        <Icon name="phone" size={23} />
      </a>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <main>
      <LandingAnimations />
      <Header />
      <Hero />
      <Metrics />
      <Benefits />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}