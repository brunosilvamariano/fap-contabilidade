'use client'

import { useRef } from 'react'

const links = [
  ['servicos', 'Serviços'], ['trocar-contador', 'Trocar de contador'], ['sobre', 'Sobre a FAP'], ['duvidas', 'Dúvidas'], ['contato', 'Contato'],
]

export function Navigation() {
  const menu = useRef<HTMLDetailsElement>(null)
  const navigationLinks = links.map(([id, label]) => (
    <a key={id} href={'#' + id} onClick={() => { if (menu.current) menu.current.open = false }}>{label}</a>
  ))

  return (
    <>
      <nav className="desktop-nav" aria-label="Navegação principal">{navigationLinks}</nav>
      <details className="mobile-nav" ref={menu} onKeyDown={event => {
        if (event.key === 'Escape' && menu.current?.open) {
          menu.current.open = false
          menu.current.querySelector('summary')?.focus()
        }
      }}>
        <summary aria-label="Menu"><svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16M8 16h12" /></svg></summary>
        <nav aria-label="Navegação mobile">{navigationLinks}</nav>
      </details>
    </>
  )
}
