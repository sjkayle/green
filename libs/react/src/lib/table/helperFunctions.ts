/**
 * sort array of tabke rows
 * @param items table rows array
 * @param columnName the target column name
 * @param sortDirection the sort direction
 * @return Array of tableRow
 */

export const onSort = (
  data: Array<any>,
  sortDirection: string,
  columnName: string
) => {
  const newData = [...data].sort((a, b) => {
    let result = 0

    if (isNaN(a[columnName]) && isNaN(b[columnName])) {
      result = String(a[columnName]).localeCompare(
        String(b[columnName]),
        'en',
        { sensitivity: 'base', ignorePunctuation: true }
      )
    } else {
      result = a[columnName] - b[columnName]
    }
    return result
  })
  return sortDirection === 'ASC' ? newData : newData.reverse()
}
