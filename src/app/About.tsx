'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SectionLabel } from './SiteUi'

const panels = [
  ['História', 'A FAP atende quem está começando, quem já tem um negócio e quem precisa mudar de escritório contábil. O primeiro passo é conhecer a atividade da empresa e entender o que você quer resolver.'],
  ['Missão', 'Tornar as obrigações da empresa mais fáceis de acompanhar. Explicamos os prazos, os documentos e as responsabilidades de cada etapa.'],
  ['Visão', 'Ajudar o empresário a entender seus números e usá-los para decidir. Organizamos as informações contábeis e explicamos o que elas mostram sobre o negócio.'],
]

export function About() {
  const [active, select] = useState(0)
  return (
    <section id="sobre" className="section wrap" aria-labelledby="about-title">
      <div className="split">
        <Image className="section-photo about-photo" src="/fotos/fap-escritorio.webp" alt="Profissionais conversam em uma sala de reuniões" width={1000} height={950} sizes="(max-width: 800px) 100vw, 50vw" />
        <div>
          <SectionLabel>Sobre nós</SectionLabel>
          <h2 id="about-title">Apoiamos sua empresa em cada etapa</h2>
          <p>A FAP Contabilidade reúne serviços contábeis, fiscais e trabalhistas para empresas e empreendedores em Joinville.</p>
          <div className="about-panel">
            <div className="about-tabs" role="group" aria-label="Sobre a FAP">
              {panels.map(([title], index) => <button key={title} type="button" aria-pressed={active === index} onClick={() => select(index)}>{title}</button>)}
            </div>
            <p aria-live="polite">{panels[active][1]}</p>
          </div>
        </div>
      </div>
      <ul className="about-promises">
        <li><strong>Proposta clara</strong><p>Saiba quais serviços estão incluídos antes de contratar.</p></li>
        <li><strong>Atendimento próximo</strong><p>Converse com a FAP sobre as necessidades da sua empresa.</p></li>
        <li><strong>Acompanhamento</strong><p>Receba orientação sobre documentos e prazos.</p></li>
      </ul>
    </section>
  )
}
