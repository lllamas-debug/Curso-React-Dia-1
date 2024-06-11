import React, { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../Context/FilterContext'

interface ListProps<T> {
  items: T[]
  getKey: (item: T) => string | number
  renderItem: (item: T) => React.ReactNode
}

const ListWithFilter = <T,>({ items, getKey, renderItem }: ListProps<T>) => {
  const { filterText, filterBoolean, filterByText, filterByBoolean } = useContext(FilterContext)
  const [itemsFiltered, setItemsFiltered] = useState<T[]>([])

  // Recalculate itemsFiltered whenever filterText or filterBoolean changes
  useEffect(() => {
    const filteredItems = items.filter((item) => filterByText(item)).filter((item) => filterByBoolean(item))
    setItemsFiltered(filteredItems)
  }, [filterText, filterBoolean, filterByText, items, filterByBoolean])

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
