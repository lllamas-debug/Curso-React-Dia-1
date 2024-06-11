import React from 'react'

interface ListProps<T> {
  items: T[]
  filterText?: string
  filterByText: (item: T, filter?: string) => boolean
  getKey: (item: T) => string | number
  renderItem: (item: T) => React.ReactNode
}

const ListWithFilter = <T,>({ items, filterText, getKey, renderItem, filterByText }: ListProps<T>) => {
  const itemsFiltered: T[] = items.filter((item) => filterByText(item, filterText))
  return (
    <ul>
      {filterText && <p>Filtrando por: {filterText}</p>}
      {itemsFiltered.map((item) => (
        <li key={getKey(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}

export default ListWithFilter
