import { FC } from 'react'

interface SearchInputProps {
  label: string
  value: string
  onChange: (value: string) => void
}

const SearchInput: FC<SearchInputProps> = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input type="text" value={props.value} onChange={(e) => props.onChange(e.target.value)} />
    </div>
  )
}

export default SearchInput
