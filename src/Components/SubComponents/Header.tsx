import { Box, Typography } from '@mui/material';

interface HeaderProps {
  backgroundColor: string;
  logoName: string;
  logoPosition: 'left' | 'center' | 'right';
  pages: string[];
}

const Header = ({ backgroundColor, logoName, logoPosition, pages }: HeaderProps) => {
  return (
    <Box
      sx={{
        backgroundColor,
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: logoPosition,
        padding: '0 20px',
        borderRadius: 1,
      }}
    >
      <Typography variant="h6" color="white">
        {logoName}
      </Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>
        {pages.map((page, index) => (
          <Typography key={index} variant="body1">
            {page}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
