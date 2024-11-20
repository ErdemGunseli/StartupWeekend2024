import React from 'react';
import { Box, ThemeProvider } from '@mui/material';
import theme from './themes/theme';
import Header from './components/common/Header';
import Marketplace from './components/Marketplace/Marketplace';
import AssistantButton from './components/Message/AssistantButton';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App-header">
        <Box
          sx={{
            paddingBottom: '100px',
          }}
        >
          <Header />
          <Marketplace />
          <AssistantButton />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;