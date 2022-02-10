import React, { HTMLProps } from 'react'
import { onSort } from './helperFunctions'

export interface TableProps extends HTMLProps<HTMLTableElement> {
  tableHeaders?: string[]
  tableData?: any[]
}

export const Table = ({ tableHeaders, tableData }: TableProps) => {
  const [data, setData] = React.useState<any>(tableData)
  const [sortState, setSortState] = React.useState<string>('ASC')

  const onClick = (value: string) => {
    setData(onSort(tableData as any, sortState, value))
    setSortState(sortState === 'ASC' ? 'DESC' : 'ASC')
  }

  return (
    <table className="table" role="table">
      <thead>
        <tr>
          {tableHeaders?.map((value, index: number) => (
            <th key={index} className="px-5" scope="col">
              <button onClick={() => onClick(value)}>{value}</button>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((value: any, index: number) => (
          <tr key={`data-${index}`}>
            {tableHeaders?.map((data: string, index: number) => (
              <td key={`header-${index}`} className="px-5">
                {value[data]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
