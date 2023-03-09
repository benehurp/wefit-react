/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Layout } from '../../components/Layout'
import { ProductsCartList } from '../../components/ProductsCartList'
import { useUserContextProvider } from '../../contexts/UserContext'
import { Empty } from './Empty'

export const Cart = () => {
  const { myCart, count } = useUserContextProvider()

  if (count <= 0) return <Empty />

  return (
    <Layout>
      <ProductsCartList data={myCart!} isCart />
    </Layout>
  )
}
