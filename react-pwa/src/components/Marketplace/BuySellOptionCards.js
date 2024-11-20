import React from 'react';
import { Grid } from '@mui/material';
import OptionCard from './OptionCard';
import buyImage from '../../assets/buy.webp';
import sellImage from '../../assets/sell.webp';

function BuySellOptionCards({ onSelectView }) {
  return (
    <Grid container spacing={3} justifyContent="center" sx={{ py: 8, px: 2 }}>
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <OptionCard
          title="Buy Materials"
          description="Browse listings of available biological waste materials."
          imageSrc={buyImage}
          buttonText="Buy Now"
          onClick={() => onSelectView('buy')}
        />
      </Grid>
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <OptionCard
          title="Sell Materials"
          description="List your biological waste materials for sale."
          imageSrc={sellImage}
          buttonText="Sell Now"
          onClick={() => onSelectView('sell')}
        />
      </Grid>
    </Grid>
  );
}

export default BuySellOptionCards;