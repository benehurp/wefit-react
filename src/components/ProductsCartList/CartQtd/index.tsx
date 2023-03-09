import { Wrapper } from './styles'

export const CartQtd = () => {
  return (
    <Wrapper>
      <div className="group">
        <span className="remove" />
        <input min={1} max={10} type="number" />
        <span className="add" />
      </div>
    </Wrapper>
  )
}
