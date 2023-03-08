import { ContainerIconSVG, Label, Logo, MiniCart, Wrapper } from './styles'

import ChestSVG from '../../assets/chest.svg'

export const HeaderMenu = () => {
  return (
    <Wrapper>
      <Logo>WeMovies</Logo>
      <MiniCart>
        <Label>
          <div className="text">Meu Carrinho</div>
          <div className="counter">0 itens</div>
        </Label>
        <ContainerIconSVG>
          <img src={ChestSVG} />
        </ContainerIconSVG>
      </MiniCart>
    </Wrapper>
  )
}
