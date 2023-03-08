import { Wrapper } from './styles'

export const BuyButton = ({ added }: { added?: boolean }) => {
  return (
    <Wrapper added={added}>
      <span className="icon" />
      <span>{added ? 'Item adicionado' : 'Adicionar ao carrinho'}</span>
    </Wrapper>
  )
}
