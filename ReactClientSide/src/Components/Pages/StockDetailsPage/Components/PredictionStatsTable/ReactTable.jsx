import React, { useMemo } from "react";
import { useTable } from "react-table";

export default function ReactTable(props) {
  const data = useMemo(() => props.data, []);

  const columns = useMemo(() => props.columns, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table
      {...getTableProps()}
      style={{
        border: "solid 1px blue",
        margin: "5px",
        textAlign: "center",
      }}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  border: "solid 2px black",
                  background: "aliceblue",
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "center",
                  borderRadius: "10px",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 2px gray",
                      borderRadius: "10px",

                      //background: "papayawhip",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
