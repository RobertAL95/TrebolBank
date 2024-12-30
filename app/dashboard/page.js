'use client';

import React from 'react';
import { Box, Typography, Grid, Button, Link } from '@mui/material';
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
        <Link href="/transferencias" color="primary" underline="none">
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
      </Grid>
    </Box>
  );
};

export default Dashboard;
