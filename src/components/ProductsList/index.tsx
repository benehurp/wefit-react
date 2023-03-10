import { ProductProps } from '../../contexts/types'
import { useUserContextProvider } from '../../contexts/UserContext'
import { BuyButton } from '../Buttons/BuyButton'
import { ProductDetails } from '../ProductDetails'
import { ProductItem, Wrapper } from './styles'

export const ProductList = ({ data }: { data: ProductProps[] }) => {
  const { addToCart, isSelected, individualProductCount } =
    useUserContextProvider()

  return (
    <Wrapper>
      {data?.map(({ id, title, price, image }) => (
        <ProductItem key={id}>
          <ProductDetails title={title} image={image} price={price} />
          <BuyButton
            added={isSelected(id)}
            onClick={() => addToCart({ id, title, price, image })}
            countItem={individualProductCount(id)}
          />
        </ProductItem>
      ))}
    </Wrapper>
  )
}
