import Image from 'next/image'
import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { ContactForm } from './ContactForm'
import { Hero } from './Hero'
import { About } from './About'
import { Services } from './Services'
import { whatsapp } from './contact'
import { SectionLabel, WhatsApp } from './SiteUi'

const questions = [
  ['Posso trocar de contador sem parar a operação?', 'Sim. A FAP ajuda a combinar uma data e a organizar a transferência dos documentos e das responsabilidades pelas próximas entregas.'],
  ['Ainda não tenho CNPJ. Posso começar por aqui?', 'Sim. Conte à FAP o que pretende fazer e onde vai operar. Essas informações ajudam a orientar os próximos passos.'],
  ['Quais informações preciso para pedir uma proposta?', 'Informe sua atividade, se já possui CNPJ, o tamanho da equipe e o serviço que procura.'],
  ['O que está incluído no atendimento mensal?', 'A proposta detalha o escopo conforme sua empresa, como escrituração, fechamento contábil, demonstrativos e rotinas fiscais.'],
]

const facts = [['♧', '4', 'Áreas de serviço contábil'], ['✓', '3', 'Etapas na troca de contador'], ['⇄', '2', 'Caminhos: abrir ou migrar'], ['◉', '1', 'Canal direto pelo WhatsApp']]
const differences = [['Prazos organizados', 'Saiba quais documentos reunir e quando encaminhá-los.'], ['Orientação', 'Receba instruções na abertura, na troca de contador e na rotina.'], ['Visão dos números', 'Use os demonstrativos para acompanhar o desempenho do negócio.']]

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <header className="header">
        <div className="wrap header-info">
          <span><span><i className="fa fa-map-marker-alt" aria-hidden="true" /> Joinville, Santa Catarina</span><span><i className="fa fa-clock" aria-hidden="true" /> Atendimento em horário comercial</span></span>
          <span><a href="mailto:contato@fapcontabilidade.example"><i className="fa fa-envelope" aria-hidden="true" /> contato@fapcontabilidade.example</a><a href="https://wa.me/5547991597258" target="_blank" rel="noopener noreferrer"><i className="fa fa-phone-alt" aria-hidden="true" /> (47) 99159-7258</a></span>
        </div>
        <div className="wrap header-inner">
          <a className="brand" href="#inicio"><Image src="/fap.svg" width={36} height={36} alt="" />FAP Contabilidade</a>
          <Navigation />
        </div>
      </header>
      <main id="conteudo">
        <Hero />
        <About />
        <section className="section facts" aria-label="Atendimento da FAP em números">
          <ul className="wrap">{facts.map(([icon, value, label]) => <li key={label}>
            <span className="fact-icon" aria-hidden="true">{icon}</span><strong>{value}</strong><p>{label}</p><span className="fact-rule" aria-hidden="true" />
          </li>)}</ul>
        </section>
        <section id="diferenciais" className="section wrap split" aria-labelledby="differences-title">
          <div>
            <SectionLabel>Por que escolher a FAP?</SectionLabel>
            <h2 id="differences-title">Mais clareza na rotina da empresa</h2>
            <p>Entenda o que entregar, quais prazos acompanhar e quais informações apoiam suas decisões ao longo do mês.</p>
            <div className="actions"><WhatsApp message="Gostaria de falar com um contador sobre como organizar a rotina contábil da minha empresa.">Falar com um contador</WhatsApp></div>
          </div>
          <ul className="differences-list">{differences.map(([title, body]) => <li key={title}><span className="difference-check" aria-hidden="true">✓</span><h3>{title}</h3><p>{body}</p><a href={whatsapp('Gostaria de saber mais sobre: ' + title + '.')} target="_blank" rel="noopener noreferrer">Saiba mais <span aria-hidden="true">→</span></a></li>)}</ul>
        </section>
        <Services />
        <section id="trocar-contador" className="section transition" aria-labelledby="transition-title">
          <div className="wrap split">
            <div>
              <SectionLabel>Troca de contador</SectionLabel>
              <h2 id="transition-title">Troque de contador com um plano claro</h2>
              <p>A FAP ajuda você a organizar a transferência dos documentos e a combinar quem cuida das próximas entregas.</p>
              <div className="actions"><WhatsApp message="Já tenho uma empresa e quero trocar de contador. Podem me orientar sobre os próximos passos?">Trocar de contador</WhatsApp></div>
            </div>
            <Image className="section-photo" src="/fotos/fap-transicao.webp" alt="Profissionais transferem uma pasta de documentos em uma reunião" width={960} height={720} sizes="(max-width: 800px) 100vw, 50vw" />
          </div>
        </section>
        <section id="duvidas" className="section faq" aria-labelledby="faq-title">
          <div className="wrap split faq-grid">
            <div><SectionLabel>Antes de contratar</SectionLabel><h2 id="faq-title">Perguntas frequentes</h2><p>Veja o que levar para a primeira conversa e como funciona a contratação.</p></div>
            <div>{questions.map(([question, answer]) => <details key={question} name="duvidas"><summary>{question}<span className="faq-indicator" aria-hidden="true" /></summary><p>{answer}</p></details>)}</div>
          </div>
        </section>
        <section id="contato" className="section contact-section" aria-labelledby="contact-title">
          <div className="wrap split">
            <div className="section-heading"><SectionLabel>Fale com a FAP</SectionLabel><h2 id="contact-title">Solicite um retorno</h2></div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
