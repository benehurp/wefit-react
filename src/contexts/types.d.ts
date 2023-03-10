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
  hadSuccess: boolean
  addToCart: (product: ProductProps) => void
  decrementCart: (product: ProductProps) => void
  removeFromCart: (productId: number) => void
  isSelected: (productId: number) => boolean
  cartTotals: () => number
  afterSuccessClean: () => void
  individualProductCount: (productId: number) => number
  handleInputChange: (value: number, product: ProductProps) => void
}
