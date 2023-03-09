import { Layout } from '../../../components/Layout'
import { Message } from '../../../components/Layout/Message'

export const Successful = () => {
  return (
    <Layout>
      <Message
        title={'Compra realizada com sucesso!'}
        height={310}
        source={'assets/successful.svg'}
      />
    </Layout>
  )
}
