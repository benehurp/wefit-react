import { ProductProps } from '../../contexts/types'
import { formatCurrency } from '../../utils/formatCurrency'
import { Wrapper } from './styles'

export const ProductDetails = ({
  title,
  price,
  image,
  isCart = false
}: Pick<ProductProps, 'title' | 'price' | 'image'> & { isCart?: boolean }) => {
  return (
    <Wrapper isCart={isCart}>
      <img src={image} alt={`Capa do filme: ${title}`} />
      <div className="group">
        <div className="title">{title}</div>
        <div className="price">{formatCurrency(price)}</div>
      </div>
    </Wrapper>
  )
}
