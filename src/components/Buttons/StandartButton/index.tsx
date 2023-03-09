import { StyledButton } from '../styles'

type StandardButtonProps = {
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
}

export const StandardButton = ({
  children = 'Undefined Text',
  onClick,
  disabled
}: StandardButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  )
}
