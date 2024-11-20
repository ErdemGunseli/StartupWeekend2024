import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  IconButton,
  TextField,
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

import { fastCompletion } from '../../api/assistant';

function MessageInput({ addMessage }) {
  const [loading, setLoading] = useState(false);
  const [textInput, setTextInput] = useState('');
  const textInputRef = useRef(null);

  useEffect(() => {
    textInputRef.current?.focus();
  }, []);

  const handleSendMessage = () => {
    if (loading || !textInput.trim()) return;

    setLoading(true);

    const userMessage = { type: 'user', text: textInput };
    addMessage(userMessage);
    setTextInput('');

    fastCompletion(textInput)
      .then((result) => {
        const assistantMessage = {
          type: 'assistant',
          text: result.text,
        };
        addMessage(assistantMessage);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred during processing.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.target === textInputRef.current) {
      handleSendMessage();
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        width: '100%',
        mb: 2.5,
        mt: 1,
        justifyContent: 'center',
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Type your message..."
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        onKeyDown={handleKeyDown}
        inputRef={textInputRef}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleSendMessage}
                sx={{
                  borderRadius: '50%',
                  backgroundColor: '#388e3c',
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: '#2e7d32',
                  },
                }}
                disabled={loading}
                aria-label="Send message"
              >
                {loading ? (
                  <CircularProgress
                    size={24}
                    style={{ color: '#ffffff' }}
                    aria-label="Sending..."
                  />
                ) : (
                  <ChatIcon />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ width: '100%', maxWidth: '600px' }}
      />
    </Box>
  );
}

export default MessageInput;