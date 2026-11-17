import { whatsapp } from './contact'

export function SectionLabel({ children }: { children: string }) {
  return <p className="eyebrow"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="3" /><path d="M8.5 7h7m-7 10v-2m3.5 2v-4m3.5 4v-6" /></svg>{children}</p>
}

export function WhatsApp({ children, message }: { children: string; message: string }) {
  return <a className="button" href={whatsapp(message)} target="_blank" rel="noopener noreferrer">
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.5 11.8a8.5 8.5 0 0 1-12.7 7.4L3.5 20.5l1.2-4.2a8.5 8.5 0 1 1 15.8-4.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path fill="currentColor" d="M9 7.6c-.3-.5-.8-.5-1.2-.2-.8.5-1.1 1.6-.7 2.6 1 2.6 3.1 4.7 5.8 5.7 1 .4 2 .2 2.6-.5.3-.4.4-.9.1-1.2l-2.1-1c-.3-.1-.5 0-.7.2l-.5.6a7 7 0 0 1-3-3l.5-.6c.2-.2.2-.5.1-.7Z"/></svg>
    {children}
  </a>
}
