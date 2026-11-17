import Image from 'next/image'
import { Navigation } from './Navigation'
import { ContactForm } from './ContactForm'
import { whatsapp } from './contact'

const services = [
  { name: 'Abertura de empresa', image: 'fap-abertura', alt: 'Empreendedora revisa documentos de abertura', text: 'Orientação sobre atividade, documentos e primeiros passos para formalizar o seu negócio.' },
  { name: 'Escrituração fiscal', image: 'fap-fiscal', alt: 'Documentos fiscais e calculadora sobre uma mesa', text: 'Organização de notas, apuração de tributos e acompanhamento das entregas fiscais.' },
  { name: 'Contabilidade mensal', image: 'fap-mensal', alt: 'Contador acompanha os resultados do mês', text: 'Registros, conciliações e demonstrativos para acompanhar o desempenho da sua empresa.' },
  { name: 'Departamento pessoal', image: 'fap-pessoal', alt: 'Profissionais conferem dados da folha de pagamento', text: 'Apoio na folha, nas admissões, nas férias e nas demais rotinas da equipe.' },
]

const questions = [
  ['Posso trocar de contador sem parar a operação?', 'Sim. A FAP ajuda a combinar uma data e a organizar a transferência dos documentos e das responsabilidades pelas próximas entregas.'],
  ['Ainda não tenho CNPJ. Posso começar por aqui?', 'Sim. Conte à FAP o que pretende fazer e onde vai operar. Essas informações ajudam a orientar os próximos passos.'],
  ['Quais informações preciso para pedir uma proposta?', 'Informe sua atividade, se já possui CNPJ, o tamanho da equipe e o serviço que procura.'],
  ['O que está incluído no atendimento mensal?', 'A proposta detalha o escopo conforme sua empresa, como escrituração, fechamento contábil, demonstrativos e rotinas fiscais.'],
]

function WhatsApp({ children, message, secondary = false }: { children: string; message: string; secondary?: boolean }) {
  return <a className={'button' + (secondary ? ' button-secondary' : '')} href={whatsapp(message)} target="_blank" rel="noopener noreferrer"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.5 11.8a8.5 8.5 0 0 1-12.7 7.4L3.5 20.5l1.2-4.2a8.5 8.5 0 1 1 15.8-4.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path fill="currentColor" d="M9 7.6c-.3-.5-.8-.5-1.2-.2-.8.5-1.1 1.6-.7 2.6 1 2.6 3.1 4.7 5.8 5.7 1 .4 2 .2 2.6-.5.3-.4.4-.9.1-1.2l-2.1-1c-.3-.1-.5 0-.7.2l-.5.6a7 7 0 0 1-3-3l.5-.6c.2-.2.2-.5.1-.7Z"/></svg>{children}</a>
}

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <header className="header">
        <div className="wrap header-inner">
          <a className="brand" href="#inicio"><Image src="/fap.svg" width={38} height={38} alt="" />FAP Contabilidade</a>
          <Navigation />
        </div>
      </header>
      <main id="conteudo">
        <section id="inicio" className="hero section">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Contabilidade em Joinville, SC</p>
              <h1>Contabilidade para cada decisão da sua empresa.</h1>
              <p>Abra seu CNPJ, organize a rotina fiscal ou planeje a troca de contador com a FAP.</p>
              <div className="actions">
                <WhatsApp message="Gostaria de falar sobre os serviços contábeis para a minha empresa.">Falar com um contador</WhatsApp>
                <a className="button button-secondary" href="#servicos">Conhecer os serviços <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <div className="hero-image"><Image src="/fotos/hero.webp" alt="Profissionais analisam documentos contábeis durante uma reunião" fill sizes="(max-width: 800px) 100vw, 50vw" preload /></div>
          </div>
        </section>

        <section id="servicos" className="section wrap" aria-labelledby="services-title">
          <p className="eyebrow">Serviços</p>
          <h2 id="services-title">Apoio do primeiro CNPJ à rotina mensal</h2>
          <ul className="services">
            {services.map(service => <li key={service.name}>
              <div className="service-image"><Image src={'/fotos/' + service.image + '.webp'} alt={service.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 1020px) 50vw, 25vw" /></div>
              <div className="service-copy"><h3>{service.name}</h3><p>{service.text}</p>
                <WhatsApp message={'Gostaria de conversar sobre ' + service.name.toLowerCase() + '.'} secondary>Falar com um contador</WhatsApp>
              </div>
            </li>)}
          </ul>
        </section>

        <section id="trocar-contador" className="section transition" aria-labelledby="transition-title">
          <div className="wrap split">
            <div>
              <p className="eyebrow">Troca de contador</p>
              <h2 id="transition-title">Mude de escritório com as próximas entregas planejadas</h2>
              <p>Converse com a FAP sobre a situação da empresa. A gente ajuda você a combinar a data da troca, reunir os documentos e alinhar as responsabilidades da transição.</p>
              <div className="actions"><WhatsApp message="Já tenho uma empresa e quero trocar de contador. Podem me orientar sobre os próximos passos?">Trocar de contador</WhatsApp></div>
            </div>
            <Image className="section-photo" src="/fotos/fap-transicao.webp" alt="Profissionais transferem uma pasta de documentos em uma reunião" width={960} height={720} sizes="(max-width: 800px) 100vw, 50vw" />
          </div>
        </section>

        <section id="sobre" className="section wrap split" aria-labelledby="about-title">
          <Image className="section-photo" src="/fotos/fap-escritorio.webp" alt="Profissionais conversam em uma sala de reuniões" width={1000} height={950} sizes="(max-width: 800px) 100vw, 50vw" />
          <div>
            <p className="eyebrow">Sobre a FAP</p>
            <h2 id="about-title">Contabilidade perto de quem empreende</h2>
            <p>A FAP reúne serviços contábeis, fiscais e trabalhistas em Joinville. O atendimento começa por entender a atividade da empresa e o que precisa de atenção na sua rotina.</p>
          </div>
        </section>

        <section id="duvidas" className="section faq" aria-labelledby="faq-title">
          <div className="wrap split faq-grid">
            <div><p className="eyebrow">Antes de contratar</p><h2 id="faq-title">Perguntas frequentes</h2></div>
            <div>{questions.map(([question, answer]) => (
              <details key={question} name="duvidas"><summary>{question}</summary><p>{answer}</p></details>
            ))}</div>
          </div>
        </section>

        <section id="contato" className="section wrap split" aria-labelledby="contact-title">
          <div><p className="eyebrow">Contato</p><h2 id="contact-title">Converse com a FAP</h2><p>Joinville, Santa Catarina</p><p><a href="https://wa.me/5547991597258">(47) 99159-7258</a></p></div>
          <ContactForm />
        </section>
      </main>
      <footer><div className="wrap footer">
        <p>© FAP Contabilidade. Todos os direitos reservados.</p>
        <a className="credit" href="https://brunomarianosilva.com.br/" target="_blank" rel="noopener noreferrer">
          <svg width="32" height="34" viewBox="0 0 38 40" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3 2h8v14a11 11 0 1 1-8 10.6V2Zm11 21a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/><path d="m30 1 1.8 5.2L37 8l-5.2 1.8L30 15l-1.8-5.2L23 8l5.2-1.8L30 1Z"/></svg>
          <span><small>Desenvolvido por</small><strong>Bruno Mariano</strong></span>
        </a>
      </div></footer>
    </>
  )
}
