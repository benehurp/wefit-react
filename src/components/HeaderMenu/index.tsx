import { Link } from 'react-router-dom'
import { useUserContextProvider } from '../../contexts/UserContext'
import pluralText from '../../utils/pluralText'
import { ChestSVG, Label, Logo, MiniCart, Wrapper } from './styles'

export const HeaderMenu = () => {
  const { count } = useUserContextProvider()
  return (
    <Wrapper>
      <Logo as={Link} to={'/'}>
        WeMovies
      </Logo>
      <MiniCart as={Link} to={'/cart'}>
        <Label>
          <div className="text">Meu Carrinho</div>
          <div className="counter">
            {count} {pluralText(count, 'item', 'itens', 'itens')}
          </div>
        </Label>
        <ChestSVG />
      </MiniCart>
    </Wrapper>
  )
}
