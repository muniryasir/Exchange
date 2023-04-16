import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Footer from './Footer'; 
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import ResponsiveAppBar from './Header';
import CenterContent from './content';
function App() {
  return (
    <div className="App">
     
    <ResponsiveAppBar />
      
    <CenterContent />
    </div>
  );
}

export default App;
