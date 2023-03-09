import pluralText from '../../../utils/pluralText'
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
      <span>
        {added
          ? pluralText(countItem, 'Item adicionado', 'Itens adicionados')
          : 'Adicionar ao carrinho'}
      </span>
    </Wrapper>
  )
}
