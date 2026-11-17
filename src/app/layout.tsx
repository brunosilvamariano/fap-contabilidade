import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './site.css'
import './overview.css'

export const metadata: Metadata = {
  title: 'FAP Contabilidade em Joinville',
  description: 'Abertura de empresa, contabilidade mensal, escrituração fiscal e departamento pessoal. Converse com a FAP Contabilidade em Joinville.',
  icons: { icon: '/fap.svg' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="pt-BR"><head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&amp;family=Open+Sans:wght@400;500;600;700&amp;display=swap" /><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" /></head><body>{children}</body></html>
}
