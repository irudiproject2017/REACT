import React from 'react'

interface TableProp {
  data: {
    ID: number,
    IDBook: string,
    FirstName: string,
    LastName: string
  }[];
}
// functional componenet
const TableComponent: React.FC<TableProp> = (props) => {
  return (
    <React.Fragment>
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Book id</th>
            <th>First name</th>
            <th>Last name</th>
          </tr>
        </tbody>
        <tbody>
          {props.data.map((data: any) => (
            <tr key={data.ID}>
              <td>{data.ID}</td>

              <td>{data.IDBook}</td>
              <td>{data.FirstName}</td>
              <td>{data.LastName}</td>
              <td>
                <button
                  type="submit"
                  id={data.ID}
                  className="delete-table"
                >
                  Delete
                        </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default TableComponent



