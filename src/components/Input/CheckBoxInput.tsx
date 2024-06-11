import { FC, useCallback } from 'react'

interface CheckBoxInputProps {
  label: string
  value: boolean
  onValueChange: (value: boolean) => void
}

const CheckBoxInput: FC<CheckBoxInputProps> = ({ label, value, onValueChange }) => {
  const whenChanged = useCallback(
    (value: boolean) => {
      onValueChange(!value)
    },
    [onValueChange],
  )

  return (
    <div>
      <label htmlFor="busqueda">{label}</label>
      <input name="busqueda" type="checkbox" checked={value} onChange={() => whenChanged(value)} />
    </div>
  )
}

export default CheckBoxInput
