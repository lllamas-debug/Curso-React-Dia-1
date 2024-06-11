import { ChangeEvent, FC, useCallback } from 'react'

export interface InputProps {
  label: string
  value: string
  onValueChange: (value: string) => void
}

const Input: FC<InputProps> = ({ label, value, onValueChange }) => {
  const whenChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onValueChange(e.target.value)
    },
    [onValueChange],
  )

  return (
    <div>
      <label htmlFor={`${label}-input`}>{label}</label>
      <input id={`${label}-input`} type="text" value={value} onChange={whenChanged} />
    </div>
  )
}

export default Input
