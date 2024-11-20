import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ListingItem({ item }) {
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
        cursor: 'pointer',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
        },
        '&:hover .overlay': {
          opacity: 1,
        },
      }}
    >
      <Box
        className="background-image"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${item.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-position 0.3s',
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
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        }}
      />
      <CardContent
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: 2,
          zIndex: 2,
          textAlign: 'left',
          borderRadius: 0,
        }}
      >
        <Typography variant="h6" sx={{ color: 'black' }}>
          {item.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, flexWrap: 'wrap' }}>
          <AllInboxIcon sx={{ mr: 0.5, color: 'text.secondary' }} />
          <Typography variant="body2" sx={{ color: 'text.secondary', mr: 2 }}>
            {item.quantity} MT
          </Typography>
          <LocationOnIcon sx={{ mr: 0.5, color: 'text.secondary' }} />
          <Typography variant="body2" sx={{ color: 'text.secondary', mr: 2 }}>
            {item.city}
          </Typography>
          <ShoppingCartIcon sx={{ mr: 0.5, color: 'text.secondary' }} />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ${item.price} / MT
          </Typography>
        </Box>
      </CardContent>
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          left: 8,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(76, 175, 80, 0.9)',
          padding: '4px 8px',
          borderRadius: '8px',
          zIndex: 2,
        }}
      >
        <CheckCircleIcon sx={{ mr: 0.5, color: 'white' }} />
        <Typography variant="body2" sx={{ color: 'white' }}>
          Available Now
        </Typography>
      </Box>
      <Box
        className="overlay"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0,
          transition: 'opacity 0.3s',
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: 'white', display: 'flex', alignItems: 'center' }}
        >
          <ShoppingCartIcon sx={{ mr: 1 }} />
          Subscribe & Purchase
        </Typography>
      </Box>
    </Card>
  );
}

export default ListingItem;