import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const TransferSection = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Transferencias
        </Typography>
        <Button variant="contained" color="primary" fullWidth>
          Realizar Transferencia
        </Button>
      </CardContent>
    </Card>
  );
};

export default TransferSection;
