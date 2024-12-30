'use client';

import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, Grid, Modal } from '@mui/material';

const Transferencias = () => {
  const [open, setOpen] = useState(false);
  const [selectedTransfer, setSelectedTransfer] = useState(null);

  const handleOpen = (transferType) => {
    setSelectedTransfer(transferType);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTransfer(null);
  };

  const transferTypes = [
    { title: 'Pay inmediato', description: 'Envía dinero al instante.' },
    { title: 'Transferencia a otro banco', description: 'Envía dinero a bancos externos.' },
    { title: 'Transferencia internacional', description: 'Realiza transferencias al extranjero.' },
  ];

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Transferencias
      </Typography>
      <Grid container spacing={3}>
        {transferTypes.map((transfer, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {transfer.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {transfer.description}
                </Typography>
              </CardContent>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleOpen(transfer.title)}
                >
                  Seleccionar
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
            {selectedTransfer || 'Transferencia'}
          </Typography>
          <Typography id="modal-description" variant="body2" color="text.secondary">
            Aquí puedes gestionar la transferencia de tipo {selectedTransfer}.
          </Typography>
          <Button onClick={handleClose} variant="outlined" color="secondary" sx={{ mt: 2 }}>
            Cerrar
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Transferencias;
