import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState, useEffect } from "react";

function createData(
  name: string,
  symbol: string,
  price: number,
  date: number,
  trend: number,
  past7days: Array<number>,
) {
  return { name, symbol, price, date, trend, past7days };
}
// const [count, setCount] = useState(0);


const cellStyle = {
  color: "white",
}
export default function BasicTable() {
  const companies = ["MSFT", "V", "AAPL", "GOOGL", "JPM", "KO", "AMZN", "TSM", "INTC", "BABA"]

  const [rows, setRows] = useState ([]);

  var newRows = Array(); 
    axios.get(`https://ai-engine.vercel.app/stockdata`)
    .then(res => {
         
        for(var i=0; i<companies.length; i++) {
          // var isMoreData = true;
          // var countRecords = 0;
          // while(isMoreData==true) { 
          //   if(res.data[companies[i]][countRecords]) {
          //     // {"closeprice": 291.6, "date": "2023-04-06T00:00:00+0000"}
          //     var closePrice = res.data[companies[i][countRecords]]["closeprice"]
          //     var date = res.data[companies[i][countRecords]]["closeprice"]
          //     countRecords ++; 
          //   }
              var closePrice = res.data[companies[i]]["0"]["closeprice"]
              var date = res.data[companies[i]]["0"]["date"]
              var symbol = companies[i];
              var closePricePrev = res.data[companies[i]]["1"]["closeprice"]
              var Trend;
              var name = res.data[companies[i]]["name"];
              if(closePricePrev>closePrice) {
                Trend = 0;
              } else if (closePricePrev<closePrice) {
                Trend = 1;
              } else {
                Trend = 2;
              }
              newRows.push( createData(name, symbol, closePrice, date, Trend, [1.1, 1.1]))
              UpdateRow(newRows);
            }
          
       
  });
  function UpdateRow(newRows:any) {
    
    // useEffect(() => {
      setRows(newRows);
    // })
  }
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
            <TableCell align="right" sx={cellStyle}>Date</TableCell>
            <TableCell align="right" sx={cellStyle}>Past 7 Days</TableCell>
            {/* <TableCell align="right" sx={cellStyle}>Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row:any) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 },   }}
            >
              <TableCell component="th" scope="row" sx={cellStyle}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={cellStyle}>{row.symbol}</TableCell>
              <TableCell align="right" sx={cellStyle}>{row.price}</TableCell>
              <TableCell align="right" sx={cellStyle}>{row.date}</TableCell>
              <TableCell align="right" sx={cellStyle}>{row.past7days}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}