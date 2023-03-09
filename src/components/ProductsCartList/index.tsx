import { ProductProps } from '../../contexts/types'
import { formatCurrency } from '../../utils/formatCurrency'
import Button from '../Buttons'
import { ProductDetails } from '../ProductDetails'
import { CartQtd } from './CartQtd'
import { Wrapper, ProductItemRow, CheckoutActions } from './styles'

export const ProductsCartList = ({
  data,
  isCart
}: {
  data: ProductProps[]
  isCart?: boolean
}) => {
  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Qtd</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(({ id, title, price, image }) => (
            <ProductItemRow key={id}>
              <td>
                <ProductDetails
                  title={title}
                  image={image}
                  price={price}
                  isCart={isCart}
                />
              </td>
              <CartQtd />
              <td className="sub-total">{formatCurrency(29.9)}</td>
            </ProductItemRow>
          ))}
        </tbody>
      </table>
      <CheckoutActions>
        <div className="finish-button">
          <Button>Finalizar pedido</Button>
        </div>
        <span className="totals">{formatCurrency(29.9)}</span>
      </CheckoutActions>
    </Wrapper>
  )
}
