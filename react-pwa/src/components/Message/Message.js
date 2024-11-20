import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function Message({ message }) {
  const isUser = message.type === 'user';

  return (
    <Box
      component="div"
      display="flex"
      justifyContent={isUser ? 'flex-end' : 'flex-start'}
      maxWidth="100%"
      width="100%"
    >
      <Paper
        elevation={3}
        style={{
          position: 'relative',
          maxWidth: '80%',
          textAlign: isUser ? 'right' : 'left',
          padding: '10px',
        }}
      >
        {message.text && message.text.trim() ? (
          <Typography variant="body1" gutterBottom>
            {message.text}
          </Typography>
        ) : null}
      </Paper>
    </Box>
  );
}

export default Message;