import React from 'react'

interface TableProp {
  data: {
    ID: string,
    IDBook: string,
    FirstName: string,
    LastName: string
  }[];
}

function TableBodyCom1({ data }: TableProp) {
  return (
    <tbody>
      {data.map((data: any) => (
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
  )
}

export default TableBodyCom1
