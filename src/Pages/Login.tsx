import { Button, TextField, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (email) {
      navigate('/home');
    } else {
      alert('Please enter your email.');
    }
  };

  return (
    <Box
      sx={{
        width:"100%",
        height:"97vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow:"hidden",
      }}
    >
      <Box width="100%" maxWidth="400px" textAlign="center">
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
