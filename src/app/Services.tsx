'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SectionLabel, WhatsApp } from './SiteUi'

const services = [
  { name: 'Abertura de empresa', title: 'Formalize seu negócio', image: 'fap-abertura', alt: 'Empreendedora revisa documentos de abertura', text: 'Receba orientação para escolher o tipo de empresa, reunir a documentação e iniciar o processo de abertura do CNPJ.', items: ['Definição da atividade e da natureza jurídica', 'Documentação para abertura do CNPJ', 'Orientação sobre inscrições e licenças aplicáveis'] },
  { name: 'Escrituração fiscal', title: 'Mantenha os tributos em dia', image: 'fap-fiscal', alt: 'Documentos fiscais e calculadora sobre uma mesa', text: 'Acompanhe a apuração dos impostos e as entregas fiscais conforme o regime e as atividades da sua empresa.', items: ['Escrituração de notas fiscais', 'Apuração de tributos e emissão de guias', 'Entrega de declarações fiscais'] },
  { name: 'Contabilidade mensal', title: 'Acompanhe os resultados da empresa', image: 'fap-mensal', alt: 'Contador acompanha os resultados do mês', text: 'Organize os registros da empresa e use os demonstrativos para entender o patrimônio e o resultado de cada período.', items: ['Registro e conciliação das movimentações', 'Balancetes, balanço patrimonial e DRE', 'Fechamento contábil mensal'] },
  { name: 'Departamento pessoal', title: 'Organize a folha e a rotina da equipe', image: 'fap-pessoal', alt: 'Profissionais conferem a folha de pagamento', text: 'Conte com apoio para processar a folha de pagamento e organizar as obrigações relacionadas aos colaboradores.', items: ['Folha de pagamento e encargos', 'Admissões, férias e desligamentos', 'Acompanhamento das rotinas trabalhistas'] },
]

export function Services() {
  const [selected, setSelected] = useState(0)
  const service = services[selected]
  return (
    <section id="servicos" className="section wrap" aria-labelledby="services-title">
      <div className="section-heading"><SectionLabel>Nossos serviços</SectionLabel><h2 id="services-title">Serviços contábeis para sua empresa</h2></div>
      <div className="services-layout">
        <div className="service-options" role="group" aria-label="Categorias de serviço">
          {services.map(({ name }, index) => (
            <button key={name} type="button" aria-pressed={selected === index} aria-controls="service-panel" onClick={() => setSelected(index)}>
              <span aria-hidden="true">☰</span>{name}
            </button>
          ))}
        </div>
        <div id="service-panel" className="service-panel" aria-live="polite">
          <div className="service-image"><Image src={'/fotos/' + service.image + '.webp'} alt={service.alt} fill sizes="(max-width: 760px) 100vw, 28vw" /></div>
          <div className="service-description">
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul>
            <WhatsApp message={'Gostaria de conversar sobre ' + service.name.toLowerCase() + '.'}>Falar com um contador</WhatsApp>
          </div>
        </div>
      </div>
    </section>
  )
}
