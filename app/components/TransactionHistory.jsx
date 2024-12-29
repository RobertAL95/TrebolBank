import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const TransactionHistory = ({ transactions }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Historial de Transacciones
        </Typography>
        <List>
          {transactions.map((transaction, index) => (
            <ListItem key={index} divider>
              <ListItemText
                primary={transaction.description}
                secondary={`${transaction.date} - $${Math.abs(transaction.amount).toFixed(2)}`}
              />
              <Typography color={transaction.amount < 0 ? 'error' : 'success'}>
                {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
              </Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;
