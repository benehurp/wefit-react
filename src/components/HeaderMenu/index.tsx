import { Link } from 'react-router-dom'
import { useUserContextProvider } from '../../contexts/UserContext'
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
          <div className="counter">{count} itens</div>
        </Label>
        <ChestSVG />
      </MiniCart>
    </Wrapper>
  )
}
