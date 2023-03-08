export type ProductProps = {
  id: number
  title: string
  price: number
  image: string
}

export type UserContextProviderProps = {
  children: React.ReactNode
}

export type StateProps = {
  data: ProductProps[] | null
  isLoading: boolean
  error: string | null
}

export type UserContextProps = {
  productsData: StateProps
}
