'use client'

import { useSectionNavigation } from './useSectionNavigation'
import { MobileNav } from './MobileNav'

export function Navigation() {
  useSectionNavigation()

  return (
    <>
      <nav className="desktop-nav" aria-label="Navegação principal">
        <a href="#inicio">Início</a><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a>
        <a href="#trocar-contador">Trocar de contador</a>
        <a href="#contato">Contato</a>
        <span className="header-socials" aria-hidden="true"><i className="fab fa-facebook-f" /><i className="fab fa-twitter" /><i className="fab fa-linkedin-in" /></span>
      </nav>
      <MobileNav />
    </>
  )
}
