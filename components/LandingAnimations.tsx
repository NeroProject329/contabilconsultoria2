"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function LandingAnimations() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
    });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(".motion-item", {
        autoAlpha: 1,
        clearProps: "all",
      });

      return;
    }

    const isMobile = window.matchMedia("(max-width: 680px)").matches;

    const createTimeline = (
      trigger: string,
      start = isMobile ? "top 88%" : "top 78%",
      end = isMobile ? "bottom 12%" : "bottom 20%",
    ) =>
      gsap.timeline({
        defaults: {
          duration: isMobile ? 0.72 : 1.15,
          ease: isMobile ? "power2.out" : "power3.out",
        },

        scrollTrigger: {
          trigger,
          start,
          end,

          /*
           * onEnter: play
           * onLeave: reverse
           * onEnterBack: play
           * onLeaveBack: reverse
           */
          toggleActions: isMobile
            ? "play none none reverse"
            : "play reverse play reverse",

          invalidateOnRefresh: true,
        },
      });

    const context = gsap.context(() => {
      /* =====================================================
         HERO
      ===================================================== */

      const heroTimeline = createTimeline(
        "#inicio",
        "top 96%",
        isMobile ? "bottom 8%" : "bottom 12%",
      );

      heroTimeline
        .from(".hero-eyebrow", {
          autoAlpha: 0,
          y: -28,
          scale: 0.86,
          duration: 0.95,
        })

        .from(
          ".hero h1 span:first-child",
          {
            autoAlpha: 0,
            x: isMobile ? -42 : -100,
            filter: isMobile ? "none" : "blur(10px)",
            duration: 1.25,
          },
          "-=0.5",
        )

        .from(
          ".hero h1 span:nth-child(2)",
          {
            autoAlpha: 0,
            x: isMobile ? 42 : 100,
            filter: isMobile ? "none" : "blur(10px)",
            duration: 1.25,
          },
          "-=0.95",
        )

        .from(
          ".hero h1 strong",
          {
            autoAlpha: 0,
            y: 55,
            scale: 0.93,
            filter: isMobile ? "none" : "blur(9px)",
            duration: 1.2,
          },
          "-=0.9",
        )

        .from(
          ".hero-copy > p",
          {
            autoAlpha: 0,
            y: 32,
            filter: isMobile ? "none" : "blur(8px)",
            duration: 1.05,
          },
          "-=0.75",
        )

        .from(
        "#inicio .hero-actions",
        {
            autoAlpha: 0,
            y: 30,
            scale: 0.96,
            duration: 1.1,
        },
        "-=0.7",
        )

        .from(
          ".hero-visual",
          {
            autoAlpha: 0,
            x: isMobile ? 0 : 125,
            y: isMobile ? 85 : 25,
            scale: 0.88,
            filter: isMobile ? "none" : "blur(9px)",
            duration: 1.4,
          },
          "-=1",
        )

        .from(
          ".experience-seal",
          {
            autoAlpha: 0,
            scale: 0,
            rotation: -120,
            duration: 1.1,
            ease: "back.out(1.35)",
          },
          "-=0.72",
        )

        .from(
          ".orbit",
          {
            autoAlpha: 0,
            scale: 0.55,
            stagger: 0.2,
            duration: 1.25,
          },
          "-=1",
        );

      /* =====================================================
         MÉTRICAS
      ===================================================== */

      const metricsTimeline = createTimeline(
        ".metrics-shell",
        "top 92%",
        "bottom 12%",
      );

      metricsTimeline
        .from(".metrics-shell", {
          autoAlpha: 0,
          y: 30,
          duration: 0.85,
        })

        .from(
          ".metric-card",
          {
            autoAlpha: 0,
            y: isMobile ? 48 : 85,
            scale: 0.86,
            rotationX: isMobile ? 0 : 12,
            transformPerspective: 900,
            stagger: 0.18,
            duration: 1.15,
          },
          "-=0.45",
        )

        .fromTo(
  ".metric-card .icon-box svg",
  {
    autoAlpha: 0,
    scale: 0.55,
    rotation: -18,
    transformOrigin: "50% 50%",
  },
  {
    autoAlpha: 1,
    scale: 1,
    rotation: 0,
    stagger: 0.18,
    duration: 0.8,
    ease: "back.out(1.5)",
  },
  "-=1",
);

      /* =====================================================
         DIFERENCIAIS
      ===================================================== */

      const benefitsTimeline = createTimeline("#diferenciais");

      benefitsTimeline
        .from(
          "#diferenciais .section-heading > .motion-item:first-child",
          {
            autoAlpha: 0,
            x: isMobile ? -45 : -110,
            filter: isMobile ? "none" : "blur(8px)",
            duration: 1.3,
          },
        )

        .from(
          "#diferenciais .section-heading > .motion-item:last-child",
          {
            autoAlpha: 0,
            x: isMobile ? 45 : 110,
            filter: isMobile ? "none" : "blur(8px)",
            duration: 1.25,
          },
          "<0.14",
        )

        .from(
          "#diferenciais .benefits-grid",
          {
            autoAlpha: 0,
            y: 45,
            scale: 0.96,
            duration: 1.15,
          },
          "-=0.55",
        )

        .from(
          "#diferenciais .benefit-card",
          {
            autoAlpha: 0,
            y: isMobile ? 52 : 90,
            scale: 0.9,

            rotation: (index) =>
              isMobile
                ? 0
                : [-3.5, 2.5, -2, 3, -1.5][index % 5],

            stagger: 0.15,
            duration: 1.2,
          },
          "-=0.75",
        )

        .fromTo(
  "#diferenciais .benefit-card .icon-box svg",
  {
    autoAlpha: 0,
    scale: 0.45,
    rotation: -70,
    transformOrigin: "50% 50%",
  },
  {
    autoAlpha: 1,
    scale: 1,
    rotation: 0,
    stagger: 0.15,
    duration: 0.85,
    ease: "back.out(1.6)",
  },
  "-=1.05",
);

      /* =====================================================
         PROCESSO
      ===================================================== */

      const processTimeline = createTimeline("#processo");

      processTimeline
        .from("#processo .process-intro", {
          autoAlpha: 0,
          x: isMobile ? -45 : -120,
          filter: isMobile ? "none" : "blur(8px)",
          duration: 1.35,
        })

        .from(
          "#processo .steps-grid",
          {
            autoAlpha: 0,
            x: isMobile ? 0 : 90,
            y: isMobile ? 55 : 0,
            scale: 0.95,
            duration: 1.25,
          },
          "<0.18",
        )

        .from(
          "#processo .steps-line",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.55,
            ease: "power2.inOut",
          },
          "-=0.78",
        )

        .from(
          "#processo .step-card",
          {
            autoAlpha: 0,
            y: isMobile ? 60 : 95,
            rotationY: isMobile ? 0 : -13,
            scale: 0.88,
            transformPerspective: 900,
            stagger: 0.17,
            duration: 1.2,
          },
          "-=1.02",
        )

        .from(
          "#processo .step-number",
          {
            autoAlpha: 0,
            scale: 0,
            rotation: -100,
            stagger: 0.17,
            duration: 0.75,
            ease: "back.out(1.8)",
          },
          "-=1.05",
        );

      /* Movimento lento do brilho rosa — somente desktop */
      if (!isMobile) {
        gsap.to("#processo .process-glow", {
          xPercent: 18,
          yPercent: -12,
          scale: 1.18,
          ease: "none",

          scrollTrigger: {
            trigger: "#processo",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
          },
        });
      }

      /* =====================================================
         DEPOIMENTOS
      ===================================================== */

      const testimonialsTimeline = createTimeline("#depoimentos");

      testimonialsTimeline
        .from("#depoimentos .testimonials-title", {
          autoAlpha: 0,
          y: isMobile ? 48 : 85,
          x: isMobile ? 0 : -45,
          filter: isMobile ? "none" : "blur(8px)",
          duration: 1.3,
        })

        .from(
          "#depoimentos .testimonials-grid",
          {
            autoAlpha: 0,
            scale: 0.95,
            y: 45,
            duration: 1.15,
          },
          "-=0.65",
        )

        .from(
          "#depoimentos .testimonial-card",
          {
            autoAlpha: 0,
            x: isMobile ? 45 : 120,
            y: (index) => (index % 2 === 0 ? 38 : -24),
            rotationY: isMobile ? 0 : -14,
            scale: 0.9,
            transformPerspective: 900,
            stagger: 0.19,
            duration: 1.25,
          },
          "-=0.78",
        )

        .from(
          "#depoimentos .avatar",
          {
            autoAlpha: 0,
            scale: 0,
            rotation: -80,
            stagger: 0.19,
            duration: 0.75,
            ease: "back.out(1.7)",
          },
          "-=1.05",
        );

      /* =====================================================
         FAQ
      ===================================================== */

      const faqTimeline = createTimeline("#faq");

      faqTimeline
        .from("#faq .faq-layout", {
          autoAlpha: 0,
          y: 55,
          scale: 0.97,
          duration: 1.3,
        })

        .from(
          "#faq .faq-title",
          {
            autoAlpha: 0,
            x: isMobile ? -38 : -90,
            filter: isMobile ? "none" : "blur(8px)",
            duration: 1.2,
          },
          "-=0.85",
        )

        .from(
          "#faq .faq-grid > .motion-item",
          {
            autoAlpha: 0,

            x: (index) => {
              if (isMobile) return index % 2 === 0 ? -36 : 36;

              return index % 2 === 0 ? -75 : 75;
            },

            y: 18,
            stagger: 0.13,
            duration: 1.05,
          },
          "-=0.72",
        );

      /* =====================================================
         CTA
      ===================================================== */

      const ctaTimeline = createTimeline(
        ".cta-section",
        "top 88%",
        "bottom 10%",
      );

      ctaTimeline
        .from(".cta-card", {
          autoAlpha: 0,
          clipPath: "inset(0 50% 0 50% round 24px)",
          duration: 1.35,
          ease: "power3.inOut",
        })

        .from(
          ".cta-icon",
          {
            autoAlpha: 0,
            scale: 0,
            rotation: -180,
            duration: 0.95,
            ease: "back.out(1.5)",
          },
          "-=0.7",
        )

        .from(
          ".cta-card h2, .cta-card p",
          {
            autoAlpha: 0,
            y: 32,
            stagger: 0.14,
            duration: 0.95,
          },
          "-=0.68",
        )

        .from(
        ".cta-card .button",
        {
            autoAlpha: 0,
            y: 24,
            scale: 0.92,
            duration: 1.05,
        },
        "-=0.72",
        );

      /* =====================================================
         FOOTER
      ===================================================== */

      const footerTimeline = createTimeline(
        "#contato",
        "top 88%",
        "bottom 5%",
      );

      footerTimeline
        .from("#contato .footer-grid > .motion-item", {
          autoAlpha: 0,
          y: 75,
          filter: isMobile ? "none" : "blur(7px)",
          stagger: 0.16,
          duration: 1.2,
        })

        .from(
          "#contato .footer-bottom",
          {
            autoAlpha: 0,
            y: 32,
            duration: 1,
          },
          "-=0.55",
        );
    });

    const refreshAnimations = () => {
      ScrollTrigger.refresh(true);
    };

    let lastWidth = window.innerWidth;
    let resizeTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleResize = () => {
      const currentWidth = window.innerWidth;

      /*
       * No mobile, a barra do Safari muda principalmente a altura
       * da viewport durante o scroll. Só fazemos refresh quando a
       * largura realmente mudou (rotação, resize real etc.).
       */
      if (Math.abs(currentWidth - lastWidth) < 20) {
        return;
      }

      lastWidth = currentWidth;

      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }

      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh(true);
      }, 180);
    };

    window.addEventListener("load", refreshAnimations);
    window.addEventListener("resize", handleResize);

    document.fonts?.ready
      .then(() => refreshAnimations())
      .catch(() => {
        // Ignora navegadores sem suporte completo à FontFaceSet.
      });

    return () => {
      window.removeEventListener("load", refreshAnimations);
      window.removeEventListener("resize", handleResize);

      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }

      /*
       * Remove timelines, ScrollTriggers e estilos aplicados
       * pelo GSAP dentro deste componente.
       */
      context.revert();
    };
  }, []);

  return null;
}