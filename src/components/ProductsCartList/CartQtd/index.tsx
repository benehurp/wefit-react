import { Wrapper } from './styles'

export const CartQtd = ({
  initialValue = 0,
  handlePlus,
  handleMinus
}: {
  initialValue: number
  handlePlus: () => void
  handleMinus?: () => void
}) => {
  return (
    <Wrapper>
      <div className="group">
        <span className="remove" onClick={handleMinus} />
        <input min={0} max={10} type="number" value={initialValue} />
        <span className="add" onClick={handlePlus} />
      </div>
    </Wrapper>
  )
}
