import { Box, Typography } from '@mui/material';
import Header from './SubComponents/Header';

interface DisplayProps {
    headerProps: {
      backgroundColor: string;
      logoName: string;
      logoPosition: 'left' | 'center' | 'right';
      pages: string[];
    };
    showHeader: boolean;
  }

const Display = ({ headerProps, showHeader }: DisplayProps) => {
  return (
    <Box
      sx={{
        backgroundColor: '#f0f0f0',
        p: 4,
        borderRadius: 2,
        height: '100%',
      }}
    >
        <Typography>Display Section</Typography>
      {showHeader && (
        <Header {...headerProps} />
      )}
    </Box>
  );
};

export default Display;
