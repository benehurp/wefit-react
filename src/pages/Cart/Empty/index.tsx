import { Layout } from '../../../components/Layout'
import { Message } from '../../../components/Layout/Message'

export const Empty = () => {
  return (
    <Layout>
      <Message
        title={'Parece que não há nada por aqui :('}
        height={265}
        source={'assets/empty.svg'}
      />
    </Layout>
  )
}
