import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const cellStyle = {
  color: "white",
}
export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{
        background: "#252324",
        
    }}>
      <Table sx={{ 
        
        maxWidth: "100vh",
      
    
      }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={cellStyle} >Name</TableCell>
            <TableCell align="right" sx={cellStyle}>Symbol</TableCell>
            <TableCell align="right" sx={cellStyle}>Price</TableCell>
            <TableCell align="right" sx={cellStyle}>Past 7 Days</TableCell>
            {/* <TableCell align="right" sx={cellStyle}>Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 },   }}
            >
              <TableCell component="th" scope="row" sx={cellStyle}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={cellStyle}>{row.calories}</TableCell>
              <TableCell align="right" sx={cellStyle}>{row.fat}</TableCell>
              <TableCell align="right" sx={cellStyle}>{row.carbs}</TableCell>
              {/* <TableCell align="right" sx={cellStyle}>{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}