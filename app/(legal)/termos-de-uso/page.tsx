import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso | Assessoria & Consulta",
  description:
    "Consulte as regras e condições para navegar e utilizar o site da Assessoria & Consulta.",
};

const COMPANY = {
  name: "Assessoria & Consulta",
  cnpj: "57.924.057/0001-02",
  email: "contato@consultoriacontabil.pro",
};

export default function TermsOfUsePage() {
  return (
    <>
      <section className="legal-hero legal-hero-blue">
        <div className="legal-hero-pattern" aria-hidden="true" />
        <div className="legal-orbit legal-orbit-one" aria-hidden="true" />
        <div className="legal-orbit legal-orbit-two" aria-hidden="true" />

        <div className="legal-container legal-hero-content">
          <span className="legal-eyebrow">Regras claras para navegar</span>
          <h1>
            Termos de <strong>Uso.</strong>
          </h1>
          <p>
            Estes Termos apresentam as condições para acessar o site, utilizar seus
            conteúdos e entrar em contato com a nossa equipe.
          </p>

          <div className="legal-update">
            <span aria-hidden="true">✓</span>
            Última atualização: 24 de julho de 2026
          </div>
        </div>

        <div className="legal-wave" aria-hidden="true" />
      </section>

      <section className="legal-content-section">
        <div className="legal-container legal-document-layout">
          <aside className="legal-summary legal-summary-blue">
            <span>Antes de continuar</span>
            <h2>A navegação no site representa a concordância com estes Termos.</h2>
            <p>
              Os serviços eventualmente contratados serão detalhados em proposta ou
              instrumento próprio.
            </p>
            <Link className="legal-contact-button" href="/">
              Voltar à página inicial
              <span aria-hidden="true">→</span>
            </Link>
          </aside>

          <article className="legal-document">
            <section id="aceitacao">
              <span className="legal-section-number legal-section-number-blue">01</span>
              <div>
                <h2>Aceitação dos Termos</h2>
                <p>
                  Ao acessar ou utilizar este site, você declara que leu e concorda com
                  estes Termos de Uso e com a nossa Política de Privacidade. Caso não
                  concorde, interrompa a utilização do site.
                </p>
              </div>
            </section>

            <section id="identificacao">
              <span className="legal-section-number legal-section-number-blue">02</span>
              <div>
                <h2>Identificação</h2>
                <p>
                  O site é operado por <strong>{COMPANY.name}</strong>, inscrita no CNPJ
                  sob o número <strong>{COMPANY.cnpj}</strong>. O contato oficial é
                  <a href={`mailto:${COMPANY.email}`}> {COMPANY.email}</a>.
                </p>
              </div>
            </section>

            <section id="finalidade">
              <span className="legal-section-number legal-section-number-blue">03</span>
              <div>
                <h2>Finalidade do site</h2>
                <p>
                  O site possui finalidade institucional e informativa. Ele apresenta a
                  empresa, seus diferenciais e possibilidades de atendimento, além de
                  disponibilizar canais para que o visitante solicite informações ou uma
                  avaliação inicial.
                </p>
                <p>
                  O conteúdo público do site não constitui diagnóstico definitivo,
                  promessa de resultado, recomendação individual automática ou substituição
                  de uma análise personalizada.
                </p>
              </div>
            </section>

            <section id="servicos">
              <span className="legal-section-number legal-section-number-blue">04</span>
              <div>
                <h2>Contratação dos serviços</h2>
                <p>
                  A contratação somente será formalizada após a definição do escopo,
                  condições, valores, responsabilidades e prazos em proposta, contrato ou
                  outro instrumento apresentado ao cliente.
                </p>
                <p>
                  Informações exibidas no site não substituem as condições específicas do
                  documento de contratação. Em caso de divergência, prevalecerá o documento
                  firmado entre as partes, respeitada a legislação aplicável.
                </p>
              </div>
            </section>

            <section id="responsabilidades-usuario">
              <span className="legal-section-number legal-section-number-blue">05</span>
              <div>
                <h2>Responsabilidades do usuário</h2>
                <p>Ao utilizar o site, você se compromete a:</p>
                <ul>
                  <li>fornecer informações verdadeiras e atualizadas;</li>
                  <li>não utilizar o site para finalidades ilícitas ou fraudulentas;</li>
                  <li>não tentar acessar áreas, sistemas ou dados sem autorização;</li>
                  <li>não introduzir códigos maliciosos ou prejudicar o funcionamento do site;</li>
                  <li>respeitar os direitos de propriedade intelectual e de terceiros;</li>
                  <li>
                    preservar seus próprios dispositivos, contas, senhas e meios de acesso.
                  </li>
                </ul>
              </div>
            </section>

            <section id="conteudos">
              <span className="legal-section-number legal-section-number-blue">06</span>
              <div>
                <h2>Conteúdos e propriedade intelectual</h2>
                <p>
                  Textos, marcas, identidade visual, ilustrações, elementos gráficos,
                  códigos, vídeos, imagens e demais conteúdos do site são protegidos pela
                  legislação aplicável e não podem ser copiados, reproduzidos, alterados,
                  distribuídos ou explorados comercialmente sem autorização.
                </p>
                <p>
                  É permitido compartilhar o endereço público das páginas, desde que isso
                  não sugira parceria, endosso ou vínculo inexistente com a empresa.
                </p>
              </div>
            </section>

            <section id="disponibilidade">
              <span className="legal-section-number legal-section-number-blue">07</span>
              <div>
                <h2>Disponibilidade e atualizações</h2>
                <p>
                  Buscamos manter o site disponível e atualizado, mas podem ocorrer
                  interrupções temporárias para manutenção, atualização, falhas técnicas,
                  indisponibilidade de fornecedores ou situações fora do nosso controle.
                </p>
                <p>
                  Conteúdos, funcionalidades e informações podem ser alterados ou removidos
                  quando necessário, sem prejuízo de direitos já constituídos.
                </p>
              </div>
            </section>

            <section id="terceiros">
              <span className="legal-section-number legal-section-number-blue">08</span>
              <div>
                <h2>Serviços e links de terceiros</h2>
                <p>
                  O site pode conter links para WhatsApp, redes sociais e outros serviços
                  externos. O acesso a esses ambientes está sujeito aos termos e políticas
                  dos respectivos fornecedores, que são responsáveis por seus próprios
                  sistemas e práticas.
                </p>
              </div>
            </section>

            <section id="responsabilidade">
              <span className="legal-section-number legal-section-number-blue">09</span>
              <div>
                <h2>Limites de responsabilidade</h2>
                <p>
                  Dentro dos limites permitidos pela legislação, não nos responsabilizamos
                  por danos decorrentes do uso inadequado do site, de informações falsas
                  fornecidas pelo usuário, de falhas externas, de ataques de terceiros ou
                  de decisões tomadas exclusivamente com base em conteúdo geral, sem a
                  contratação de uma análise individual.
                </p>
                <p>
                  Nenhuma disposição destes Termos exclui ou reduz direitos que não possam
                  ser afastados pela legislação de proteção do consumidor.
                </p>
              </div>
            </section>

            <section id="privacidade">
              <span className="legal-section-number legal-section-number-blue">10</span>
              <div>
                <h2>Privacidade e dados pessoais</h2>
                <p>
                  O tratamento de dados pessoais relacionado ao site e aos canais de
                  atendimento é descrito na nossa
                  <Link href="/politica-de-privacidade"> Política de Privacidade</Link>,
                  que integra estes Termos.
                </p>
              </div>
            </section>

            <section id="alteracoes">
              <span className="legal-section-number legal-section-number-blue">11</span>
              <div>
                <h2>Alterações destes Termos</h2>
                <p>
                  Estes Termos podem ser atualizados para refletir mudanças legais,
                  técnicas, operacionais ou nos serviços. A versão vigente será publicada
                  nesta página com a respectiva data de atualização.
                </p>
              </div>
            </section>

            <section id="lei-foro">
              <span className="legal-section-number legal-section-number-blue">12</span>
              <div>
                <h2>Legislação e solução de conflitos</h2>
                <p>
                  Estes Termos são regidos pela legislação brasileira. Eventuais conflitos
                  deverão ser solucionados pelos meios legalmente competentes, observadas
                  as regras de proteção do consumidor e o foro aplicável conforme a lei.
                </p>
              </div>
            </section>

            <section id="contato">
              <span className="legal-section-number legal-section-number-blue">13</span>
              <div>
                <h2>Contato</h2>
                <p>
                  Para dúvidas sobre estes Termos, envie uma mensagem para
                  <a href={`mailto:${COMPANY.email}`}> {COMPANY.email}</a>.
                </p>
              </div>
            </section>

            <div className="legal-related-card legal-related-card-blue">
              <div>
                <span>Documento relacionado</span>
                <h2>Consulte nossa Política de Privacidade.</h2>
                <p>Veja como seus dados pessoais podem ser tratados e protegidos.</p>
              </div>
              <Link href="/politica-de-privacidade">
                Ver Política
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
