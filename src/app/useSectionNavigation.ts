'use client'

import { useEffect } from 'react'

export function useSectionNavigation() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>('.header')
    const navbar = header?.querySelector<HTMLElement>('.header-inner')
    if (!header || !navbar) return

    let frame = 0
    function updateHeader() {
      if (header) header.dataset.scrolled = String(window.scrollY > 45)
    }

    function scrollToSection(section: HTMLElement, smooth: boolean) {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (!navbar) return

        const sectionTop = window.scrollY + section.getBoundingClientRect().top
        const padding = Number.parseFloat(getComputedStyle(section).paddingTop) || 0
        const gap = window.innerWidth < 992 ? 16 : 24
        const top = section.id === 'inicio' ? 0 : sectionTop + padding - navbar.offsetHeight - gap
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        window.scrollTo({ top: Math.max(0, top), behavior: smooth && !reduceMotion ? 'smooth' : 'instant' })
      })
    }

    function sectionFromHash(hash: string) {
      const section = document.getElementById(hash.slice(1))
      return section?.matches('main section[id]') ? section : null
    }

    function followLink(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null
      if (!link || link.target) return
      const section = sectionFromHash(link.hash)
      if (!section) return

      event.preventDefault()
      if (window.location.hash !== link.hash) history.pushState(null, '', link.hash)
      section.tabIndex = -1
      section.focus({ preventScroll: true })
      scrollToSection(section, true)
    }

    function followHash() {
      const section = sectionFromHash(window.location.hash)
      if (section) scrollToSection(section, false)
    }

    updateHeader()
    followHash()
    window.addEventListener('scroll', updateHeader, { passive: true })
    window.addEventListener('hashchange', followHash)
    document.addEventListener('click', followLink)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateHeader)
      window.removeEventListener('hashchange', followHash)
      document.removeEventListener('click', followLink)
    }
  }, [])
}
