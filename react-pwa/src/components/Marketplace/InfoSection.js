import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Divider,
} from '@mui/material';
import RecyclingIcon from '@mui/icons-material/Recycling';

function InfoSection() {
  return (
    <Box sx={{ py: 4, px: { xs: 2, md: 4 } }}>
      <Grid container spacing={4}>

        {/* Hero Text */}
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="title" gutterBottom align="center" sx={{ fontSize: '4rem' }}>
            Turning waste into value
          </Typography>
          <Typography variant="body2" gutterBottom align="center">
            Easy Listing · Smart Matching · Streamlined Transactions
          </Typography>
        </Grid>

        {/* First Divider */}
        <Grid item xs={12}>
          <Divider sx={{ borderBottom: '3px solid rgba(0, 0, 0, 0.12)' }} />
        </Grid>

        {/* Fact About the Issue */}
        <Grid
          item
          xs={12}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 2,
            }}
          >
            <RecyclingIcon color="primary" sx={{ fontSize: '2rem', marginRight: '8px' }} />
            <Typography variant="h5" sx={{ color: 'black', textAlign: 'center' }}>
              South Africa generates over{' '}
              <Typography
                component="span"
                sx={{
                  textDecoration: 'underline',
                  textDecorationColor: '#388e3c',
                  textDecorationThickness: '3px',
                  fontSize: 'inherit',
                }}
              >
                50 million tonnes
              </Typography>{' '}
              of waste annually, with only a third being recycled.
            </Typography>
          </Box>
        </Grid>

        {/* Second Divider */}
        <Grid item xs={12}>
          <Divider sx={{ borderBottom: '3px solid rgba(0, 0, 0, 0.12)' }} />
        </Grid>

      </Grid>
    </Box>
  );
}

export default InfoSection; 