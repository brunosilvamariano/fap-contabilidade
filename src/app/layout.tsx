import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './site.css'

export const metadata: Metadata = {
  title: 'FAP Contabilidade em Joinville',
  description: 'Abertura de empresa, contabilidade mensal, escrituração fiscal e departamento pessoal. Converse com a FAP Contabilidade em Joinville.',
  icons: { icon: '/fap.svg' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>
}
