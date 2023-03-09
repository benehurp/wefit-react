/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Layout } from '../../components/Layout'
import { ProductsCartList } from '../../components/ProductsCartList'
import { useUserContextProvider } from '../../contexts/UserContext'
import { Empty } from './Empty'

export const Cart = () => {
  const { productsData } = useUserContextProvider()
  const { data } = productsData
  const itemsCounter = 1

  if (itemsCounter <= 0) return <Empty />

  return (
    <Layout>
      <ProductsCartList data={data!} isCart />
    </Layout>
  )
}
