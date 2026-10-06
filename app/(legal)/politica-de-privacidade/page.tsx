import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Política de Privacidade | Borges Ferreira",
  description:
    "Conheça como a Borges Ferreira Consultoria Contábil e Empresarial coleta, utiliza, armazena e protege dados pessoais.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="legal-hero">
        <div className="legal-hero-pattern" aria-hidden="true" />
        <div className="legal-orbit legal-orbit-one" aria-hidden="true" />
        <div className="legal-orbit legal-orbit-two" aria-hidden="true" />

        <div className="legal-container legal-hero-content">
          <span className="legal-eyebrow">Transparência e proteção</span>
          <h1>
            Política de <strong>Privacidade.</strong>
          </h1>
          <p>
            Este documento explica como tratamos os dados pessoais fornecidos
            durante sua navegação, contato e eventual contratação dos nossos
            serviços.
          </p>

          <div className="legal-update">
            <span aria-hidden="true">✓</span>
            Última atualização: {COMPANY.updatedAt}
          </div>
        </div>

        <div className="legal-wave" aria-hidden="true" />
      </section>

      <section className="legal-content-section">
        <div className="legal-container legal-document-layout">
          <aside className="legal-summary">
            <span>Visão geral</span>
            <h2>
              Seus dados devem ser tratados com clareza e responsabilidade.
            </h2>
            <p>
              Você pode solicitar informações e exercer seus direitos entrando
              em contato pelo nosso e-mail.
            </p>
            <a
              className="legal-contact-button"
              href={`mailto:${COMPANY.email}`}
            >
              Falar sobre meus dados
              <span aria-hidden="true">→</span>
            </a>
          </aside>

          <article className="legal-document">
            <section id="identificacao">
              <span className="legal-section-number">01</span>
              <div>
                <h2>Identificação do controlador</h2>
                <p>
                  Para os fins desta Política, o controlador dos dados pessoais
                  é a<strong> {COMPANY.legalName}</strong>, nome fantasia
                  <strong> {COMPANY.name}</strong>, inscrita no CNPJ sob o
                  número
                  <strong> {COMPANY.cnpj}</strong>.
                </p>
                <p>A empresa está estabelecida em {COMPANY.address}.</p>
                <p>
                  Dúvidas e solicitações relacionadas à privacidade podem ser
                  enviadas para{" "}
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
                </p>
              </div>
            </section>

            <section id="dados-coletados">
              <span className="legal-section-number">02</span>
              <div>
                <h2>Dados que podem ser coletados</h2>
                <p>Podemos tratar as seguintes categorias de informações:</p>
                <ul>
                  <li>
                    <strong>Dados de contato:</strong> nome, telefone, e-mail e
                    outras informações enviadas voluntariamente pelo WhatsApp,
                    e-mail ou canais de atendimento.
                  </li>
                  <li>
                    <strong>Dados relacionados à solicitação:</strong>{" "}
                    informações que você decidir compartilhar para que possamos
                    compreender as necessidades contábeis, fiscais, trabalhistas
                    ou empresariais do seu negócio.
                  </li>
                  <li>
                    <strong>Dados técnicos:</strong> endereço IP, navegador,
                    dispositivo, data e horário de acesso, quando registrados
                    automaticamente pelos serviços de hospedagem, segurança ou
                    análise utilizados pelo site.
                  </li>
                  <li>
                    <strong>Dados contratuais:</strong> informações necessárias
                    à elaboração de proposta, contratação, atendimento, cobrança
                    e cumprimento de obrigações legais.
                  </li>
                </ul>
                <p>
                  Não solicitamos, por meio do site, dados que não sejam
                  necessários para a finalidade informada. Evite enviar
                  documentos ou informações sensíveis antes de receber uma
                  orientação específica da nossa equipe contábil.
                </p>
              </div>
            </section>

            <section id="finalidades">
              <span className="legal-section-number">03</span>
              <div>
                <h2>Como utilizamos os dados</h2>
                <p>Os dados pessoais poderão ser utilizados para:</p>
                <ul>
                  <li>responder dúvidas e solicitações;</li>
                  <li>
                    compreender as necessidades contábeis e empresariais do seu
                    negócio;
                  </li>
                  <li>agendar reuniões e manter a comunicação com você;</li>
                  <li>
                    elaborar propostas e executar serviços contábeis
                    contratados;
                  </li>
                  <li>
                    emitir cobranças, documentos e registros administrativos;
                  </li>
                  <li>prevenir fraudes, abusos e incidentes de segurança;</li>
                  <li>
                    cumprir obrigações legais, regulatórias ou determinações
                    oficiais;
                  </li>
                  <li>
                    aperfeiçoar o funcionamento e a experiência de navegação do
                    site.
                  </li>
                </ul>
              </div>
            </section>

            <section id="bases-legais">
              <span className="legal-section-number">04</span>
              <div>
                <h2>Bases legais utilizadas</h2>
                <p>
                  Conforme o contexto, o tratamento poderá ocorrer com
                  fundamento no seu consentimento, em procedimentos preliminares
                  solicitados por você, na execução de contrato, no cumprimento
                  de obrigação legal ou regulatória, no exercício regular de
                  direitos e em interesses legítimos, sempre com respeito aos
                  seus direitos e liberdades fundamentais.
                </p>
              </div>
            </section>

            <section id="compartilhamento">
              <span className="legal-section-number">05</span>
              <div>
                <h2>Compartilhamento de dados</h2>
                <p>
                  Os dados poderão ser compartilhados somente quando necessário
                  com fornecedores que apoiam a operação, como serviços de
                  hospedagem, comunicação, armazenamento, segurança, atendimento
                  e gestão administrativa.
                </p>
                <p>
                  Também poderá haver compartilhamento para cumprir obrigações
                  legais, ordens judiciais ou solicitações de autoridades
                  competentes. Não comercializamos dados pessoais.
                </p>
              </div>
            </section>

            <section id="cookies">
              <span className="legal-section-number">06</span>
              <div>
                <h2>Cookies e tecnologias semelhantes</h2>
                <p>
                  Cookies são pequenos arquivos usados para permitir funções
                  essenciais, reforçar a segurança e compreender o desempenho do
                  site. Quando houver cookies não essenciais, você poderá
                  gerenciar sua preferência por meio do aviso ou das
                  configurações disponibilizadas no site.
                </p>
                <p>
                  Você também pode bloquear ou excluir cookies pelas
                  configurações do seu navegador, embora isso possa afetar
                  algumas funcionalidades.
                </p>
              </div>
            </section>

            <section id="armazenamento">
              <span className="legal-section-number">07</span>
              <div>
                <h2>Armazenamento e segurança</h2>
                <p>
                  Mantemos os dados pelo período necessário para cumprir as
                  finalidades informadas, atender obrigações legais, executar
                  contratos e resguardar o exercício regular de direitos.
                </p>
                <p>
                  Adotamos medidas administrativas e técnicas razoáveis para
                  reduzir riscos de acesso não autorizado, perda, alteração,
                  divulgação ou destruição. Nenhum ambiente digital, contudo, é
                  totalmente imune a incidentes.
                </p>
              </div>
            </section>

            <section id="direitos">
              <span className="legal-section-number">08</span>
              <div>
                <h2>Direitos do titular</h2>
                <p>Nos termos da legislação aplicável, você pode solicitar:</p>
                <ul>
                  <li>confirmação da existência de tratamento;</li>
                  <li>acesso aos dados pessoais;</li>
                  <li>
                    correção de dados incompletos, inexatos ou desatualizados;
                  </li>
                  <li>informações sobre compartilhamentos realizados;</li>
                  <li>
                    anonimização, bloqueio ou eliminação de dados
                    desnecessários, excessivos ou tratados em desconformidade;
                  </li>
                  <li>
                    revogação do consentimento, quando essa for a base
                    utilizada;
                  </li>
                  <li>
                    eliminação dos dados tratados com consentimento, quando
                    aplicável;
                  </li>
                  <li>oposição e demais direitos previstos na legislação.</li>
                </ul>
                <p>
                  A solicitação poderá exigir a confirmação da identidade do
                  titular para evitar acesso indevido. Envie seu pedido para
                  <a href={`mailto:${COMPANY.email}`}> {COMPANY.email}</a>.
                </p>
              </div>
            </section>

            <section id="terceiros">
              <span className="legal-section-number">09</span>
              <div>
                <h2>Links e serviços de terceiros</h2>
                <p>
                  O site pode direcionar para serviços externos, como WhatsApp e
                  redes sociais. Esses serviços possuem políticas próprias, e
                  recomendamos que você as consulte antes de fornecer
                  informações.
                </p>
              </div>
            </section>

            <section id="alteracoes">
              <span className="legal-section-number">10</span>
              <div>
                <h2>Alterações desta Política</h2>
                <p>
                  Esta Política poderá ser atualizada para refletir mudanças
                  legais, operacionais ou tecnológicas. A versão vigente estará
                  sempre publicada nesta página, acompanhada da data de
                  atualização.
                </p>
              </div>
            </section>

            <div className="legal-related-card">
              <div>
                <span>Documento relacionado</span>
                <h2>Leia também os Termos de Uso.</h2>
                <p>
                  Entenda as condições aplicáveis à navegação e à utilização
                  deste site.
                </p>
              </div>
              <Link href="/termos-de-uso">
                Ver Termos de Uso
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
