import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BuySellOptionCards from './BuySellOptionCards';
import Filters from './Filters';
import Listings from './Listings';
import SellForm from './SellForm';
import InfoSection from './InfoSection';

function Marketplace() {
  const [view, setView] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSelectView = (selectedView) => {
    setView(selectedView);
  };

  const handleBackClick = () => {
    setView(null);
  };

  const toggleFilterDrawer = (open) => () => {
    setIsFilterOpen(open);
  };

  return (
    <Box sx={{ mt: 0 }}>
      {!view && (
        <>
          <InfoSection />
          <BuySellOptionCards onSelectView={handleSelectView} />
        </>
      )}

      {view === 'buy' && (
        <Box sx={{ px: 4 }}>
          <Button
            variant="text"
            onClick={handleBackClick}
            sx={{
              mb: 2,
              fontSize: '1.2rem',
              padding: '12px 24px',
              transition: 'all 0.3s',
              '&:hover .back-icon': {
                opacity: 1,
                transform: 'translateX(-5px)',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ArrowBackIcon
                className="back-icon"
                sx={{
                  mr: 1,
                  opacity: 0,
                  transform: 'translateX(0)',
                  transition: 'all 0.3s',
                }}
              />
              Back
            </Box>
          </Button>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Filters isOpen={isFilterOpen} toggleDrawer={toggleFilterDrawer} />
          </Box>
          <Listings />
        </Box>
      )}

      {view === 'sell' && (
        <Box sx={{ px: 4 }}>
          <Button
            variant="text"
            onClick={handleBackClick}
            sx={{
              mb: 2,
              fontSize: '1.2rem',
              padding: '12px 24px',
              transition: 'all 0.3s',
              '&:hover .back-icon': {
                opacity: 1,
                transform: 'translateX(-5px)',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ArrowBackIcon
                className="back-icon"
                sx={{
                  mr: 1,
                  opacity: 0,
                  transform: 'translateX(0)',
                  transition: 'all 0.3s',
                }}
              />
              Back
            </Box>
          </Button>
          <SellForm />
        </Box>
      )}
    </Box>
  );
}

export default Marketplace;