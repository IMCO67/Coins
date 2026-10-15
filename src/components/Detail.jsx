import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Box,
  Typography,
  Paper,
  Chip,
  Divider,
  CircularProgress,
  Button,
  Grid
} from '@mui/material'

export const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
      })
      .then((data) => {
        setCoin(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!coin) {
    return (
      <Box textAlign="center" p={4}>
        <Typography variant="h6">No se encontró información de la moneda.</Typography>
        <Button variant="contained" onClick={() => navigate('/')} sx={{ mt: 2 }}>
          Volver al Inicio
        </Button>
      </Box>
    );
  }

  // Métrica adicional 1: Cambio en 24 horas
  const priceChange24h = coin.market_data?.price_change_percentage_24h;

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Button 
        variant="outlined" 
        onClick={() => navigate('/')} 
        sx={{ mb: 3 }}
      >
        ← Volver al catálogo
      </Button>

      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        {/* Encabezado: Imagen, Nombre y Símbolo */}
        <Box display="flex" alignItems="center" gap={2} mb={3}>
          {coin.image?.large && (
            <img src={coin.image.large} alt={coin.name} width="64" height="64" />
          )}
          <Box>
            <Typography variant="h4" component="h1" fontWeight="bold">
              {coin.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ textTransform: 'uppercase' }}>
              {coin.symbol}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Métrica principal y datos adicionales */}
        <Grid container spacing={3} sx={{ my: 1 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="text.secondary">Precio Actual (USD)</Typography>
            <Typography variant="h5" fontWeight="bold" color="primary">
              ${coin.market_data?.current_price?.usd?.toLocaleString()}
            </Typography>
          </Grid>

          {/* DATO ADICIONAL 1: Variación 24h */}
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="text.secondary">Variación (24 Horas)</Typography>
            <Typography 
              variant="h6" 
              fontWeight="bold" 
              color={priceChange24h >= 0 ? 'success.main' : 'error.main'}
            >
              {priceChange24h ? `${priceChange24h.toFixed(2)}%` : 'N/A'}
            </Typography>
          </Grid>

          {/* DATO ADICIONAL 2: Ranking de Mercado */}
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="text.secondary">Ranking de Mercado</Typography>
            <Chip 
              label={`#${coin.market_cap_rank || 'N/A'}`} 
              color="secondary" 
              variant="outlined" 
              sx={{ mt: 0.5, fontWeight: 'bold' }} 
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="text.secondary">Capitalización de Mercado</Typography>
            <Typography variant="h6" fontWeight="bold">
              ${coin.market_data?.market_cap?.usd?.toLocaleString()} USD
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Categorías */}
        {coin.categories && coin.categories.length > 0 && (
          <Box mb={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Categorías
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {coin.categories.filter(Boolean).map((cat, index) => (
                <Chip key={index} label={cat} size="small" />
              ))}
            </Box>
          </Box>
        )}

        {/* Descripción */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Descripción
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary" 
          paragraph 
          align="justify"
          dangerouslySetInnerHTML={{
            __html: coin.description?.es || coin.description?.en || 'No hay descripción disponible para esta moneda.'
          }}
        />
      </Paper>
    </Box>
  );
};