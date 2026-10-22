import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  CircularProgress
} from '@mui/material'

export const Home = () => {
  const navigate = useNavigate();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
      })
      .then((data) => {
        setCoins(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      })
  }, [])

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom textAlign="center" fontWeight="bold" color="primary">
        Mercado de Criptomonedas
      </Typography>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        {coins.map((coin) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={coin.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6
                }
              }}
            >
              <CardActionArea
                onClick={() => navigate("/detail/" + coin.id)}
                sx={{ height: '100%', p: 2 }}
              >
                <Box display="flex" justifyContent="center" my={2}>
                  <CardMedia
                    component="img"
                    sx={{ width: 70, height: 70, objectFit: 'contain' }}
                    image={coin.image}
                    alt={coin.name}
                  />
                </Box>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" component="div" fontWeight="bold">
                    {coin.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'uppercase', mb: 1 }}>
                    {coin.symbol}
                  </Typography>
                  <Typography variant="h6" color="success.main" fontWeight="bold">
                    ${coin.current_price?.toLocaleString()} USD
                  </Typography>


                  <button
                    onClick={() => addToFavorite(coin.id)}
                    className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded cursor-pointer'
                    disabled={coin.favorite === 0}
                  >
                    {coin.favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                  </button>
                  

                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}