export function formatCurrency(value: number) {
  const BRL = Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL'
  })

  return BRL.format(value)
}
