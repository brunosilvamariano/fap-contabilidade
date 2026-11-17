'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { WhatsApp, SectionLabel } from './SiteUi'

const slides = [
  { title: 'Contabilidade para sua empresa crescer', image: 'banner-contabilidade', alt: 'Contadora confere uma planilha ao lado do computador' },
  { title: 'Sua empresa em dia, do CNPJ à folha', image: 'banner-consultoria', alt: 'Contador apresenta um demonstrativo a dois empresários' },
]

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => setCurrent(previous => (previous + 1) % slides.length), 6500)
    return () => window.clearInterval(timer)
  }, [paused])

  function change(direction: number) {
    setPaused(true)
    setCurrent(previous => (previous + direction + slides.length) % slides.length)
  }

  return (
    <section id="inicio" className="hero" aria-label="Apresentação da FAP">
      <div className="hero-images">
        {slides.map(({ image, alt }, index) => (
          <div key={image} className="hero-image" data-active={current === index} aria-hidden={current !== index}>
            <Image src={'/fotos/' + image + '.webp'} alt={alt} fill sizes="100vw" preload={index === 0} />
          </div>
        ))}
      </div>
      <div className="wrap hero-stage">
        <div className="hero-copy" key={current} onFocusCapture={() => setPaused(true)}>
          <SectionLabel>Bem-vindo à FAP Contabilidade</SectionLabel>
          <h1>{slides[current].title}</h1>
          <div className="actions hero-actions">
            <WhatsApp message="Gostaria de falar sobre os serviços contábeis para a minha empresa.">Falar com um contador</WhatsApp>
            <a className="button button-secondary" href="#servicos">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 9h8M8 16v-2m4 2v-4m4 4v-6" /></svg>
              Conhecer os serviços
            </a>
          </div>
        </div>
      </div>
      <button type="button" onClick={() => change(-1)} className="hero-arrow hero-prev" aria-label="Banner anterior"><span aria-hidden="true">‹</span></button>
      <button type="button" onClick={() => change(1)} className="hero-arrow hero-next" aria-label="Próximo banner"><span aria-hidden="true">›</span></button>
    </section>
  )
}
