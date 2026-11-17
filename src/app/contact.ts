export const phone = '5547991597258'

export function whatsapp(message: string) {
  return 'https://wa.me/' + phone + '?text=' + encodeURIComponent('Olá, equipe da FAP! ' + message)
}
