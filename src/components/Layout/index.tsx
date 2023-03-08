import { HeaderMenu } from '../HeaderMenu'
import { PageSpinner } from './PageSpinner'
import { Wrapper } from './styles'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const isLoading = true

  return (
    <Wrapper>
      <HeaderMenu />
      {isLoading ? <PageSpinner /> : children}
    </Wrapper>
  )
}
