'use client';

import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBarr.jsx';
import { Box, TextField, Typography, Button } from '@mui/material';
import { generateRandomKeyboard, validateCredentials } from './loginLogic';

const Login = () => {
  const [idNumber, setIdNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (showKeyboard) {
      setRandomNumbers(generateRandomKeyboard());
    }
  }, [showKeyboard]);

  const handlePasswordFocus = () => {
    if (idNumber.trim()) {
      setShowKeyboard(true);
    } else {
      alert('Por favor, introduce tu ID primero.');
    }
  };

  const handleKeyPress = async (num) => {
    if (password.length < 6) {
      const newPassword = password + num;
      setPassword(newPassword);

      // Verificar credenciales automáticamente al completar 6 caracteres
      if (newPassword.length === 6) {
        setLoading(true);
        setError('');
        const response = await validateCredentials(idNumber, newPassword);
        setLoading(false);

        if (response.success) {
          setSuccess(true);
        } else {
          setError(response.message || 'Credenciales incorrectas');
          setPassword('');
        }
      }
    }
  };

  return (
    <div style={{ height: '100vh' }}>
      <NavBar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '80vh',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
            minWidth: '300px',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Login
          </Typography>
          <TextField
            fullWidth
            label="ID NUMBER"
            margin="normal"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
          />
          <TextField
            fullWidth
            label="PASSWORD"
            margin="normal"
            type="password"
            value={password}
            onFocus={handlePasswordFocus}
            InputProps={{
              readOnly: true,
            }}
            error={!!error}
            helperText={error}
          />
          {loading && <Typography variant="body2">Validando...</Typography>}
          {success && (
            <Typography variant="body2" color="success.main">
              ¡Login exitoso!
            </Typography>
          )}
          {showKeyboard && (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 1,
                marginTop: 2,
              }}
            >
              {randomNumbers.map((num, index) => (
                <Button
                  key={index}
                  variant="contained"
                  color="primary"
                  onClick={() => handleKeyPress(num)}
                  disabled={loading}
                >
                  {num}
                </Button>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Login;
