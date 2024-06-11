import React from 'react'

interface ListProps<T> {
  items: T[]
  filterText?: string
  filterBoolean?: boolean
  filterByText: (item: T, filter?: string) => boolean
  filterByBoolean: (item: T, filter?: boolean) => boolean
  getKey: (item: T) => string | number
  renderItem: (item: T) => React.ReactNode
}

const ListWithFilter = <T,>({
  items,
  filterText,
  filterBoolean,
  getKey,
  renderItem,
  filterByText,
  filterByBoolean,
}: ListProps<T>) => {
  const itemsFiltered: T[] = items
    .filter((item) => filterByText(item, filterText))
    .filter((item) => filterByBoolean(item, filterBoolean))
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
