import { Layout } from '../../../components/Layout'
import { Message } from '../../../components/Layout/Message'
import { useUserContextProvider } from '../../../contexts/UserContext'
import { Empty } from '../Empty'

export const Successful = () => {
  const { hadSuccess } = useUserContextProvider()

  if (!hadSuccess) return <Empty />

  return (
    <Layout>
      <Message
        title={'Compra realizada com sucesso!'}
        height={310}
        source={'/assets/successful.svg'}
      />
    </Layout>
  )
}
