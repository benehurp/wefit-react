/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useContext, useEffect, useState } from 'react'
import {
  ProductProps,
  StateProps,
  UserContextProps,
  UserContextProviderProps
} from './types'

const UserContext = createContext<UserContextProps | undefined>(undefined)

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [productsData, setProductsData] = useState<StateProps>({
    data: null,
    isLoading: false,
    error: null
  })
  const [myCart, setMyCart] = useState<ProductProps[]>([] as ProductProps[])
  const [count, setCount] = useState<number>(0)
  const [hadSuccess, setHadSuccess] = useState<boolean>(false)

  async function fetchData() {
    try {
      setProductsData({ ...productsData, isLoading: true })
      const response = await fetch(
        'https://json-server-vercel-blond.vercel.app/products'
      )
      const data = await response.json()
      setProductsData({ ...productsData, isLoading: false, data })
    } catch (error) {
      if (error instanceof Error) {
        setProductsData({
          ...productsData,
          isLoading: false,
          error: error.message
        })
      } else {
        setProductsData({
          ...productsData,
          isLoading: false,
          error: `Erro inesperado: ${error}`
        })
      }
    }
  }

  function addToCart(product: ProductProps) {
    const productExists = myCart.reduce((accumulator, item) => {
      if (item.id === product.id) {
        item.quantity! += product.quantity = 1
        return true
      }
      return accumulator
    }, false)

    if (!productExists) {
      setMyCart((prevState) => [...prevState, { ...product, quantity: 1 }])
    } else {
      setMyCart((prevState) => [...prevState])
    }
  }

  function removeFromCart() {
    console.log('refatorar')
  }

  function productQtd(itemId: number) {
    const item = myCart.find((active) => active.id === itemId)
    return item?.quantity ?? 0
  }

  function isSelected(itemId: number) {
    const result = myCart.find((active) => active.id === itemId)

    if (result) return true

    return false
  }

  function cartTotals() {
    if (myCart === null) return 0

    return myCart.reduce((current, { quantity = 0, price }) => {
      const subtotal = quantity * price
      return current + subtotal
    }, 0)
  }

  function afterSuccessClean() {
    setHadSuccess(true)

    if (myCart.length > 0) {
      setCount(0)
      setMyCart([])
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setCount(
      myCart.reduce((current, { quantity }) => {
        return current + quantity!
      }, 0)
    ) // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myCart])

  return (
    <UserContext.Provider
      value={{
        productsData,
        count,
        myCart,
        addToCart,
        removeFromCart,
        isSelected,
        cartTotals,
        afterSuccessClean,
        hadSuccess,
        productQtd
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContextProvider = () => {
  const context = useContext(UserContext)

  if (context === undefined)
    throw new Error('Erro: Não existe um Provider envolvendo a aplicação.')

  return context
}
