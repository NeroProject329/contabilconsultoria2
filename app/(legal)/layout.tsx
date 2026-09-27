import Link from "next/link";
import type { ReactNode } from "react";
import "./legal.css";

const COMPANY = {
  name: "Assessoria & Consulta",
  cnpj: "57.924.057/0001-02",
  email: "contato@consultoriacontabil.pro",
};

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="legal-site">
      <header className="legal-header">
        <div className="legal-container legal-header-inner">
          <Link className="legal-brand" href="/" aria-label={`${COMPANY.name} - início`}>
            <span className="legal-brand-mark">A</span>
            <span>{COMPANY.name}</span>
          </Link>

          <nav className="legal-nav" aria-label="Navegação das páginas legais">
            <Link href="/politica-de-privacidade">Privacidade</Link>
            <Link href="/termos-de-uso">Termos</Link>
            <Link className="legal-home-link" href="/">
              Voltar ao site
              <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="legal-footer">
        <div className="legal-container legal-footer-grid">
          <div>
            <Link className="legal-brand legal-brand-footer" href="/">
              <span className="legal-brand-mark">A</span>
              <span>{COMPANY.name}</span>
            </Link>
            <p>
              Orientação personalizada para você compreender sua situação e tomar
              decisões com mais clareza e tranquilidade.
            </p>
          </div>

          <div>
            <strong>Documentos</strong>
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>
            <Link href="/termos-de-uso">Termos de Uso</Link>
          </div>

          <div>
            <strong>Contato</strong>
            <span>CNPJ: {COMPANY.cnpj}</span>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </div>
        </div>

        <div className="legal-container legal-footer-bottom">
          <span>© 2026 {COMPANY.name}. Todos os direitos reservados.</span>
          <Link href="/">Página inicial</Link>
        </div>
      </footer>
    </div>
  );
}
