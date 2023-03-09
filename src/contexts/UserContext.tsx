import { createContext, useContext, useEffect, useState } from 'react'
import { StateProps, UserContextProps, UserContextProviderProps } from './types'

const UserContext = createContext<UserContextProps | undefined>(undefined)

// const ENV_SERVER_JSON = 'http://localhost:3004/products'
const ENV_LOCAL = '../../server/db_local.json'

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [productsData, setProductsData] = useState<StateProps>({
    data: null,
    isLoading: false,
    error: null
  })

  async function fetchData() {
    try {
      setProductsData({ ...productsData, isLoading: true })
      const response = await fetch(ENV_LOCAL)
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

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <UserContext.Provider value={{ productsData }}>
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
