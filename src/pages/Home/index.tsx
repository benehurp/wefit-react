import { Layout } from '../../components/Layout'
import { ProductList } from '../../components/ProductsList'
import { useUserContextProvider } from '../../contexts/UserContext'

export const Home = () => {
  const { productsData } = useUserContextProvider()
  const { data } = productsData

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return <Layout home>{<ProductList data={data!} />}</Layout>
}
