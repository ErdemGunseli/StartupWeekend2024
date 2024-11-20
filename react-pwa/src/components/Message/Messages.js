import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function Messages({ messages }) {
  return (
    <Box
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {messages.map((message, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            mb: 1.5,
            justifyContent:
              message.type === 'assistant' ? 'flex-start' : 'flex-end',
          }}
        >
          <Paper
            sx={{
              p: 1.5,
              borderRadius: 2,
              maxWidth: '80%',
              ...(message.type === 'assistant' && {
                background: 'linear-gradient(135deg, #66bb6a 0%, #43a047 50%, #2e7d32 100%)',
              }),
              ...(message.type === 'user' && {
                backgroundColor: '#f5f5f5',
              }),
            }}
          >
            <Typography
              variant="body1"
              sx={{
                ...(message.type === 'assistant' && { color: '#ffffff' }),
              }}
            >
              {message.text}
            </Typography>
          </Paper>
        </Box>
      ))}
    </Box>
  );
}

export default Messages;