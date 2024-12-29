import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const BalanceCard = ({ balance }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Dinero Disponible</Typography>
        <Typography variant="h4" color="primary" gutterBottom>
          ${balance.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BalanceCard;
