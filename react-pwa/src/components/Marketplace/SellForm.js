import React, { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
  Typography,
  Divider,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { UploadFile } from '@mui/icons-material';

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function SellForm() {
  const [materialType, setMaterialType] = useState('');
  const [materialGroup, setMaterialGroup] = useState('');
  const [material, setMaterial] = useState('');
  const [quantity, setQuantity] = useState('');
  const [packaging, setPackaging] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
      <Typography variant="title" gutterBottom>
        Sell Your Materials
      </Typography>
      <Divider sx={{ marginBottom: 3 }} />

      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel>Material Type</InputLabel>
              <Select
                value={materialType}
                label="Material Type"
                onChange={(e) => setMaterialType(e.target.value)}
              >
                <MenuItem value="">
                  <em>Please Select...</em>
                </MenuItem>
                <MenuItem value="Plastic">Plastic</MenuItem>
                <MenuItem value="Metal">Metal</MenuItem>
                <MenuItem value="Glass">Glass</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel>Material Group</InputLabel>
              <Select
                value={materialGroup}
                label="Material Group"
                onChange={(e) => setMaterialGroup(e.target.value)}
              >
                <MenuItem value="">
                  <em>Please Select...</em>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel>Material</InputLabel>
              <Select
                value={material}
                label="Material"
                onChange={(e) => setMaterial(e.target.value)}
              >
                <MenuItem value="">
                  <em>Please Select...</em>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Quantity (Tonnes)"
              type="number"
              variant="outlined"
              inputProps={{ min: 3, max: 10000 }}
              required
              fullWidth
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              helperText="Minimum quantity of 3 tonnes"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel>Packaging Method</InputLabel>
              <Select
                value={packaging}
                label="Packaging Method"
                onChange={(e) => setPackaging(e.target.value)}
              >
                <MenuItem value="">
                  <em>Please Select...</em>
                </MenuItem>
                <MenuItem value="Bales">Bales</MenuItem>
                <MenuItem value="Bundles">Bundles</MenuItem>
                <MenuItem value="Loose">Loose</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="outlined"
              component="label"
              startIcon={<UploadFile />}
            >
              Upload Photos
              <input
                type="file"
                hidden
                multiple
                accept=".jpg, .jpeg, .gif, .png, .pdf, .heif, .hevc"
                onChange={handleFileChange}
              />
            </Button>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              Accepted: jpg, jpeg, png, gif, pdf. Max 50MB, 10 files.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {files.length > 0
                ? `${files.length} file(s) selected`
                : 'No file chosen'}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              required
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your waste material"
            />
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ marginY: 2 }} />
            <CustomButton type="submit" variant="contained">
              Register
            </CustomButton>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default SellForm; 