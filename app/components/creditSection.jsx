import React from 'react';
import { Card, CardContent, Typography, LinearProgress, Box } from '@mui/material';

const CreditSection = ({ creditCard }) => {
  const usage = (creditCard.spent / creditCard.limit) * 100;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Tarjeta de Crédito
        </Typography>
        <Typography>Tarjeta: {creditCard.number}</Typography>
        <Typography>Límite: ${creditCard.limit.toFixed(2)}</Typography>
        <Typography>Gastado: ${creditCard.spent.toFixed(2)}</Typography>
        <Box sx={{ marginTop: 2 }}>
          <LinearProgress variant="determinate" value={usage} />
          <Typography align="center" variant="body2" sx={{ marginTop: 1 }}>
            {usage.toFixed(0)}% usado
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CreditSection;
