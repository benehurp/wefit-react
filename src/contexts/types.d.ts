export type ProductProps = {
  id: number
  title: string
  price: number
  image: string
  quantity?: number = 0
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
  count: number
  myCart: ProductProps[]
  addToCart: (item: ProductProps) => void
  removeFromCart: (item: ProductProps) => void
  isSelected: (itemId: number) => boolean
  cartTotals: () => number
  afterSuccessClean: () => void
  hadSuccess: boolean
  productQtd: (itemId: number) => number
}
