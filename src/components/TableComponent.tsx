import React from 'react'
import TableBodyCom1 from './TableBodyCom1'
import TableHeader from './TableHeader'
interface TableProp {
  data: {
    ID: string,
    IDBook: string,
    FirstName: string,
    LastName: string
  }[];
}
// functional componenet
function TableComponent({ data }: TableProp) {
  return (
    <React.Fragment>
      <table>
        <TableHeader />
        <TableBodyCom1 data={data} />
      </table>
    </React.Fragment>
  )
}
export default TableComponent


