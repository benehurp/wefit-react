import Button from '../../Buttons'
import { Text } from '../../Text'
import { Wrapper } from './styles'

export const Message = ({
  title,
  width,
  height,
  source = '../../../../public/assets/empty-component.svg'
}: {
  title: string
  width?: number
  height?: number
  source?: string
}) => {
  return (
    <Wrapper width={width} height={height} source={source}>
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
