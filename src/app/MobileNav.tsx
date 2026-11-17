'use client'

import { useEffect, useRef, useState } from 'react'
import { whatsapp } from './contact'

const links = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre a FAP', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Trocar de contador', id: 'trocar-contador' },
  { label: 'Dúvidas frequentes', id: 'duvidas' },
  { label: 'Contato', id: 'contato' },
]

const contactHref = whatsapp('Gostaria de conversar com um contador sobre a minha empresa.')

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const wrapper = useRef<HTMLDivElement>(null)
  const toggle = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
    }

    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !wrapper.current?.contains(event.target)) setOpen(false)
    }

    const desktop = window.matchMedia('(min-width: 992px)')
    function closeOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOutside)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOutside)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [open])

  return (
    <div className="fap-mobile-nav" ref={wrapper}>
      <button
        className="fap-mobile-toggle"
        type="button"
        ref={toggle}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        aria-controls="fap-mobile-panel"
        onClick={() => setOpen(!open)}
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
          <path d="M4 8h16" />
          <path d="M9 16h11" />
        </svg>
      </button>
      <div className="fap-mobile-panel" id="fap-mobile-panel" data-open={open} inert={!open}>
        <div className="fap-mobile-panel-inner">
          <div className="fap-mobile-links" role="group" aria-label="Links do menu">
            {links.map(({ label, id }) => (
              <a key={id} href={'#' + id} onClick={() => setOpen(false)}>
                {label}
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
                  <path d="m6 3.5 4.5 4.5L6 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>
          <a className="button fap-mobile-cta" href={contactHref} target="_blank" rel="noopener noreferrer" onClick={() => { setOpen(false); toggle.current?.focus() }}>
            <i className="fab fa-whatsapp" aria-hidden="true" />
            Falar com um contador
          </a>
        </div>
      </div>
    </div>
  )
}
