import { FC, useCallback } from 'react'
import Input from './Input'

interface SearchInputProps {
  label: string
  value: string
  onValueChange: (value: string) => void
}

const SearchInput: FC<SearchInputProps> = ({ label, value, onValueChange }) => {
  const whenChanged = useCallback(
    (text: string) => {
      text = '0000'
      onValueChange(text)
    },
    [onValueChange],
  )

  return <Input label={label} value={value} onValueChange={(text) => whenChanged(text)}></Input>
}

export default SearchInput
