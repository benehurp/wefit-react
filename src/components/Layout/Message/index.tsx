import Button from '../../Buttons'
import { Text } from '../../Text'
import { Wrapper } from './styles'

export const Message = ({
  title,
  height,
  source = 'assets/empty-component.svg'
}: {
  title: string
  height?: number
  source?: string
}) => {
  return (
    <Wrapper height={height} source={source}>
      <div className="content-title">
        <Text>{title}</Text>
      </div>
      <div className="content-img" />
      <div className="back-button">
        <Button>Voltar</Button>
      </div>
    </Wrapper>
  )
}
