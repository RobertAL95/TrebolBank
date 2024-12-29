'use client';

import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Link } from '@mui/material';
import NavBar from '../components/NavBarr'; // Asumiendo que tienes un componente NavBar
import BalanceCard from '../components/BalancedCard';
import TransactionHistory from '../components/TransactionHistory';

const Dashboard = () => {
  const userData = {
    balance: 12500.75,
    creditCard: {
      number: '**** **** **** 1234',
      limit: 5000,
      spent: 1200,
    },
    transactionHistory: [
      { date: '2024-12-01', amount: -200, description: 'Compra en tienda' },
      { date: '2024-11-30', amount: 500, description: 'Transferencia recibida' },
      { date: '2024-11-28', amount: -50, description: 'Café' },
    ],
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: 3 }}>
      <NavBar />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard del Usuario
        </Typography>
        <Link href="/transfer" color="primary" underline="none">
          <Button variant="contained" color="primary">
            Área de Transferencia
          </Button>
        </Link>
      </Box>
      <Grid container spacing={3}>
        {/* Balance Card */}
        <Grid item xs={12} md={4}>
          <BalanceCard balance={userData.balance} />
        </Grid>
        {/* Transaction History */}
        <Grid item xs={12} md={8}>
          <TransactionHistory transactions={userData.transactionHistory} />
        </Grid>
        {/* Credit Section */}
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 4,
            }}
          >
            <Typography variant="h5" gutterBottom>
              CRÉDITO
            </Typography>
            <Button variant="outlined" color="primary" sx={{ mb: 2 }}>
              Solicitar préstamo
            </Button>
            <Card
              sx={{
                width: '80%',
                maxWidth: 400,
                textAlign: 'center',
                boxShadow: 3,
                padding: 2,
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Tarjeta de Crédito
                </Typography>
                <Typography variant="body1">Número: {userData.creditCard.number}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Límite: ${userData.creditCard.limit}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gastado: ${userData.creditCard.spent}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
