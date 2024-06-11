import { FC, useCallback, useEffect, useRef } from 'react'
import Input, { InputProps } from './Input'

interface SearchInputProps extends InputProps {}

const SearchInput: FC<SearchInputProps> = ({ onValueChange, ...props }) => {
  const whenChanged = useCallback(
    (text: string) => {
      onValueChange(text)
    },
    [onValueChange],
  )

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  })

  return <Input label={props.label} value={props.value} onValueChange={(text) => whenChanged(text)}></Input>
}

export default SearchInput
