import { Layout } from '../../components/Layout'
import { Message } from '../../components/Layout/Message'
import { Text } from '../../components/Text'

export const Cart = () => {
  const itemsCounter = 0

  if (itemsCounter <= 0)
    return (
      <Layout>
        <Message
          title={'Parece que não há nada por aqui :('}
          width={448}
          height={265}
          source={'src/assets/empty.svg'}
        />
      </Layout>
    )

  return (
    <Layout>
      <Text>Items do carrinhos</Text>
    </Layout>
  )
}
