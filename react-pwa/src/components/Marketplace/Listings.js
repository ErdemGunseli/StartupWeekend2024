import React from 'react';
import { Grid } from '@mui/material';
import ListingItem from './ListingItem';


const sampleData = [
  {
    id: 1,
    title: 'Citrus Peels',
    imageUrl: require('../../assets/peels.jpg'),
    quantity: 85,
    city: 'Atlantis, Cape Town',
    price: 325,
  },
  {
    id: 2,
    title: 'Biodegradable Packaging Waste',
    imageUrl: require('../../assets/packaging.jpeg'),
    quantity: 4,
    city: 'Bellville, Cape Town',
    price: 648,
  },

  {
    id: 3,
    title: 'Agricultural Waste',
    imageUrl: require('../../assets/agricultural.jpg'),
    quantity: 13,
    city: 'Blouberg, Cape Town',
    price: 60,
  },

  {
    id: 4,
    title: 'Scrap Wood Waste',
    imageUrl: require('../../assets/wood.webp'),
    quantity: 70,
    city: 'Atlantis, Cape Town',
    price: 291,
  },

  {
    id: 5,
    title: 'Vegetable Scraps',
    imageUrl: require('../../assets/vegetable_scraps.webp'),
    quantity: 20,
    city: 'Brackenfell, Cape Town',
    price: 600,
  },
];

function Listings() {
  return (
    <Grid container spacing={2}>
      {sampleData.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <ListingItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Listings;