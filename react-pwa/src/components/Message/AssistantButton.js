import React, { useState } from 'react';
import { Dialog, Slide, Button } from '@mui/material';
import AssistantDialog from './AssistantDialog';
import { keyframes } from '@mui/system';
import logo from '../../assets/logo.png';

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(56, 142, 60, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(56, 142, 60, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(56, 142, 60, 0);
  }
`;

function AssistantButton() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button
        onClick={handleToggle}
        variant="contained"
        startIcon={<img src={logo} alt="Logo" style={{ width: 40, height: 40 }} />}
        sx={{
          backgroundColor: '#388e3c',
          position: 'fixed',
          bottom: 20,
          right: 20,
          animation: `${pulseAnimation} 2s infinite`,
          color: '#ffffff',
          textTransform: 'none',
          fontSize: '1.25rem',
          padding: '16px 32px',
          borderRadius: '16px',
          '&:hover': {
            backgroundColor: '#2e7d32',
          },
        }}
      >
        Talk to ReSource AI
      </Button>
      <Dialog
        open={open}
        onClose={handleToggle}
        TransitionComponent={Slide}
        direction="up"
        maxWidth="sm"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '15px',
            margin: '20px',
          },
        }}
      >
        <AssistantDialog />
      </Dialog>
    </>
  );
}

export default AssistantButton;