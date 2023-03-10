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
    decrementCart,
    cartTotals,
    myCart,
    afterSuccessClean,
    individualProductCount,
    removeFromCart,
    handleInputChange
  } = useUserContextProvider()
  const navigate = useNavigate()
  const { width } = useWindowSize()
  const mobile = width <= 767 ? false : true
  const disableButton = myCart.length <= 0

  function handleClick() {
    navigate('/cart/success')
    afterSuccessClean()
  }

  function handleRemove(id: number) {
    const count = individualProductCount(id)

    if (count > 1) {
      const text = `Você tem certesa que deseja remover os ${count} produtos do carrinho?`
      if (confirm(text)) {
        removeFromCart(id)
      }
    } else {
      removeFromCart(id)
    }
  }

  function handleInput(e: number, product: ProductProps) {
    handleInputChange(e, product)
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
                        <TrashIcon onClick={() => handleRemove(id)} />
                      </div>
                      <div className="subtotal-on-mobile">
                        <CartQtd
                          handlePlus={() => addToCart(data[index])}
                          handleMinus={() => decrementCart(data[index])}
                          initialValue={individualProductCount(id)}
                          onInputChange={(e) => handleInput(e, data[index])}
                        />
                        <div className="group">
                          <div className="price">
                            <div className="label">Subtotal</div>
                            {formatCurrency(price * individualProductCount(id))}
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
                        handleMinus={() => decrementCart(data[index])}
                        initialValue={individualProductCount(id)}
                        onInputChange={(e) => handleInput(e, data[index])}
                      />
                    </td>
                    <td className="sub-total">
                      <span>
                        {formatCurrency(price * individualProductCount(id))}
                      </span>
                      <TrashIcon onClick={() => handleRemove(id)} />
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
