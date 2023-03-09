import { useNavigate } from 'react-router-dom'
import { ProductProps } from '../../contexts/types'
import { useUserContextProvider } from '../../contexts/UserContext'
import { useWindowSize } from '../../hooks/useWindowSize'
import { formatCurrency } from '../../utils/formatCurrency'
import Button from '../Buttons'
import { ProductDetails } from '../ProductDetails'
import { CartQtd } from './CartQtd'
import { Wrapper, ProductItemRow, CheckoutActions, TrashIcon } from './styles'

export const ProductsCartList = ({
  data,
  isCart
}: {
  data: ProductProps[]
  isCart?: boolean
}) => {
  const {
    addToCart,
    removeFromCart,
    cartTotals,
    myCart,
    afterSuccessClean,
    productQtd
  } = useUserContextProvider()
  const navigate = useNavigate()
  const { width } = useWindowSize()
  const mobile = width <= 767 ? false : true
  const disableButton = myCart.length <= 0

  function handleClick() {
    navigate('/cart/success')
    afterSuccessClean()
  }

  return (
    <Wrapper>
      <div className="teste">
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Qtd</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(({ id, title, price, image }, index) => (
              <ProductItemRow key={id}>
                <td>
                  <ProductDetails
                    title={title}
                    image={image}
                    price={price}
                    isCart={isCart}
                  />
                  {!mobile && (
                    <>
                      <div className="trash-on-mobile">
                        <TrashIcon
                          onClick={() => removeFromCart(data[index])}
                        />
                      </div>
                      <div className="subtotal-on-mobile">
                        <CartQtd
                          handlePlus={() => addToCart(data[index])}
                          handleMinus={() => removeFromCart(data[index])}
                          initialValue={productQtd(id)}
                        />
                        <div className="group">
                          <div className="price">
                            <div className="label">Subtotal</div>
                            {formatCurrency(price * productQtd(id))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </td>
                {mobile && (
                  <>
                    <td>
                      <CartQtd
                        handlePlus={() => addToCart(data[index])}
                        handleMinus={() => removeFromCart(data[index])}
                        initialValue={productQtd(id)}
                      />
                    </td>
                    <td className="sub-total">
                      <span>{formatCurrency(price * productQtd(id))}</span>
                      <TrashIcon onClick={() => removeFromCart(data[index])} />
                    </td>
                  </>
                )}
              </ProductItemRow>
            ))}
          </tbody>
        </table>
      </div>
      <CheckoutActions>
        <div className="finish-button">
          <Button disabled={disableButton} onClick={handleClick}>
            Finalizar pedido
          </Button>
        </div>
        <span className="totals">{formatCurrency(cartTotals())}</span>
      </CheckoutActions>
    </Wrapper>
  )
}
