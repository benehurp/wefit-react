import { Layout } from '../../components/Layout'
import { Empty } from './Empty'

export const Cart = () => {
  const itemsCounter = 0

  if (itemsCounter <= 0) return <Empty />

  return <Layout>ok</Layout>
}
