import { ProductProps } from '../../contexts/types'
import { formatCurrency } from '../../utils/formatCurrency'
import { BuyButton } from '../Buttons/BuyButton'
import { Informations, ProductItem, Wrapper } from './styles'

export const ProductList = ({ data }: { data: ProductProps[] }) => {
  return (
    <Wrapper>
      {data?.map(({ id, title, price, image }) => (
        <ProductItem key={id}>
          <Informations>
            <img src={image} alt={`Capa do filme: ${title}`} />
            <div className="title">{title}</div>
            <div className="price">{formatCurrency(price)}</div>
          </Informations>
          <BuyButton />
        </ProductItem>
      ))}
    </Wrapper>
  )
}
