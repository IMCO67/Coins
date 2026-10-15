import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom' 

export const Home = () => {
  const navigate = useNavigate();
  const [coins, setCoins] = useState([]);

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
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      })
  }, [])

  return (
    <ul>
      {coins.map((coin) => (
        <li key={coin.id}>
          <a 
            style={{ cursor: 'pointer' }} 
            onClick={() => navigate("/detail/" + coin.id)}
          >
            {coin.name}
          </a>
        </li>
      ))}
    </ul>
  )
}