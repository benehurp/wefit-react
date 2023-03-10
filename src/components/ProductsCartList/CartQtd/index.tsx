import { useEffect, useState } from 'react'
import { Wrapper } from './styles'

export const CartQtd = ({
  initialValue,
  handlePlus,
  handleMinus,
  onInputChange
}: {
  initialValue: number
  handlePlus: () => void
  handleMinus?: () => void
  onInputChange: (value: number) => void
}) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.currentTarget.value)
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  useEffect(() => {
    setValue(initialValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handlePlus, handleMinus])

  return (
    <Wrapper>
      <span className="remove" onClick={handleMinus} />
      <input min={0} max={10} type="number" value={value} onChange={onChange} />
      <span className="add" onClick={handlePlus} />
    </Wrapper>
  )
}
