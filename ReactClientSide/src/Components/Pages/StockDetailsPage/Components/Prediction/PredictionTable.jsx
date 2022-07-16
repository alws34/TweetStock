import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../../../Configs/Global";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  // [`&.${tableCellClasses.head}`]: {
  //   backgroundColor:
  //     global.config.theme === "dark"
  //       ? theme.palette.common.black
  //       : theme.palette.common.white,
  //   color:
  //     global.config.theme === "dark"
  //       ? theme.palette.common.white
  //       : theme.palette.common.black,
  // },
  [`&.${tableCellClasses.body}`]: {
    color:
      global.config.theme === "dark"
        ? theme.palette.common.white
        : theme.palette.common.black,

    fontSize: 14,
    fontWeight: "bold",
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    margin: "0",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    //width: "100%",
    color: global.config.theme === "dark" ? "white" : "black",
    backgroundColor:
      global.config.theme === "dark" ? "#4E4E52" : global.config.lightBG,
    border:
      global.config.theme === "dark" ? "1px solid white" : "1px solid black",
    borderLeft: 0,
    borderRight: 0,
    // color:
    //   global.config.theme === "dark"
    //     ? theme.palette.common.white
    //     : theme.palette.common.black,
  },
  "&:nth-of-type(odd)": {
    //width: "100%",
    color: global.config.theme === "dark" ? "white" : "black",
    backgroundColor: global.config.theme === "dark" ? "#202023" : "white",
    border:
      global.config.theme === "dark" ? "1px solid white" : "1px solid black",
    borderLeft: 0,
    borderRight: 0,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  const align = "center";
  return (
    <TableContainer style={{ width: "100%", margin: "auto" }} component={Paper}>
      <Table aria-label="customized table">
        {/* <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align={align}>Calories</StyledTableCell>
            <StyledTableCell align={align}>Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align={align}>Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align={align}>Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead> */}
        <TableBody
          sx={{
            border: 0,
            font: global.config.theme === "dark" ? "white" : "black",
            backgroundColor: global.config.theme === "dark" ? "black" : "white",
          }}
        >
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
              <StyledTableCell align={"left"}>{row.name}</StyledTableCell>
              <StyledTableCell align={"right"}>{row.fat}</StyledTableCell>
              {/* <StyledTableCell align={align}>{row.carbs}</StyledTableCell>
              <StyledTableCell align={align}>{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// import React, { useMemo } from "react";
// import { useTable } from "react-table";

// export default function ReactTable(props) {
//   const data = useMemo(() => props.data, []);

//   const columns = useMemo(() => props.columns, []);

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({ columns, data });

//   return (
//     <table
//       {...getTableProps()}
//       style={{
//         border: "solid 1px blue",
//         margin: "5px",
//         textAlign: "center",
//       }}
//     >
//       <thead>
//         {headerGroups.map((headerGroup) => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map((column) => (
//               <th
//                 {...column.getHeaderProps()}
//                 style={{
//                   border: "solid 2px black",
//                   background: "aliceblue",
//                   color: "black",
//                   fontWeight: "bold",
//                   textAlign: "center",
//                   borderRadius: "10px",
//                 }}
//               >
//                 {column.render("Header")}
//               </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map((row) => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()}>
//               {row.cells.map((cell) => {
//                 return (
//                   <td
//                     {...cell.getCellProps()}
//                     style={{
//                       padding: "10px",
//                       border: "solid 2px gray",
//                       borderRadius: "10px",

//                       //background: "papayawhip",
//                     }}
//                   >
//                     {cell.render("Cell")}
//                   </td>
//                 );
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }
