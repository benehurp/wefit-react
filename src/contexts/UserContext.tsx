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
      setProductsData({ ...productsData, isLoading: true })
      const response = await fetch(ENVIROMENT_VERCEL_PROD)
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

  function handleInputChange(value: number, product: ProductProps) {
    const productExists = myCart.reduce((accumulator, item) => {
      if (item.id === product.id) {
        item.quantity = value
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

  function decrementCart(product: ProductProps) {
    const updatedCart: ProductProps[] = myCart.reduce(
      (accumulator: ProductProps[], item: ProductProps) => {
        if (item.id === product.id) {
          if (item.quantity === 1) {
            return accumulator
          } else {
            item.quantity! -= 1
          }
        }
        return [...accumulator, item]
      },
      []
    )

    setMyCart(updatedCart)
  }

  function removeFromCart(productId: number) {
    setMyCart((current) => {
      const itemsToRemove = current.filter((f) => f.id !== productId)
      return itemsToRemove
    })
  }

  function individualProductCount(productId: number) {
    const item = myCart.find((active) => active.id === productId)
    return item?.quantity ?? 0
  }

  function isSelected(productId: number) {
    const result = myCart.find(
      (active) => active.id === productId && active.quantity! > 0
    )

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
