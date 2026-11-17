'use client'

import type { FormEvent } from 'react'
import { whatsapp } from './contact'

export function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    const message = ['Gostaria de conversar com um contador.', '', 'Nome: ' + fields.get('name'), 'Empresa ou atividade: ' + fields.get('company'), 'Assunto: ' + fields.get('topic')].join('\n')
    window.open(whatsapp(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>Seu nome<input name="name" autoComplete="name" required maxLength={100} /></label>
      <label>Empresa ou atividade<input name="company" autoComplete="organization" required maxLength={140} /></label>
      <label>Como podemos ajudar?<select name="topic" defaultValue="" required>
        <option value="" disabled>Selecione um assunto</option>
        <option>Abertura de empresa</option><option>Troca de contador</option><option>Escrituração fiscal</option><option>Contabilidade mensal</option><option>Departamento pessoal</option>
      </select></label>
      <button type="submit" className="button">Conversar no WhatsApp <span aria-hidden="true">↗</span></button>
    </form>
  )
}
