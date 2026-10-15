import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Detail = () => {
  const { id } = useParams();
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

  if (loading) return <div>Cargando detalle de la moneda...</div>;
  if (!coin) return <div>No se encontró información de la moneda.</div>;

  return (
    <div>
      <h2>{coin.name} ({coin.symbol?.toUpperCase()})</h2>
      {coin.image?.large && (
        <img src={coin.image.large} alt={coin.name} width="100" />
      )}
      <p>
        <strong>Precio actual (USD):</strong> ${coin.market_data?.current_price?.usd}
      </p>
      <p>
        <strong>Categoría:</strong> {coin.categories?.join(', ')}
      </p>
      <p>
        <strong>Descripción:</strong> {coin.description?.es || 'No hay descripción disponible en español.'}
      </p>
    </div>
  );
};