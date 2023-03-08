import { Layout } from '../../../components/Layout'
import { Message } from '../../../components/Layout/Message'

export const Successful = () => {
  return (
    <Layout>
      <Message
        title={'Compra realizada com sucesso!'}
        width={295}
        height={310}
        source={'../../../../public/assets/successful.svg'}
      />
    </Layout>
  )
}
