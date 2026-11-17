'use client'

import type { FormEvent } from 'react'
import { whatsapp } from './contact'

const services = [
  ['Abertura de empresa', 'servicos'],
  ['Rotina fiscal', 'servicos'],
  ['Contabilidade mensal', 'servicos'],
  ['Departamento pessoal', 'servicos'],
  ['Troca de contador', 'trocar-contador'],
]

const links = [
  ['Sobre nós', 'sobre'],
  ['Contato', 'contato'],
  ['Serviços', 'servicos'],
  ['Trocar de contador', 'trocar-contador'],
  ['Dúvidas frequentes', 'duvidas'],
]

export function Footer() {
  function requestGuidance(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const email = new FormData(event.currentTarget).get('email')
    window.open(whatsapp('Gostaria de receber orientações contábeis. Meu e-mail: ' + email), '_blank', 'noopener,noreferrer')
  }

  return (
    <footer>
      <div className="wrap footer-columns">
        <div className="footer-office">
          <h2>Nosso escritório</h2>
          <p><i className="fa fa-map-marker-alt" aria-hidden="true" /> Joinville, Santa Catarina</p>
          <p><a href="https://wa.me/5547991597258" target="_blank" rel="noopener noreferrer"><i className="fa fa-phone-alt" aria-hidden="true" /> (47) 99159-7258</a></p>
          <p><a href="mailto:contato@fapcontabilidade.example"><i className="fa fa-envelope" aria-hidden="true" /> contato@fapcontabilidade.example</a></p>
          <div className="footer-socials" aria-hidden="true">
            <i className="fab fa-twitter" /><i className="fab fa-facebook-f" /><i className="fab fa-youtube" /><i className="fab fa-linkedin-in" />
          </div>
        </div>
        <nav className="footer-nav" aria-label="Serviços no rodapé">
          <h2>Nossos serviços</h2>
          {services.map(([label, id]) => <a key={label} href={'#' + id}>{label}</a>)}
        </nav>
        <nav className="footer-nav" aria-label="Links úteis">
          <h2>Links úteis</h2>
          {links.map(([label, id]) => <a key={label} href={'#' + id}>{label}</a>)}
        </nav>
        <div>
          <h2>Receba orientações</h2>
          <p>Informe seu e-mail para solicitar orientações contábeis pelo WhatsApp.</p>
          <form className="footer-guidance" onSubmit={requestGuidance}>
            <input type="email" name="email" placeholder="Seu e-mail" aria-label="Seu e-mail" maxLength={140} required />
            <button className="button" type="submit">Solicitar</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="wrap footer">
          <p>© FAP Contabilidade, todos os direitos reservados.</p>
          <a className="developer-credit" href="https://brunomarianosilva.com.br/" target="_blank" rel="noopener noreferrer">
            <svg width="34" height="36" viewBox="0 0 38 40" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M3 2h8v14a11 11 0 1 1-8 10.6V2Zm11 21a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
              <path d="m30 1 1.8 5.2L37 8l-5.2 1.8L30 15l-1.8-5.2L23 8l5.2-1.8L30 1Z" />
            </svg>
            <span><small>Desenvolvido com ❤️ por</small><strong>Bruno Mariano</strong></span>
          </a>
        </div>
      </div>
    </footer>
  )
}
