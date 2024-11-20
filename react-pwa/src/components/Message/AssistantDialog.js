import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Messages from './Messages';
import MessageInput from './MessageInput';

function AssistantDialog() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const initialMessage = {
      type: 'assistant',
      text: "Hey there! 😄 I'm here and ready to help you make some positive environmental impacts! 🌍✨ How can I assist you on your journey toward a more sustainable future with ReSource today? 💚",
    };
    setMessages([initialMessage]);
  }, []);

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      width="100%"
      sx={{
        maxHeight: '80vh',
        maxWidth: '600px',
        margin: 'auto',
      }}
    >
      <Box
        sx={{
          p: 2,
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Typography variant="title" align="center">
          AI Assistant
        </Typography>
      </Box>

      <Box flexGrow={1} overflow="auto">
        <Messages messages={messages} />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <MessageInput addMessage={addMessage} />
      </Box>
    </Box>
  );
}

export default AssistantDialog; 