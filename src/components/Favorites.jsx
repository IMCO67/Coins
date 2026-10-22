import React, { useContext } from 'react'
import { ContextAuthor } from '../context/ContextAuthor'
import { Box, Typography, Paper, Divider } from '@mui/material'

export const Favorites = () => {
  const { author } = useContext(ContextAuthor);

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', p: 3 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" color="primary" fontWeight="bold" gutterBottom textAlign="center">
          Acerca de este Proyecto
        </Typography>
        
        <Typography variant="subtitle1" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
          Desarrollado por <strong>{author}</strong>
        </Typography>
      </Paper>
    </Box>
  )
}