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
    color: global.config.theme === "dark" ? "white" : "black",
    backgroundColor:
      global.config.theme === "dark" ? "#4E4E52" : global.config.lightBG,
    border:
      global.config.theme === "dark" ? "1px solid white" : "1px solid black",
    borderLeft: 0,
    borderRight: 0,
  },
  "&:nth-of-type(odd)": {
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

export default function CustomizedTables(props) {
  
  const tableData = props.tableData;

  return (
    <TableContainer style={{ width: "100%", margin: "auto" }} component={Paper}>
      <Table aria-label="customized table">
        <TableBody
          sx={{
            border: 0,
            font: global.config.theme === "dark" ? "white" : "black",
            backgroundColor: global.config.theme === "dark" ? "black" : "white",
          }}
        >
          {tableData &&
            tableData.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align={"left"}>{row.label}</StyledTableCell>
                <StyledTableCell align={"right"}>{row.value}</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
