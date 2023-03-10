import { Layout } from '../../components/Layout'
import { Message } from '../../components/Layout/Message'

export const NotFound = () => {
  return (
    <Layout>
      <Message title={'Erro 404 - Não existe nada por aqui,'} />
    </Layout>
  )
}
