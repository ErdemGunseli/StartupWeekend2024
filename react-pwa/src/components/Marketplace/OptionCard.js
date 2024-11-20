import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function OptionCard({ title, description, imageSrc, buttonText, onClick }) {
  return (
    <Card
      sx={{
        position: 'relative',
        height: '300px',
        color: 'white',
        textAlign: 'center',
        border: '1px solid gray',
        boxShadow: 'none',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'transform 1s, background-position 0.3s',
        '&:hover .background-image': {
          opacity: 0.9,
          backgroundPosition: 'center 45%',
        },
        '&:hover .arrow-icon': {
          opacity: 1,
          transform: 'translateX(5px)',
        },
      }}
      onClick={onClick}
    >
      <Box
        className="background-image"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'opacity 0.3s, background-position 0.3s',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backdropFilter: 'blur(4px)',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          transition: 'background-color 0.3s',
          zIndex: 1,
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      />
      <CardContent
        sx={{
          position: 'relative',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          zIndex: 2,
          mb: 1,
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: 'white', fontSize: '2rem' }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'white', fontSize: '1rem' }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          position: 'relative',
          justifyContent: 'center',
          pb: 2,
          zIndex: 2,
        }}
      >
        <Button
          size="small"
          variant="text"
          sx={{
            backgroundColor: 'white',
            color: 'white',
            transition: 'color 0.3s',
            '& .arrow-icon': {
              opacity: 0,
              transform: 'translateX(0)',
              transition: 'transform 0.3s, opacity 0.3s',
            },
          }}
        >
          {buttonText}
          <ArrowForwardIcon className="arrow-icon" sx={{ ml: 1, color: 'white' }} />
        </Button>
      </CardActions>
    </Card>
  );
}

export default OptionCard;