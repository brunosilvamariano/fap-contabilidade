'use client'

import type { FormEvent } from 'react'
import { whatsapp } from './contact'

export function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    const message = [
      'Gostaria de solicitar um retorno.', '',
      'Nome: ' + fields.get('name'),
      'E-mail: ' + fields.get('email'),
      'Telefone: ' + fields.get('phone'),
      'Assunto: ' + fields.get('subject'), '',
      'Mensagem: ' + fields.get('message'),
    ].join('\n')
    window.open(whatsapp(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <form className="contact-form contact-form-original" onSubmit={submit}>
      <label><input name="name" placeholder=" " autoComplete="name" required maxLength={140} /><span>Seu nome</span></label>
      <label><input type="email" name="email" placeholder=" " autoComplete="email" required maxLength={140} /><span>Seu e-mail</span></label>
      <label><input type="tel" name="phone" placeholder=" " autoComplete="tel" required maxLength={140} /><span>Seu telefone</span></label>
      <label><input name="subject" placeholder=" " required maxLength={140} /><span>Assunto</span></label>
      <label className="contact-wide"><textarea name="message" placeholder=" " required maxLength={1200} /><span>Mensagem</span></label>
      <button type="submit" className="button contact-wide">Enviar pelo WhatsApp</button>
    </form>
  )
}
