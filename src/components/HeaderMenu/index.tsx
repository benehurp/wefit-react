import { ChestSVG, Label, Logo, MiniCart, Wrapper } from './styles'

export const HeaderMenu = () => {
  return (
    <Wrapper>
      <Logo>WeMovies</Logo>
      <MiniCart>
        <Label>
          <div className="text">Meu Carrinho</div>
          <div className="counter">0 itens</div>
        </Label>
        <ChestSVG />
      </MiniCart>
    </Wrapper>
  )
}
