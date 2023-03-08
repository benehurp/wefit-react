import { Wrapper } from './styles'

export const Text = ({ children = 'Undefined Text' }: { children: string }) => {
  return <Wrapper>{children}</Wrapper>
}
