import { StyledButton } from '../styles'

export const StandardButton = ({
  children = 'Undefined Text'
}: {
  children: React.ReactNode
}) => {
  return <StyledButton>{children}</StyledButton>
}
