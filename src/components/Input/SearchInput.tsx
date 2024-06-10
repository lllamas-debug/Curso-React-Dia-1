import { ChangeEvent, FC, useCallback, useEffect, useRef } from 'react'

interface SearchInputProps {
  label: string
  value: string
  onValueChange: (value: string) => void
}

const SearchInput: FC<SearchInputProps> = ({ label, value, onValueChange }) => {
  const whenChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onValueChange(e.target.value)
    },
    [onValueChange],
  )

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  })

  return (
    <div>
      <label htmlFor="busqueda">{label}</label>
      <input name="busqueda" ref={inputRef} type="text" value={value} onChange={whenChanged} />
    </div>
  )
}

export default SearchInput
