import React, { createContext, ReactNode, useState } from 'react'

interface FilterContextType<T> {
  filterText: string
  setFilterText: (value: string) => void
  filterBoolean: boolean
  setFilterBoolean: (value: boolean) => void
  filterByText: (item: T) => boolean
  filterByBoolean: (item: T) => boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FilterContext = createContext<FilterContextType<any>>({
  filterText: '',
  setFilterText: () => {},
  filterBoolean: false,
  setFilterBoolean: () => {},
  filterByText: () => true,
  filterByBoolean: () => true,
})

interface FilterContextProviderProps {
  children: ReactNode
}

const FilterContextProvider: React.FC<FilterContextProviderProps> = ({ children }) => {
  const [filterText, setFilterText] = useState<string>('')
  const [filterBoolean, setFilterBoolean] = useState<boolean>(false)

  const filterByText = <T extends { title: string }>(item: T) => {
    if (!filterText) {
      return true
    }
    return item.title.toLowerCase().includes(filterText.toLowerCase())
  }

  const filterByBoolean = <T extends { completed: boolean }>(item: T) => {
    if (filterBoolean === false) {
      return true
    }
    return item.completed === filterBoolean
  }

  const handleSetFilterText = (value: string) => {
    setFilterText(value)
  }

  const handleSetFilterBoolean = (value: boolean) => {
    setFilterBoolean(value)
  }

  return (
    <FilterContext.Provider
      value={{
        filterText,
        setFilterText: handleSetFilterText,
        filterBoolean,
        setFilterBoolean: handleSetFilterBoolean,
        filterByText,
        filterByBoolean,
      }}>
      {children}
    </FilterContext.Provider>
  )
}

export { FilterContext, FilterContextProvider }
