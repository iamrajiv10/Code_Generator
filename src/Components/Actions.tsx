import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useState } from 'react';

interface ActionsProps {
    setShowHeader: (value: boolean) => void;
    setHeaderProps: React.Dispatch<React.SetStateAction<{
      backgroundColor: string;
      logoName: string;
      logoPosition: 'left' | 'center' | 'right';
      pages: string[];
    }>>;
    headerProps: {
        backgroundColor: string;
        logoName: string;
        logoPosition: 'left' | 'center' | 'right';
        pages: string[];
      };
  }
  
  const Actions = ({ setShowHeader, setHeaderProps, headerProps }: ActionsProps) => {
    const [showDropdowns, setShowDropdowns] = useState(false);
    const [pageInput, setPageInput] = useState('');
  
    const handleAddHeader = () => {
      setShowDropdowns(true);
      setShowHeader(true);
      setHeaderProps({
        backgroundColor: 'blue',
        logoName: 'My Logo',
        logoPosition: 'left',
        pages: [],
      });
    };
  
    const handleChange = (field: string, value: string) => {
      setHeaderProps(prev => ({
        ...prev,
        [field]: value,
      }));
    };
  
    const addPage = () => {
      if (pageInput.trim() !== '') {
        setHeaderProps(prev => ({
          ...prev,
          pages: [...prev.pages, pageInput.trim()],
        }));
        setPageInput('');
      }
    };
  
    const deletePage = (index: number) => {
      setHeaderProps(prev => ({
        ...prev,
        pages: prev.pages.filter((_, i) => i !== index),
      }));
    };
  
    return (
      <Box sx={{ backgroundColor: '#e0f7fa', p: 4, borderRadius: 2, height: '100%' }}>
        <Typography variant="h5" gutterBottom>
          Actions Section
        </Typography>
  
        <Button variant="contained" color="primary" fullWidth onClick={handleAddHeader} sx={{ mt: 2 }}>
          Add a Header
        </Button>
  
        {showDropdowns && (
          <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Background Color */}
            <FormControl fullWidth>
              <InputLabel>Background Color</InputLabel>
              <Select
                defaultValue="blue"
                label="Background Color"
                onChange={(e) => handleChange('backgroundColor', e.target.value)}
              >
                <MenuItem value="blue">Blue</MenuItem>
                <MenuItem value="green">Green</MenuItem>
                <MenuItem value="red">Red</MenuItem>
                <MenuItem value="black">Black</MenuItem>
              </Select>
            </FormControl>
  
            {/* Logo Name */}
            <FormControl fullWidth>
              <InputLabel>Logo Name</InputLabel>
              <Select
                defaultValue="My Logo"
                label="Logo Name"
                onChange={(e) => handleChange('logoName', e.target.value)}
              >
                <MenuItem value="My Logo">My Logo</MenuItem>
                <MenuItem value="Company X">Company X</MenuItem>
                <MenuItem value="Brand Y">Brand Y</MenuItem>
              </Select>
            </FormControl>
  
            {/* Logo Position */}
            <FormControl fullWidth>
              <InputLabel>Logo Position</InputLabel>
              <Select
                defaultValue="left"
                label="Logo Position"
                onChange={(e) => handleChange('logoPosition', e.target.value)}
              >
                <MenuItem value="left">Left</MenuItem>
                <MenuItem value="center">Center</MenuItem>
                <MenuItem value="right">Right</MenuItem>
              </Select>
            </FormControl>
  
            {/* Page Adder */}
            <TextField
              label="New Page Name"
              value={pageInput}
              onChange={(e) => setPageInput(e.target.value)}
              fullWidth
            />
            <Button variant="outlined" onClick={addPage}>
              Add Page
            </Button>
  
            {/* Pages List */}
            <Box sx={{ mt: 2 }}>
              {headerProps.pages?.map((page, index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                  <Typography>{page}</Typography>
                  <Button color="error" size="small" onClick={() => deletePage(index)}>
                    Delete
                  </Button>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    );
  };
  
  export default Actions;
