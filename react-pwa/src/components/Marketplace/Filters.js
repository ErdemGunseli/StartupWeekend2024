import React, { useState } from 'react';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

function Filters() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <Box sx={{ my: 2, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      {/* Search Field */}
      <TextField
        label="What are you looking for..."
        variant="outlined"
        sx={{ minWidth: 300 }}
      />

      {/* Filter Icon Button */}
      <IconButton onClick={() => setShowFilters(!showFilters)}>
        <FilterListIcon />
      </IconButton>

      {/* Show filters only if showFilters is true */}
      {showFilters && (
        <>
          {/* Location Filter */}
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="location-label">Location</InputLabel>
            <Select labelId="location-label" label="Location" defaultValue="">
              <MenuItem value="">All Countries</MenuItem>
              {/* Additional countries can be added here */}
            </Select>
          </FormControl>

          {/* Material Type Filter */}
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="material-type-label">Material Type</InputLabel>
            <Select labelId="material-type-label" label="Material Type" defaultValue="">
              <MenuItem value="">All Types</MenuItem>
              {/* Additional material types can be added here */}
            </Select>
          </FormControl>

          {/* Material Group Filter */}
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="material-group-label">Material Group</InputLabel>
            <Select labelId="material-group-label" label="Material Group" defaultValue="">
              <MenuItem value="">All Groups</MenuItem>
              {/* Additional material groups can be added here */}
            </Select>
          </FormControl>

          {/* Materials Filter */}
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="materials-label">Materials</InputLabel>
            <Select labelId="materials-label" label="Materials" defaultValue="">
              <MenuItem value="">All</MenuItem>
              {/* Additional materials can be added here */}
            </Select>
          </FormControl>

          {/* Packed Filter */}
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="packed-label">Packed</InputLabel>
            <Select labelId="packed-label" label="Packed" defaultValue="">
              <MenuItem value="">All</MenuItem>
              {/* Additional options can be added here */}
            </Select>
          </FormControl>

          {/* Stored Filter */}
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="stored-label">Stored</InputLabel>
            <Select labelId="stored-label" label="Stored" defaultValue="">
              <MenuItem value="">All</MenuItem>
              <MenuItem value="indoors">Indoors (420)</MenuItem>
              <MenuItem value="outdoors">Outdoors (574)</MenuItem>
            </Select>
          </FormControl>
        </>
      )}
    </Box>
  );
}

export default Filters;