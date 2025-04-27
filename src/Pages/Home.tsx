import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Display from '../Components/Display';
import Actions from '../Components/Actions';
import { useState } from 'react';

const Home = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [headerProps, setHeaderProps] = useState({
    backgroundColor: 'blue',
    logoName: 'My Logo',
    logoPosition: 'left' as 'left' | 'center' | 'right',
    pages: [] as string[],
  });

  return (
    <Box
      sx={{
        width: '100%',
        height: "auto",
        p: 1,
        boxSizing: 'border-box',
        backgroundColor:"pink"
      }}
    >
      <Grid container spacing={4} sx={{ height: '100%' }}>
        <Grid size={8}>
          <Display showHeader={showHeader} headerProps={headerProps} />
        </Grid>
        <Grid size={4}>
          <Actions setShowHeader={setShowHeader} setHeaderProps={setHeaderProps}  headerProps={headerProps} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
