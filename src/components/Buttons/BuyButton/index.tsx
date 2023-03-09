import { Wrapper } from './styles'

type BuyButtonProps = {
  added?: boolean
  onClick: () => void
  countItem: number
}

export const BuyButton = ({ added, onClick, countItem }: BuyButtonProps) => {
  return (
    <Wrapper added={added} onClick={onClick} countItem={countItem}>
      <span className="icon" />
      <span>{added ? 'Item adicionado' : 'Adicionar ao carrinho'}</span>
    </Wrapper>
  )
}
