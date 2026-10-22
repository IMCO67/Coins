import React, { useState } from 'react'
import { FavoriteContext } from './FavoriteContext'


export const FavoriteProvider = ({ children }) => {
    const [favorite, setFavorite] = useState([])

    const addToFavorite = (coinId) => {
        setFavorite((prevFavorites) => {
            if (prevFavorites.includes(coinId)) {
                return prevFavorites.filter((id) => id !== coinId)
            } else {
                return [...prevFavorites, coinId]
            }
        })
    }
}

