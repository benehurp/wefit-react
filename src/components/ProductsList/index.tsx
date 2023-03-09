import { ProductProps } from '../../contexts/types'
import { BuyButton } from '../Buttons/BuyButton'
import { ProductDetails } from '../ProductDetails'
import { ProductItem, Wrapper } from './styles'

export const ProductList = ({ data }: { data: ProductProps[] }) => {
  return (
    <Wrapper>
      {data?.map(({ id, title, price, image }) => (
        <ProductItem key={id}>
          <ProductDetails title={title} image={image} price={price} />
          <BuyButton />
        </ProductItem>
      ))}
    </Wrapper>
  )
}
