import { useUserContextProvider } from '../../contexts/UserContext'
import { HeaderMenu } from '../HeaderMenu'
import { Content } from './Content'
import { PageSpinner } from './PageSpinner'
import { HomeContent, Wrapper } from './styles'

export const Layout = ({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) => {
  const { productsData } = useUserContextProvider()
  const { isLoading } = productsData

  const section = home ? (
    <HomeContent>{children}</HomeContent>
  ) : (
    <Content>{children}</Content>
  )

  return (
    <Wrapper>
      <HeaderMenu />
      {isLoading ? <PageSpinner /> : section}
    </Wrapper>
  )
}
