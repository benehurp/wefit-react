/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useContext, useEffect, useState } from 'react'
import {
  ProductProps,
  StateProps,
  UserContextProps,
  UserContextProviderProps
} from './types'

const UserContext = createContext<UserContextProps | undefined>(undefined)

const ENVIROMENT_VERCEL_PROD =
  'https://json-server-vercel-blond.vercel.app/products'

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
      setProductsData((prevData) => ({
        ...prevData,
        isLoading: true
      }))
      const response = await fetch(ENVIROMENT_VERCEL_PROD)
      const data = await response.json()
      setProductsData((prevData) => ({
        ...prevData,
        isLoading: false,
        data,
        error: ''
      }))
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

  function handleInputChange(value: number, product: ProductProps) {
    const updatedCart = myCart.map((item) =>
      item.id === product.id ? { ...item, quantity: value } : item
    )
    setMyCart(updatedCart)
  }

  function addToCart(product: ProductProps) {
    const updatedCart = myCart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity! + 1 } : item
    )
    const productExists = updatedCart.some(
      (item) => item.id === product.id && item.quantity! > 0
    )
    if (productExists) {
      setMyCart(updatedCart)
    } else {
      setMyCart([...updatedCart, { ...product, quantity: 1 }])
    }
  }

  function decrementCart(product: ProductProps) {
    const updatedCart = myCart.map((item) => {
      if (item.id === product.id && item.quantity! > 1) {
        return { ...item, quantity: item.quantity! - 1 }
      }
      return item
    })
    setMyCart(updatedCart)
  }

  function removeFromCart(productId: number) {
    const updatedCart = myCart.filter((item) => item.id !== productId)
    setMyCart(updatedCart)
  }

  function individualProductCount(productId: number) {
    const item = myCart.find((active) => active.id === productId)
    return item?.quantity ?? 0
  }

  function isSelected(productId: number) {
    const item = myCart.find((active) => active.id === productId)

    return Boolean(item?.quantity)
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
        hadSuccess,
        addToCart,
        decrementCart,
        removeFromCart,
        isSelected,
        cartTotals,
        afterSuccessClean,
        individualProductCount,
        handleInputChange
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
